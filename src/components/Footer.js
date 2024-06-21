import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative top-20 border-t border-gray-100">
            <div className="flex flex-wrap container max-md:px-10 md:px-10 xl:px-52 py-6 mx-auto text-sm text-gray-600 space-y-0.5 max-md:space-y-4">
                <div className="basis-full mb-4">
                    <Image src="/svg/logo.svg" width={150} height={50} alt="한양인팩 로고"/>
                </div>
                <div className="w-7/12 max-md:w-full">
                    <p className="space-x-6"><span>회사명 : 한양인팩</span><span>대표 : 윤도상</span></p>
                    <p>경기도 김포시 승가로76번길 29</p>
                    <p>사업자등록번호 : 122-03-17423</p>
                    <p>이메일 : manager@hanyanginpack.com</p>
                    <p className="space-x-6"><span>팩스 : 031-997-8348</span><span>개인정보관리책임자 : 윤희찬</span></p>
                    <p className="text-xs text-gray-400">Copyright ⓒ 2024 hanyanginpack.com All rights reserved</p>
                </div>
                <div className="w-5/12 max-md:w-full">
                    <p className="font-bold">고객센터</p>
                    <h1 className="text-4xl font-black tracking-tight">031-997-9021</h1>
                    <p>평일 9:00 ~ 18:00 (토,일,공휴일 휴무)</p>
                    <p>입금계좌 : 농협 241020-51-038249 윤도상(한양인팩)</p>
                </div>
            </div>
        </footer>
    )
}