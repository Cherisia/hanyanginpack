'use client'

import { useEffect, useRef } from "react";
import Link from "next/link";
import Map from "@/components/contact/Map";

const INFO_CARDS = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
        label: '대표 전화',
        value: '031-997-9021',
        sub: '팩스 031-997-8348',
        href: 'tel:0319979021',
        linkText: '전화 연결',
        bg: 'bg-sky-50',
        border: 'border-sky-100',
        iconBg: 'bg-sky-100',
        accent: 'text-sky-600',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        label: '이메일',
        value: 'manager@hanyanginpack.com',
        sub: '문의 접수 후 빠르게 회신',
        href: 'mailto:manager@hanyanginpack.com',
        linkText: '이메일 보내기',
        bg: 'bg-violet-50',
        border: 'border-violet-100',
        iconBg: 'bg-violet-100',
        accent: 'text-violet-600',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        label: '주소',
        value: '경기도 김포시 승가로76번길 29',
        sub: '우편번호 10043',
        href: 'https://map.kakao.com/link/search/한양인팩',
        linkText: '지도에서 보기',
        bg: 'bg-rose-50',
        border: 'border-rose-100',
        iconBg: 'bg-rose-100',
        accent: 'text-rose-600',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        label: '업무시간',
        value: '평일 09:00 ~ 18:00',
        sub: '토·일·공휴일 휴무',
        href: null,
        linkText: null,
        bg: 'bg-orange-50',
        border: 'border-orange-100',
        iconBg: 'bg-orange-100',
        accent: 'text-orange-600',
    },
];

const DIRECTIONS = [
    {
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
            </svg>
        ),
        title: '자가용',
        desc: '네비게이션에 "한양인팩" 또는 "경기도 김포시 승가로76번길 29" 검색',
        accent: 'text-sky-600',
        bg: 'bg-sky-50',
    },
    {
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
        ),
        title: '대중교통',
        desc: '카카오맵·네이버지도에서 "한양인팩" 검색 후 대중교통 경로 이용',
        accent: 'text-violet-600',
        bg: 'bg-violet-50',
    },
    {
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
        ),
        title: '주차',
        desc: '공장 내 주차 공간 이용 가능 (방문 전 전화 예약 권장)',
        accent: 'text-orange-600',
        bg: 'bg-orange-50',
    },
];

export default function Cards() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
            }),
            { threshold: 0.08 }
        );
        section.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef}>

            {/* 연락처 카드 섹션 */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-14 reveal">
                        <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">Contact Info</p>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-nanumEB">연락처 안내</h2>
                        <p className="mt-3 text-gray-500 text-sm">전화·이메일·온라인 문의 모두 가능합니다</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {INFO_CARDS.map((card, i) => (
                            <div
                                key={i}
                                className={`reveal reveal-d${i + 1} flex flex-col gap-4 p-6 rounded-2xl border bg-white ${card.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                            >
                                <div className={`w-11 h-11 rounded-xl ${card.iconBg} ${card.accent} flex items-center justify-center shrink-0`}>
                                    {card.icon}
                                </div>
                                <div className="flex flex-col gap-1 flex-1">
                                    <p className={`text-xs font-bold ${card.accent} uppercase tracking-wide`}>{card.label}</p>
                                    <p className="text-sm font-black text-gray-800 break-all leading-snug">{card.value}</p>
                                    <p className="text-xs text-gray-400 mt-0.5">{card.sub}</p>
                                </div>
                                {card.href && (
                                    <a
                                        href={card.href}
                                        target={card.href.startsWith('http') ? '_blank' : undefined}
                                        rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className={`text-xs font-bold ${card.accent} inline-flex items-center gap-1 hover:opacity-70 transition-opacity`}
                                    >
                                        {card.linkText}
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 지도 + 찾아오시는 길 섹션 */}
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-14 reveal">
                        <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">Location</p>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-nanumEB">찾아오시는 길</h2>
                        <p className="mt-3 text-gray-500 text-sm">경기도 김포시 승가로76번길 29</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 reveal">
                        {/* 지도 */}
                        <div className="md:col-span-2 rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-96 md:h-auto min-h-[380px]">
                            <Map />
                        </div>

                        {/* 찾아오는 방법 */}
                        <div className="flex flex-col gap-5">
                            {/* 주소 블록 */}
                            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                                <p className="text-xs font-bold text-sky-500 uppercase tracking-wide mb-3">Address</p>
                                <p className="text-sm font-black text-gray-800 leading-relaxed">
                                    경기도 김포시<br />승가로76번길 29
                                </p>
                                <p className="text-xs text-gray-400 mt-1">(우) 10043</p>
                                <a
                                    href="https://map.kakao.com/link/search/한양인팩"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-500 transition-colors"
                                >
                                    카카오맵에서 보기
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>

                            {/* 교통 안내 */}
                            <div className="rounded-2xl border border-gray-100 bg-white p-6 flex flex-col gap-4 flex-1">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">교통 안내</p>
                                {DIRECTIONS.map((d, i) => (
                                    <div key={i} className="flex gap-3 items-start">
                                        <div className={`w-7 h-7 rounded-lg ${d.bg} ${d.accent} flex items-center justify-center shrink-0 mt-0.5`}>
                                            {d.icon}
                                        </div>
                                        <div>
                                            <p className={`text-xs font-black ${d.accent}`}>{d.title}</p>
                                            <p className="text-xs text-gray-500 leading-relaxed mt-0.5 break-keep">{d.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA 섹션 */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-2xl mx-auto px-6 text-center reveal">
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 font-nanumEB break-keep mb-3">
                        견적·상담 문의는 언제든지
                    </h2>
                    <p className="text-gray-500 text-sm mb-8 break-keep">
                        온라인 문의를 남겨주시면 평일 기준 당일 내 연락드립니다.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            href="/inquiry"
                            className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/30"
                        >
                            온라인 견적 문의
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <a
                            href="tel:0319979021"
                            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm px-7 py-3.5 rounded-full border border-gray-200 transition-all duration-200 hover:shadow-md"
                        >
                            <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            031-997-9021
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
