'use client'

import Link from "next/link";
import { useEffect, useRef } from "react";

const CARTON_PAPERS = [
    {
        name: '백판지',
        en: 'White Board',
        weight: '200 ~ 500 g/m²',
        swatchColor: '#f0f0ee',
        swatchEdge: '#d0d0cc',
        swatchLabel: '흰색',
        badge: 'bg-slate-500',
        title: 'text-slate-700',
        card: 'bg-slate-50 border-slate-200',
        print: 4, strength: 3, fold: 5,
        desc: '단상자에 가장 많이 쓰이는 범용 종이입니다. 표면이 희고 매끄러워 인쇄 적성이 우수하며 접힘 가공이 쉽습니다.',
        uses: ['화장품 단상자', '식품 포장', '의약품 박스', '소매 포장'],
    },
    {
        name: '아이보리지',
        en: 'Ivory Board (SBS)',
        weight: '200 ~ 400 g/m²',
        swatchColor: '#f5ead0',
        swatchEdge: '#e0ce9e',
        swatchLabel: '아이보리',
        badge: 'bg-amber-500',
        title: 'text-amber-700',
        card: 'bg-amber-50 border-amber-200',
        print: 5, strength: 3, fold: 4,
        desc: '백판지보다 고급 등급의 종이로 순백색 표면에 광택이 있습니다. 인쇄 발색이 뛰어나 고급 패키지에 주로 사용됩니다.',
        uses: ['고급 화장품', '프리미엄 식품', '의류 태그', '명품 패키지'],
    },
    {
        name: '아트지',
        en: 'Art Paper (Coated)',
        weight: '100 ~ 250 g/m²',
        swatchColor: '#ffffff',
        swatchEdge: '#e8e8e8',
        swatchLabel: '광택 백색',
        badge: 'bg-sky-500',
        title: 'text-sky-700',
        card: 'bg-sky-50 border-sky-200',
        print: 5, strength: 2, fold: 3,
        desc: '표면에 코팅 처리를 하여 광택이 뛰어난 종이입니다. 인쇄 발색이 최상급으로 고품질 인쇄·후가공용 박스에 사용됩니다.',
        uses: ['고품질 인쇄 박스', '합지 원지', '카탈로그형 포장', '사진 인쇄 박스'],
    },
    {
        name: '크라프트지',
        en: 'Kraft Paper',
        weight: '70 ~ 200 g/m²',
        swatchColor: '#c4944a',
        swatchEdge: '#9e7030',
        swatchLabel: '크라프트 갈색',
        badge: 'bg-orange-700',
        title: 'text-orange-800',
        card: 'bg-orange-50 border-orange-200',
        print: 3, strength: 5, fold: 4,
        desc: '천연 펄프로 만든 갈색 종이로 강도가 높고 친환경 이미지를 줍니다. 쇼핑백·내부 완충재·친환경 포장에 널리 사용됩니다.',
        uses: ['쇼핑백', '친환경 포장', '내부 완충재', '자연·유기농 브랜드'],
    },
];

const CORRUGATED_PAPERS = [
    {
        name: '크라프트 라이너',
        en: 'Kraft Liner',
        weight: '100 ~ 300 g/m²',
        swatchColor: '#c4944a',
        swatchEdge: '#9e7030',
        swatchLabel: '크라프트 갈색',
        badge: 'bg-orange-600',
        title: 'text-orange-700',
        card: 'bg-orange-50 border-orange-200',
        role: '골판지 외층 (겉면지)',
        desc: '골판지의 겉면(라이너)을 구성하는 갈색 원지입니다. 인장강도·파열강도가 높아 골판지의 강도를 결정하는 핵심 원지입니다.',
        uses: ['골판지 외면', '택배박스 원지', '수출 포장용 박스'],
    },
    {
        name: '백라이너',
        en: 'White Top Liner',
        weight: '125 ~ 200 g/m²',
        swatchColor: '#f0f0ee',
        swatchEdge: '#d0d0cc',
        swatchLabel: '흰색',
        badge: 'bg-slate-500',
        title: 'text-slate-700',
        card: 'bg-slate-50 border-slate-200',
        role: '골판지 외층 (인쇄용)',
        desc: '크라프트 라이너 위에 흰색 표면지를 합지한 원지입니다. 인쇄 품질이 우수하여 로고·디자인 인쇄가 필요한 골판지 외면에 사용됩니다.',
        uses: ['인쇄용 골판지 외면', '브랜드 인쇄 박스', '디자인 택배박스'],
    },
    {
        name: '골심지',
        en: 'Fluting Medium',
        weight: '100 ~ 180 g/m²',
        swatchColor: '#d4aa70',
        swatchEdge: '#b08848',
        swatchLabel: '중간 갈색',
        badge: 'bg-yellow-700',
        title: 'text-yellow-800',
        card: 'bg-yellow-50 border-yellow-200',
        role: '골판지 중간층 (파형)',
        desc: '골판지의 파형(골) 중간층을 구성하는 원지입니다. 압축·굽힘 가공을 통해 파형 구조가 되며, 골판지의 완충성과 강도를 결정합니다.',
        uses: ['골판지 골심', '완충 기능 담당', 'A·B·C·E·F골 원재료'],
    },
];

