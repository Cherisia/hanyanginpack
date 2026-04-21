'use client'

import Image from "next/image";
import { useEffect, useRef } from "react";
import client1 from "/public/img/main/client/삼성.jpg";
import client2 from "/public/img/main/client/대상.png";
import client3 from "/public/img/main/client/유닉스전자.jpg";
import client4 from "/public/img/main/client/효성인터내셔널.jpg";
import client5 from "/public/img/main/client/에이스전자.png";
import client6 from "/public/img/main/client/맥스타산업.png";
import client7 from "/public/img/main/client/에이치엠텍.webp";
import client8 from "/public/img/main/client/매크로통상.jpg";

const clients = [
    { name: '삼성', img: client1 },
    { name: '대상', img: client2 },
    { name: '유닉스전자', img: client3 },
    { name: '효성인터내셔널', img: client4 },
    { name: '에이스전자', img: client5 },
    { name: '맥스타산업', img: client6 },
    { name: '에이치엠텍', img: client7 },
    { name: '매크로통상', img: client8 },
];

export default function Client() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
            }),
            { threshold: 0.15 }
        );
        section.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="bg-white py-16 border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-6 mb-10 text-center reveal">
                <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-2">Our Clients</p>
                <h2 className="text-2xl font-black text-gray-900 font-nanumEB">
                    한양인팩과 함께해 주신 <span className="text-sky-600">고객사</span>
                </h2>
            </div>
            <div className="overflow-hidden reveal reveal-d2">
                <div className="ticker-track">
                    {[...clients, ...clients].map((c, i) => (
                        <div
                            key={i}
                            className="relative w-36 h-16 mx-6 shrink-0 flex items-center justify-center"
                        >
                            <Image
                                src={c.img}
                                alt={`${c.name} 고객사`}
                                fill
                                className="object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                                sizes="144px"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
