import Marquee from "react-fast-marquee";
import Image from "next/image";
import p1 from "@/../public/logo-globalai.webp";
import p2 from "@/../public/pdie.webp";
import p3 from "@/../public/mulearn logo.png";
import p4 from "@/../public/purple.png";
import p5 from "@/../public/na.webp";
// Add or remove partner images as needed

const partners = [p1, p2, p3, p4, p5];

export function PartnerSection() {
    return (
        <div className="py-8 flex flex-col items-center gap-10">
            <h1 className="text-2xl md:text-3xl font-libre font-semibold text-[#0A2144]">Our Partners</h1>
            <Marquee>
                {partners.map((item, index) => (
                    <div key={index} className="flex items-center justify-center px-5 md:px-8">
                        <div style={{ width: 160, height: 80, position: "relative" }}>
                            <Image
                                src={item}
                                alt="partner"
                                fill
                                style={{ objectFit: "contain" }}
                                sizes="160px"
                            />
                        </div>
                    </div>
                ))}
                {partners.map((item, index) => (
                    <div key={index + partners.length} className="flex items-center justify-center px-5 md:px-8">
                        <div style={{ width: 160, height: 80, position: "relative" }}>
                            <Image
                                src={item}
                                alt="partner"
                                fill
                                style={{ objectFit: "contain" }}
                                sizes="160px"
                            />
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}