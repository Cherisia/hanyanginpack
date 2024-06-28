'use client'

import Link from "next/link";
import {useEffect, useState} from "react";
import Logo from "/public/svg/logo.svg";

export default function Navbar() {
    let [isOpen, setIsOpen] = useState(false);
    const menu = [
        {name: '소개', url: '/about'},
        {name: '포트폴리오', url: '/portfolio'},
        {name: '자주 묻는 질문', url: '/qna'},
        {name: '견적문의', url: '/inquiry'}
    ];
    const [top, setTop] = useState(0);
    function onScroll() {
        setTop(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <header className={"fixed top-0 left-0 right-0 transition-colors duration-[400ms] border-gray-100 z-30 " + (top === 0 ? "" : "bg-slate-50")}>
            <div className="container px-4 py-4 space-y-4 mx-auto">
                <div className="flex justify-between">
                    <Link href="/">
                        <Logo fill={top === 0 ? "rgb(248 250 252)" : "black"}/>
                    </Link>
                    <div className="hidden xl:flex xl:justify-between xl:items-center xl:space-x-8">
                        {
                            menu.map((item, index) => {
                                return (
                                    <Link
                                        className={"text-base font-bold " + (top === 0 ? "text-slate-200 focus:text-sky-500 focus:font-bold active:bg-sky-100" : "text-gray-500 focus:text-sky-500 focus:font-bold active:bg-sky-100")}
                                        href={item.url} key={index}>{item.name}</Link>
                                )
                            })
                        }
                    </div>
                    <button className="p-1 rounded bg-white focus:bg-gray-100 active:bg-sky-100 xl:hidden"
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}>
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gray-700">
                            <path fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                {
                    isOpen && (
                        <div className="space-y-4 xl:hidden">
                            <div className="flex flex-col space-y-4">
                                {
                                    menu.map((item, index) => {
                                        return (
                                            <Link
                                                className="text-gray-500 focus:text-sky-500 focus:font-bold active:bg-sky-100"
                                                href={item.url} key={index}>{item.name}</Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </header>
    )
}