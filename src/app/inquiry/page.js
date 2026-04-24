import Banner from "@/components/inquiry/Banner";
import MainSection from "@/components/inquiry/MainSection";
import Form from "@/components/inquiry/Form";

export const metadata = {
    title: '견적문의',
    description: '한양인팩 포장박스·패키지상자 제작 견적 문의. 박스 형태, 수량, 사이즈, 인쇄 방식 등을 남겨주시면 빠르게 견적을 안내해 드립니다.',
    keywords: ['포장박스 견적', '박스제작 견적', '패키지 제작 문의', '박스 견적문의', '한양인팩 견적'],
    alternates: { canonical: 'https://hanyanginpack.com/inquiry' },
    openGraph: {
        title: '견적문의 | 한양인팩',
        description: '포장박스·패키지상자 제작 견적 문의. 박스 형태, 수량, 사이즈 등을 남겨주시면 빠르게 안내해 드립니다.',
        url: 'https://hanyanginpack.com/inquiry',
        type: 'website',
    },
};

export default function Inquiry() {
    return (
        <div className="w-full bg-white">
            <Banner/>
            <MainSection/>
            <Form/>
        </div>
    )
}
