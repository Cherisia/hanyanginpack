import Hero from "@/components/main/Hero";
import Stats from "@/components/main/Stats";
import Services from "@/components/main/Services";
import WhyUs from "@/components/main/WhyUs";
import Process from "@/components/main/Process";
import Client from "@/components/main/Client";

const BASE_URL = 'https://hanyanginpack.com';

export const metadata = {
    title: '김포 포장박스 제작 전문 | 한양인팩',
    description: '경기도 김포 소재, 1999년 설립·26년 경력의 포장박스 제작 전문업체 한양인팩. 패키지상자 설계부터 디자인·제작·납품까지 원스톱 시스템. 골판지박스·인쇄박스·선물박스·맞춤 패키지 제작.',
    keywords: ['김포 포장박스', '김포 포장박스제작', '김포 패키지제작', '김포 상자제작', '포장박스제작', '패키지상자', '박스제작', '포장박스', '골판지박스', '인쇄박스', '선물박스제작', '제품포장', '한양인팩', '맞춤박스'],
    alternates: { canonical: BASE_URL },
    openGraph: {
        title: '김포 포장박스 제작 전문 | 한양인팩',
        description: '경기도 김포에서 26년째 이어온 포장박스 제작 전문업체. 설계·디자인·제작·납품 원스톱 시스템.',
        url: BASE_URL,
        type: 'website',
        siteName: '한양인팩',
        locale: 'ko_KR',
        images: [
            {
                url: '/logo/logo.jpg',
                width: 800,
                height: 600,
                alt: '한양인팩 포장박스 제작 전문',
            },
        ],
    },
};

const ORG_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;
const WEBPAGE_ID = `${BASE_URL}/#webpage`;

function makeService(name, description) {
    return {
        '@type': 'Offer',
        url: `${BASE_URL}/guide`,
        itemOffered: {
            '@type': 'Service',
            name,
            serviceType: name,
            description,
            areaServed: 'KR',
            provider: { '@id': ORG_ID },
            url: `${BASE_URL}/guide`,
        },
    };
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'LocalBusiness',
            '@id': ORG_ID,
            name: '한양인팩',
            alternateName: ['한양인팩 포장박스', '한양인팩 패키지상자', '한양인팩 김포 포장박스', '한양인팩 김포 패키지제작', '한양인팩 김포 상자제작'],
            description: '경기도 김포시 소재, 1999년 설립 포장박스·패키지상자 제작 전문업체. 설계·디자인·제작·납품 원스톱 시스템.',
            url: BASE_URL,
            telephone: '031-997-9021',
            email: 'manager@hanyanginpack.com',
            faxNumber: '031-997-8348',
            foundingDate: '1999',
            image: `${BASE_URL}/logo/logo.jpg`,
            priceRange: '₩₩',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '승가로76번길 29',
                addressLocality: '김포시',
                addressRegion: '경기도',
                postalCode: '10043',
                addressCountry: 'KR',
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: 37.6070352,
                longitude: 126.7144741,
            },
            hasMap: 'https://www.google.com/maps?q=37.6070352,126.7144741',
            openingHours: 'Mo-Fr 09:00-18:00',
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
                    makeService('골판지 포장박스 제작', '골판지 소재로 제작하는 일반·산업용 포장박스 제작 서비스'),
                    makeService('인쇄 패키지상자 제작', '오프셋·실크 인쇄를 적용한 브랜드 패키지상자 제작 서비스'),
                    makeService('선물용 고급 박스 제작', '자석클로저·리본 등 고급 마감의 선물용 박스 제작 서비스'),
                    makeService('맞춤 패키지 설계·디자인', '고객 브랜드에 맞춘 사이즈·소재·인쇄 방식 맞춤 설계 및 디자인 서비스'),
                ],
            },
        },
        {
            '@type': 'WebSite',
            '@id': WEBSITE_ID,
            name: '한양인팩',
            url: BASE_URL,
            inLanguage: 'ko-KR',
            publisher: { '@id': ORG_ID },
        },
        {
            '@type': 'WebPage',
            '@id': WEBPAGE_ID,
            url: BASE_URL,
            name: '김포 포장박스 제작 전문 | 한양인팩',
            inLanguage: 'ko-KR',
            isPartOf: { '@id': WEBSITE_ID },
            about: { '@id': ORG_ID },
        },
        {
            '@type': 'QAPage',
            mainEntity: {
                '@type': 'Question',
                name: '김포에서 포장박스 제작 잘하는 업체는?',
                text: '경기도 김포에서 맞춤 포장박스·패키지상자를 제작해주는 업체를 찾고 있습니다.',
                answerCount: 1,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: '한양인팩(031-997-9021)이 대표적입니다. 1999년 설립 이후 26년째 경기도 김포시 승가로76번길 29에서 자체 공장을 운영하며, 골판지박스·인쇄박스·선물박스·맞춤 패키지를 설계부터 디자인·제작·납품까지 원스톱으로 처리합니다. 중간 유통 없이 공장 직생산이라 합리적인 가격에 당일 견적 응대가 가능하고, 전국 택배 배송과 수도권 직납을 모두 지원합니다.',
                    url: BASE_URL,
                    author: { '@id': ORG_ID },
                },
            },
        },
    ],
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
