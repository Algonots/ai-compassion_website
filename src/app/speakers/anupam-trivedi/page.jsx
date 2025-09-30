import Image from "next/image";
import anupam from "@/../public/anupam.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={anupam}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Anupam Trivedi</h1>
      <p className="mt-4 text-lg text-gray-700">
        Anupam Trivedi transitioned from over two decades (1995-2017) in pharmaceutical sales and marketing to entrepreneurship and spiritual exploration. With an M.Pharm and MBA, he specialized in diabetes, cardiovascular care, and ophthalmology across European and Latin American markets. In 2017, he established a chain of pharmacy stores and dhanyabhagya.com, bridging traditional wisdom with modern commerce. He founded dharmsanatan.com (Hindi) and bhavambhavaani.com (English) to promote Sanatana Dharma, integrating ancient Vedic wisdom with contemporary living for holistic wellbeing.
      </p>
    </div>
  );
}