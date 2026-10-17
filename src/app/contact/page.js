import Banner from "@/components/contact/Banner";
import MainSection from "@/components/contact/MainSection";
import Cards from "@/components/contact/Cards";

export const metadata = {
    title: '오시는길',
    description: '한양인팩 위치 안내. 경기도 김포시 승가로76번길 29. 전화 031-997-9021, 이메일 manager@hanyanginpack.com. 평일 09:00~18:00 운영.',
    keywords: ['한양인팩 위치', '한양인팩 오시는길', '한양인팩 연락처', '김포 박스제작 업체', '경기도 포장박스 업체', '포장박스 업체 위치'],
    alternates: { canonical: 'https://hanyanginpack.com/contact' },
    openGraph: {
        title: '오시는길 | 한양인팩',
        description: '경기도 김포시 승가로76번길 29. 전화 031-997-9021. 평일 09:00~18:00 운영.',
        url: 'https://hanyanginpack.com/contact',
        type: 'website',
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
};

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: '홈', item: 'https://hanyanginpack.com' },
        { '@type': 'ListItem', position: 2, name: '오시는길', item: 'https://hanyanginpack.com/contact' },
    ],
};

export default function About() {
    return (
        <div className="w-full bg-gray-50 pb-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <Banner/>
            <MainSection/>
            <Cards/>
        </div>
    )
}
