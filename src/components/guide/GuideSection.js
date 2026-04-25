'use client'

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import box1 from "/public/img/inquiry/box/1.png";
import box2 from "/public/img/inquiry/box/2.png";
import box3 from "/public/img/inquiry/box/3.png";
import box4 from "/public/img/inquiry/box/4.png";
import box5 from "/public/img/inquiry/box/5.png";
import box6 from "/public/img/inquiry/box/6.png";
import box7 from "/public/img/inquiry/box/7.png";
import box8 from "/public/img/inquiry/box/8.png";
import box9 from "/public/img/inquiry/box/9.png";
import box10 from "/public/img/inquiry/box/10.png";
import box11 from "/public/img/inquiry/box/11.png";
import box12 from "/public/img/inquiry/box/12.png";
import box13 from "/public/img/inquiry/box/13.png";
import box14 from "/public/img/inquiry/box/14.png";
import box15 from "/public/img/inquiry/box/15.png";
import box16 from "/public/img/inquiry/box/16.png";
import box17 from "/public/img/inquiry/box/17.png";
import box18 from "/public/img/inquiry/box/18.png";

const CATEGORIES = [
    { id: 'all', label: '전체' },
    { id: 'corrugated', label: '골판지박스' },
    { id: 'carton', label: '단상자' },
    { id: 'lid-base', label: '상하분리형' },
    { id: 'drawer', label: '서랍형·슬리브형' },
    { id: 'shopping', label: '쇼핑백·캐리어' },
    { id: 'cake', label: '케이크박스' },
];

const BOXES = [
    {
        id: 1,
        img: box1,
        name: 'RSC 골판지박스',
        en: 'Regular Slotted Container',
        desc: '가장 일반적인 골판지박스. 상·하 날개가 맞물려 내용물을 보호하는 표준 구조로 유통·물류 포장에 최적화됩니다.',
        tags: ['골판지', '물류', '유통'],
        category: 'corrugated',
    },
    {
        id: 12,
        img: box12,
        name: '트레이형 골판지박스',
        en: 'Corrugated Tray',
        desc: '높이가 낮고 납작한 골판지 트레이 구조. 식품·농산물·공산품 묶음 포장에 주로 사용됩니다.',
        tags: ['골판지', '트레이', '식품'],
        category: 'corrugated',
    },
    {
        id: 2,
        img: box2,
        name: '맞뚜껑형 단상자',
        en: 'Tuck End Box',
        desc: '상·하 뚜껑이 서로 맞물리는 기본형 단상자. 화장품·식품·의약품 등 가장 폭넓게 사용되는 구조입니다.',
        tags: ['단상자', '화장품', '식품'],
        category: 'carton',
    },
    {
        id: 3,
        img: box3,
        name: '창문형 단상자',
        en: 'Window Box',
        desc: '뚜껑에 투명 PET 창문이 삽입된 단상자. 내용물을 직접 확인할 수 있어 소비자 구매 욕구를 높입니다.',
        tags: ['단상자', '투명창', '디스플레이'],
        category: 'carton',
    },
    {
        id: 4,
        img: box4,
        name: '자동조립형 단상자',
        en: 'Auto Lock Bottom',
        desc: '바닥면이 자동으로 잠기는 원터치 구조. 조립이 빠르고 바닥 강도가 높아 소형 제품 포장에 적합합니다.',
        tags: ['단상자', '원터치', '자동조립'],
        category: 'carton',
    },
    {
        id: 18,
        img: box18,
        name: '베개형 박스',
        en: 'Pillow Box',
        desc: '양 끝이 곡선으로 말리는 감성적인 박스 형태. 소품·액세서리·선물 포장에 많이 활용됩니다.',
        tags: ['단상자', '선물', '소품'],
        category: 'carton',
    },
    {
        id: 8,
        img: box8,
        name: '상하분리형',
        en: 'Lid & Base',
        desc: '뚜껑과 바닥이 완전히 분리되는 고급형 박스. 선물·명품 패키지 등 고급 브랜드 포장에 주로 사용됩니다.',
        tags: ['상하분리', '선물', '고급'],
        category: 'lid-base',
    },
    {
        id: 9,
        img: box9,
        name: '상하분리형 (가로 창문)',
        en: 'Lid & Base with Window',
        desc: '가로형 뚜껑에 투명 창문이 결합된 상하분리형. 내용물을 보여주면서 고급스러운 패키지 효과를 냅니다.',
        tags: ['상하분리', '투명창', '가로형'],
        category: 'lid-base',
    },
    {
        id: 10,
        img: box10,
        name: '상하분리형 (정방 창문)',
        en: 'Lid & Base Square Window',
        desc: '정사각형 뚜껑에 투명 창문이 결합된 상하분리형. 선물세트·명품 패키지에 적합합니다.',
        tags: ['상하분리', '투명창', '정방형'],
        category: 'lid-base',
    },
    {
        id: 13,
        img: box13,
        name: '서랍형 (창문)',
        en: 'Drawer Box with Window',
        desc: '슬라이드 방식으로 열리며 창문이 달린 서랍형 박스. 수저·소품·액세서리 선물 포장에 적합합니다.',
        tags: ['서랍형', '슬라이드', '투명창'],
        category: 'drawer',
    },
    {
        id: 14,
        img: box14,
        name: '서랍형',
        en: 'Drawer Box',
        desc: '아웃박스와 인박스로 구성된 서랍형 박스. 고급스러운 개봉감으로 선물용 패키지에 자주 사용됩니다.',
        tags: ['서랍형', '슬라이드', '선물'],
        category: 'drawer',
    },
    {
        id: 11,
        img: box11,
        name: '통형 단상자 (엔드오픈형)',
        en: 'Tube Box (End Open)',
        desc: '양쪽 끝이 모두 열리는 통형(관형) 구조. 롤·캔들·긴 형태의 제품 포장에 적합하며, 슬리브로도 활용됩니다.',
        tags: ['통형', '양면개구', '슬리브'],
        category: 'drawer',
    },
    {
        id: 5,
        img: box5,
        name: '쇼핑백 (로프 손잡이)',
        en: 'Shopping Bag — Rope Handle',
        desc: '로프 손잡이가 달린 박스형 쇼핑백. 브랜드 로고 인쇄와 후가공으로 브랜드 이미지를 높이는 데 효과적입니다.',
        tags: ['쇼핑백', '로프손잡이', '브랜드'],
        category: 'shopping',
    },
    {
        id: 6,
        img: box6,
        name: '쇼핑백 (끈 손잡이)',
        en: 'Shopping Bag — String Handle',
        desc: '봉투 형태에 끈 손잡이가 달린 쇼핑백. 소매점 브랜드백·선물 증정용으로 가장 많이 사용되는 형태입니다.',
        tags: ['쇼핑백', '끈손잡이', '선물'],
        category: 'shopping',
    },
    {
        id: 7,
        img: box7,
        name: '캐리어박스',
        en: 'Carrier Box',
        desc: '상단에 손잡이 구멍이 일체화된 캐리어 박스. 별도 손잡이 없이 박스만으로 간편하게 이동할 수 있습니다.',
        tags: ['캐리어', '손잡이', '일체형'],
        category: 'shopping',
    },
    {
        id: 15,
        img: box15,
        name: '캐리어 일체형',
        en: 'Integrated Carrier Box',
        desc: '접이식 손잡이가 박스 본체에 결합된 형태. 케이크·도시락·음식 배달 포장에 최적화된 구조입니다.',
        tags: ['캐리어', '음식포장', '케이크'],
        category: 'shopping',
    },
    {
        id: 16,
        img: box16,
        name: '케이크박스 (분리형)',
        en: 'Cake Box — Lid & Base',
        desc: '레이스 장식 측면과 손잡이가 결합된 분리형 케이크 박스. 케이크·꽃다발·제과 선물 포장에 사용됩니다.',
        tags: ['케이크박스', '레이스', '분리형'],
        category: 'cake',
    },
    {
        id: 17,
        img: box17,
        name: '케이크박스 (일체형)',
        en: 'Cake Box — Integrated',
        desc: '레이스 장식이 있는 일체형 케이크 박스. 간편하게 조립할 수 있어 베이커리·카페에서 많이 활용됩니다.',
        tags: ['케이크박스', '레이스', '일체형'],
        category: 'cake',
    },
];

