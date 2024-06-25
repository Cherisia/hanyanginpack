import Image from "next/image";
import MainImage from "/public/img/inquiry/inquiry_main.jpg"

export default function Banner() {
    let title = '견적문의';
    let content = '최고의 결과물을 만나보세요';
    return (
        <div className="relative h-[24rem]">
            <Image className="brightness-[60%] rounded-2xl p-1" src={MainImage} fill={true} placeholder="blur"
                   alt="한양인팩 견적문의 메인 이미지"/>
            <div
                className="w-full max-lg:px-8 absolute text-white text-center top-[35%] tracking-tighter space-y-10">
                <div className="font-black text-6xl font-[nanumB]">
                    {title}
                </div>
                <div className="text-xl">
                    {content}
                </div>
            </div>
        </div>
    )
}