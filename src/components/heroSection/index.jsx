import Link from "next/link";
import Image from "next/image";
import Bg from "@/../public/heroImg.webp";

export default function Herosection() {
    return (
        <div id="info" className="relative h-screen md:m-4">
            <div className="overflow-hidden relative md:absolute bottom-0 left-0 h-full md:h-[calc(100%-4.5rem)] text-white text-center md:rounded-4xl lg:rounded-[4rem] p-4 md:p-8 lg:p-16 bg-gradient-to-b from-[#7CAB4D70]/44 to-[#273A14] flex flex-col justify-center items-center gap-4">
                <Image src={Bg} alt="bg" className="absolute -z-10 w-full h-full object-cover" draggable={false} />
                <h1 className="text-[2rem] md:text-5xl lg:text-6xl font-bold lg:w-[80%] xl:w-[50%] leading-normal">
                    AI+Compassion Global Forum 2025
                </h1>
                <p className="text-sm md:text-base font-libre font-semibold">October 2, 2025 | USA Pavilion, Expo 2025 Osaka</p>
                <p className="text-sm md:text-base font-libre lg:w-3/4 xl:w-[60%] leading-relaxed lg:py-4">
                    The Global Forum on AI + Compassion unites innovators, policymakers, and cultural leaders to explore how artificial intelligence can serve humanity and the planet. Together, we’ll launch a global alliance, spark a new narrative, and activate projects that place compassion at the heart of technology.
                </p>
                <Link href='https://peatix.com/us/event/4584550/' className="w-full md:w-fit h-fit bg-[#E7E17E] relative top-18 md:top-0 px-10 py-4 md:py-3 text-lg rounded-full font-libre font-semibold text-black">Register Now</Link>
            </div>
        </div>
    )
}