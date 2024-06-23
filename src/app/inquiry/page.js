import Image from "next/image";

export default function Inquiry() {
    let title = '견적 문의';
    let content = [
        '한양인팩은 연락주시는 분 모두를 소중하게 생각하며 최선을 다해서 견적 및 컨설팅을 진행하고 있습니다.',
        '견적문의를 남겨주시면 최대한 빠르게 답변해 드리겠습니다.'
    ];

    return (
        <div className="relative top-20">
            <div className="relative w-full h-[28rem]">
                <Image className="brightness-[60%]" src="/img/inquiry/inquiry_main.jpg" fill={true} alt="#"/>
                <div className="w-full h-[28rem] max-lg:px-8 absolute text-white text-center top-[30%] max-sm:top-[25%] space-y-12 tracking-tighter">
                    <div className="font-black text-5xl">
                        {title}
                    </div>
                    <div className="font-medium text-xl space-y-4 break-keep">
                        <h1>{content[0]}</h1>
                        <h1>{content[1]}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}