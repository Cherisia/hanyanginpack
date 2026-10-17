import Banner from "@/components/inquiry/Banner";
import MainSection from "@/components/inquiry/MainSection";
import Form from "@/components/inquiry/Form";

export const metadata = {
    title: '견적문의',
    description: '경기도 김포 한양인팩 포장박스·패키지상자 제작 견적 문의. 박스 형태, 수량, 사이즈, 인쇄 방식 등을 남겨주시면 빠르게 견적을 안내해 드립니다.',
    keywords: ['김포 포장박스 견적', '김포 박스제작 견적', '경기도 박스제작 견적', '포장박스 견적', '박스제작 견적', '패키지 제작 문의', '박스 견적문의', '한양인팩 견적'],
    alternates: { canonical: 'https://hanyanginpack.com/inquiry' },
    openGraph: {
        title: '견적문의 | 한양인팩',
        description: '포장박스·패키지상자 제작 견적 문의. 박스 형태, 수량, 사이즈 등을 남겨주시면 빠르게 안내해 드립니다.',
        url: 'https://hanyanginpack.com/inquiry',
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
        { '@type': 'ListItem', position: 2, name: '견적문의', item: 'https://hanyanginpack.com/inquiry' },
    ],
};

export default function Inquiry() {
    return (
        <div className="w-full bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <Banner/>
            <MainSection/>
            <Form/>
        </div>
    )
}
