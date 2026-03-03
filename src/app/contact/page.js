import Banner from "@/components/contact/Banner";
import MainSection from "@/components/contact/MainSection";
import Cards from "@/components/contact/Cards";

export const metadata = {
    title: '오시는길',
    description: '한양인팩 위치 안내. 경기도 김포시 승가로76번길 29. 전화 031-997-9021, 이메일 manager@hanyanginpack.com. 평일 09:00~18:00 운영.',
    keywords: ['한양인팩 위치', '한양인팩 오시는길', '한양인팩 연락처', '김포 박스제작 업체', '포장박스 업체 위치'],
    alternates: { canonical: 'https://hanyanginpack.com/contact' },
    openGraph: {
        title: '오시는길 | 한양인팩',
        description: '경기도 김포시 승가로76번길 29. 전화 031-997-9021. 평일 09:00~18:00 운영.',
        url: 'https://hanyanginpack.com/contact',
        type: 'website',
    },
};

export default function About() {
    return (
        <div className="w-full top-[4.5rem] relative bg-gray-50 pb-10">
            <Banner/>
            <MainSection/>
            <Cards/>
        </div>
    )
}
