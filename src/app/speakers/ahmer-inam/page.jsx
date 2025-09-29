import Image from "next/image";
import inam from "@/../public/inam.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={inam}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Ahmer Inam
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Ahmer Inam is a visionary AI and data leader with over two decades of experience at the forefront of artificial intelligence evolution. A member of XPRIZE Brain Trust, he has pioneered high-impact AI solutions across diverse industries including financial services, healthcare, high-tech, consumer, and retail. From early symbolic AI work in the late '90s to today's cutting-edge neuro-symbolic AI, Inam consistently develops transformative AI applications across multiple sectors, driving breakthrough AI initiatives and leading digital transformation across global markets.
      </p>
    </div>
  );
}
