'use client'

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const services = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 10V7" />
            </svg>
        ),
        name: '골판지박스',
        en: 'Corrugated Box',
        tags: ['일반박스', 'B골', 'E골', '양면골'],
        color: 'sky',
        href: '/inquiry',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
        name: '인쇄박스',
        en: 'Printed Box',
        tags: ['오프셋인쇄', '실크인쇄', '4도인쇄'],
        color: 'violet',
        href: '/inquiry',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
        ),
        name: '선물박스',
        en: 'Gift Box',
        tags: ['고급포장', '자석클로저', '리본'],
        color: 'pink',
        href: '/inquiry',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
        ),
        name: '맞춤패키지',
        en: 'Custom Package',
        tags: ['형압', '금박', '무광코팅'],
        color: 'purple',
        href: '/inquiry',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
        ),
        name: '원스톱 제작',
        en: 'One-Stop',
        tags: ['설계', '디자인', '납품'],
        color: 'blue',
        href: '/about',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        name: '빠른 납기',
        en: 'Fast Delivery',
        tags: ['당일견적', '신속배송', '정기납품'],
        color: 'cyan',
        href: '/contact',
    },
];

const colorMap = {
    sky: {
        base:   'border-gray-200 bg-white',
        active: 'border-sky-300 bg-sky-50 shadow-md shadow-sky-100',
        icon:   'bg-sky-100 text-sky-600',
        iconActive: 'bg-sky-500 text-white',
        tag:    'bg-sky-50 text-sky-500',
        tagActive: 'bg-sky-100 text-sky-600',
    },
    violet: {
        base:   'border-gray-200 bg-white',
        active: 'border-violet-300 bg-violet-50 shadow-md shadow-violet-100',
        icon:   'bg-violet-100 text-violet-600',
        iconActive: 'bg-violet-500 text-white',
        tag:    'bg-violet-50 text-violet-500',
        tagActive: 'bg-violet-100 text-violet-600',
    },
    pink: {
        base:   'border-gray-200 bg-white',
        active: 'border-pink-300 bg-pink-50 shadow-md shadow-pink-100',
        icon:   'bg-pink-100 text-pink-600',
        iconActive: 'bg-pink-500 text-white',
        tag:    'bg-pink-50 text-pink-500',
        tagActive: 'bg-pink-100 text-pink-600',
    },
    purple: {
        base:   'border-gray-200 bg-white',
        active: 'border-purple-300 bg-purple-50 shadow-md shadow-purple-100',
        icon:   'bg-purple-100 text-purple-600',
        iconActive: 'bg-purple-500 text-white',
        tag:    'bg-purple-50 text-purple-500',
        tagActive: 'bg-purple-100 text-purple-600',
    },
    blue: {
        base:   'border-gray-200 bg-white',
        active: 'border-blue-300 bg-blue-50 shadow-md shadow-blue-100',
        icon:   'bg-blue-100 text-blue-600',
        iconActive: 'bg-blue-500 text-white',
        tag:    'bg-blue-50 text-blue-500',
        tagActive: 'bg-blue-100 text-blue-600',
    },
    cyan: {
        base:   'border-gray-200 bg-white',
        active: 'border-cyan-300 bg-cyan-50 shadow-md shadow-cyan-100',
        icon:   'bg-cyan-100 text-cyan-600',
        iconActive: 'bg-cyan-500 text-white',
        tag:    'bg-cyan-50 text-cyan-500',
        tagActive: 'bg-cyan-100 text-cyan-600',
    },
};

export default function Services() {
    const [autoIdx, setAutoIdx] = useState(0);
    const [hoverIdx, setHoverIdx] = useState(null);
    const timerRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
            }),
            { threshold: 0.15 }
        );
        section.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const startAuto = () => {
        timerRef.current = setInterval(() => {
            setAutoIdx(prev => (prev + 1) % services.length);
        }, 1800);
    };

    useEffect(() => {
        startAuto();
        return () => clearInterval(timerRef.current);
    }, []);

    const handleMouseEnter = (i) => {
        setHoverIdx(i);
        clearInterval(timerRef.current);
    };
    const handleMouseLeave = () => {
        setHoverIdx(null);
        startAuto();
    };

    const activeIdx = hoverIdx !== null ? hoverIdx : autoIdx;

    return (
        <section ref={sectionRef} className="bg-gray-50 py-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12 reveal">
                    <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">Our Services</p>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3 font-nanumEB break-keep">
                        설계부터 납품까지,{' '}
                        <span className="text-sky-600">원스톱 제작 시스템</span>
                    </h2>
                    <p className="text-gray-400 text-sm max-w-md mx-auto">
                        골판지박스·인쇄박스·선물박스·맞춤패키지까지<br />
                        포장박스 제작에 필요한 모든 서비스를 제공합니다
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {services.map((s, i) => {
                        const c = colorMap[s.color];
                        const isActive = activeIdx === i;
                        return (
                            <div
                                key={i}
                                className={`reveal reveal-d${i + 1}`}
                            >
                            <Link
                                href={s.href}
                                className={`h-full border rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 ${
                                    isActive
                                        ? `${c.active} -translate-y-1`
                                        : `${c.base} hover:-translate-y-0.5`
                                }`}
                                onMouseEnter={() => handleMouseEnter(i)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                    isActive ? c.iconActive : c.icon
                                }`}>
                                    {s.icon}
                                </div>
                                <div>
                                    <p className={`font-black text-sm transition-colors duration-300 ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                                        {s.name}
                                    </p>
                                    <p className="text-gray-400 text-xs mt-0.5">{s.en}</p>
                                </div>
                                <div className="flex flex-wrap gap-1 mt-auto">
                                    {s.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full transition-all duration-300 ${
                                                isActive ? c.tagActive : c.tag
                                            }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-8">
                    <Link
                        href="/inquiry"
                        className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-500 transition-colors"
                    >
                        전체 박스 종류 견적 문의하기
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
