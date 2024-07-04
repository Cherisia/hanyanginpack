import {HiOutlineMailOpen} from "react-icons/hi";
import {FiPhoneCall} from "react-icons/fi";
import {IoLocationOutline} from "react-icons/io5";
import {IoMdTime} from "react-icons/io";
import Map from "@/components/contact/Map";

export default function Cards() {
    return (
        <div className="bg-white rounded-lg flex container p-6 items-center mx-auto flex-wrap">
            <div className="flex w-full md:w-3/5 max-md:pb-4 md:pr-6 h-96 justify-center items-center">
                <Map/>
            </div>
            <div className="w-full md:w-2/5 space-y-4">
                <div className="flex items-start rounded-xl bg-white p-4 shadow-lg mx-auto">
                    <div
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                        <HiOutlineMailOpen style={{fontSize: '1.4rem', color: 'rgb(59 130 246)'}}/>
                    </div>
                    <div className="ml-4">
                        <h2 className="font-semibold">이메일</h2>
                        <p className="mt-2 text-sm text-gray-500 break-all">manager@hanyanginpack.com</p>
                    </div>
                </div>
                <div className="flex items-start rounded-xl bg-white p-4 shadow-lg mx-auto">
                    <div
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                        <FiPhoneCall style={{fontSize: '1.4rem', color: 'rgb(249 115 22)'}}/>
                    </div>
                    <div className="ml-4">
                        <h2 className="font-semibold">전화</h2>
                        <p className="mt-2 text-sm text-gray-500 break-all">031-997-9021</p>
                    </div>
                </div>
                <div className="flex items-start rounded-xl bg-white p-4 shadow-lg mx-auto">
                    <div
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                        <IoLocationOutline style={{fontSize: '1.4rem', color: 'rgb(239 68 68)'}}/>
                    </div>
                    <div className="ml-4">
                        <h2 className="font-semibold">위치</h2>
                        <p className="mt-2 text-sm text-gray-500 break-all">경기도 김포시 승가로76번길 29</p>
                    </div>
                </div>
                <div className="flex items-start rounded-xl bg-white p-4 shadow-lg mx-auto">
                    <div
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
                        <IoMdTime style={{fontSize: '1.6rem', color: 'rgb(99 102 241)'}}/>
                    </div>
                    <div className="ml-4">
                        <h2 className="font-semibold">업무시간</h2>
                        <p className="mt-2 text-sm text-gray-500 break-all">09:00 ~ 18:00</p>
                    </div>
                </div>
            </div>
        </div>

    )
}