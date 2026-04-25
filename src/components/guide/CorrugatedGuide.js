'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import crossSection from "/public/img/guide/corrugated/cross_section.jpg";

const FLUTES = [
    {
        name: 'A골',
        en: 'A-Flute',
        height: '4.5~5mm',
        pitch: '8~9mm',
        color: 'bg-sky-500',
        textColor: 'text-sky-600',
        borderColor: 'border-sky-200',
        bgColor: 'bg-sky-50',
        strength: 5,
        cushion: 5,
        print: 2,
        desc: '골 높이가 가장 높아 완충성·단열성이 뛰어납니다. 가전제품·유리·도자기 등 충격에 민감한 제품의 외박스로 주로 사용됩니다.',
        uses: ['가전제품', '유리·도자기', '과일·농산물', '중량 화물'],
        waveH: 36, pitchPx: 24,
    },
    {
        name: 'B골',
        en: 'B-Flute',
        height: '2.5~3mm',
        pitch: '5~6mm',
        color: 'bg-violet-500',
        textColor: 'text-violet-600',
        borderColor: 'border-violet-200',
        bgColor: 'bg-violet-50',
        strength: 5,
        cushion: 3,
        print: 4,
        desc: '골 간격이 촘촘해 압축강도와 인쇄 적성이 우수합니다. 통조림·음료·소형 공산품 포장에 가장 많이 쓰이는 범용 골판지입니다.',
        uses: ['통조림·음료', '소형 공산품', '택배박스', '인쇄박스'],
        waveH: 18, pitchPx: 14,
    },
    {
        name: 'C골',
        en: 'C-Flute',
        height: '3.5~4mm',
        pitch: '6~7mm',
        color: 'bg-emerald-500',
        textColor: 'text-emerald-600',
        borderColor: 'border-emerald-200',
        bgColor: 'bg-emerald-50',
        strength: 4,
        cushion: 4,
        print: 3,
        desc: 'A골과 B골의 중간 특성을 가집니다. 완충성과 압축강도를 모두 갖춰 식품·잡화 등 범용 포장재로 널리 활용됩니다.',
        uses: ['식품·잡화', '일반 유통', '수출 포장', '범용 외박스'],
        waveH: 26, pitchPx: 18,
    },
    {
        name: 'E골',
        en: 'E-Flute',
        height: '1.2~1.5mm',
        pitch: '3~4mm',
        color: 'bg-orange-500',
        textColor: 'text-orange-600',
        borderColor: 'border-orange-200',
        bgColor: 'bg-orange-50',
        strength: 3,
        cushion: 2,
        print: 5,
        desc: '매우 얇고 평활도가 높아 고품질 인쇄가 가능합니다. 소형 제품·화장품·식품 단상자에 주로 사용되며 합지박스 대체재로 많이 활용됩니다.',
        uses: ['화장품·소품', '소형 식품', '인쇄박스', '합지 대체'],
        waveH: 10, pitchPx: 10,
    },
    {
        name: 'F골',
        en: 'F-Flute (Micro)',
        height: '0.7~0.8mm',
        pitch: '2~3mm',
        color: 'bg-rose-500',
        textColor: 'text-rose-600',
        borderColor: 'border-rose-200',
        bgColor: 'bg-rose-50',
        strength: 2,
        cushion: 1,
        print: 5,
        desc: '마이크로 플루트라고도 하며 골판지 중 가장 얇습니다. 표면이 매끄러워 정밀 인쇄·후가공이 가능해 고급 패키지에 사용됩니다.',
        uses: ['고급 화장품', '소형 전자기기', '프리미엄 식품', '명품 패키지'],
        waveH: 7, pitchPx: 7,
    },
];

