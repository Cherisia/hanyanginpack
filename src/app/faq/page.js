import Banner from "@/components/faq/Banner";
import Accordion from "@/components/faq/Accordion";
import MainSection from "@/components/faq/MainSection";

export const metadata = {
    title: '자주 묻는 질문',
    description: '한양인팩 포장박스 제작 관련 자주 묻는 질문(FAQ). 박스 제작 기간, 인쇄 방식, 후가공, 견적 문의 방법 등 궁금한 점을 확인하세요.',
    keywords: ['포장박스 FAQ', '박스제작 문의', '인쇄방식', '후가공', '박스 제작기간', '한양인팩 FAQ'],
    alternates: { canonical: 'https://hanyanginpack.com/faq' },
    openGraph: {
        title: '자주 묻는 질문 | 한양인팩',
        description: '포장박스 제작 관련 자주 묻는 질문. 제작 기간, 인쇄 방식, 후가공, 견적 등 궁금한 점을 확인하세요.',
        url: 'https://hanyanginpack.com/faq',
        type: 'website',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: '패키지 제작시 어떤 사항을 우선 고려해야 하나요?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '박스의 용도, 포장 단위 중량, 종이 재질, 인쇄 방식, 제품 가격, 박스 형태 등 여러 요소가 있습니다.',
            },
        },
        {
            '@type': 'Question',
            name: '인쇄 방식에는 어떤 종류가 있나요?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '수지판 인쇄(골판지 직접 인쇄), 옵셋 인쇄(고급 고화질), UV 특수인쇄(금지·은지 등 최상급) 세 가지 방식이 있습니다.',
            },
        },
        {
            '@type': 'Question',
            name: '후가공 작업이 무엇인가요?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '박스와 인쇄물을 보호하고 고급스러운 효과를 더하는 작업입니다. 다양한 코팅(유·무광)과 형압(양각·음각), 각종 박(금·은·색) 처리가 포함됩니다.',
            },
        },
        {
            '@type': 'Question',
            name: '견적이 얼마정도 나올까요?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '수량, 박스 형태, 사이즈, 종이 사양, 후가공 여부에 따라 견적이 상이합니다. 견적문의 페이지나 고객센터(031-997-9021)로 문의 주시면 안내드립니다.',
            },
        },
        {
            '@type': 'Question',
            name: '패키지 제작하는데 얼마나 걸리나요?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '최종 디자인 컨펌 후 영업일 기준 7~14일 정도 소요됩니다. 패키지 종류 및 후가공 여부에 따라 변동될 수 있습니다.',
            },
        },
        {
            '@type': 'Question',
            name: '견적문의에 원하는 박스 형태가 없어요!',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '고객센터(031-997-9021)로 연락하시거나 이메일(manager@hanyanginpack.com)로 도안을 보내주시면 제작 가능 여부를 안내드립니다.',
            },
        },
    ],
};

export default function Faq() {
    return (
        <div className="w-full bg-gray-50 pb-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>
            <Banner/>
            <MainSection/>
            <Accordion/>
        </div>
    )
}
