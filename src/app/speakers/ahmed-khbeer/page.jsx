import Image from "next/image";
import ahmed from "@/../public/ahmed.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={ahmed}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Ahmed Khbeer
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Ahmed Khbeer is Partner and Group CEO at Tafaseel BPO, growing the company from seven employees to 2000+ across six countries (UAE, KSA, Egypt, Qatar, Bahrain, US), earning top CX awards and attracting global investment. Founder and CEO of OnBoard, UAE's first People-as-a-Service EOR subscription platform, and Co-Founder of
Rannah.ae, the world's first automated on-demand call center subscription platform. Board member at Dubai Chamber of Commerce Contact Centers Business Group, currently building Sonic AI, the Middle East’s first voice AI Unicorn.
      </p>
    </div>
  );
}
