import Banner from "@/components/inquiry/Banner";
import MainSection from "@/components/inquiry/MainSection";
import Form from "@/components/inquiry/Form";

export default function Inquiry() {

    return (
        <div className="container mx-auto relative top-20 w-full">
            <Banner/>
            <MainSection/>
            <Form/>
        </div>)
}