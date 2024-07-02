export default function MainSection() {
    const content = [
        '한양인팩은 최선을 다해서',
        '견적 및 컨설팅을 진행하고 있습니다.',
        '견적문의를 남겨주시면',
        '최대한 빠르게',
        '답변해 드리겠습니다.'
    ];
    return (
        <div className="container p-8 text-center text-base text-gray-700 space-y-6 mx-auto break-keep">
            <p><span className="hy-underline">{content[0]}</span> {content[1]}</p>
            <p>{content[2]} <span className="hy-underline">{content[3]}</span> {content[4]}</p>
        </div>
    )
}