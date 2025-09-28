import Image from "next/image";
import bohacek from "@/../public/bohacek.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={bohacek}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Matyas 'Maty' Bohacek
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Matyas 'Maty' Bohacek is a Stanford University student researching AI model poisoning and training data attribution with Professor Hany Farid. He developed deepfake detectors including one with President Zelenskyy and created an Anderson Cooper deepfake that opened CNN's primetime news show. He also developed state-of-the-art sign language recognition systems now used in college courses. A two-time Apple WWDC Scholar and Czech Innovator of the Year, his research appears in Science and PNAS with opinion pieces in WIRED and Forbes.
      </p>
    </div>
  );
}
