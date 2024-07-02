import {FaQuestionCircle} from "react-icons/fa";

export default function Accordion() {
    const list = [
        {
            question: "패키지 제작시 어떤 사항을 우선 고려해야 하나요?",
            answer: "박스의 용도, 포장 단위 중량, 종이 재질, 인쇄 방식, 제품 가격, 박스 형태 등 여러 요소가 있습니다."
        },
        {
            question: "인쇄 방식에는 어떤 종류가 있나요?",
            answer: "1. 수지판 인쇄 : 골판지에 직접 인쇄하는 방식으로 카툰 박스나 저렴하고 단순한 포장용 상자 제작에 사용합니다. \n \n" +
                "2. 옵셋 인쇄 : 판지나 고급 특수용지에 다양한 컬러와 고화질의 퀄리티로 인쇄하는 방식으로 고급 포장용 상자 제작에 사용합니다. \n \n" +
                "3. UV 특수인쇄 : 금지, 은지 등 고급 특수용지에 최상의 퀄리티와 다양한 색상의 컬러를 구현하는 방식이며 최상급 포장용 상자 제작에 사용합니다."
        },
        {
            question: "후가공 작업이 무엇인가요?",
            answer: "후가공 작업은 박스와 인쇄물을 보호하고 고급스러운 효과를 더하기 위한 작업입니다. \n \n" +
                "다양한 코팅(유,무광)과 형압(양각,음각) 및 각종 박(금,은,색)을 사용하여 고급스러움을 갖추고 쉽게 무단복제를 할 수 없게 하는 방식으로 사용할 수 있습니다."
        },
        {
            question: "견적이 얼마정도 나올까요?",
            answer: "수량, 박스 형태, 사이즈, 종이 사양, 후가공 여부 등에 따라 견적이 상이하므로 대략적인 가격 측정이 어렵습니다.\n \n" +
                "견적문의 페이지를 통해 접수해주시거나 고객센터(031-997-9021)로 연락주시면 친절하게 상담 도와드리겠습니다.\n \n"
        },
        {
            question: "견적문의에 원하는 박스 형태가 없어요!",
            answer: "원하시는 박스 형태가 없으실 경우에는 고객센터(031-997-9021)로 연락주시거나 이메일(manager@hanyanginpack.com)로 도안 등 이미지를 보내주세요.\n \n" +
                "빠르고 친절한 상담을 통해 원하시는 형태의 박스 제작가능 여부를 알려드리고 있습니다."
        },
        {
            question: "패키지 제작하는데 얼마나 걸리나요?",
            answer: "최종 디자인 컨펌이 완료된 시점으로부터 영업일 기준 7~14일 정도 소요됩니다. \n \n" +
                "(제작 기간은 패키지 종류 및 후가공 유무에 따라 변동될 수 있습니다.)\n \n" +
                "급하게 요청하시는 경우 견적문의시 별도로 문의주시기 바랍니다."
        },
    ];
    return (
        <div className="max-w-screen-xl mx-auto px-5 bg-slate-50 ">
            <div className="grid divide-y divide-neutral-200 max-w-6xl mx-auto">
                {
                    list.map((item, index) => {
                        return (
                            <div className="py-5 break-keep" key={index}>
                                <details className="group">
                                    <summary
                                        className="flex justify-between items-center cursor-pointer list-none">
                                        <span>
                                            <FaQuestionCircle style={{display: 'inline', fontSize: '1.125rem', color: 'rgb(107 114 128)'}}/>
                                            <span className="ml-2 font-medium">{item.question}</span>
                                        </span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                                 stroke="currentColor"
                                                 strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                                 viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="font-normal text-neutral-600 mt-7 group-open:animate-fadeIn whitespace-pre-line">
                                        {item.answer}
                                    </p>
                                </details>
                            </div>
                        )
                    })
                }

            </div>
        </div>

    )
}