import Image from "next/image";
import tahara from "@/../public/tahara.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={tahara}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Masato Tahara
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Masato Tahara pursued graduate studies in physics, focusing on complex systems, quantum mechanics, and phase transitions to explore principles of life. Through learning facilitation, he discovered deep connections between facilitation principles and physics concepts. With generative AI emergence, he recognized structural similarities between AI's mathematical foundations and quantum mechanics, expanding into Physics × AI × Facilitation. He develops AI applications and digital facilitation methods, working to transcend language, cognitive, diversity, and task barriers for a more diverse and inclusive society.
      </p>
    </div>
  );
}