export default function GuideSection() {
    const [activeCategory, setActiveCategory] = useState('all');
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

    const filtered = activeCategory === 'all'
        ? BOXES
        : BOXES.filter((b) => b.category === activeCategory);

    return (
        <section ref={sectionRef} className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-6">

                {/* 섹션 헤더 */}
                <div className="text-center mb-10 reveal">
                    <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">Box Type Guide</p>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-nanumEB break-keep">
                        박스 제작 가이드
                    </h2>
                    <p className="mt-3 text-gray-500 text-sm max-w-lg mx-auto break-keep">
                        제품 특성과 용도에 맞는 박스 구조를 선택하면 포장 품질과 브랜드 가치를 동시에 높일 수 있습니다.
                    </p>
                </div>

                {/* 카테고리 탭 */}
                <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                                activeCategory === cat.id
                                    ? 'bg-sky-500 text-white shadow-md shadow-sky-200'
                                    : 'bg-white text-gray-500 border border-gray-200 hover:border-sky-300 hover:text-sky-600'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* 박스 그리드 */}
                <div key={activeCategory} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                    {filtered.map((box, i) => (
                        <div
                            key={box.id}
                            style={{ animationDelay: `${i * 40}ms` }}
                            className="animate-fadeInUp bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                        >
                            {/* 이미지 */}
                            <div className="bg-gray-50 p-6 flex items-center justify-center h-44">
                                <Image
                                    src={box.img}
                                    alt={`한양인팩 ${box.name} 박스 구조 일러스트`}
                                    className="object-contain w-full h-full"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                            </div>

                            {/* 텍스트 */}
                            <div className="p-4 flex flex-col gap-2 flex-1">
                                <div>
                                    <h3 className="text-sm font-black text-gray-800">{box.name}</h3>
                                    <p className="text-[10px] text-gray-400 mt-0.5">{box.en}</p>
                                </div>
                                <p className="text-xs text-gray-500 leading-relaxed break-keep flex-1">
                                    {box.desc}
                                </p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {box.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] font-bold bg-sky-50 text-sky-500 px-2 py-0.5 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-14 reveal bg-gradient-to-br from-sky-400 to-blue-500 rounded-3xl p-8 md:p-10 text-center text-white">
                    <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-3">원하는 박스가 없으신가요?</p>
                    <h2 className="text-2xl md:text-3xl font-black font-nanumEB mb-2 break-keep">
                        어떤 형태든 맞춤 제작 가능합니다
                    </h2>
                    <p className="text-sm opacity-80 mb-8 break-keep">
                        가이드에 없는 특수 구조·사이즈도 도안·이미지만 보내주시면 제작 가능 여부를 바로 안내드립니다.
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
