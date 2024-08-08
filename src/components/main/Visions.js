import {FaRegStar} from "react-icons/fa6";
import {IoSpeedometerOutline} from "react-icons/io5";
import {GrGroup} from "react-icons/gr";
import {IoMdTime} from "react-icons/io";


export default function Visions() {
    const title = '왜 한양인팩에 의뢰할까요?';
    const content = '한양인팩은 고객의 요구에 부응하기 위해 최선을 다합니다.';
    return (
        <div className="container mt-20 p-8 space-y-10 mx-auto break-keep tracking-tight">
            <h3 className="text-center text-4xl font-bold">{title}</h3>
            <p className="text-center text-base text-gray-500">{content}</p>
            <div className="box-border flex flex-wrap w-full text-center">
                <div className="box-border w-full md:w-1/2 xl:w-1/4 p-2">
                    <div
                        className="px-3 py-10 md:py-16 h-[22rem] md:h-[23rem] xl:h-[24rem] border-2 border-gray-200 transition-all duration-300 hover:scale-105 hover:border-sky-300 overflow-hidden rounded-md shadow-xl hover:shadow-lg">
                        <FaRegStar className="text-sky-300 m-auto text-[4rem]"/>
                        <p className="mt-8 text-sky-300 font-semibold text-xl">최고의 결과물</p>
                        <p className="text-gray-400">#Specialist</p>
                        <p className="mt-6 text-gray-500">품질과 타협하지 않습니다. 합리적인 가격에 완성도 높은 최고의 결과물을 만들어냅니다.</p>
                    </div>
                </div>
                <div className="box-border w-full md:w-1/2 xl:w-1/4 p-2">
                    <div
                        className="px-3 py-10 md:py-16 h-[22rem] md:h-[23rem] xl:h-[24rem] border-2 border-gray-200 transition-all duration-300 hover:scale-105 hover:border-rose-300 overflow-hidden rounded-md shadow-xl hover:shadow-lg">
                        <IoSpeedometerOutline className="text-rose-300 m-auto text-[4rem]"/>
                        <p className="mt-8 text-rose-300 font-semibold text-xl">체계적인 원스톱 시스템</p>
                        <p className="text-gray-400">#One-Stop System</p>
                        <p className="mt-6 text-gray-500">상담부터 제작, 납품까지 원스톱 생산라인으로 신속하고 정확하게 고객 만족을 추구합니다.</p>
                    </div>
                </div>
                <div className="box-border w-full md:w-1/2 xl:w-1/4 p-2">
                    <div
                        className="px-3 py-10 md:py-16 h-[22rem] md:h-[23rem] xl:h-[24rem] border-2 border-gray-200 transition-all duration-300 hover:scale-105 hover:border-violet-400 overflow-hidden rounded-md shadow-xl hover:shadow-lg">
                        <GrGroup className="text-violet-400 m-auto text-[4rem]"/>
                        <p className="mt-8 text-violet-400 font-semibold text-xl">전문가 집단</p>
                        <p className="text-gray-400">#Professional</p>
                        <p className="mt-6 text-gray-500">모든 분야에는 격이 다른 전문가가 존재합니다. 각 공정마다 최고의 전문가가 힘을 모아 최상의 패키지를
                            제작합니다.</p>
                    </div>
                </div>
                <div className="box-border w-full md:w-1/2 xl:w-1/4 p-2">
                    <div
                        className="px-3 py-10 md:py-16 h-[22rem] md:h-[23rem] xl:h-[24rem] border-2 border-gray-200 transition-all duration-300 hover:scale-105 hover:border-orange-300 overflow-hidden rounded-md shadow-xl hover:shadow-lg">
                        <IoMdTime className="text-orange-300 m-auto text-[4rem]"/>
                        <p className="mt-8 text-orange-300 font-semibold text-xl">정확한 납기</p>
                        <p className="text-gray-400">#Promise</p>
                        <p className="mt-6 text-gray-500">한양인팩은 정확한 스케줄링을 통해 고객이 원하는 일정에 납품할수 있도록 노력합니다.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}