function StarBar({ count, max = 5, color = 'bg-sky-500' }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: max }).map((_, i) => (
                <div key={i} className={`h-1.5 w-4 rounded-full ${i < count ? color : 'bg-gray-200'}`} />
            ))}
        </div>
    );
}

function PaperSwatch({ color, edge, label }) {
    const VW = 200, VH = 110;
    const W = 148, sx = 14, ex = sx + W;
    const PDX = 42, PDY = 26;
    const sheetH = 14;
    const by = 90, ty = by - sheetH;

    return (
        <svg viewBox={`0 0 ${VW} ${VH}`} className="w-full h-full">
            <defs>
                <linearGradient id={`ps-${label}`} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={color} stopOpacity="1" />
                    <stop offset="100%" stopColor={color} stopOpacity="0.85" />
                </linearGradient>
            </defs>
            {/* Right edge */}
            <polygon
                points={`${ex},${ty} ${ex+PDX},${ty-PDY} ${ex+PDX},${by-PDY} ${ex},${by}`}
                fill={edge} stroke="#33333320" strokeWidth="0.4"
            />
            {/* Top surface */}
            <polygon
                points={`${sx},${ty} ${ex},${ty} ${ex+PDX},${ty-PDY} ${sx+PDX},${ty-PDY}`}
                fill={`url(#ps-${label})`} stroke="#33333320" strokeWidth="0.4"
            />
            {/* Front face */}
            <rect x={sx} y={ty} width={W} height={sheetH} fill={edge} stroke="#33333320" strokeWidth="0.4" />
            {/* Outline */}
            <line x1={sx} y1={ty} x2={sx+PDX} y2={ty-PDY} stroke="#33333325" strokeWidth="0.5" />
            <line x1={sx+PDX} y1={ty-PDY} x2={ex+PDX} y2={ty-PDY} stroke="#33333325" strokeWidth="0.5" />
            <line x1={ex+PDX} y1={ty-PDY} x2={ex+PDX} y2={by-PDY} stroke="#33333325" strokeWidth="0.5" />
        </svg>
    );
}

