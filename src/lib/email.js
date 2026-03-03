import nodemailer from 'nodemailer';

// 이메일 전송기 설정
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // 587 포트는 false, 465는 true
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// 이메일 전송 함수
export async function sendEmail({ to, subject, html }) {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to,
            subject,
            html,
        });
        
        console.log('Email sent:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Email sending failed:', error);
        return { success: false, error: error.message };
    }
}

// 고객용 문의 접수 확인 이메일
export function getCustomerInquiryEmailTemplate(data) {
    return `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body { font-family: 'Malgun Gothic', sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; }
                .content { background-color: #f9fafb; padding: 30px; border-radius: 8px; margin-top: 20px; }
                .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                .info-table th { background-color: #e5e7eb; padding: 12px; text-align: left; width: 30%; }
                .info-table td { padding: 12px; border-bottom: 1px solid #e5e7eb; }
                .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
                .highlight { color: #2563eb; font-weight: bold; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>문의가 정상적으로 접수되었습니다</h1>
                </div>
                
                <div class="content">
                    <p><strong>${data.name}</strong>님, 안녕하세요.</p>
                    <p>한양인팩에 문의해 주셔서 감사합니다.</p>
                    <p>접수하신 내용은 아래와 같으며, 빠른 시일 내에 담당자가 연락드리겠습니다.</p>
                    
                    <table class="info-table">
                        <tr>
                            <th>회사명</th>
                            <td>${data.company}</td>
                        </tr>
                        <tr>
                            <th>담당자명</th>
                            <td>${data.name}</td>
                        </tr>
                        <tr>
                            <th>연락처</th>
                            <td>${data.contact}</td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>${data.email}</td>
                        </tr>
                        <tr>
                            <th>박스 종류</th>
                            <td>${data.box}</td>
                        </tr>
                        <tr>
                            <th>수량</th>
                            <td>${data.quantity}</td>
                        </tr>
                        <tr>
                            <th>지역</th>
                            <td>${data.region}</td>
                        </tr>
                        <tr>
                            <th>상세 내용</th>
                            <td>${data.description || '없음'}</td>
                        </tr>
                    </table>
                    
                    <p>영업일 기준 <span class="highlight">1~2일 내</span>로 회신 드리겠습니다.</p>
                    <p>감사합니다.</p>
                </div>
                
                <div class="footer">
                    <p><strong>한양인팩</strong></p>
                    <p>이 메일은 자동 발송 메일입니다. 회신이 필요하신 경우 담당자에게 직접 연락 부탁드립니다.</p>
                </div>
            </div>
        </body>
        </html>
    `;
}

// 관리자용 신규 문의 알림 이메일
export function getAdminInquiryEmailTemplate(data) {
    return `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body { font-family: 'Malgun Gothic', sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #dc2626; color: white; padding: 20px; text-align: center; }
                .content { background-color: #fef2f2; padding: 30px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #dc2626; }
                .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; background-color: white; }
                .info-table th { background-color: #fee2e2; padding: 12px; text-align: left; width: 30%; }
                .info-table td { padding: 12px; border-bottom: 1px solid #fee2e2; }
                .alert { background-color: #fecaca; padding: 15px; border-radius: 6px; margin: 20px 0; }
                .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🔔 신규 문의가 접수되었습니다</h1>
                </div>
                
                <div class="content">
                    <div class="alert">
                        <strong>⚠️ 빠른 응대가 필요합니다!</strong><br>
                        새로운 고객 문의가 접수되었습니다. 확인 후 신속하게 연락 부탁드립니다.
                    </div>
                    
                    <table class="info-table">
                        <tr>
                            <th>접수 시각</th>
                            <td>${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</td>
                        </tr>
                        <tr>
                            <th>회사명</th>
                            <td><strong>${data.company}</strong></td>
                        </tr>
                        <tr>
                            <th>담당자명</th>
                            <td><strong>${data.name}</strong></td>
                        </tr>
                        <tr>
                            <th>연락처</th>
                            <td><strong>${data.contact}</strong></td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>${data.email}</td>
                        </tr>
                        <tr>
                            <th>박스 종류</th>
                            <td>${data.box}</td>
                        </tr>
                        <tr>
                            <th>수량</th>
                            <td>${data.quantity}</td>
                        </tr>
                        <tr>
                            <th>지역</th>
                            <td>${data.region}</td>
                        </tr>
                        <tr>
                            <th>상세 내용</th>
                            <td>${data.description || '없음'}</td>
                        </tr>
                    </table>
                    
                    <p style="color: #dc2626; font-weight: bold;">
                        ※ 고객에게는 자동으로 접수 확인 메일이 발송되었습니다.
                    </p>
                </div>
                
                <div class="footer">
                    <p><strong>한양인팩 자동 알림 시스템</strong></p>
                </div>
            </div>
        </body>
        </html>
    `;
}

// 이메일 전송 검증
export async function verifyEmailConnection() {
    try {
        await transporter.verify();
        console.log('Email server is ready to send messages');
        return true;
    } catch (error) {
        console.error('Email server verification failed:', error);
        return false;
    }
}