const STRUCTURES = [
    {
        name: '편면 골판지',
        en: 'Single Face',
        img: null,
        svgLayers: ['liner', 'flute'],
        desc: '한쪽 면에만 라이너가 붙어있는 구조. 롤 상태로 공급되며 제품 보호용 완충재·내부 포장재로 사용됩니다.',
        badge: 'bg-sky-500',
        title: 'text-sky-700',
        card: 'bg-sky-50 border-sky-200',
        uses: ['완충재', '내부 포장', '롤 포장재'],
    },
    {
        name: '양면 골판지',
        en: 'Single Wall',
        img: null,
        svgLayers: ['liner', 'flute', 'liner'],
        desc: '양쪽 모두 라이너가 붙은 가장 일반적인 골판지. 택배박스·유통박스의 90% 이상을 차지하는 표준 구조입니다.',
        badge: 'bg-violet-500',
        title: 'text-violet-700',
        card: 'bg-violet-50 border-violet-200',
        uses: ['택배박스', '유통박스', '일반 포장'],
    },
    {
        name: '이중 골판지',
        en: 'Double Wall',
        img: null,
        svgLayers: ['liner', 'flute', 'mid', 'flute', 'liner'],
        desc: '골심이 2겹으로 구성된 구조. 두께와 강도가 높아 중량물·수출 포장, 장기 보관용 박스에 사용됩니다.',
        badge: 'bg-orange-500',
        title: 'text-orange-700',
        card: 'bg-orange-50 border-orange-200',
        uses: ['중량물', '수출 포장', '장기 보관'],
    },
    {
        name: '삼중 골판지',
        en: 'Triple Wall',
        img: null,
        svgLayers: ['liner', 'flute', 'mid', 'flute', 'mid', 'flute', 'liner'],
        desc: '골심이 3겹인 초강도 골판지. 대형 기계류·중공업 부품 등 초중량물 포장과 목재 대체 산업재로 활용됩니다.',
        badge: 'bg-rose-500',
        title: 'text-rose-700',
        card: 'bg-rose-50 border-rose-200',
        uses: ['초중량물', '산업재', '대형 기계'],
    },
];

/* 골 종류별 3D 투시 일러스트 */
function FluteIllustration({ waveH, pitchPx }) {
    const VW = 220, VH = 128;
    const faceW = 148, startX = 8, endX = startX + faceW;
    const PDX = 50, PDY = 30;
    const linerH = 4;
    const totalH = linerH + waveH + linerH;
    const bottomY = 116;
    const topY = bottomY - totalH;

    const fluteTopY = topY + linerH;
    const fluteBotY = bottomY - linerH;
    const midY = (fluteTopY + fluteBotY) / 2;
    // Q bezier control points: curve peak/valley hits liner exactly at t=0.5
    const cpUp   = 2 * fluteTopY - midY;
    const cpDown  = 2 * fluteBotY - midY;

    // Build sinusoidal wave path
    const half = pitchPx / 2;
    let path = `M${startX},${midY}`;
    let x = startX;
    let goUp = true;
    while (x < endX) {
        const nx = Math.min(x + half, endX);
        const cx = (x + nx) / 2;
        path += ` Q${cx.toFixed(1)},${goUp ? cpUp : cpDown} ${nx.toFixed(1)},${midY}`;
        x = nx;
        goUp = !goUp;
    }

    const uid = `fi${waveH}`;
    const strokeW = waveH >= 26 ? 2 : waveH >= 14 ? 1.7 : 1.3;

    return (
        <svg viewBox={`0 0 ${VW} ${VH}`} className="w-full h-full">
            <defs>
                <linearGradient id={`${uid}g`} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#e2ca8e" />
                    <stop offset="100%" stopColor="#c9a862" />
                </linearGradient>
                <clipPath id={`${uid}c`}>
                    <rect x={startX} y={topY} width={faceW} height={totalH} />
                </clipPath>
            </defs>

            {/* Right side face */}
            <polygon
                points={`${endX},${topY} ${endX+PDX},${topY-PDY} ${endX+PDX},${bottomY-PDY} ${endX},${bottomY}`}
                fill="#a07c3a" stroke="#5a3610" strokeWidth="0.4"
            />
            {/* Top face */}
            <polygon
                points={`${startX},${topY} ${endX},${topY} ${endX+PDX},${topY-PDY} ${startX+PDX},${topY-PDY}`}
                fill={`url(#${uid}g)`} stroke="#5a3610" strokeWidth="0.4"
            />
            {/* Front face background */}
            <rect x={startX} y={topY} width={faceW} height={totalH} fill="#d4ad6a" />
            {/* Flute wave */}
            <path
                d={path}
                fill="none"
                stroke="#8a6228"
                strokeWidth={strokeW}
                clipPath={`url(#${uid}c)`}
            />
            {/* Top liner */}
            <rect x={startX} y={topY} width={faceW} height={linerH} fill="#8a6228" />
            {/* Bottom liner */}
            <rect x={startX} y={fluteBotY} width={faceW} height={linerH} fill="#8a6228" />
            {/* Front face outline */}
            <rect x={startX} y={topY} width={faceW} height={totalH} fill="none" stroke="#5a3610" strokeWidth="0.5" />
            {/* Left back edge */}
            <line x1={startX} y1={topY} x2={startX+PDX} y2={topY-PDY} stroke="#5a3610" strokeWidth="0.4" />
            {/* Back top edge */}
            <line x1={startX+PDX} y1={topY-PDY} x2={endX+PDX} y2={topY-PDY} stroke="#5a3610" strokeWidth="0.4" />
            {/* Right back edge */}
            <line x1={endX+PDX} y1={topY-PDY} x2={endX+PDX} y2={bottomY-PDY} stroke="#5a3610" strokeWidth="0.4" />
            {/* Bottom back-right edge */}
            <line x1={endX+PDX} y1={bottomY-PDY} x2={endX} y2={bottomY} stroke="#5a3610" strokeWidth="0.4" />
        </svg>
    );
}

