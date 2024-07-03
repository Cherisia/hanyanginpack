import Image from "next/image";
import MainImage from "/public/img/contact/contact_main.jpg"
import TypingText from "@/components/utils/TypingText";

export default function Banner() {
    const title = '오시는길';
    const content = '상담은 언제나 환영합니다!';
    return (
        <div className="relative h-[24rem] mx-auto">
            <Image className="brightness-[60%] object-cover" src={MainImage} fill={true} placeholder="blur"
                   alt="한양인팩 오시는길 메인 이미지"/>
            <div
                className="w-full max-lg:px-8 absolute text-white text-center top-[35%] tracking-tighter space-y-10">
                <div className="font-normal md:font-black tracking-tighter text-5xl font-[nanumB]">
                    {title}
                </div>
                <div className="text-xl">
                    <TypingText text={content}/>
                </div>
            </div>
        </div>
    )
}