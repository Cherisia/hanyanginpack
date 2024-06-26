import Image from "next/image";
import MainImage from "/public/img/main/main.webp"

export default function Hero() {
    return (
        <section className="mx-auto">
            <div className="flex justify-center relative w-full h-[50rem]">
                <Image className="brightness-50 mx-auto object-cover" src={MainImage} fill />
            </div>
        </section>
    )
}