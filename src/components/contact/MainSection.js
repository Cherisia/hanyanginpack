'use client'

import { useEffect, useRef } from "react";
import Link from "next/link";

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
                    <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">Contact Us</p>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-nanumEB break-keep leading-tight">
                        언제든지{' '}
                        <span className="text-sky-500">연락주세요</span>
                    </h2>
                    <div className="w-10 h-1 bg-sky-500 rounded-full mt-5" />
                </div>

                <div className="space-y-5 text-gray-600 text-[15px] leading-[1.9] break-keep reveal reveal-d1">
                    <p>
                        <strong className="text-gray-900">한양인팩</strong>은 고객 여러분의 문의를 언제나 환영합니다.
                    </p>
                    <p>
                        전화·이메일·온라인 문의 모두 가능하며,{' '}
                        <strong className="text-gray-900">당일 견적 안내</strong>를 원칙으로 신속하게 응대해 드립니다.
                    </p>
                    <p>
                        방문 상담을 원하시면 사전에 전화로 예약해 주시면 보다 원활한 상담이 가능합니다.
                    </p>
                </div>

                <div className="mt-8 reveal reveal-d2">
                    <Link
                        href="/inquiry"
                        className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/30"
                    >
                        온라인 견적 문의하기
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
