import Image from "next/image";
import MainImage from "/public/img/main/main.jpg";
import InquiryButton from "/public/img/main/inquiry_button.png";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="mx-auto">
            <div className="flex items-center relative justify-center w-full h-[50rem]">
                <Image className="brightness-50 mx-auto object-cover" src={MainImage} fill/>
                <div className="container mx-auto absolute px-4 text-slate-100 space-y-8">
                    <div className="text-4xl lg:text-5xl font-black font-nanumEB space-y-3">
                        <div>제품의 가치는</div>
                        <div>포장에서 시작됩니다.</div>
                    </div>
                    <div className="text-base break-keep font-bold">한양인팩은 최고의 서비스와 다년간 축적된 노하우로 최상의 패키지를 만들어냅니다.</div>
                    <div>
                        <Link className="border rounded-md px-5 py-4 hover:bg-sky-100 hover:text-gray-600 border-slate-100 space-x-2 font-bold" href="/inquiry">
                            <Image className="inline" src={InquiryButton} width={30} height={30}/>
                            <span>견적 문의하기</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}