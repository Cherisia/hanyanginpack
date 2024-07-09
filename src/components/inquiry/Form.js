import BoxTypes from "@/components/inquiry/BoxTypes";
import pool from "@/utils/database";

export default async function Form() {
    return (
        <div className="container xl:w-7/12 md:w-8/12 max-md:w-11/12 mx-auto">
            <form className="space-y-4 md:space-y-6" method="POST">
                <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">
                        회사명 <span className="text-red-700">*</span></label>
                    <input type="text" name="company" id="company"
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-sky-600 block w-full p-2.5"
                           placeholder="회사명" autoComplete="organization" required></input>
                </div>
                <div>
                    <label htmlFor="name"
                           className="block mb-2 text-sm font-medium text-gray-900">담당자명 <span
                        className="text-red-700">*</span></label>
                    <input type="text" name="name" id="name"
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-sky-600 block w-full p-2.5"
                           placeholder="담당자명" autoComplete="name" required></input>
                </div>
                <div>
                    <label htmlFor="contact"
                           className="block mb-2 text-sm font-medium text-gray-900">연락처 <span
                        className="text-red-700">*</span></label>
                    <input type="text" name="contact" id="contact"
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-sky-600 block w-full p-2.5"
                           placeholder="ex) 010-0000-0000" autoComplete="tel-national" required></input>
                </div>
                <div>
                    <label htmlFor="email"
                           className="block mb-2 text-sm font-medium text-gray-900">이메일 <span
                        className="text-red-700">*</span></label>
                    <input type="email" name="email" id="email"
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-sky-600 block w-full p-2.5"
                           placeholder="ex) abc@naver.com" autoComplete="email" required></input>
                </div>
                <div>
                    <div className="block mb-2 text-sm font-medium text-gray-900">박스형태 <span
                        className="text-red-700">*</span></div>
                    <BoxTypes/>
                </div>
                <div>
                    <label htmlFor="quantity"
                           className="block mb-2 text-sm font-medium text-gray-900">수량 <span
                        className="text-red-700">*</span></label>
                    <input type="text" name="quantity" id="quantity"
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-sky-600 block w-full p-2.5"
                           placeholder="ex) 1000개 이상" autoComplete="off" required></input>
                </div>
                <div>
                    <label htmlFor="region"
                           className="block mb-2 text-sm font-medium text-gray-900">주문지역 <span
                        className="text-red-700">*</span></label>
                    <input type="text" name="region" id="region"
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-sky-600 block w-full p-2.5"
                           placeholder="ex) 서울시 강남구 역삼동" autoComplete="address" required></input>
                </div>
                <div>
                    <label htmlFor="description"
                           className="block mb-2 text-sm font-medium text-gray-900">기타 문의사항</label>
                    <textarea name="description" id="description" rows="3"
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-sky-600 block w-full p-2.5"
                              maxLength="200" placeholder="기타 문의사항이 있으시면 작성해주세요." autoComplete="off"></textarea>
                </div>
                <button type="submit"
                        className="w-full text-white bg-sky-400 hover:bg-sky-500 focus:ring-2 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    문의 등록
                </button>
            </form>
        </div>
    )
}