'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import img1 from "/public/img/main/design.jpg";
import img2 from "/public/img/main/knowhow.jpg";
import img3 from "/public/img/main/calendar.jpg";

const features = [
    {
        badge: '설계·디자인',
        title: '고객 브랜드에 맞는\n맞춤 패키지 디자인',
        desc: '단순한 박스가 아니라, 브랜드를 담는 패키지를 만듭니다. 사이즈·소재·인쇄 방식·마감 처리까지 고객의 요구에 맞게 처음부터 설계합니다.',
        items: [
            {
                color: 'bg-sky-100 text-sky-600',
                icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>,
                title: '맞춤 사이즈 설계',
                sub: '원하는 규격으로 자유롭게',
            },
            {
                color: 'bg-violet-100 text-violet-600',
                icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
                title: '브랜드 디자인 적용',
                sub: '로고·컬러·패턴 인쇄',
            },
            {
                color: 'bg-pink-100 text-pink-600',
                icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
                title: '프리미엄 마감',
                sub: '금박·은박·무광·유광 코팅',
            },
        ],
        img: img1,
        imgAlt: '한양인팩 맞춤 패키지 설계 디자인',
        reversed: false,
    },
    {
        badge: '제작·품질',
        title: '26년 노하우로 완성하는\n원스톱 제작 시스템',
        desc: '설계부터 디자인, 제작, 납품까지 한 곳에서 처리합니다. 여러 업체를 거칠 필요 없이 한양인팩 하나로 해결하세요.',
        items: [
            {
                color: 'bg-orange-100 text-orange-600',
                icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                title: '자체 공장 직생산',
                sub: '중간 마진 없는 합리적 가격',
            },
            {
                color: 'bg-emerald-100 text-emerald-600',
                icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                title: '엄격한 품질 검수',
                sub: '출고 전 전수 검사',
            },
            {
                color: 'bg-blue-100 text-blue-600',
                icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
                title: '원스톱 처리',
                sub: '협력사 없이 단일 생산 라인',
            },
        ],
        img: img2,
        imgAlt: '한양인팩 포장박스 제작 공장 시설',
        reversed: true,
    },
    {
        badge: '납기·배송',
        title: '약속한 날짜에\n반드시 납품합니다',
        desc: '정확한 일정 관리와 빠른 생산 능력으로 납기를 철저히 준수합니다. 급한 주문도 최대한 신속하게 처리해 드립니다.',
        items: [
            {
                color: 'bg-sky-100 text-sky-600',
                icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
                title: '납기 100% 준수',
                sub: '일정 지연 없는 신뢰 납품',
            },
            {
                color: 'bg-amber-100 text-amber-600',
                icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                title: '당일 견적 응대',
                sub: '빠른 상담 및 견적 처리',
            },
            {
                color: 'bg-indigo-100 text-indigo-600',
                icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
                title: '전국 배송 가능',
                sub: '직납 및 택배 배송',
            },
        ],
        img: img3,
        imgAlt: '한양인팩 포장박스 납기 배송',
        reversed: false,
    },
];

export default function WhyUs() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        section.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="bg-white py-24">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-20 reveal">
                    <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">Specialist</p>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-nanumEB break-keep">
                        한양인팩이{' '}
                        <span className="text-sky-500">특별한 이유</span>
                    </h2>
                </div>

                <div className="space-y-24">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center reveal"
                        >
                            <div className={`relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-200 ${f.reversed ? 'md:order-last' : ''}`}>
                                <Image
                                    src={f.img}
                                    alt={f.imgAlt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>

                            <div>
                                <span className="inline-block bg-sky-50 text-sky-600 text-xs font-black px-3 py-1.5 rounded-full mb-5">
                                    {f.badge}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4 font-nanumEB whitespace-pre-line">
                                    {f.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
                                    {f.desc}
                                </p>
                                <ul className="space-y-4">
                                    {f.items.map((item, j) => (
                                        <li key={j} className={`flex items-start gap-4 reveal reveal-d${j + 1}`}>
                                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${item.color}`}>
                                                {item.icon}
                                            </div>
                                            <div className="pt-0.5">
                                                <p className="text-sm font-black text-gray-800">{item.title}</p>
                                                <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/inquiry"
                                    className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-500 transition-colors mt-8"
                                >
                                    견적 문의하기
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