export default function PaperGuide() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
            }),
            { threshold: 0.05 }
        );
        section.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-6 space-y-20">

                {/* ── 단상자용 종이 ── */}
                <div>
                    <div className="text-center mb-10 reveal">
                        <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">Carton Paper</p>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-nanumEB break-keep">
                            단상자·패키지용 종이
                        </h2>
                        <p className="mt-3 text-gray-500 text-sm max-w-lg mx-auto break-keep">
                            종이의 재질과 평량에 따라 인쇄 품질·강도·고급감이 달라집니다. 제품 특성에 맞는 종이를 선택하세요.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {CARTON_PAPERS.map((p, i) => (
                            <div
                                key={p.name}
                                style={{ animationDelay: `${i * 60}ms` }}
                                className={`reveal border rounded-2xl p-5 md:p-6 ${p.card} hover:shadow-md transition-all duration-300`}
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                                    {/* 종이 스와치 일러스트 */}
                                    <div className="md:order-last md:w-52 shrink-0 h-28 md:h-auto rounded-xl overflow-hidden">
                                        <PaperSwatch color={p.swatchColor} edge={p.swatchEdge} label={p.name} />
                                    </div>

                                    {/* 종이 이름 */}
                                    <div className="flex items-center gap-3 md:w-36 shrink-0">
                                        <div className={`w-12 h-12 rounded-xl ${p.badge} flex items-center justify-center shrink-0`}>
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className={`font-black text-base ${p.title}`}>{p.name}</p>
                                            <p className="text-[10px] text-gray-400">{p.en}</p>
                                        </div>
                                    </div>

                                    {/* 스펙 */}
                                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs md:w-56 shrink-0">
                                        <div className="col-span-2">
                                            <p className="text-gray-400 mb-0.5">평량</p>
                                            <p className="font-bold text-gray-700">{p.weight}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-400 mb-1">인쇄 적성</p>
                                            <StarBar count={p.print} color={p.badge} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 mb-1">강도</p>
                                            <StarBar count={p.strength} color={p.badge} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 mb-1">접힘성</p>
                                            <StarBar count={p.fold} color={p.badge} />
                                        </div>
                                    </div>

                                    {/* 설명 + 용도 */}
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-600 leading-relaxed break-keep mb-3">{p.desc}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {p.uses.map((u) => (
                                                <span key={u} className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${p.card.replace('bg-', 'border-').split(' ')[1]} ${p.title}`}>
                                                    {u}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── 골판지용 원지 ── */}
                <div>
                    <div className="text-center mb-10 reveal">
                        <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">Corrugated Base Paper</p>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-nanumEB break-keep">
                            골판지용 원지
                        </h2>
                        <p className="mt-3 text-gray-500 text-sm max-w-lg mx-auto break-keep">
                            골판지는 라이너(겉면지)와 골심지(파형 중간층)로 구성됩니다. 원지 선택에 따라 강도와 인쇄 품질이 결정됩니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {CORRUGATED_PAPERS.map((p, i) => (
                            <div
                                key={p.name}
                                style={{ animationDelay: `${i * 60}ms` }}
                                className={`reveal border rounded-2xl overflow-hidden flex flex-col ${p.card} hover:shadow-md transition-all duration-300`}
                            >
                                {/* 스와치 */}
                                <div className="bg-white/60 p-4 border-b border-white/50">
                                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-2">원지 색상</p>
                                    <div className="h-20">
                                        <PaperSwatch color={p.swatchColor} edge={p.swatchEdge} label={p.name} />
                                    </div>
                                </div>
                                {/* 내용 */}
                                <div className="p-4 flex flex-col gap-3 flex-1">
                                    <div>
                                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full text-white ${p.badge}`}>{p.role}</span>
                                        <h3 className={`font-black text-base mt-2 ${p.title}`}>{p.name}</h3>
                                        <p className="text-[10px] text-gray-400">{p.en} · {p.weight}</p>
                                    </div>
                                    <p className="text-xs text-gray-600 leading-relaxed break-keep flex-1">{p.desc}</p>
                                    <div className="flex flex-wrap gap-1">
                                        {p.uses.map((u) => (
                                            <span key={u} className="text-[9px] font-bold bg-white/70 text-gray-500 px-1.5 py-0.5 rounded border border-white">
                                                {u}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── 평량 선택 가이드 ── */}
                <div className="reveal">
                    <div className="text-center mb-8">
                        <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">Quick Reference</p>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 font-nanumEB">종이 선택 가이드</h2>
                        <p className="mt-2 text-gray-500 text-sm">평량(g/m²)이 높을수록 두껍고 강하지만 무거워집니다.</p>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-sky-500 text-white">
                                        <th className="px-4 py-3 text-left font-black text-xs">종류</th>
                                        <th className="px-4 py-3 text-center font-black text-xs">평량</th>
                                        <th className="px-4 py-3 text-center font-black text-xs">인쇄 적성</th>
                                        <th className="px-4 py-3 text-center font-black text-xs">강도</th>
                                        <th className="px-4 py-3 text-left font-black text-xs">주요 용도</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {[
                                        { name: '백판지',       color: 'text-slate-600',   weight: '200~500 g/m²', print: 4, str: 3, use: '화장품·식품·의약품 단상자' },
                                        { name: '아이보리지',   color: 'text-amber-700',   weight: '200~400 g/m²', print: 5, str: 3, use: '고급 패키지·프리미엄 단상자' },
                                        { name: '아트지',       color: 'text-sky-600',     weight: '100~250 g/m²', print: 5, str: 2, use: '고품질 인쇄·합지 원지' },
                                        { name: '크라프트지',   color: 'text-orange-800',  weight: '70~200 g/m²',  print: 3, str: 5, use: '쇼핑백·친환경 포장' },
                                        { name: '크라프트 라이너', color: 'text-orange-600', weight: '100~300 g/m²', print: 2, str: 5, use: '골판지 외면(겉면지)' },
                                        { name: '골심지',       color: 'text-yellow-700',  weight: '100~180 g/m²', print: 1, str: 4, use: '골판지 파형 중간층' },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                            <td className={`px-4 py-3 font-black ${row.color}`}>{row.name}</td>
                                            <td className="px-4 py-3 text-center text-gray-600 text-xs">{row.weight}</td>
                                            <td className="px-4 py-3">
                                                <div className="flex justify-center gap-0.5">
                                                    {[...Array(5)].map((_, j) => <div key={j} className={`w-3 h-1.5 rounded-full ${j < row.print ? 'bg-sky-400' : 'bg-gray-200'}`} />)}
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex justify-center gap-0.5">
                                                    {[...Array(5)].map((_, j) => <div key={j} className={`w-3 h-1.5 rounded-full ${j < row.str ? 'bg-orange-400' : 'bg-gray-200'}`} />)}
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-gray-600 text-xs">{row.use}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="reveal bg-gradient-to-br from-sky-400 to-blue-500 rounded-3xl p-8 md:p-10 text-center text-white">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-3">어떤 종이가 적합한지 모르겠다면?</p>
                    <h2 className="text-2xl md:text-3xl font-black font-nanumEB mb-2 break-keep">
                        전문가에게 바로 물어보세요
                    </h2>
                    <p className="text-sm opacity-80 mb-8 break-keep">
                        26년 경력의 전문가가 제품과 예산에 맞는 종이 종류와 평량을 직접 추천해 드립니다.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            href="/inquiry"
                            className="inline-flex items-center justify-center gap-2 bg-white text-sky-600 font-black text-sm px-6 py-3 rounded-xl hover:bg-sky-50 transition-colors"
                        >
                            견적 문의하기
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <a
                            href="tel:0319979021"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-black text-sm px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
