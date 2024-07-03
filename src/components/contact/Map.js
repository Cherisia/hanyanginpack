'use client'

import {useEffect, useRef} from "react";

export default function Map() {
    const NEXT_PUBLIC_KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;
    const mapRef = useRef(null);

    useEffect(() => {
        const kakaoMapScript = document.createElement('script')
        kakaoMapScript.async = false
        kakaoMapScript.src = '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=' + NEXT_PUBLIC_KAKAO_APP_KEY
        document.head.appendChild(kakaoMapScript)

        const onLoadKakaoApi = () => {
            window.kakao.maps.load(() => {
                let container = mapRef.current; //지도를 담을 영역의 DOM 레퍼런스
                let options = { //지도를 생성할 때 필요한 기본 옵션
                    center: new window.kakao.maps.LatLng(37.60701609999958, 126.71023685393473), //지도의 중심좌표.
                    level: 3 //지도의 레벨(확대, 축소 정도)
                };
                let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
            })
        }
        kakaoMapScript.addEventListener('load', onLoadKakaoApi);
    }, [])

    return (
        <div className="mx-auto">
            <div id="map" ref={mapRef} className="max-w-screen w-[600px] h-[400px] lg:w-[900px] lg:h-[600px] xl:w-[1000px] xl:h-[600px] mx-auto">
            </div>
        </div>
    )
}