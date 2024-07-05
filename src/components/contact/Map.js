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
                // 지도 객체 생성
                let container = mapRef.current;
                let options = {
                    center: new window.kakao.maps.LatLng(37.60698479059329, 126.71444256623778),
                    level: 3,
                    draggable: false,
                };
                let map = new window.kakao.maps.Map(container, options);

                // 줌 컨트롤 생성
                var zoomControl = new kakao.maps.ZoomControl();
                map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

                // 마커 생성
                let markerPosition  = new window.kakao.maps.LatLng(37.60698479059329, 126.71444256623778);
                let marker = new window.kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);

                // 커스텀 오버레이
                let content = '<div class="info-title"><img src="/logo/logo.svg" alt="#"/></div>'
                let position = new window.kakao.maps.LatLng(37.60698479059329, 126.71444256623770);
                let customOverlay = new window.kakao.maps.CustomOverlay({
                    map: map,
                    position: position,
                    content: content,
                    yAnchor: 1
                });
            })
        }
        kakaoMapScript.addEventListener('load', onLoadKakaoApi);
    }, [])

    return (
        <div ref={mapRef} className="w-full h-full">
        </div>
    )
}