import Marquee from "react-fast-marquee";
import Image from "next/image";
import p1 from "@/../public/logo-globalai.webp";
import p2 from "@/../public/pdie.webp";
import p3 from "@/../public/mulearn logo.png";
import p4 from "@/../public/purple.png";
import p5 from "@/../public/na.webp";
import p6 from "@/../public/650.png";
import p7 from "@/../public/intuitio.jpg";
import p8 from "@/../public/ism.jpg";
// Add or remove partner images as needed

const partners = [p1, p2, p3, p4, p5, p6, p7, p8];

export function PartnerSection() {
    return (
        <div className="py-8 flex flex-col items-center gap-10">
            <h1 className="text-2xl md:text-3xl font-libre font-semibold text-[#0A2144]">Our Partners</h1>
            <Marquee>
                {partners.map((item, index) => (
                    <div key={index} className="flex items-center justify-center px-3 md:px-8">
                        <div className="relative w-[100px] h-[50px] sm:w-[120px] sm:h-[60px] md:w-[160px] md:h-[80px]">
                            <Image
                                src={item}
                                alt="partner"
                                fill
                                style={{ objectFit: "contain" }}
                                sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 160px"
                            />
                        </div>
                    </div>
                ))}
                {partners.map((item, index) => (
                    <div key={index + partners.length} className="flex items-center justify-center px-3 md:px-8">
                        <div className="relative w-[100px] h-[50px] sm:w-[120px] sm:h-[60px] md:w-[160px] md:h-[80px]">
                            <Image
                                src={item}
                                alt="partner"
                                fill
                                style={{ objectFit: "contain" }}
                                sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, 160px"
                            />
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}