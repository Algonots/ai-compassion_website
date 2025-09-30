import Image from "next/image";
import valeria from "@/../public/valeria.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={valeria}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Valeria Soler
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Valeria Soler connects people, ideas, and resources to spark inclusive futures in technology, ensuring Latin American women and youth have a voice in AI. She leads two international initiatives in Colombia: Women in AI (launching the first South American chapter) and Young AI Leaders Bogotá, a UN-backed hub applying AI to SDG challenges. With experience across government, academia, and deep-tech startups, she bridges policy, design, and innovation as an artist, podcaster, and facilitator.
      </p>
    </div>
  );
}
