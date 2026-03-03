import {FaRegStar} from "react-icons/fa6";
import {IoSpeedometerOutline} from "react-icons/io5";
import {GrGroup} from "react-icons/gr";
import {IoMdTime} from "react-icons/io";

const VISIONS = [
    {
        icon: FaRegStar,
        color: 'from-sky-400 to-blue-500',
        bg: 'bg-sky-50',
        border: 'border-sky-100',
        accent: 'text-sky-600',
        title: '최고의 결과물',
        tag: '#Specialist',
        desc: '품질과 타협하지 않습니다. 합리적인 가격에 완성도 높은 최고의 결과물을 만들어냅니다.',
    },
    {
        icon: IoSpeedometerOutline,
        color: 'from-rose-400 to-pink-500',
        bg: 'bg-rose-50',
        border: 'border-rose-100',
        accent: 'text-rose-600',
        title: '원스톱 시스템',
        tag: '#One-Stop System',
        desc: '상담부터 제작, 납품까지 원스톱 생산라인으로 신속하고 정확하게 고객 만족을 추구합니다.',
    },
    {
        icon: GrGroup,
        color: 'from-violet-400 to-purple-500',
        bg: 'bg-violet-50',
        border: 'border-violet-100',
        accent: 'text-violet-600',
        title: '전문가 집단',
        tag: '#Professional',
        desc: '각 공정마다 최고의 전문가가 힘을 모아 최상의 패키지를 제작합니다.',
    },
    {
        icon: IoMdTime,
        color: 'from-orange-400 to-amber-500',
        bg: 'bg-orange-50',
        border: 'border-orange-100',
        accent: 'text-orange-600',
        title: '정확한 납기',
        tag: '#Promise',
        desc: '정확한 스케줄링을 통해 고객이 원하는 일정에 납품할 수 있도록 노력합니다.',
    },
];

export default function Visions() {
    return (
        <section className="container mt-20 px-4 pb-4 space-y-8 mx-auto break-keep tracking-tight">
            <div className="text-center space-y-2">
                <h2 className="text-3xl md:text-4xl font-black text-gray-800">왜 한양인팩에 의뢰할까요?</h2>
                <p className="text-base text-gray-500">한양인팩은 고객의 요구에 부응하기 위해 최선을 다합니다.</p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 list-none p-0 m-0">
                {VISIONS.map(({ icon: Icon, color, bg, border, accent, title, tag, desc }) => (
                    <li key={title}
                        className={`${bg} ${border} border rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}>
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0`}>
                            <Icon className="text-white text-2xl"/>
                        </div>
                        <div>
                            <h3 className={`font-black text-lg ${accent}`}>{title}</h3>
                            <p className="text-xs text-gray-400 mt-0.5">{tag}</p>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