function StarBar({ count, max = 5 }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: max }).map((_, i) => (
                <div key={i} className={`h-1.5 w-4 rounded-full ${i < count ? 'bg-sky-500' : 'bg-gray-200'}`} />
            ))}
        </div>
    );
}

/* 구조 SVG 다이어그램 — 고정 컨테이너 높이에 맞게 스케일 */
function SvgDiagram({ layers }) {
    const lineH = 10;
    const fluteH = 22;
    let y = 6;
    const paths = layers.map((type, i) => {
        const result = { type, y, key: i };
        y += type === 'flute' ? fluteH : lineH;
        return result;
    });
    const totalH = y + 6;

    return (
        <svg
            viewBox={`0 0 200 ${totalH}`}
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
        >
            {paths.map(({ type, y: py, key }) => {
                if (type === 'flute') {
                    const mid = py + fluteH / 2;
                    return (
                        <path key={key}
                            d={`M0,${mid} Q10,${py} 20,${mid} Q30,${py+fluteH} 40,${mid} Q50,${py} 60,${mid} Q70,${py+fluteH} 80,${mid} Q90,${py} 100,${mid} Q110,${py+fluteH} 120,${mid} Q130,${py} 140,${mid} Q150,${py+fluteH} 160,${mid} Q170,${py} 180,${mid} Q190,${py+fluteH} 200,${mid}`}
                            fill="none" stroke="#94a3b8" strokeWidth="2"
                        />
                    );
                }
                const fill = type === 'liner' ? '#cbd5e1' : '#e2e8f0';
                return <rect key={key} x={0} y={py} width={200} height={lineH} rx={2} fill={fill} />;
            })}
        </svg>
    );
}

