'use client'

import Image from "next/image";
import { useEffect, useRef } from "react";
import facilities_1 from "/public/img/main/facilities/facilities_1.jpg";
import facilities_2 from "/public/img/main/facilities/facilities_2.jpg";
import facilities_3 from "/public/img/main/facilities/facilities_3.jpg";
import facilities_4 from "/public/img/main/facilities/facilities_4.jpg";
import facilities_5 from "/public/img/main/facilities/facilities_5.jpg";
import facilities_6 from "/public/img/main/facilities/facilities_6.jpg";

const FACILITIES = [
    { src: facilities_3, label: '제판 설비', alt: '한양인팩 제판 설비' },
    { src: facilities_1, label: '인쇄 설비', alt: '한양인팩 인쇄 설비' },
    { src: facilities_6, label: '인쇄 설비', alt: '한양인팩 인쇄 설비' },
    { src: facilities_2, label: '코팅 설비', alt: '한양인팩 코팅 설비' },
    { src: facilities_4, label: '제단 설비', alt: '한양인팩 제단 설비' },
    { src: facilities_5, label: '성형 설비', alt: '한양인팩 박스 성형 설비' },
];

export default function Facilities() {
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
        <section ref={sectionRef} className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-6">

                {/* 헤더 */}
                <div className="text-center mb-14 reveal">
                    <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">Facilities</p>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-nanumEB">제작설비</h2>
                    <p className="mt-3 text-gray-500 text-sm break-keep">
                        한양인팩은 높은 품질의 제품을 생산하기 위해 공정별 품질 관리에 최선을 다하고 있습니다.
                    </p>
                </div>

                {/* 이미지 그리드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {FACILITIES.map((item, i) => (
                        <div
                            key={i}
                            className={`reveal reveal-d${(i % 3) + 1} group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100`}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                placeholder="blur"
                                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                className="object-cover transition-all duration-500 group-hover:scale-105 [filter:grayscale(0.6)] group-hover:[filter:grayscale(0.2)]"
                            />
                            {/* 하단 그라데이션 오버레이 */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                            {/* 라벨 */}
                            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                                <span className="text-white text-sm font-black tracking-wide">
                                    {item.label}
                                </span>
                                <span className="text-white/60 text-xs font-medium">
                                    0{i + 1}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
