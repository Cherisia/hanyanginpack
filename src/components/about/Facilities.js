import Image from "next/image";
import facilities_1 from "/public/img/main/facilities/facilities_1.jpg";
import facilities_2 from "/public/img/main/facilities/facilities_2.jpg";
import facilities_3 from "/public/img/main/facilities/facilities_3.jpg";
import facilities_4 from "/public/img/main/facilities/facilities_4.jpg";
import facilities_5 from "/public/img/main/facilities/facilities_5.jpg";
import facilities_6 from "/public/img/main/facilities/facilities_6.jpg";

export default function Facilities() {
    const title = '제작설비';
    const content = '한양인팩은 높은 품질의 제품을 생산하기 위해 공정별 품질 관리에 최선을 다하고 있습니다.';
    let facilities = [facilities_1, facilities_2, facilities_3, facilities_4, facilities_5, facilities_6];
    return (
        <section className="container mt-20 p-8 space-y-10 mx-auto break-keep tracking-tight">
            <h1 className="text-center text-4xl font-bold">{title}</h1>
            <p className="text-center text-base text-gray-500">{content}</p>
            <div className="flex flex-wrap w-full">
                {
                    facilities.map((item, index) => {
                        return (
                            <div className="relative p-3 w-full h-80 md:h-72 md:w-1/2 xl:w-1/3" key={index}>
                                <Image
                                    className="object-cover grayscale transition-all duration-300 brightness-90 hover:scale-105 rounded-sm w-full h-full shadow-md shadow-gray-100"
                                    src={item} alt={"공장설비" + index} placeholder="blur"/>
                            </div>
                        )
                    })

                }
            </div>
        </section>

    )
}