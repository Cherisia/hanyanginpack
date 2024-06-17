'use client'

import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

export default function Navbar() {
    let [isOpen, setIsOpen] = useState(false);
    const menu = [
        {name: 'Components', url: '/'},
        {name: 'Blocks', url: '/'},
        {name: 'Cheatsheet', url: '/'},
        {name: 'Discover', url: '/'}
    ];
    return (
        <header className="fixed top-0 left-0 right-0 border-b border-gray-100 bg-white/90 z-30">
            <div className="container px-4 py-6 space-y-4 mx-auto">
                <div className="flex justify-between">
                    <Link href="#">
                        <Image src="/svg/navbar-logo.svg" width={110} height={30}/>
                    </Link>
                    <div className="hidden xl:flex xl:justify-between xl:items-center xl:space-x-8">
                        {
                            menu.map((item, index) => {
                                return (
                                    <Link
                                        className="text-base text-gray-500 focus:text-sky-500 focus:font-bold active:bg-sky-100"
                                        href={item.url}>{item.name}</Link>
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
                                                href={item.url}>{item.name}</Link>
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