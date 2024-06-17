import Image from "next/image";

export default function Hero() {
    return (
        <section className="container px-4 py-6 mx-auto md:flex max-md:space-y-8">
            <div className="md:w-1/2 my-auto space-y-4">
                <h1 className="text-gray-700 text-4xl">Lorem ipsum dolor sit amet, consectetur</h1>
                <p className="text-gray-500 text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, repudiandae.</p>
                <button className="bg-sky-200 hover:bg-sky-300 rounded-lg w-full h-12 md:w-1/2">버튼</button>
            </div>
            <div className="flex justify-center md:w-1/2">
                <Image src="/img/main_image.jpg" width={600} height={300}/>
            </div>
        </section>
    )
}