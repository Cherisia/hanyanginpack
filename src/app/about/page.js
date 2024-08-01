import Banner from "@/components/about/Banner";
import MainSection from "@/components/about/MainSection";
import Visions from "@/components/about/Visions";

export default function About() {
    return (
        <div className="w-full top-[4.5rem] relative bg-gray-50 pb-10">
            <Banner/>
            <MainSection/>
            <Visions/>
        </div>
    )
}