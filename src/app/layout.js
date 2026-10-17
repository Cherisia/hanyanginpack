import "./globals.css";
// import KakaoChatButton from "@/components/share/KakaoChatButton";
import Navbar from "@/components/share/Navbar";
import Footer from "@/components/share/Footer";
import {Toaster} from "sonner";

const BASE_URL = 'https://hanyanginpack.com';

export const metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        template: '%s | 한양인팩',
        default: '김포 포장박스 제작 전문 | 한양인팩',
    },
    description: '경기도 김포 소재, 1999년 설립·26년 경력의 포장박스 제작 전문업체 한양인팩. 패키지상자 설계부터 디자인·제작·납품까지 원스톱 시스템으로 합리적인 가격에 최고 품질의 패키지를 제공합니다.',
    keywords: ['김포 포장박스', '김포 포장박스제작', '김포 패키지제작', '포장박스제작', '패키지상자', '박스제작', '포장박스', '골판지박스', '인쇄박스', '선물박스', '제품포장', '한양인팩'],
    icons: {
        icon: [
            { url: '/logo/favicon.svg', type: 'image/svg+xml' },
        ],
    },
    robots: { index: true, follow: true },
    alternates: { canonical: BASE_URL },
    verification: {
        google: 'aXCiY6cDF-f8_quw5slnXSE7mxw7ZADv6lDIkHjwVys',
        other: {
            'naver-site-verification': '422597a33a8455eed284756aa3a7fafdff6cd64d',
        },
    },
    openGraph: {
        title: '김포 포장박스 제작 전문 | 한양인팩',
        description: '경기도 김포에서 26년째 이어온 포장박스 제작 전문업체. 설계·디자인·제작·납품 원스톱 시스템.',
        type: 'website',
        url: BASE_URL,
        siteName: '한양인팩',
        locale: 'ko_KR',
        images: [
            {
                url: '/logo/logo.webp',
                width: 800,
                height: 600,
                alt: '한양인팩 포장박스 제작 전문',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '김포 포장박스 제작 전문 | 한양인팩',
        description: '경기도 김포에서 26년째 이어온 포장박스 제작 전문업체. 설계·디자인·제작·납품 원스톱 시스템.',
        images: ['/logo/logo.webp'],
    },
};

const sharedJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': `${BASE_URL}/#organization`,
            name: '한양인팩',
            url: BASE_URL,
            logo: `${BASE_URL}/logo/logo.webp`,
            telephone: '031-997-9021',
            email: 'manager@hanyanginpack.com',
        },
        {
            '@type': 'WebSite',
            '@id': `${BASE_URL}/#website`,
            name: '한양인팩',
            url: BASE_URL,
            inLanguage: 'ko-KR',
            publisher: { '@id': `${BASE_URL}/#organization` },
        },
    ],
};

export default function RootLayout({children}) {
    return (
        <html lang="ko">
        <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sharedJsonLd) }} />
        <Navbar/>
        {children}
        {/* <KakaoChatButton/> */}
        <Footer/>
        <Toaster richColors position="top-center" />
        </body>
        </html>
    );
}
