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

                {/* 헤더 */}
                <div className="reveal mb-10">
                    <p className="text-xs font-bold text-sky-500 uppercase tracking-[0.2em] mb-3">About Us</p>
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-nanumEB break-keep leading-tight">
                        패키지 제작 전문,{' '}
                        <span className="text-sky-500">한양인팩</span>입니다
                    </h2>
                    <div className="w-10 h-1 bg-sky-500 rounded-full mt-5" />
                </div>

                {/* 본문 */}
                <div className="space-y-5 text-gray-600 text-[15px] leading-[1.9] break-keep reveal reveal-d1">
                    <p>
                        <strong className="text-gray-900">한양인팩</strong>은 유기적으로 협업하며 혁신을 이어나가는{' '}
                        <strong className="text-gray-900">열정있는 패키지 제작 회사</strong>입니다.
                    </p>
                    <p>
                        1999년 회사 설립 이후 다양한 패키지 제작과 개발에 전력을 다하고 있습니다.
                    </p>
                    <p>
                        패키지 설계부터 디자인, 그리고 제작까지 한번에 진행하는{' '}
                        <strong className="text-gray-900">원스톱 솔루션</strong>으로
                        고객의 요구에 신속하고 정확하게 대응하고 있습니다.
                    </p>
                    <p>
                        합리적인 가격과 최고의 품질로{' '}
                        <strong className="text-gray-900">최상의 고객만족</strong>을 위해 끊임없이 노력하겠습니다.
                    </p>
                </div>


            </div>
        </section>
    );
}
