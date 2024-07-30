import Image from "next/image";
import facilities_1 from "/public/img/main/facilities/facilities_1.jpg";
import facilities_2 from "/public/img/main/facilities/facilities_2.jpg";
import facilities_3 from "/public/img/main/facilities/facilities_3.jpg";
import facilities_4 from "/public/img/main/facilities/facilities_4.jpg";
import facilities_5 from "/public/img/main/facilities/facilities_5.jpg";
import facilities_6 from "/public/img/main/facilities/facilities_6.jpg";

export default function Facilities() {
    let facilities = [facilities_1, facilities_2, facilities_3, facilities_4, facilities_5, facilities_6];
    return (
        <section className="container px-4 py-16 m-auto md:px-12">
            <div className="flex flex-wrap w-full">
                {
                    facilities.map((item, index) => {
                        return (
                            <div className="relative p-2 w-full h-48 md:w-1/2 xl:w-1/3 xl:h-72" key={index}>
                                <Image
                                    className="object-cover grayscale brightness-80 hover:brightness-75 rounded w-full h-full"
                                    src={item} alt={"공장설비" + index} placeholder="blur"/>
                            </div>
                        )
                    })

                }
            </div>
        </section>

    )
}