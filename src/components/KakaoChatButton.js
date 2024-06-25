'use client'

import Script from "next/script";
import Image from "next/image";

export default function KakaoChatButton() {
    let NEXT_PUBLIC_KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;
    return (
        <div className="fixed right-6 bottom-6 z-30">
            <Script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js"
                    integrity="sha384-TiCUE00h649CAMonG018J2ujOgDKW/kVWlChEuu4jK2vxfAAD0eZxzCKakxg55G4"
                    crossOrigin="anonymous" onLoad={() => {
                Kakao.init(NEXT_PUBLIC_KAKAO_APP_KEY);
            }}></Script>
            <button onClick={() => {
                Kakao.Channel.chat({
                    channelPublicId: '_UvdHG',
                })
            }}>
                <Image src="/img/kakao_chat.png" width={55} height={55} alt="한양인팩 상담버튼"/>
                <span className="hidden">한양인팩 상담버튼</span>
            </button>
        </div>


    )
}