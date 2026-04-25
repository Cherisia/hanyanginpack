import GuideBanner from "@/components/guide/Banner";
import PaperGuide from "@/components/guide/PaperGuide";

export const metadata = {
    title: '종이 종류 가이드',
    description: '한양인팩 포장박스 종이 종류 가이드. 백판지·아이보리지·아트지·크라프트지 등 단상자용 종이와 라이너·골심지 등 골판지용 원지의 특성과 용도를 비교해 최적의 종이를 선택하세요.',
    keywords: ['백판지', '아이보리지', '아트지', '크라프트지', '라이너지', '골심지', '포장박스 종이', '단상자 종이'],
    alternates: { canonical: 'https://hanyanginpack.com/guide/paper' },
    openGraph: {
        title: '종이 종류 가이드 | 한양인팩',
        description: '백판지·아이보리지·크라프트지 등 포장박스에 사용되는 종이 종류와 특성을 한눈에 비교하세요.',
        url: 'https://hanyanginpack.com/guide/paper',
        type: 'website',
    },
};

export default function PaperPage() {
    return (
        <div className="w-full bg-gray-50 pb-10">
            <GuideBanner title="종이 종류" sub="어떤 종이가 적합한가요?" />
            <PaperGuide />
        </div>
    );
}
