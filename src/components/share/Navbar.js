'use client'

import Link from "next/link";
import {useEffect, useState} from "react";
import Logo from "/public/logo/logo.svg";
import {usePathname} from "next/navigation";
import {useOutsideClick} from "@/hooks/useOutsideClick";

export default function Navbar() {
    const menu = [
        {name: '회사소개', url: '/about'},
        {name: '오시는길', url: '/contact'},
        {name: '자주 묻는 질문', url: '/faq'},
        {name: '견적문의', url: '/inquiry'}
    ];
    const [isOpen, setIsOpen] = useState(false);

    const [top, setTop] = useState(0);
    useEffect(() => {
        const onScroll = () => setTop(window.scrollY);
        setTop(window.scrollY);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isMain = usePathname() === '/';

    const dropRef = useOutsideClick(() => {setIsOpen(false)});

    const isTransparent = top === 0 && !isOpen && isMain;

    return (
        <header className={"fixed top-0 left-0 right-0 transition-colors duration-[400ms] border-gray-100 z-30 " + (!isTransparent ? "bg-slate-50" : "")}>
            <div className={"container transition-all duration-[400ms] px-4 space-y-4 mx-auto " + (top === 0 ? "py-4" : "py-2")}>
                <div className="flex justify-between">
                    <Link href="/">
                        <Logo width={100} height={40} fill={!isTransparent ? "black" : "rgb(248 250 252)"}/>
                    </Link>
                    <div className="hidden xl:flex xl:justify-between xl:items-center xl:space-x-8">
                        {menu.map((item, index) => (
                            <Link
                                className={"text-base font-bold transition-colors duration-200 " + (isTransparent ? "text-slate-200 hover:text-white" : "text-gray-500 hover:text-sky-500")}
                                href={item.url} key={index}>{item.name}
                            </Link>
                        ))}
                    </div>
                    <button className="p-1 rounded xl:hidden"
                            ref={dropRef}
                            onClick={() => setIsOpen(!isOpen)}>
                        <svg viewBox="0 0 20 20" fill="currentColor" className={"w-6 h-6 " + (isTransparent ? "text-slate-100" : "text-gray-500")}>
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"/>
                        </svg>
                    </button>
                </div>
                {isOpen && (
                    <div className="space-y-4 xl:hidden">
                        <div className="flex flex-col space-y-4">
                            {menu.map((item, index) => (
                                <Link
                                    className="text-gray-500 hover:text-sky-500 transition-colors duration-200 font-medium"
                                    href={item.url}
                                    key={index}
                                    onClick={() => setIsOpen(false)}>
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}
