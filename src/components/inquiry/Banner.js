import Image from "next/image";
import MainImage from "/public/img/inquiry/inquiry_main.jpg"
import TypingText from "@/components/utils/TypingText";

export default function Banner() {
    const title = '견적문의';
    const content = '최고의 결과물을 만나보세요!';
    return (
        <div className="relative h-[24rem] mx-auto">
            <Image className="brightness-[60%] object-cover" src={MainImage} fill={true} placeholder="blur"
                   alt="한양인팩 견적문의 메인 이미지"/>
            <div
                className="w-full max-lg:px-8 absolute text-white text-center top-[35%] tracking-tighter space-y-10">
                <h1 className="font-normal md:font-black tracking-tighter text-5xl font-[nanumB]">
                    {title}
                </h1>
                <div className="text-xl">
                    <TypingText text={content}/>
                </div>
            </div>
        </div>
    )
}