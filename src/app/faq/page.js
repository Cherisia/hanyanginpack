import Banner from "@/components/faq/Banner";
import Accordion from "@/components/faq/Accordion";
import MainSection from "@/components/faq/MainSection";

export default function Faq() {
    return (
        <div className="w-full top-[4.5rem] relative bg-gray-50 pb-10">
            <Banner/>
            <MainSection/>
            <Accordion/>
        </div>
    )
}