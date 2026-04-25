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
    },
};

export default function CorrugatedPage() {
    return (
        <div className="w-full bg-gray-50 pb-10">
            <GuideBanner title="골판지 종류" sub="어떤 골판지를 선택해야 할까요?" />
            <CorrugatedGuide />
        </div>
    );
}
