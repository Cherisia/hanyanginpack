import Link from "next/link";
import Logo from "/public/logo/logo.svg";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 pb-10 border-b border-white/10">
                    <div>
                        <Logo width={110} height={36} fill="white" />
                        <p className="text-xs text-gray-500 leading-relaxed mt-4">
                            1999년 설립 · 포장박스·패키지상자 제작 전문<br />
                            설계부터 납품까지 원스톱 시스템
                        </p>
                        <div className="flex gap-2 mt-4">
                            <span className="bg-sky-900 text-sky-300 text-[10px] font-bold px-2.5 py-1 rounded-full">26년 경력</span>
                            <span className="bg-sky-900 text-sky-300 text-[10px] font-bold px-2.5 py-1 rounded-full">원스톱</span>
                            <span className="bg-sky-900 text-sky-300 text-[10px] font-bold px-2.5 py-1 rounded-full">맞춤 제작</span>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs font-black text-gray-300 uppercase tracking-widest mb-4">Company</p>
                        <ul className="space-y-1.5 text-xs text-gray-500">
                            <li>회사명 : 한양인팩 &nbsp;·&nbsp; 대표 : 윤도상</li>
                            <li>경기도 김포시 승가로76번길 29</li>
                            <li>사업자등록번호 : 122-03-17423</li>
                            <li>이메일 : manager@hanyanginpack.com</li>
                            <li>팩스 : 031-997-8348</li>
                            <li className="pt-1">개인정보관리책임자 : 윤희찬</li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs font-black text-gray-300 uppercase tracking-widest mb-4">Customer Center</p>
                        <a
                            href="tel:0319979021"
                            className="text-2xl md:text-3xl font-black text-white tracking-tight hover:text-sky-300 transition-colors"
                        >
                            031-997-9021
                        </a>
                        <p className="text-xs text-gray-500 mt-2">평일 09:00 ~ 18:00</p>
                        <p className="text-xs text-gray-600">토·일·공휴일 휴무</p>
                        <div className="mt-4">
                            <p className="text-xs text-gray-600">입금계좌</p>
                            <p className="text-xs text-gray-500 mt-1">농협 241020-51-038249 윤도상 (한양인팩)</p>
                        </div>
                        <div className="flex flex-wrap gap-3 mt-5">
                            <Link href="/guide" className="text-xs text-gray-500 hover:text-white transition-colors">박스 제작 가이드</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/guide/corrugated" className="text-xs text-gray-500 hover:text-white transition-colors">골판지 종류</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/faq" className="text-xs text-gray-500 hover:text-white transition-colors">자주 묻는 질문</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/contact" className="text-xs text-gray-500 hover:text-white transition-colors">오시는길</Link>
                            <span className="text-gray-700">·</span>
                            <Link href="/inquiry" className="text-xs text-gray-500 hover:text-white transition-colors">견적문의</Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-2">
                    <p className="text-xs text-gray-600">Copyright ⓒ 2025 hanyanginpack.com All rights reserved</p>
                    <p className="text-xs text-gray-700">Designed by ♥ 한양인팩</p>
                </div>
            </div>
        </footer>
    );
}
