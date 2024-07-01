import Image from "next/image";
import MainImage from "/public/img/faq/faq_main.jpg"

export default function Banner() {
    const title = '자주 묻는 질문';
    const content = '최고의 결과물을 만나보세요';
    return (
        <div className="relative h-[24rem] mx-auto">
            <Image className="brightness-[50%] object-cover" src={MainImage} fill={true} placeholder="blur"
                   alt="한양인팩 견적문의 메인 이미지"/>
            <div
                className="w-full max-lg:px-8 absolute text-white text-center top-[35%] tracking-tighter space-y-10">
                <div className="font-normal md:font-black text-6xl font-[nanumB]">
                    {title}
                </div>
                <div className="text-xl">
                    {content}
                </div>
            </div>
        </div>
    )
}