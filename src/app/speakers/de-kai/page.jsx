import Image from "next/image";
import dafa from "@/../public/dekai.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={dafa}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">DE KAI
</h1>
      <p className="mt-4 text-lg text-gray-700">
        DE KAI is an AI pioneer for over 40 years whose PhD thesis argued for statistical machine learning in natural language processing. He built the first global translator and invented groundbreaking language models that spawned Google Translate and Microsoft Translator, earning recognition as a Founding Fellow of Natural Language Processing. Holding joint appointments at HKUST's Computer Science and Engineering Department and Berkeley's International Computer Science Institute, he serves as Independent Director of The Future Society and was an inaugural member of Google's AI ethics council.
      </p>
    </div>
  );
}