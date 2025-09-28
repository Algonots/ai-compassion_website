import Image from "next/image";
import edi from "@/../public/edi.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={edi}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Edi Pyrek</h1>
      <p className="mt-4 text-lg text-gray-700">
        Edi Pyrek is co-founder of GAIA Foundation (Global Artificial Intelligence Alliance), focusing on decentralized, compassion-based AI. In March 2023, his foundation received a Davos award for technologies that can change millions of lives. A peace negotiator between Afghan tribal leaders after 9/11, Pyrek has advised three Polish prime ministers and trained Forbes-listed individuals. Author of 10 books including for National Geographic, he's a five-time TEDx speaker and creator of Brand Religion methodology and Academy of Future co-founder.
      </p>
    </div>
  );
}
