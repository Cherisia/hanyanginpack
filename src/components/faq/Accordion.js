export default function Accordion() {
    const list = [
        {
            question: "포장박스 및 패키지 제작시 어떤 사항을 가정 먼저 고려해야 하나요?",
            answer: "포장박스 및 패키지를 제작함에 있어 가장 먼저 고려해야 할 부분은 박스의 용도, 포장 단위 중량, 종이 재질, 인쇄 방식, 제품 가격 등을 고려하여 박스형태와 종이 재질, 인쇄방식 및 후가공 공정을 선택하여 결정 하실 수 있습니다."
        },
        {
            question: "포장박스 및 패키지 제작시 어떤 사항을 가정 먼저 고려해야 하나요?",
            answer: "포장박스 및 패키지를 제작함에 있어 가장 먼저 고려해야 할 부분은 박스의 용도, 포장 단위 중량, 종이 재질, 인쇄 방식, 제품 가격 등을 고려하여 박스형태와 종이 재질, 인쇄방식 및 후가공 공정을 선택하여 결정 하실 수 있습니다."
        },
    ];
    return (
        <div className="max-w-screen-xl mx-auto px-5 bg-slate-50 min-h-screen">
            <div className="grid divide-y divide-neutral-200 max-w-6xl mx-auto">
                {
                    list.map((item, index) => {
                        return (
                            <div className="py-5" key={index}>
                                <details className="group">
                                    <summary
                                        className="flex justify-between items-center cursor-pointer list-none">
                                        <span className="font-semibold">{item.question}</span>
                                        <span className="transition group-open:rotate-180">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision"
                                                 stroke="currentColor"
                                                 strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                                 viewBox="0 0 24 24" width="24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="font-normal text-neutral-600 mt-3 group-open:animate-fadeIn whitespace-pre-line">
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