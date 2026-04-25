import GuideBanner from "@/components/guide/Banner";
import GuideSection from "@/components/guide/GuideSection";

export const metadata = {
    title: '박스 제작 가이드',
    description: '한양인팩 박스 제작 가이드. 골판지박스·단상자·상하분리형·서랍형·쇼핑백·케이크박스 등 18가지 박스 구조를 이미지와 함께 설명합니다. 제품에 맞는 박스를 선택해 보세요.',
    keywords: ['박스 종류', '박스 제작가이드', '골판지박스', '단상자', '상하분리형', '서랍형박스', '쇼핑백', '케이크박스', '포장박스 종류', '맞춤박스'],
    alternates: { canonical: 'https://hanyanginpack.com/guide' },
    openGraph: {
        title: '박스 제작 가이드 | 한양인팩',
        description: '골판지박스부터 케이크박스까지 18가지 박스 구조를 한눈에 확인하세요. 제품에 맞는 박스를 선택해 바로 견적을 받아보실 수 있습니다.',
        url: 'https://hanyanginpack.com/guide',
        type: 'website',
    },
};

export default function GuidePage() {
    return (
        <div className="w-full bg-gray-50 pb-10">
            <GuideBanner />
            <GuideSection />
        </div>
    );
}
