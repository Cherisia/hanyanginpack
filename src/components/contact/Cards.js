import {HiOutlineMailOpen} from "react-icons/hi";
import {FiPhoneCall} from "react-icons/fi";
import {IoLocationOutline} from "react-icons/io5";
import {IoMdTime} from "react-icons/io";

export default function Cards() {
    return (
        <div className="flex">
            <div
                className="mt-4 mb-16 mx-auto max-w-screen-xl grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                    <div
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                        <HiOutlineMailOpen style={{fontSize: '1.4rem', color: 'rgb(59 130 246)'}}/>
                    </div>
                    <div className="ml-4">
                        <h2 className="font-semibold">이메일</h2>
                        <p className="mt-2 text-sm text-gray-500">manager@hanyanginpack.com</p>
                    </div>
                </div>
                <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                    <div
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                        <FiPhoneCall style={{fontSize: '1.4rem', color: 'rgb(249 115 22)'}}/>
                    </div>
                    <div className="ml-4">
                        <h2 className="font-semibold">전화</h2>
                        <p className="mt-2 text-sm text-gray-500">031-997-9021</p>
                    </div>
                </div>
                <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                    <div
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                        <IoLocationOutline style={{fontSize: '1.4rem', color: 'rgb(239 68 68)'}}/>
                    </div>
                    <div className="ml-4">
                        <h2 className="font-semibold">위치</h2>
                        <p className="mt-2 text-sm text-gray-500">경기도 김포시 승가로76번길 29</p>
                    </div>
                </div>
                <div className="flex items-start rounded-xl bg-white p-4 shadow-lg">
                    <div
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
                        <IoMdTime style={{fontSize: '1.6rem', color: 'rgb(99 102 241)'}}/>
                    </div>
                    <div className="ml-4">
                        <h2 className="font-semibold">업무시간</h2>
                        <p className="mt-2 text-sm text-gray-500">09:00 ~ 18:00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}