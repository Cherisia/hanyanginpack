'use client'

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "/public/logo/logo.svg";
import { useOutsideClick } from "@/hooks/useOutsideClick";

const GUIDE_MENU = [
    { name: '박스 형태', url: '/guide' },
    { name: '골판지 종류', url: '/guide/corrugated' },
    { name: '종이 종류', url: '/guide/paper' },
];

const menu = [
    { name: '오시는길', url: '/contact' },
    { name: '자주 묻는 질문', url: '/faq' },
    { name: '견적 문의', url: '/inquiry' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [guideOpen, setGuideOpen] = useState(false);
    const [mobileGuideOpen, setMobileGuideOpen] = useState(false);
    const dropRef = useOutsideClick(() => setIsOpen(false));
    const guideRef = useOutsideClick(() => setGuideOpen(false));
    const pathname = usePathname();

    const isGuideActive = pathname?.startsWith('/guide');

    return (
        <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <Logo width={110} height={36} fill="black" />
                </Link>

                {/* 데스크톱 메뉴 */}
                <nav className="hidden lg:flex items-center gap-8">
                    {/* 회사소개 */}
                    <Link
                        href="/about"
                        className={`text-sm font-bold transition-colors ${pathname === '/about' ? 'text-sky-500' : 'text-gray-500 hover:text-gray-800'}`}
                    >
                        회사소개
                    </Link>

                    {/* 제작가이드 드롭다운 */}
                    <div ref={guideRef} className="relative">
                        <button
                            onClick={() => setGuideOpen(!guideOpen)}
                            className={`flex items-center gap-1 text-sm font-bold transition-colors ${isGuideActive ? 'text-sky-500' : 'text-gray-500 hover:text-gray-800'}`}
                        >
                            제작가이드
                            <svg
                                className={`w-3.5 h-3.5 transition-transform duration-200 ${guideOpen ? 'rotate-180' : ''}`}
                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {guideOpen && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-36 bg-white border border-gray-100 rounded-2xl shadow-lg py-2 z-50">
                                {GUIDE_MENU.map((g) => (
                                    <Link
                                        key={g.url}
                                        href={g.url}
                                        onClick={() => setGuideOpen(false)}
                                        className={`block px-4 py-2.5 text-sm font-bold transition-colors hover:bg-sky-50 hover:text-sky-600 ${pathname === g.url ? 'text-sky-500 bg-sky-50' : 'text-gray-600'}`}
                                    >
                                        {g.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* 나머지 메뉴 */}
                    {menu.map((item) => (
                        <Link
                            key={item.url}
                            href={item.url}
                            className={`text-sm font-bold transition-colors ${pathname === item.url ? 'text-sky-500' : 'text-gray-500 hover:text-gray-800'}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* 모바일 햄버거 */}
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

            {/* 모바일 메뉴 */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-1">
                    <Link
                        href="/about"
                        onClick={() => setIsOpen(false)}
                        className={`block py-2.5 text-sm font-bold ${pathname === '/about' ? 'text-sky-500' : 'text-gray-600'}`}
                    >
                        회사소개
                    </Link>

                    {/* 제작가이드 아코디언 */}
                    <button
                        className="w-full flex items-center justify-between py-2.5 text-sm font-bold text-gray-600"
                        onClick={() => setMobileGuideOpen(!mobileGuideOpen)}
                    >
                        <span className={isGuideActive ? 'text-sky-500' : ''}>제작가이드</span>
                        <svg
                            className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${mobileGuideOpen ? 'rotate-180' : ''}`}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {mobileGuideOpen && (
                        <div className="pl-3 pb-1 space-y-0.5">
                            {GUIDE_MENU.map((g) => (
                                <Link
                                    key={g.url}
                                    href={g.url}
                                    onClick={() => setIsOpen(false)}
                                    className={`block py-2 text-sm font-bold transition-colors ${pathname === g.url ? 'text-sky-500' : 'text-gray-500'}`}
                                >
                                    {g.name}
                                </Link>
                            ))}
                        </div>
                    )}

                    {menu.map((item) => (
                        <Link
                            key={item.url}
                            href={item.url}
                            onClick={() => setIsOpen(false)}
                            className={`block py-2.5 text-sm font-bold ${pathname === item.url ? 'text-sky-500' : 'text-gray-600'}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
