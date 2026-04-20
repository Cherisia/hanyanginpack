import Hero from "@/components/main/Hero";
import Stats from "@/components/main/Stats";
import Services from "@/components/main/Services";
import WhyUs from "@/components/main/WhyUs";
import Process from "@/components/main/Process";
import Client from "@/components/main/Client";

const BASE_URL = 'https://hanyanginpack.com';

export const metadata = {
    title: '패키지상자·포장박스 제작 전문 | 한양인팩',
    description: '1999년 설립, 26년 경력의 포장박스 제작 전문업체 한양인팩. 패키지상자 설계부터 디자인·제작·납품까지 원스톱 시스템. 골판지박스·인쇄박스·선물박스·맞춤 패키지 제작.',
    keywords: ['포장박스제작', '패키지상자', '박스제작', '포장박스', '골판지박스', '인쇄박스', '선물박스제작', '제품포장', '한양인팩', '김포박스', '맞춤박스'],
    alternates: { canonical: BASE_URL },
    openGraph: {
        title: '패키지상자·포장박스 제작 전문 | 한양인팩',
        description: '1999년 설립, 26년 경력의 포장박스 제작 전문업체. 설계·디자인·제작·납품 원스톱 시스템.',
        url: BASE_URL,
        type: 'website',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '한양인팩',
    description: '1999년 설립, 포장박스·패키지상자 제작 전문업체. 설계·디자인·제작·납품 원스톱 시스템.',
    url: BASE_URL,
    telephone: '031-997-9021',
    email: 'manager@hanyanginpack.com',
    faxNumber: '031-997-8348',
    foundingDate: '1999',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '승가로76번길 29',
        addressLocality: '김포시',
        addressRegion: '경기도',
        postalCode: '10043',
        addressCountry: 'KR',
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
    },
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: '포장박스 제작 서비스',
        itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '골판지 포장박스 제작' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '인쇄 패키지상자 제작' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '선물용 고급 박스 제작' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '맞춤 패키지 설계·디자인' } },
        ],
    },
};

export default function Home() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Hero />
            <Stats />
            <Services />
            <WhyUs />
            <Process />
            <Client />
        </>
    );
}
