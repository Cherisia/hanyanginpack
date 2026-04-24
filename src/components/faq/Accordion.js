'use client'

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CATEGORIES = ['전체', '제작·견적', '인쇄·소재', '납기·배송'];

const FAQ_LIST = [
    {
        category: '제작·견적',
        q: '패키지 제작 시 어떤 사항을 우선 고려해야 하나요?',
        a: '박스의 용도, 포장 단위 중량, 종이 재질, 인쇄 방식, 제품 가격, 박스 형태 등 여러 요소를 종합적으로 고려해야 합니다.\n\n처음 제작하시는 경우라면 전화(031-997-9021) 또는 온라인 문의를 통해 먼저 상담을 받아보시기를 권장합니다.',
    },
    {
        category: '제작·견적',
        q: '견적은 어떻게 받을 수 있나요?',
        a: '온라인 견적 문의 페이지를 통해 접수하시거나 전화(031-997-9021), 이메일(manager@hanyanginpack.com)로 문의 주시면 당일 내 안내드립니다.\n\n수량, 박스 형태, 사이즈, 종이 사양, 후가공 여부에 따라 견적이 달라지므로 가능한 한 자세하게 알려주시면 더 정확한 견적을 드릴 수 있습니다.',
    },
    {
        category: '제작·견적',
        q: '최소 주문 수량이 있나요?',
        a: '박스 종류 및 인쇄 방식에 따라 최소 주문 수량이 다를 수 있습니다.\n\n소량 제작도 가능한 경우가 있으므로 먼저 문의 주시면 안내드리겠습니다.',
    },
    {
        category: '제작·견적',
        q: '견적 문의에 원하는 박스 형태가 없어요.',
        a: '원하시는 박스 형태가 없을 경우 전화(031-997-9021) 또는 이메일(manager@hanyanginpack.com)로 도안·참고 이미지를 보내주시면 제작 가능 여부와 견적을 안내드립니다.',
    },
    {
        category: '제작·견적',
        q: '샘플 제작이 가능한가요?',
        a: '네, 샘플 제작이 가능합니다. 본 발주 전 샘플을 통해 품질과 형태를 먼저 확인하실 수 있습니다.\n\n샘플 제작 비용 및 기간은 조건에 따라 다르므로 별도로 문의 부탁드립니다.',
    },
    {
        category: '인쇄·소재',
        q: '인쇄 방식에는 어떤 종류가 있나요?',
        a: '크게 세 가지 방식이 있습니다.\n\n수지판 인쇄 : 골판지에 직접 인쇄하는 방식으로 카툰 박스 등 단순한 포장 상자에 주로 사용합니다.\n\n옵셋 인쇄 : 판지·고급 특수용지에 다양한 컬러와 고화질로 인쇄하는 방식으로 고급 포장 상자 제작에 사용합니다.\n\nUV 특수인쇄 : 금지·은지 등 고급 특수용지에 최상급 퀄리티와 다양한 컬러를 구현하는 방식입니다.',
    },
    {
        category: '인쇄·소재',
        q: '후가공 작업이 무엇인가요?',
        a: '박스와 인쇄물을 보호하고 고급스러운 효과를 더하는 마감 처리 작업입니다.\n\n유광·무광 코팅, 형압(양각·음각), 금박·은박·색박 처리 등이 포함됩니다. 브랜드 가치를 높이고 위조를 방지하는 효과도 있습니다.',
    },
    {
        category: '인쇄·소재',
        q: '어떤 소재와 재질을 사용할 수 있나요?',
        a: '골판지(단면·양면·이중), 백판지, 크라프트지, 아트지, 특수 코팅지 등 다양한 소재를 사용합니다.\n\n제품의 무게, 용도, 디자인 요구 사항에 맞는 최적의 소재를 추천드립니다.',
    },
    {
        category: '납기·배송',
        q: '패키지 제작하는 데 얼마나 걸리나요?',
        a: '최종 디자인 컨펌 후 영업일 기준 7~14일 정도 소요됩니다.\n\n패키지 종류, 후가공 유무, 주문 수량에 따라 변동될 수 있으며 급한 요청의 경우 견적 문의 시 별도로 말씀해 주세요.',
    },
    {
        category: '납기·배송',
        q: '전국 배송이 가능한가요?',
        a: '네, 전국 택배 배송이 가능하며 수도권의 경우 직납도 가능합니다.\n\n배송 방법 및 비용은 수량과 지역에 따라 달라지므로 문의 시 함께 안내드립니다.',
    },
    {
        category: '납기·배송',
        q: '급하게 제작이 필요한 경우에도 가능한가요?',
        a: '납기 단축이 필요한 경우 견적 문의 시 별도로 요청해 주시면 최대한 빠르게 처리할 수 있도록 도와드립니다.\n\n다만 후가공이 많거나 수량이 많은 경우에는 일정 조율이 필요할 수 있습니다.',
    },
];

