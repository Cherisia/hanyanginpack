'use client'

import { useEffect, useRef } from "react";

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
        <section ref={sectionRef} className="bg-white py-20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="reveal mb-10">
                    <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">FAQ</p>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-nanumEB break-keep leading-tight">
                        자주 묻는{' '}
                        <span className="text-sky-500">질문</span>
                    </h2>
                    <div className="w-10 h-1 bg-sky-500 rounded-full mt-5" />
                </div>
                <div className="space-y-5 text-gray-600 text-[15px] leading-[1.9] break-keep reveal reveal-d1">
                    <p>
                        포장박스·패키지 제작과 관련하여 고객분들이 자주 하시는 질문을 정리했습니다.
                    </p>
                    <p>
                        아래에서 원하시는 답변을 찾지 못하셨다면{' '}
                        <strong className="text-gray-900">전화(031-997-9021)</strong> 또는{' '}
                        <strong className="text-gray-900">온라인 문의</strong>를 통해 언제든지 상담해 주세요.
                    </p>
                </div>
            </div>
        </section>
    );
}
