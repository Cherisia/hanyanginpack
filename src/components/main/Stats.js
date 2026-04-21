'use client'

import { useEffect, useRef } from "react";

const stats = [
    { value: '26', unit: '년', label: '업계 경력' },
    { value: '3,000', unit: '+', label: '납품 고객사' },
    { value: '원스톱', unit: '', label: '설계·제작·납품' },
    { value: '100', unit: '%', label: '맞춤 제작' },
];

export default function Stats() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
            }),
            { threshold: 0.2 }
        );
        section.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="bg-white py-10 md:py-14 border-b border-gray-100">
            <div className="max-w-3xl mx-auto px-6">
                <div className="text-center mb-12 reveal">
                    <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">By The Numbers</p>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 font-nanumEB break-keep">
                        26년이 쌓은 신뢰,{' '}
                        <span className="text-sky-600">숫자가 증명합니다</span>
                    </h2>
                    <p className="text-gray-400 text-sm max-w-md mx-auto">
                        한 번 맡긴 고객이 다시 찾는 포장박스 전문업체.<br />
                        1999년 설립 이후 3,000곳이 넘는 고객사와 함께합니다.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            className={`reveal reveal-d${i + 1} text-center bg-sky-50 border border-sky-100 rounded-2xl px-4 py-4 md:py-6 transition-[transform,box-shadow,background-color] duration-700 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-sky-100 hover:bg-sky-200 cursor-default`}
                        >
                            <div className="text-xl md:text-2xl font-black text-gray-900">
                                {s.value}<span className="text-sky-500 text-base md:text-lg">{s.unit}</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-1 font-medium">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
