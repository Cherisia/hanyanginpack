import "./globals.css";
import KakaoChatButton from "@/components/share/KakaoChatButton";
import Navbar from "@/components/share/Navbar";
import Footer from "@/components/share/Footer";

export const metadata = {
    title: "패키지상자 포장박스제작 | 한양인팩",
    description: "포장박스제작 전문업체. 체계적인 원스톱 시스템으로 고객이 원하는 최적의 패키지상자를 만들어 드립니다.",
    icons: {
        icon: "/logo/favicon.svg"
    },
    robots: 'index, follow',
    openGraph: {
        title: '한양인팩 | 포장박스제작 전문',
        description: '고객이 원하는 최적의 패키지상자를 만들어 드립니다.',
        type: 'website',
        url: 'https://hanyanginpack.com',
        siteName: '한양인팩',
        locale: 'ko_KR',
        images: [
            {
                url: 'https://hanyanginpack.com/img/logo/logo.jpg',
                width: 800,
                height: 600,
                alt: 'hanyanginpack logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@hanyanginpack',
        creator: '@hanyanginpack',
        title: '한양인팩 | 포장박스제작 전문',
        description: '고객이 원하는 최적의 패키지상자를 만들어 드립니다.',
        image: 'https://hanyanginpack.com/img/logo/logo.jpg',
    },
};

export default function RootLayout({children}) {
    return (
        <html lang="ko">
        <meta name="naver-site-verification" content="422597a33a8455eed284756aa3a7fafdff6cd64d" />
        <meta name="google-site-verification" content="aXCiY6cDF-f8_quw5slnXSE7mxw7ZADv6lDIkHjwVys" />
        <body>
        <Navbar/>
        {children}
        <KakaoChatButton/>
        <Footer/>
        </body>
        </html>
    );
}
