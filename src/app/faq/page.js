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
            name: '패키지 제작 시 어떤 사항을 우선 고려해야 하나요?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '박스의 용도, 포장 단위 중량, 종이 재질, 인쇄 방식, 제품 가격, 박스 형태 등 여러 요소를 종합적으로 고려해야 합니다.',
            },
        },
        {
            '@type': 'Question',
            name: '견적은 어떻게 받을 수 있나요?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '온라인 견적 문의 페이지를 통해 접수하시거나 전화(031-997-9021), 이메일(manager@hanyanginpack.com)로 문의 주시면 당일 내 안내드립니다.',
            },
        },
        {
            '@type': 'Question',
            name: '최소 주문 수량이 있나요?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '박스 종류 및 인쇄 방식에 따라 최소 주문 수량이 다를 수 있습니다. 소량 제작도 가능한 경우가 있으므로 먼저 문의 주시면 안내드리겠습니다.',
            },
        },
        {
            '@type': 'Question',
            name: '견적 문의에 원하는 박스 형태가 없어요.',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '전화(031-997-9021) 또는 이메일(manager@hanyanginpack.com)로 도안·참고 이미지를 보내주시면 제작 가능 여부와 견적을 안내드립니다.',
            },
        },
        {
            '@type': 'Question',
            name: '샘플 제작이 가능한가요?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '네, 샘플 제작이 가능합니다. 본 발주 전 샘플을 통해 품질과 형태를 먼저 확인하실 수 있습니다. 샘플 제작 비용 및 기간은 조건에 따라 다르므로 별도로 문의 부탁드립니다.',
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
                text: '박스와 인쇄물을 보호하고 고급스러운 효과를 더하는 마감 처리 작업입니다. 유광·무광 코팅, 형압(양각·음각), 금박·은박·색박 처리 등이 포함됩니다.',
            },
        },
        {
            '@type': 'Question',
            name: '어떤 소재와 재질을 사용할 수 있나요?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '골판지(단면·양면·이중), 백판지, 크라프트지, 아트지, 특수 코팅지 등 다양한 소재를 사용합니다. 제품의 무게, 용도, 디자인 요구 사항에 맞는 최적의 소재를 추천드립니다.',
            },
        },
        {
            '@type': 'Question',
            name: '패키지 제작하는 데 얼마나 걸리나요?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '최종 디자인 컨펌 후 영업일 기준 7~14일 정도 소요됩니다. 패키지 종류, 후가공 유무, 주문 수량에 따라 변동될 수 있습니다.',
            },
        },
        {
            '@type': 'Question',
            name: '전국 배송이 가능한가요?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '네, 전국 택배 배송이 가능하며 수도권의 경우 직납도 가능합니다. 배송 방법 및 비용은 수량과 지역에 따라 달라지므로 문의 시 함께 안내드립니다.',
            },
        },
        {
            '@type': 'Question',
            name: '급하게 제작이 필요한 경우에도 가능한가요?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: '납기 단축이 필요한 경우 견적 문의 시 별도로 요청해 주시면 최대한 빠르게 처리할 수 있도록 도와드립니다.',
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
