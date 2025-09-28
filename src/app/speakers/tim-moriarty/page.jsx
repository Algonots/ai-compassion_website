import Image from "next/image";
import tim from "@/../public/tim.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={tim}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Tim Moriarty
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Tim Moriarty is an accomplished Australian artist and digital creator specializing in aerial drone art and indigenous-inspired designs. Of Yanyuwa Aboriginal heritage from Borroloola, Northern Territory, his skin name is Bundiyan (Cheeky Brown Snake). A licensed and certified pilot creating public installations, with extensive creative strategy experience for major companies including Google, YouTube, National Museum of Australia, and Tourism Australia, his latest project is a multi-million-dollar stainless steel optically illusive emu dreaming installation for Badgerys Creek airport.
      </p>
    </div>
  );
}
