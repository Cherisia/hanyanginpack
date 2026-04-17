const items = [
    { label: '1999년 설립', desc: '26년 경력의 전문업체' },
    { label: '3,000+', desc: '납품 고객사' },
    { label: '원스톱', desc: '설계·디자인·제작·납품 일괄 처리' },
    { label: '100%', desc: '맞춤 제작 가능' },
    { label: '당일', desc: '빠른 견적 응대' },
    { label: '포장박스', desc: '제작 전문 한양인팩' },
    { label: '김포 소재', desc: '경기도 김포시 승가로76번길 29' },
    { label: '031-997-9021', desc: '평일 09:00~18:00' },
];

export default function Ticker() {
    return (
        <div className="bg-indigo-50 border-b border-indigo-100 overflow-hidden py-2">
            <div className="ticker-track">
                {[...items, ...items].map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-5 shrink-0">
                        <span className="font-black text-indigo-600 text-xs">{item.label}</span>
                        <span className="text-gray-400 text-xs">{item.desc}</span>
                        <span className="text-indigo-200 ml-4 text-xs">✦</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
