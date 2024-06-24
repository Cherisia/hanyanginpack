import Image from "next/image";

export default function Inquiry() {
    let title = '견적문의';
    let content = ['최고의 결과물을 만나보세요', '한양인팩은 최선을 다해서', '견적 및 컨설팅을 진행하고 있습니다.', '견적문의를 남겨주시면', '최대한 빠르게', '답변해 드리겠습니다.'];
    let boxes = [
        {number: 1, name: 'A형', detail: ''},
        {number: 2, name: 'B형', detail: ''},
        {number: 3, name: 'B형(창문형)', detail: ''},
        {number: 4, name: '완전조립형', detail: ''},
        {number: 5, name: '끈손잡이 조립형', detail: ''},
        {number: 6, name: '끈손잡이 지붕형', detail: ''},
        {number: 7, name: '손잡이형', detail: ''},
        {number: 8, name: '싸바리형(완성형)', detail: ''},
        {number: 9, name: '상하분리형(조립식)', detail: ''},
        {number: 10, name: '상하분리형(조립식_창문형)', detail: ''},
        {number: 11, name: '맞뚜껑형', detail: ''},
        {number: 12, name: '책싸개형', detail: ''},
        {number: 13, name: '슬리브형A', detail: ''},
        {number: 14, name: '슬리브형B', detail: ''},
        {number: 15, name: '케잌상자', detail: ''},
        {number: 16, name: '손잡이 레이스형', detail: ''},
        {number: 17, name: '레이스형', detail: ''},
        {number: 18, name: '오목형', detail: ''},
    ];
    return (<div className="relative top-20 w-full">
        <div className="relative h-[24rem]">
            <Image className="brightness-[60%] rounded-2xl p-1" src="/img/inquiry/inquiry_main.jpg" fill={true}
                   alt="#"/>
            <div
                className="w-full max-lg:px-8 absolute text-white text-center top-[35%] tracking-tighter space-y-10">
                <div className="font-black text-6xl font-[nanumB]">
                    {title}
                </div>
                <div className="text-xl">
                    {content[0]}
                </div>
            </div>
        </div>
        <div className="p-8 text-center text-base text-gray-700 space-y-6">
            <p><span className="hy-underline">{content[1]}</span> {content[2]}</p>
            <p>{content[3]} <span className="hy-underline">{content[4]}</span> {content[5]}</p>
        </div>
        <div className="xl:w-7/12 md:w-8/12 max-md:w-11/12 mx-auto mb-12">
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
                    <label htmlFor="phone"
                           className="block mb-2 text-sm font-medium text-gray-900">연락처 <span
                        className="text-red-700">*</span></label>
                    <input type="text" name="phone" id="phone"
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
                    <div className="flex flex-wrap">
                        {
                            boxes.map((box, index) => {
                                return (
                                    <div className="box-border w-1/3 md:w-1/4 xl:w-1/6 p-[0.09rem]" key={index}>
                                        <input type="checkbox" id={box.number} className="hidden peer"/>
                                        <label htmlFor={box.number} className="relative w-full select-none cursor-pointer flex items-center justify-center border-2 border-gray-100
            py-16 transition-colors duration-200 peer-checked:border-gray-600">
                                            <Image src={`/img/inquiry/box/${box.number}.png`} alt={box.name} fill/>
                                        </label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <label htmlFor="amount"
                           className="block mb-2 text-sm font-medium text-gray-900">수량 <span
                        className="text-red-700">*</span></label>
                    <input type="text" name="amount" id="amount"
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
                    <label htmlFor="other"
                           className="block mb-2 text-sm font-medium text-gray-900">기타 문의사항</label>
                    <textarea name="other" id="other" rows="3"
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:border-sky-600 block w-full p-2.5"
                              maxLength="200" placeholder="기타 문의사항이 있으시면 작성해주세요." autoComplete="off"></textarea>
                </div>
                <button type="submit"
                        className="w-full text-white bg-sky-400 hover:bg-sky-500 focus:ring-2 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    문의 등록
                </button>
            </form>
        </div>

    </div>)
}