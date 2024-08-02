export default function MainSection() {
    const title = '패키지 전문';
    const content = [
        '한양인팩', '은 유기적으로 협업하며 혁신을 이어나가는', '열정있는 패키지 제작 회사', '입니다.',
        '1999년 회사 설립 이후 다양한 패키지 제작과 개발에 전력을 다하고 있습니다.',
        '패키지 설계부터 디자인, 그리고 제작까지 한번에 진행하는', '원스톱 솔루션', '으로 고객의 요구에 신속하고 정확하게 대응하고 있습니다.',
        '합리적인 가격과 최고의 품질로', '최상의 고객만족', '을 위해 끊임없이 노력하겠습니다.'
    ];

    return (
        <div className="container mt-12 p-8 text-base font-medium text-gray-700 space-y-10 mx-auto break-keep tracking-tighter">
            <h1 className="font-bold text-2xl">{title}</h1>
            <div className="border border-gray-400 w-32"></div>
            <div className="space-y-6">
                <p><span className="hy-underline">{content[0]}</span>{content[1]} <span className="hy-underline">{content[2]}</span>{content[3]}</p>
                <p>{content[4]}</p>
                <p>{content[5]} <span className="hy-underline">{content[6]}</span>{content[7]}</p>
                <p>{content[8]} <span className="hy-underline">{content[9]}</span>{content[10]}</p>
            </div>
        </div>
    )
}