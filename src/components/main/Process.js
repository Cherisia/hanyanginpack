'use client'

import { useEffect, useRef } from "react";
import Link from "next/link";

const steps = [
    {
        num: '01',
        title: '상담·견적',
        desc: '전화·이메일·온라인 문의로 요구사항을 파악하고 당일 견적을 안내해 드립니다.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 3H3a2 2 0 00-2 2v14l4-4h16a2 2 0 002-2V5a2 2 0 00-2-2z" />
            </svg>
        ),
    },
    {
        num: '02',
        title: '설계·디자인',
        desc: '맞춤 사이즈 설계와 브랜드에 어울리는 디자인 시안을 제작합니다.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.83a4 4 0 01-1.897 1.06l-2.685.671.671-2.685a4 4 0 011.06-1.897z" />
            </svg>
        ),
    },
    {
        num: '03',
        title: '제작·검수',
        desc: '자체 공장에서 직접 생산하며, 출고 전 전수 검사로 품질을 보장합니다.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        num: '04',
        title: '납품·배송',
        desc: '약속한 납기를 100% 준수하며 전국 배송 및 수도권 직납이 가능합니다.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
        ),
    },
];

export default function Process() {
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
                <div className="text-center mb-16 reveal">
                    <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">How It Works</p>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-nanumEB break-keep">
                        견적 문의부터 납품까지,{' '}
                        <span className="text-sky-600">한양인팩이</span>{' '}함께합니다
                    </h2>
                </div>

                {/* 데스크톱 */}
                <div className="hidden md:block reveal reveal-d1">
                    <div className="relative flex items-start justify-between gap-4">
                        {/* 연결선 */}
                        <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-sky-100" />

                        {steps.map((s, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center text-center px-4">
                                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border-2 border-sky-100 flex items-center justify-center text-sky-500 shadow-sm shadow-sky-100 mb-5">
                                    {s.icon}
                                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-sky-500 text-white text-[10px] font-black flex items-center justify-center">
                                        {i + 1}
                                    </span>
                                </div>
                                <p className="text-sm font-black text-gray-900 mb-2">{s.title}</p>
                                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 모바일 */}
                <div className="md:hidden space-y-0">
                    {steps.map((s, i) => (
                        <div key={i} className={`reveal reveal-d${i + 1} flex gap-5 items-start`}>
                            <div className="flex flex-col items-center shrink-0">
                                <div className="relative w-12 h-12 rounded-xl bg-white border-2 border-sky-100 flex items-center justify-center text-sky-500 shadow-sm">
                                    {s.icon}
                                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-sky-500 text-white text-[9px] font-black flex items-center justify-center">
                                        {i + 1}
                                    </span>
                                </div>
                                {i < steps.length - 1 && (
                                    <div className="w-px h-8 bg-sky-100 my-1" />
                                )}
                            </div>
                            <div className="pt-1 pb-6">
                                <p className="text-sm font-black text-gray-900 mb-1">{s.title}</p>
                                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 reveal">
                    <Link
                        href="/inquiry"
                        className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/30"
                    >
                        지금 바로 견적 문의하기
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
