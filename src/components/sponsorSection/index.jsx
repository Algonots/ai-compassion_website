import Marquee from "react-fast-marquee";
import Image from "next/image";
import s1 from "@/../public/1.webp";
import s2 from "@/../public/2.webp";
import s3 from "@/../public/3.webp";
import s4 from "@/../public/4.webp";
import s5 from "@/../public/5.webp";
import s6 from "@/../public/6.webp";
import s7 from "@/../public/7.webp";

const slider = [s1, s2, s3, s4, s5, s6, s7];

export default function SponsorSection() {
    return (
        <div className="py-8 flex flex-col items-center gap-10">
            <h1 className="text-2xl md:text-3xl font-libre font-semibold text-[#0A2144]">Our Sponsors</h1>
            <Marquee>
                {slider.map((item, index) => (
                    <div key={index}>
                        <Image src={item} alt="sponsor" width={200} height={200} className="object-contain w-fit md:h-14 px-5 md:px-8" />
                    </div>
                ))}
                {slider.map((item, index) => (
                    <div key={index}>
                        <Image src={item} alt="sponsor" width={200} height={200} className="object-contain w-fit md:h-14 px-5 md:px-8" />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}