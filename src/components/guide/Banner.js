import Image from "next/image";
import MainImage from "/public/img/guide/guide_main.jpg";
import TypingText from "@/components/utils/TypingText";

export default function GuideBanner({
    title = '박스 형태',
    sub = '어떤 박스가 필요하신가요?',
}) {
    return (
        <div className="relative h-[24rem] mx-auto">
            <Image
                className="brightness-[65%] object-cover"
                src={MainImage}
                fill={true}
                priority
                placeholder="blur"
                sizes="100vw"
                alt="한양인팩 제작가이드 메인 이미지"
            />
            <div className="w-full max-lg:px-8 absolute text-white text-center top-[35%] tracking-tighter space-y-10">
                <h1 className="font-normal md:font-black tracking-tighter text-5xl font-[nanumB]">
                    {title}
                </h1>
                <div className="text-xl">
                    <TypingText text={sub} />
                </div>
            </div>
        </div>
    );
}
