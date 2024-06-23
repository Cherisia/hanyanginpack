import Image from "next/image";

export default function Service() {
    let title = 'Trustworthy Partner';
    let subTitle = '신뢰할 수 있는 파트너';
    let items = [
        {name: 'Ability', content: '한양인팩은 차별화된 아이디어와 기획력을 갖춘 최고의 인재가 소비자의 마음을 움직일 수 있는 결과물을 창조합니다', src: 'ability.gif'},
        {name: 'Trust', content: '다년간 축적된 신용과 신뢰를 바탕으로 안정적이고 유연하게 고객사를 지원합니다', src: 'trust.gif'},
        {name: 'Creative', content: '창의적인 사고를 통해 변화를 주도하며 가치를 창조합니다', src: 'creative.gif'},
        {name: 'Innovation', content: '고객과의 신뢰를 바탕으로 더나은 서비스를 제공해드릴수 있도록 지속적으로 연구하고 노력합니다', src: 'innovation.gif'}
    ]
    return (
        <section className="container px-4 py-16 m-auto md:px-12">
            <div className="text-gray-500">
                <div>
                    <h2 className="mt-4 text-center text-2xl font-bold text-gray-900 md:text-4xl">
                        {title}
                    </h2>
                    <p className="mt-4 text-center text-base text-gray-500 md:text-2xl underline decoration-cyan-100 decoration-[15px] underline-offset-[-5px]">
                        {subTitle}
                    </p>
                </div>
                <div
                    className="mt-8 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
                    {
                        items.map((item, index) => {
                            return (
                                <div
                                    className="group relative bg-white transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
                                    key={index}>
                                    <div className="relative space-y-8 py-12 p-8">
                                        <Image src={`/img/${item.src}`}
                                               className="w-16"
                                               width="512"
                                               height="512"
                                               alt={item.name}
                                               unoptimized={false}
                                        />
                                        <div className="space-y-2">
                                            <h5
                                                className="text-xl font-medium text-gray-700 transition group-hover:text-primary"
                                            >
                                                {item.name}
                                            </h5>
                                            <p className="text-sm text-gray-600 break-keep">
                                                {item.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>

    )
}