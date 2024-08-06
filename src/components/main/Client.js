'use client'

import Image from "next/image";
import React, {useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import client1 from "/public/img/main/client/삼성.jpg"
import client2 from "/public/img/main/client/대상.png"
import client3 from "/public/img/main/client/유닉스전자.jpg"
import client4 from "/public/img/main/client/효성인터내셔널.jpg"
import client5 from "/public/img/main/client/다인인터내셔널.jpeg"
import client6 from "/public/img/main/client/에이스전자.png"
import client7 from "/public/img/main/client/맥스타산업.png"
import client8 from "/public/img/main/client/에이치엠텍.webp"
import client9 from "/public/img/main/client/매크로통상.jpg"

export default function Client() {
    const title = ['한양인팩', '과 함께 해주신 회사'];
    const subTitle = 'Clients'
    const clients = [
        {name: '삼성', img: client1},
        {name: '대상', img: client2},
        {name: '유닉스전자', img: client3},
        {name: '효성인터내셔널', img: client4},
        {name: '다인인터내셔널', img: client5},
        {name: '에이스전자', img: client6},
        {name: '맥스타산업', img: client7},
        {name: '에이치엠텍', img: client8},
        {name: '매크로통상', img: client9},
    ];
    const settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        draggable: false,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
        ]
    };
    return (
        <section className="container px-4 py-16 m-auto md:px-12 text-center">
            <h1><span className="text-4xl text-gray-700 hy-underline">{title[0]}</span><span
                className="text-2xl text-gray-600">{title[1]}</span></h1>
            <p className="text-2xl text-gray-400 mt-4 mb-8 tracking-widest">{subTitle}</p>
            <div className="slider-container w-full xl:w-3/4 border-y-2 border-gray-100 m-auto">
                <Slider className="h-24" {...settings}>
                    {
                        clients.map((item, index) => {
                            return (
                                <div className="relative w-1/3 h-24 outline-none" key={index}>
                                    <Image className="px-[4.5rem] py-6 md:px-[4rem] md:py-7" src={item.img}
                                           alt={item.name} sizes={100} fill/>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </section>

    )
}