export default function CorrugatedGuide() {
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

                {/* ── 골(플루트) 종류 ── */}
                <div>
                    <div className="text-center mb-10 reveal">
                        <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">Flute Type</p>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-nanumEB break-keep">
                            골(플루트) 종류
                        </h2>
                        <p className="mt-3 text-gray-500 text-sm max-w-lg mx-auto break-keep">
                            골의 높이와 간격에 따라 완충성·강도·인쇄 적성이 달라집니다.
                        </p>
                    </div>

                    {/* 골 종류별 상세 카드 */}
                    <div className="space-y-4">
                        {FLUTES.map((f, i) => (
                            <div
                                key={f.name}
                                style={{ animationDelay: `${i * 60}ms` }}
                                className={`reveal border rounded-2xl p-5 md:p-6 ${f.borderColor} ${f.bgColor} hover:shadow-md transition-all duration-300`}
                            >
                                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                                    {/* 3D 일러스트 (모바일: 상단, 데스크톱: 우측) */}
                                    <div className="md:order-last md:w-52 shrink-0 h-28 md:h-auto rounded-xl overflow-hidden">
                                        <FluteIllustration waveH={f.waveH} pitchPx={f.pitchPx} />
                                    </div>
                                    {/* 골 이름 */}
                                    <div className="flex items-center gap-3 md:w-36 shrink-0">
                                        <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center shrink-0`}>
                                            <span className="text-white font-black text-lg">{f.name[0]}</span>
                                        </div>
                                        <div>
                                            <p className={`font-black text-base ${f.textColor}`}>{f.name}</p>
                                            <p className="text-[10px] text-gray-400">{f.en}</p>
                                        </div>
                                    </div>

                                    {/* 스펙 */}
                                    <div className="grid grid-cols-3 gap-3 text-xs md:w-64 shrink-0">
                                        <div>
                                            <p className="text-gray-400 mb-0.5">골 높이</p>
                                            <p className="font-bold text-gray-700">{f.height}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-400 mb-0.5">골 간격</p>
                                            <p className="font-bold text-gray-700">{f.pitch}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-400 mb-1">두께</p>
                                            <div className={`h-2 rounded-full ${f.color}`}
                                                style={{ width: ['100%','80%','70%','50%','33%'][i] }}
                                            />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 mb-1">압축강도</p>
                                            <StarBar count={f.strength} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 mb-1">완충성</p>
                                            <StarBar count={f.cushion} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 mb-1">인쇄 적성</p>
                                            <StarBar count={f.print} />
                                        </div>
                                    </div>

                                    {/* 설명 + 용도 */}
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-600 leading-relaxed break-keep mb-3">{f.desc}</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {f.uses.map((u) => (
                                                <span key={u} className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${f.borderColor} ${f.textColor}`}>{u}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── 구조별 종류 ── */}
                <div>
                    <div className="text-center mb-10 reveal">
                        <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">Structure Type</p>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-nanumEB break-keep">
                            구조별 종류
                        </h2>
                        <p className="mt-3 text-gray-500 text-sm max-w-lg mx-auto break-keep">
                            라이너와 골심의 겹수에 따라 강도와 용도가 달라집니다.
                        </p>
                    </div>

                    {/* 단면 실사 사진 */}
                    <div className="reveal mb-8 rounded-2xl overflow-hidden border border-gray-200 bg-white">
                        <div className="relative h-40 md:h-52">
                            <Image
                                src={crossSection}
                                alt="골판지 이중구조 단면 실사 사진"
                                fill
                                className="object-cover object-center"
                                sizes="100vw"
                                placeholder="blur"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center px-8">
                                <div className="text-white">
                                    <p className="text-xs font-bold opacity-70 mb-1 uppercase tracking-widest">Cross Section</p>
                                    <p className="text-xl md:text-2xl font-black break-keep">골판지 단면 구조</p>
                                    <p className="text-sm opacity-80 mt-1 break-keep">라이너(겉면지)와 골심(중간 파형층)이 겹쳐 강도를 만듭니다</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {STRUCTURES.map((s, i) => (
                            <div
                                key={s.name}
                                style={{ animationDelay: `${i * 60}ms` }}
                                className={`reveal border rounded-2xl overflow-hidden flex flex-col ${s.card} hover:shadow-md transition-all duration-300`}
                            >
                                {/* 구조 다이어그램 영역 */}
                                <div className="bg-white px-4 pt-4 pb-3 border-b border-gray-100">
                                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-2">단면 구조도</p>
                                    <div className="h-20 flex items-center justify-center">
                                        <SvgDiagram layers={s.svgLayers} />
                                    </div>
                                </div>

                                {/* 설명 */}
                                <div className="p-4 flex flex-col gap-3 flex-1">
                                    <div>
                                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full text-white ${s.badge}`}>{s.en}</span>
                                        <h3 className={`font-black text-base mt-1.5 ${s.title}`}>{s.name}</h3>
                                    </div>
                                    <p className="text-xs text-gray-600 leading-relaxed break-keep flex-1">{s.desc}</p>
                                    <div className="flex flex-wrap gap-1">
                                        {s.uses.map((u) => (
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

                {/* ── 선택 가이드 요약표 ── */}
                <div className="reveal">
                    <div className="text-center mb-8">
                        <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">Quick Reference</p>
                        <h2 className="text-2xl md:text-3xl font-black text-gray-900 font-nanumEB">골 종류 선택 가이드</h2>
                    </div>
                    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-sky-500 text-white">
                                        <th className="px-4 py-3 text-left font-black text-xs">골 종류</th>
                                        <th className="px-4 py-3 text-center font-black text-xs">두께</th>
                                        <th className="px-4 py-3 text-center font-black text-xs">압축강도</th>
                                        <th className="px-4 py-3 text-center font-black text-xs">완충성</th>
                                        <th className="px-4 py-3 text-center font-black text-xs">인쇄 적성</th>
                                        <th className="px-4 py-3 text-left font-black text-xs">주요 용도</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    {[
                                        { name: 'A골', color: 'text-sky-600',    thick: '4.5~5mm',   str: 5, cush: 5, print: 2, use: '가전·유리·완충 포장' },
                                        { name: 'B골', color: 'text-violet-600', thick: '2.5~3mm',   str: 5, cush: 3, print: 4, use: '통조림·음료·택배박스' },
                                        { name: 'C골', color: 'text-emerald-600',thick: '3.5~4mm',   str: 4, cush: 4, print: 3, use: '식품·잡화·범용' },
                                        { name: 'E골', color: 'text-orange-600', thick: '1.2~1.5mm', str: 3, cush: 2, print: 5, use: '화장품·소형 인쇄박스' },
                                        { name: 'F골', color: 'text-rose-600',   thick: '0.7~0.8mm', str: 2, cush: 1, print: 5, use: '고급 패키지·명품 포장' },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                            <td className={`px-4 py-3 font-black ${row.color}`}>{row.name}</td>
                                            <td className="px-4 py-3 text-center text-gray-600 text-xs">{row.thick}</td>
                                            <td className="px-4 py-3">
                                                <div className="flex justify-center gap-0.5">
                                                    {[...Array(5)].map((_, j) => <div key={j} className={`w-3 h-1.5 rounded-full ${j < row.str ? 'bg-sky-400' : 'bg-gray-200'}`} />)}
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex justify-center gap-0.5">
                                                    {[...Array(5)].map((_, j) => <div key={j} className={`w-3 h-1.5 rounded-full ${j < row.cush ? 'bg-emerald-400' : 'bg-gray-200'}`} />)}
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex justify-center gap-0.5">
                                                    {[...Array(5)].map((_, j) => <div key={j} className={`w-3 h-1.5 rounded-full ${j < row.print ? 'bg-violet-400' : 'bg-gray-200'}`} />)}
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
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-3">어떤 골판지가 적합한지 모르겠다면?</p>
                    <h2 className="text-2xl md:text-3xl font-black font-nanumEB mb-2 break-keep">
                        전문가에게 바로 물어보세요
                    </h2>
                    <p className="text-sm opacity-80 mb-8 break-keep">
                        26년 경력의 전문가가 제품에 맞는 골 종류와 구조를 직접 추천해 드립니다.
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
