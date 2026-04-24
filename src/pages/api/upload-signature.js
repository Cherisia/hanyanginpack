import crypto from 'crypto';

export default function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;

    if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
        console.error('[upload-signature] Cloudinary 환경변수 미설정');
        return res.status(500).json({ error: 'Cloudinary 환경변수가 설정되지 않았습니다.' });
    }

    const timestamp = Math.round(Date.now() / 1000);
    const folder = 'hanyanginpack/inquiry';

    // Cloudinary 기본 서명 알고리즘: SHA-1
    const str = `folder=${folder}&timestamp=${timestamp}${CLOUDINARY_API_SECRET}`;
    const signature = crypto.createHash('sha1').update(str).digest('hex');

    return res.status(200).json({
        signature,
        timestamp,
        cloudName: CLOUDINARY_CLOUD_NAME,
        apiKey: CLOUDINARY_API_KEY,
        folder,
    });
}
