import Image from "next/image";
import pico from "@/../public/pico.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={pico}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Pico Velásquez
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Pico Velásquez is an Architect and Founder/CEO of VIIRA, pioneering conscious cities by merging AI, data, and design. With a Master's in Computational Design from Harvard and 15+ years experience, she has led projects at BIG (Google HQ), Cirque du Soleil, Hard Rock Casino, and Journey (Saudi Arabia digital twins). Recognized by Forbes, UN, and WEF, Velásquez has spoken at COP28, SXSW, LEAP, and Harvard on Future Cities, AI, and blockchain, advancing conscious technologies for regenerative urban futures.
      </p>
    </div>
  );
}
