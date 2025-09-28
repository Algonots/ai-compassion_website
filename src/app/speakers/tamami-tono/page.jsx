import Image from "next/image";
import tono from "@/../public/tono.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={tono}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Tamami Tono
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Tamami Tono is an award-winning composer and graduate of Kunitachi College of Music and Keio University. Former resident composer of Yo-Yo Ma's Silk Road Ensemble and CCMIX, she has been a member of Reigakusha Gagaku Ensemble since 1990, performing traditional Gagaku and contemporary music. Winner of National Theater Composition Prize and ISCM awards, Tono creates multimedia Breathing Media performances combining traditional Gagaku with modern electronics, and has performed at Tanglewood and Lincoln Center festivals.
      </p>
    </div>
  );
}
