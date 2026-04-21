import Link from "next/link";
import Image from "next/image";
import MainImage from "/public/img/main/hero/main.jpg";

export default function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center overflow-hidden">
            {/* 배경 이미지 */}
            <Image
                src={MainImage}
                alt="한양인팩 포장박스 제작 공장 메인 이미지"
                fill
                priority
                className="object-cover"
            />
            {/* 어두운 오버레이 — 인디고 톤 */}
            <div className="absolute inset-0 bg-black/55" />

            <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-24 w-full">
                <p className="text-sky-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    Package Box Manufacturing
                </p>
                <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-snug mb-5 break-keep">
                    포장박스 제작 전문<br />한양인팩
                </h1>
                <p className="text-white/65 text-sm leading-relaxed mb-8 max-w-lg break-keep">
                    1999년에 설립한 26년 경력의 패키지상자 전문업체.<br />
                    설계부터 디자인, 제작, 납품까지 원스톱 시스템으로 최상의 포장박스를 만들어 드립니다.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                    <Link
                        href="/inquiry"
                        className="bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200"
                    >
                        견적 문의하기 →
                    </Link>
                    <Link
                        href="/about"
                        className="border border-white/40 text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-200"
                    >
                        회사 소개
                    </Link>
                </div>
            </div>
        </section>
    );
}
