import Image from "next/image";
import dafa from "@/../public/manal.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={dafa}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Manal Rifki
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Manal Rifki is Director of Strategy & Business Development at Rakuten Mobile, driving global expansion and M&A in telecom and emerging technologies. Co-Founder of Klumi Ventures, the first fully licensed Web3 VC and fund manager in Abu Dhabi Global Market (ADGM), she also serves as Venture Partner at IVC, a Taiwan-based Web3 firm with 200+ portfolio investments. Former Investment Principal at Tesla Capital Singapore, Rifki specializes in early-stage impact investing across frontier technologies and sustainability.
      </p>
    </div>
  );
}