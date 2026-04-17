'use client'

import Link from "next/link";
import { useState } from "react";
import Logo from "/public/logo/logo.svg";
import { usePathname } from "next/navigation";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const menu = [
    { name: '회사소개', url: '/about' },
    { name: '오시는길', url: '/contact' },
    { name: '자주 묻는 질문', url: '/faq' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const dropRef = useOutsideClick(() => setIsOpen(false));

    return (
        <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <Logo width={110} height={36} fill="black" />
                </Link>

                <nav className="hidden lg:flex items-center gap-8">
                    {menu.map((item) => (
                        <Link
                            key={item.url}
                            href={item.url}
                            className={
                                "text-sm font-bold transition-colors duration-200 " +
                                (pathname === item.url
                                    ? "text-sky-600"
                                    : "text-gray-500 hover:text-gray-900")
                            }
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/inquiry"
                        className="bg-sky-500 hover:bg-sky-400 text-white text-sm font-black px-5 py-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    >
                        견적 문의
                    </Link>
                </nav>

                <button
                    ref={dropRef}
                    className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="메뉴 열기"
                >
                    {isOpen ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {isOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1">
                    {menu.map((item) => (
                        <Link
                            key={item.url}
                            href={item.url}
                            onClick={() => setIsOpen(false)}
                            className="block py-2.5 text-sm font-bold text-gray-600 hover:text-sky-600 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/inquiry"
                        onClick={() => setIsOpen(false)}
                        className="block mt-3 bg-sky-500 text-white text-sm font-black px-5 py-3 rounded-xl text-center"
                    >
                        견적 문의하기 →
                    </Link>
                </div>
            )}
        </header>
    );
}
