import Banner from "@/components/inquiry/Banner";
import MainSection from "@/components/inquiry/MainSection";
import Form from "@/components/inquiry/Form";

export default function Inquiry() {

    return (
        <div className="w-full top-20 relative bg-gray-50 pb-10">
            <Banner/>
            <MainSection/>
            <Form/>
        </div>
    )

}