export default function Accordion() {
    const [activeCategory, setActiveCategory] = useState('전체');
    const [openIndex, setOpenIndex] = useState(null);
    const sectionRef = useRef(null);

    const filtered = activeCategory === '전체'
        ? FAQ_LIST
        : FAQ_LIST.filter((item) => item.category === activeCategory);

    useEffect(() => {
        setOpenIndex(null);
    }, [activeCategory]);

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
        <section ref={sectionRef} className="bg-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-6">

                {/* 헤더 */}
                <div className="text-center mb-12 reveal">
                    <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">Questions & Answers</p>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-nanumEB">
                        무엇이든 물어보세요
                    </h2>
                    <p className="mt-3 text-gray-500 text-sm">패키지 제작의 궁금증을 해결해 드립니다</p>
                </div>

                {/* 카테고리 탭 */}
                <div className="flex flex-wrap gap-2 justify-center mb-10 reveal reveal-d1">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                                activeCategory === cat
                                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                                    : 'bg-white text-gray-500 border border-gray-200 hover:border-sky-300 hover:text-sky-500'
                            }`}
                        >
                            {cat}
                            {cat !== '전체' && (
                                <span className={`ml-1.5 text-xs ${activeCategory === cat ? 'text-sky-100' : 'text-gray-400'}`}>
                                    {FAQ_LIST.filter(f => f.category === cat).length}
                                </span>
                            )}
                        </button>
                    ))}
                </div>

                {/* 아코디언 목록 */}
                <div className="space-y-3 reveal reveal-d2">
                    {filtered.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={`${activeCategory}-${i}`}
                                className={`rounded-2xl border bg-white transition-all duration-200 overflow-hidden ${
                                    isOpen ? 'border-sky-200 shadow-md shadow-sky-500/10' : 'border-gray-100 hover:border-sky-100'
                                }`}
                            >
                                {/* 질문 */}
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full flex items-center gap-4 px-6 py-5 text-left"
                                >
                                    <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black transition-colors ${
                                        isOpen ? 'bg-sky-500 text-white' : 'bg-gray-100 text-gray-400'
                                    }`}>
                                        Q
                                    </span>
                                    <span className={`flex-1 text-sm font-black break-keep leading-relaxed transition-colors ${
                                        isOpen ? 'text-sky-600' : 'text-gray-800'
                                    }`}>
                                        {item.q}
                                    </span>
                                    <span className={`shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                        <svg className={`w-4 h-4 transition-colors ${isOpen ? 'text-sky-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>

                                {/* 답변 — grid trick for smooth animation */}
                                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                                    <div className="overflow-hidden">
                                        <div className="flex gap-4 px-6 pb-6 pt-1">
                                            <span className="shrink-0 w-7 h-7 rounded-full bg-sky-50 flex items-center justify-center text-xs font-black text-sky-500">
                                                A
                                            </span>
                                            <p className="text-sm text-gray-500 leading-[1.9] break-keep whitespace-pre-line">
                                                {item.a}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* 하단 CTA */}
                <div className="mt-14 rounded-2xl bg-sky-50 border border-sky-100 p-8 text-center reveal">
                    <p className="text-sm font-black text-gray-800 mb-1 break-keep">찾으시는 답변이 없으신가요?</p>
                    <p className="text-xs text-gray-500 mb-6 break-keep">직접 문의하시면 빠르게 안내드리겠습니다.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            href="/inquiry"
                            className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/30"
                        >
                            온라인 견적 문의
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <a
                            href="tel:0319979021"
                            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-bold text-sm px-6 py-3 rounded-full border border-gray-200 transition-all duration-200 hover:shadow-md"
                        >
                            <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            031-997-9021
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
