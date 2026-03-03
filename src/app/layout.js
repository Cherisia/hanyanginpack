import "./globals.css";
import KakaoChatButton from "@/components/share/KakaoChatButton";
import Navbar from "@/components/share/Navbar";
import Footer from "@/components/share/Footer";

const BASE_URL = 'https://hanyanginpack.com';

export const metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        template: '%s | 한양인팩',
        default: '패키지상자·포장박스 제작 전문 | 한양인팩',
    },
    description: '1999년 설립, 25년 경력의 포장박스 제작 전문업체 한양인팩. 패키지상자 설계부터 디자인·제작·납품까지 원스톱 시스템으로 합리적인 가격에 최고 품질의 패키지를 제공합니다.',
    keywords: ['포장박스제작', '패키지상자', '박스제작', '포장박스', '골판지박스', '인쇄박스', '선물박스', '제품포장', '한양인팩', '김포 박스제작', '원스톱 패키지'],
    icons: {
        icon: "/logo/favicon.svg"
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
        title: '패키지상자·포장박스 제작 전문 | 한양인팩',
        description: '1999년 설립, 25년 경력의 포장박스 제작 전문업체. 설계·디자인·제작·납품 원스톱 시스템.',
        type: 'website',
        url: BASE_URL,
        siteName: '한양인팩',
        locale: 'ko_KR',
        images: [
            {
                url: '/img/logo/logo.jpg',
                width: 800,
                height: 600,
                alt: '한양인팩 포장박스 제작 전문',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: '패키지상자·포장박스 제작 전문 | 한양인팩',
        description: '1999년 설립, 25년 경력의 포장박스 제작 전문업체. 설계·디자인·제작·납품 원스톱 시스템.',
        images: ['/img/logo/logo.jpg'],
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="ko">
        <body>
        <Navbar/>
        {children}
        <KakaoChatButton/>
        <Footer/>
        </body>
        </html>
    );
}
