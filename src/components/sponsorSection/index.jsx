import Marquee from "react-fast-marquee";
import Image from "next/image";
import s1 from "@/../public/goi-peace.svg";
import s2 from "@/../public/health.webp";
import s3 from "@/../public/be.webp";
import s4 from "@/../public/usa.webp";
import s5 from "@/../public/ai.webp";
import s6 from "@/../public/lm.webp";
// import s7 from "@/../public/na.webp";
// import s8 from "@/../public/logo-globalai.webp";
// import s9 from "@/../public/pdie.webp";

const slider = [s1, s2, s3, s4, s5, s6,];

export default function SponsorSection() {
    return (
        <div className="py-8 flex flex-col items-center gap-10">
            <h1 className="text-2xl md:text-3xl font-libre font-semibold text-[#0A2144]">Our Sponsors</h1>
            <Marquee>
                {slider.map((item, index) => (
                    <div key={index}>
                        <Image src={item} alt="sponsor" width={200} height={200} className="object-contain w-fit md:h-30 px-5 md:px-8" />
                    </div>
                ))}
                {slider.map((item, index) => (
                    <div key={index}>
                        <Image src={item} alt="sponsor" width={200} height={200} className="object-contain w-fit md:h-30 px-5 md:px-8" />
                    </div>
                ))}
            </Marquee>
        </div>
    )
}
