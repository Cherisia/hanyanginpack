import {FaQuestionCircle} from "react-icons/fa";

export default function Accordion() {
    const list = [
        {
            question: "포장박스 및 패키지 제작시 어떤 사항을 가정 먼저 고려해야 하나요?",
            answer: "포장박스 및 패키지를 제작함에 있어 가장 먼저 고려해야 할 부분은 박스의 용도, 포장 단위 중량, 종이 재질, 인쇄 방식, 제품 가격 등을 고려하여 박스형태와 종이 재질, 인쇄방식 및 후가공 공정을 선택하여 결정 하실 수 있습니다."
        },
        {
            question: "인쇄 방법에는 어떤 종류가 있나요?",
            answer: "1. 수지판 인쇄 : 골판지에 직접 인쇄하는 방법으로 카툰 박스나 저렴하고 단순한 포장용 상자 제작에 사용합니다. \n \n" +
                "2. 옵셋 인쇄 : 판지나 고급 특수용지에 다양한 칼라와 고화질의 퀄리티로 인쇄하는 방법으로 고급 포장용 상자 제작에 사용합니다. \n \n" +
                "3. UV 특수인쇄 : 금지, 은지 등 고급 특수용지에 최상의 퀄리티와 다양한 색상의 컬러를 구현하여 최상급 포장용 상자 제작에 필요한 인쇄 방법 입니다."
        },
    ];
    return (
        <div className="max-w-screen-xl mx-auto px-5 bg-slate-50 ">
            <div className="grid divide-y divide-neutral-200 max-w-6xl mx-auto">
                {
                    list.map((item, index) => {
                        return (
                            <div className="py-5" key={index}>
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