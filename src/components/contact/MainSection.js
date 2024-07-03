export default function MainSection() {
    const content = [
        '한양인팩',
        '을 방문해주시는 고객님, 환영합니다!',
        '고객의 이익과 요구',
        '를 위해 ',
        '끊임없이 노력',
        '하겠습니다.',
    ];
    return (
        <div className="container p-8 text-center text-base text-gray-700 space-y-6 mx-auto break-keep">
            <p><span className="hy-underline">{content[0]}</span>{content[1]}</p>
            <p><span className="hy-underline">{content[2]}</span>{content[3]}<span className="hy-underline">{content[4]}</span>{content[5]}</p>
        </div>
    )
}