import GuideBanner from "@/components/guide/Banner";
import CorrugatedGuide from "@/components/guide/CorrugatedGuide";

export const metadata = {
    title: '골판지 종류 가이드',
    description: '한양인팩 골판지 종류 가이드. A골·B골·C골·E골·F골 플루트 종류별 두께·강도·인쇄 적성과 편면·양면·이중·삼중 구조별 특징을 한눈에 확인하세요.',
    keywords: ['골판지 종류', '골판지 플루트', 'A골 B골', '이중골판지', '골판지 구조', '골판지 두께', '골판지 선택'],
    alternates: { canonical: 'https://hanyanginpack.com/guide/corrugated' },
    openGraph: {
        title: '골판지 종류 가이드 | 한양인팩',
        description: 'A골부터 F골까지 플루트 종류와 편면·양면·이중·삼중 구조를 비교해 제품에 맞는 골판지를 선택하세요.',
        url: 'https://hanyanginpack.com/guide/corrugated',
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
        { '@type': 'ListItem', position: 2, name: '박스 제작 가이드', item: 'https://hanyanginpack.com/guide' },
        { '@type': 'ListItem', position: 3, name: '골판지 종류', item: 'https://hanyanginpack.com/guide/corrugated' },
    ],
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '골판지 종류 가이드 – 플루트별 두께·강도·구조 비교',
    description: 'A골·B골·C골·E골·F골 플루트 종류별 두께·강도·인쇄 적성과 편면·양면·이중·삼중 구조별 특징을 한눈에 확인하세요.',
    author: { '@id': 'https://hanyanginpack.com/#organization' },
    publisher: { '@id': 'https://hanyanginpack.com/#organization' },
    url: 'https://hanyanginpack.com/guide/corrugated',
    isPartOf: { '@id': 'https://hanyanginpack.com/#website' },
    inLanguage: 'ko-KR',
};

export default function CorrugatedPage() {
    return (
        <div className="w-full bg-gray-50 pb-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <GuideBanner title="골판지 종류" sub="어떤 골판지를 선택해야 할까요?" />
            <CorrugatedGuide />
        </div>
    );
}
