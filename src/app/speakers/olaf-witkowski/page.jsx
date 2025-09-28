import Image from "next/image";
import olaf from "@/../public/olaf1.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={olaf}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Dr. Olaf Witkowski
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Dr. Olaf Witkowski is a pioneering leader exploring artificial minds and compassionate AI technology. Founding Director of Cross Labs AI research institute in Kyoto and President of the International Society for Artificial Life, he serves as Board Director at Cross Compass AI. With a PhD from University of Tokyo and Princeton Institute alumnus, Witkowski has co-founded research ventures across three continents including YHouse Inc. in New York and centers in Kathmandu and Kyoto, focusing on diverse intelligences and consciousness.
      </p>
    </div>
  );
}
