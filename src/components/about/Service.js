'use client'

import Image from "next/image";
import { useEffect, useRef } from "react";
import ability from "/public/img/about/service/ability.gif";
import trust from "/public/img/about/service/trust.gif";
import creative from "/public/img/about/service/creative.gif";
import innovation from "/public/img/about/service/innovation.gif";

const ITEMS = [
    {
        name: 'Ability',
        nameKo: '능력',
        content: '차별화된 아이디어와 기획력을 갖춘 최고의 인재가 소비자의 마음을 움직일 수 있는 결과물을 창조합니다.',
        src: ability,
        bg: 'bg-sky-50',
        border: 'border-sky-100',
        iconBg: 'bg-sky-100',
        accent: 'text-sky-600',
        hover: 'hover:border-sky-300 hover:bg-sky-50',
    },
    {
        name: 'Trust',
        nameKo: '신뢰',
        content: '다년간 축적된 신용과 신뢰를 바탕으로 안정적이고 유연하게 고객사를 지원합니다.',
        src: trust,
        bg: 'bg-violet-50',
        border: 'border-violet-100',
        iconBg: 'bg-violet-100',
        accent: 'text-violet-600',
        hover: 'hover:border-violet-300 hover:bg-violet-50',
    },
    {
        name: 'Creative',
        nameKo: '창의',
        content: '창의적인 사고를 통해 변화를 주도하며 고객 브랜드에 최적화된 패키지 가치를 창조합니다.',
        src: creative,
        bg: 'bg-rose-50',
        border: 'border-rose-100',
        iconBg: 'bg-rose-100',
        accent: 'text-rose-600',
        hover: 'hover:border-rose-300 hover:bg-rose-50',
    },
    {
        name: 'Innovation',
        nameKo: '혁신',
        content: '고객과의 신뢰를 바탕으로 더 나은 서비스를 제공할 수 있도록 지속적으로 연구하고 노력합니다.',
        src: innovation,
        bg: 'bg-orange-50',
        border: 'border-orange-100',
        iconBg: 'bg-orange-100',
        accent: 'text-orange-600',
        hover: 'hover:border-orange-300 hover:bg-orange-50',
    },
];

export default function Service() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
            }),
            { threshold: 0.1 }
        );
        section.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-6">

                {/* 헤더 */}
                <div className="text-center mb-14 reveal">
                    <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">Core Values</p>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-nanumEB">
                        신뢰할 수 있는 파트너
                    </h2>
                    <p className="mt-3 text-gray-500 text-sm">Trustworthy Partner</p>
                </div>

                {/* 카드 그리드 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {ITEMS.map((item, i) => (
                        <div
                            key={item.name}
                            className={`reveal reveal-d${i + 1} group flex flex-col gap-5 p-6 rounded-2xl border bg-white ${item.border} ${item.hover} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                        >
                            {/* 아이콘 */}
                            <div className={`w-14 h-14 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0`}>
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    width={36}
                                    height={36}
                                    unoptimized
                                />
                            </div>

                            {/* 텍스트 */}
                            <div className="flex flex-col gap-1.5">
                                <div className="flex items-baseline gap-2">
                                    <h3 className={`text-base font-black ${item.accent}`}>{item.name}</h3>
                                    <span className="text-xs text-gray-400 font-medium">{item.nameKo}</span>
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed break-keep">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
