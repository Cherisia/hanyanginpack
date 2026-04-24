'use client'

import { useEffect, useRef } from "react";

const STEPS = [
    {
        num: '01',
        title: '문의 접수',
        desc: '양식을 작성해 제출하시면 당일 내 확인합니다.',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        num: '02',
        title: '담당자 연락',
        desc: '담당자가 직접 전화 또는 이메일로 연락드립니다.',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
    },
    {
        num: '03',
        title: '견적 안내',
        desc: '요구사항에 맞는 정확한 견적을 안내해 드립니다.',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
];

export default function MainSection() {
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
        <section ref={sectionRef} className="bg-white py-16">
            <div className="max-w-4xl mx-auto px-6">
                <div className="reveal mb-10">
                    <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">Quotation</p>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-nanumEB break-keep leading-tight">
                        견적 문의 절차
                    </h2>
                    <div className="w-10 h-1 bg-sky-500 rounded-full mt-5" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal reveal-d1">
                    {STEPS.map((s, i) => (
                        <div key={i} className="flex gap-4 items-start p-5 rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-sky-100 hover:bg-sky-50">
                            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                                {s.icon}
                            </div>
                            <div>
                                <p className="text-xs font-bold text-sky-500 mb-0.5">{s.num}</p>
                                <p className="text-sm font-black text-gray-800">{s.title}</p>
                                <p className="text-xs text-gray-400 leading-relaxed mt-1 break-keep">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
