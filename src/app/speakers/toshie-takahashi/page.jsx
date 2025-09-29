import Image from "next/image";
import toshie from "@/../public/toshie.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={toshie}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Toshie Takahashi
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Toshie Takahashi is Professor in the School of Culture, Media and Society and Institute for AI and Robotics at Waseda University, Tokyo, and Associate Fellow at Cambridge CFI. She has held visiting appointments at Oxford, Harvard, and Columbia, conducting cross-cultural research on robots' social impact and AI for Good. Her book Towards the age of Digital Wisdom won the Telecommunication social science award. She holds a PhD from LSE and advises Japan's Ministry of Internal Affairs and Communications, leading youth AI projects for human happiness.
      </p>
    </div>
  );
}
