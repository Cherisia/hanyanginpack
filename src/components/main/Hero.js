import Link from "next/link";
import Image from "next/image";
import MainImage from "/public/img/main/hero/main.jpg";

const stats = [
    { value: '26', unit: '년', label: '업계 경력' },
    { value: '3,000', unit: '+', label: '납품 고객사' },
    { value: '원스톱', unit: '', label: '설계·제작·납품' },
    { value: '100', unit: '%', label: '맞춤 제작' },
];

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

            <div className="relative max-w-6xl mx-auto px-6 py-24 w-full text-center">
                {/* 배지 */}
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-sky-100 text-xs font-bold px-4 py-2 rounded-full mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse inline-block" />
                    1999년 설립 · Package Box Manufacturing
                </div>

                {/* h1 */}
                <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-[1.15] mb-6 font-nanumEB break-keep">
                    포장박스 제작의 모든 것,<br />
                    <span className="text-sky-300">한 곳에서.</span>
                </h1>

                <p className="text-sky-100 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto break-keep">
                    26년 경력의 패키지상자 전문업체 한양인팩.<br />
                    설계부터 디자인, 제작, 납품까지 원스톱 시스템으로<br />
                    최상의 포장박스를 만들어 드립니다.
                </p>

                {/* CTA 버튼 */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <Link
                        href="/inquiry"
                        className="bg-sky-500 hover:bg-sky-400 text-white font-black text-sm px-8 py-4 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                    >
                        견적 문의하기 →
                    </Link>
                    <Link
                        href="/about"
                        className="border-2 border-white/40 text-white font-bold text-sm px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-200"
                    >
                        회사 소개
                    </Link>
                </div>

                {/* 통계 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                    {stats.map((s) => (
                        <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-5">
                            <div className="text-2xl font-black text-white">
                                {s.value}<span className="text-sky-300 text-lg">{s.unit}</span>
                            </div>
                            <div className="text-xs text-sky-200 mt-1 font-medium">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
