import Image from "next/image";
import MainImage from "/public/img/main/hero/main.jpg";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="mx-auto">
            <div className="flex items-center relative justify-center w-full h-[50rem]">
                <Image className="brightness-50 mx-auto object-cover" src={MainImage} alt="한양인팩 포장박스 제작 공장 메인 이미지" fill priority/>
                <div className="container mx-auto absolute px-4 text-slate-100 space-y-6">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-sky-300 mb-2">
                        Package Box Manufacturing
                    </p>
                    <h1 className="text-3xl lg:text-5xl font-black font-nanumEB space-y-3 leading-tight">
                        <span className="block">포장박스 제작 전문</span>
                        <span className="block">한양인팩</span>
                    </h1>
                    <p className="text-base break-keep font-bold text-slate-200 max-w-lg leading-relaxed">
                        1999년에 설립한 26년 경력의 패키지상자 전문업체<br/>
                        <span className="whitespace-nowrap">설계부터 디자인, 제작, 납품까지 원스톱 시스템으로 최상의 포장박스를 만들어 드립니다</span>
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Link
                            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-xl px-6 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                            href="/inquiry">
                            견적 문의하기 →
                        </Link>
                        <Link
                            className="inline-flex items-center gap-2 border border-slate-300 hover:bg-white/10 text-slate-100 font-bold rounded-xl px-6 py-3.5 transition-all duration-200"
                            href="/about">
                            회사 소개
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
