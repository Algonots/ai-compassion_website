import Image from "next/image";
import ab1 from "@/../public/ab1.webp";
import ab2 from "@/../public/ab2.webp";

export default function AboutSection() {
    return (
        <div id="about" className="flex flex-col gap-14 px-4 py-8 md:p-8 lg:p-16 text-[#0A2144]">
            <h1 className="text-2xl md:text-3xl font-semibold">About Us</h1>
            <div className="flex flex-col xl:flex-row gap-12 items-center justify-between">
                <div className="w-full xl:w-1/2 flex flex-col gap-4 items-start">
                    <b className="text-xl md:text-2xl font-semibold">Our Vision</b>
                    <p className="text-base md:text-lg leading-relaxed">
                        Artificial intelligence is advancing faster than ever, yet global trust in these systems remains uncertain. We imagine a future where nature, humanity, and technology thrive together. This forum explores how AI can move beyond fear and competition to nurture ecosystems, preserve cultural heritage, and strengthen communities.
                        <br /><br />
                        Our approach is guided by two essential Japanese concepts:
                    </p>
                    <div className="border-l-4 pl-4 py-4 border-[#CB4B4B]">
                        <b>Wa (和)</b>
                        <p className="text-base md:text-lg pt-2">The principle of harmony and peaceful unity, where diverse elements come together in balance.</p>
                    </div>
                    <div className="border-l-4 pl-4 py-4 border-[#CB4B4B]">
                        <b>Ma (間)</b>
                        <p className="text-base md:text-lg pt-2">The concept of vital space between elements—the pause that gives meaning and allows for reflection.</p>
                    </div>
                </div>

                <div className="w-full xl:w-1/2">
                    <Image
                        src={ab1}
                        alt="About Us"
                        className="w-[95%] h-[95%] shadow-[25px_25px_0px_rgba(255,205,119,0.8)] lg:shadow-[35px_35px_0px_rgba(255,205,119,0.8)] rounded-t-[5rem] rounded-r-[5rem]"
                    />
                </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-12 items-center justify-between">
                <div className="w-full xl:w-1/2">
                    <Image
                        src={ab2}
                        alt="About Us"
                        className="w-[95%] h-[95%] shadow-[25px_25px_0px_rgba(197,226,255,0.8)] lg:shadow-[35px_35px_0px_rgba(197,226,255,0.8)] rounded-t-[5rem] rounded-r-[5rem]"
                    />
                </div>
                <div className="w-full xl:w-1/2 flex flex-col gap-4 items-start">
                    <b className="text-xl md:text-2xl font-semibold">What to Expect</b>
                    <p className="text-base md:text-lg leading-relaxed">
                        🌍 Global Alliance through a 24-Hour Relay <br />
                        ✨ New Narrative: Shift the conversation from risk and rivalry to sustainability and cultural flourishing. <br />
                        🌱 Event workshops Activate real-world initiatives that regenerate ecosystems and build resilient communities.
                    </p>
                </div>
            </div>
        </div>
    )
}