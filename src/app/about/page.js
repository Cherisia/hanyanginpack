import Banner from "@/components/about/Banner";
import MainSection from "@/components/about/MainSection";
import Facilities from "@/components/about/Facilities";
import Service from "@/components/about/Service";

export const metadata = {
    title: '회사소개',
    description: '1999년 설립된 한양인팩은 26년 경력의 패키지상자·포장박스 제작 전문업체입니다. 설계·디자인·제작·납품 원스톱 시스템, 전문가 집단, 정확한 납기로 최고의 패키지를 제공합니다.',
    keywords: ['한양인팩 회사소개', '포장박스 전문업체', '패키지 제작 회사', '박스제작 업체', '김포 포장박스'],
    alternates: { canonical: 'https://hanyanginpack.com/about' },
    openGraph: {
        title: '회사소개 | 한양인팩',
        description: '1999년 설립, 26년 경력의 패키지상자·포장박스 제작 전문업체. 원스톱 시스템으로 최고의 패키지를 제공합니다.',
        url: 'https://hanyanginpack.com/about',
        type: 'website',
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '한양인팩',
    url: 'https://hanyanginpack.com',
    logo: 'https://hanyanginpack.com/img/logo/logo.jpg',
    foundingDate: '1999',
    description: '1999년 설립, 26년 경력의 포장박스·패키지상자 제작 전문업체. 설계·디자인·제작·납품 원스톱 시스템.',
    telephone: '031-997-9021',
    email: 'manager@hanyanginpack.com',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '승가로76번길 29',
        addressLocality: '김포시',
        addressRegion: '경기도',
        postalCode: '10043',
        addressCountry: 'KR',
    },
};

export default function About() {
    return (
        <div className="w-full top-[4.5rem] relative bg-gray-50 pb-10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}/>
            <Banner/>
            <MainSection/>
            <Service/>
            <Facilities/>
        </div>
    )
}
