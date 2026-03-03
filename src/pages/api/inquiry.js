import {executeQuery} from "@/components/lib/database";
import {
    sendEmail,
    getCustomerInquiryEmailTemplate,
    getAdminInquiryEmailTemplate
} from "@/lib/email";

export default async function inquiry(req, resp) {
    if (req.method === 'POST') {
        try {
            // validate parameter
            let form = ['company', 'name', 'contact', 'email', 'box', 'quantity', 'region', 'description'];
            form.forEach((param) => {
                switch (param) {
                    case 'company' :
                    case 'name' :
                    case 'box' :
                    case 'quantity' :
                    case 'region' :
                    case 'contact' :
                    case 'email' :
                        if (req.body[param] === null || req.body[param].trim().length === 0) {
                            return resp.status(400).json(param + ' is null');
                        }
                        if (req.body[param].length > 30) {
                            return resp.status(400).json(param + ' is too long');
                        }
                        if (param === 'contact') {
                            const contactRegex = /^([0-9]{3,4})-?([0-9]{3,4})-?([0-9]{3,4})$/;
                            if (!contactRegex.test(req.body[param])) {
                                return resp.status(400).json(param + ' is invalid');
                            }
                        }
                        if (param === 'email') {
                            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
                            if (!emailRegex.test(req.body[param])) {
                                return resp.status(400).json(param + ' is invalid');
                            }
                        }
                        break;
                    default :
                        break;
                }
            });

            const params = [
                req.body.company,
                req.body.name,
                req.body.contact,
                req.body.email,
                req.body.box,
                req.body.quantity,
                req.body.region,
                req.body.description,
            ];

            // DB에 문의 저장
            const query = 'INSERT INTO inquiry (`company`, `name`, `contact`, `email`, `box`, `quantity`, `region`, `description`) VALUES (?,?,?,?,?,?,?,?)';
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
            };

            // 고객에게 접수 확인 이메일 발송
            const customerEmailResult = await sendEmail({
                to: req.body.email,
                subject: '[한양인팩] 문의가 접수되었습니다',
                html: getCustomerInquiryEmailTemplate(emailData),
            });

            // 관리자에게 신규 문의 알림 이메일 발송
            const adminEmailResult = await sendEmail({
                to: process.env.ADMIN_EMAIL,
                subject: '[한양인팩] 신규 문의 접수 알림',
                html: getAdminInquiryEmailTemplate(emailData),
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
