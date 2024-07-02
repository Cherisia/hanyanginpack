export default function MainSection() {
    const content = [
        '아래의 질문 외에도 궁금하신 점은',
        '고객센터로 언제든지 문의',
        '해주세요!',
        '친절하게',
        '상담 도와드리겠습니다 😊😊',
    ];
    return (
        <div className="container p-8 text-center text-base text-gray-700 space-y-6 mx-auto break-keep">
            <p>{content[0]} <span className="hy-underline">{content[1]}</span>{content[2]}</p>
            <p><span className="hy-underline">{content[3]}</span> {content[4]}</p>
        </div>
    )
}