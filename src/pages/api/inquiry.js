import {executeQuery} from "@/components/lib/database";
import {
    sendEmail,
    getCustomerInquiryEmailTemplate,
    getAdminInquiryEmailTemplate
} from "@/lib/email";

export default async function inquiry(req, resp) {
    if (req.method === 'POST') {
        try {
            // validate parameter (required fields)
            const required = ['company', 'name', 'contact', 'email', 'quantity', 'region'];
            for (const param of required) {
                const val = req.body[param];
                if (val === null || val === undefined || val.trim().length === 0) {
                    return resp.status(400).json(param + ' is null');
                }
                if (val.length > 30) {
                    return resp.status(400).json(param + ' is too long');
                }
                if (param === 'contact') {
                    const contactRegex = /^([0-9]{3,4})-?([0-9]{3,4})-?([0-9]{3,4})$/;
                    if (!contactRegex.test(val)) {
                        return resp.status(400).json(param + ' is invalid');
                    }
                }
                if (param === 'email') {
                    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
                    if (!emailRegex.test(val)) {
                        return resp.status(400).json(param + ' is invalid');
                    }
                }
            }

            const imageUrls = Array.isArray(req.body.imageUrls) ? req.body.imageUrls.slice(0, 5) : [];

            const params = [
                req.body.company,
                req.body.name,
                req.body.contact,
                req.body.email,
                req.body.box,
                req.body.quantity,
                req.body.region,
                req.body.description,
                req.body.industry || null,
                imageUrls.length > 0 ? imageUrls : null,
            ];

            // DB에 문의 저장
            const query = 'INSERT INTO inquiry (company, name, contact, email, box, quantity, region, description, industry, image_urls) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)';
            const result = await executeQuery(query, params);

            // 이메일 데이터 준비
            const emailData = {
                company: req.body.company,
                name: req.body.name,
                contact: req.body.contact,
                email: req.body.email,
                box: req.body.box,
                quantity: req.body.quantity,
                region: req.body.region,
                description: req.body.description,
                industry: req.body.industry || null,
                imageUrls,
            };

            // 이미지 첨부 파일 준비 (Cloudinary 압축 변환 URL 사용)
            const attachments = imageUrls.map((url, i) => ({
                filename: `image_${i + 1}.jpg`,
                path: url.replace('/upload/', '/upload/q_70,w_1200,f_jpg/'),
            }));

            // 고객에게 접수 확인 이메일 발송 (이미지 첨부)
            const customerEmailResult = await sendEmail({
                to: req.body.email,
                subject: '[한양인팩] 문의가 접수되었습니다',
                html: getCustomerInquiryEmailTemplate(emailData),
                attachments,
            });

            // 관리자에게 신규 문의 알림 이메일 발송 (이미지 첨부)
            const adminEmailResult = await sendEmail({
                to: process.env.ADMIN_EMAIL.split(',').map(e => e.trim()),
                subject: '[한양인팩] 신규 문의 접수 알림',
                html: getAdminInquiryEmailTemplate(emailData),
                attachments,
            });

            // 이메일 전송 실패해도 문의는 접수된 것으로 처리
            if (!customerEmailResult.success) {
                console.error('Customer email failed:', customerEmailResult.error);
            }
            if (!adminEmailResult.success) {
                console.error('Admin email failed:', adminEmailResult.error);
            }

            return resp.status(200).json({
                message: 'OK',
                emailSent: {
                    customer: customerEmailResult.success,
                    admin: adminEmailResult.success
                }
            });

        } catch (e) {
            console.log('Error in inquiry : ' + e);
            return resp.status(500).json('Internal Server Error');
        }
    } else {
        return resp.status(405).json('Method Not Allowed');
    }
}
