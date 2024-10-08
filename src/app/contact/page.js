import Banner from "@/components/contact/Banner";
import MainSection from "@/components/contact/MainSection";
import Cards from "@/components/contact/Cards";

export default function About() {
    return (
        <div className="w-full top-[4.5rem] relative bg-gray-50 pb-10">
            <Banner/>
            <MainSection/>
            <Cards/>
        </div>
    )
}