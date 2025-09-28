import Image from "next/image";
import matsumoto from "@/../public/matsumoto.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={matsumoto}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Shoukei Matsumoto
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Shoukei Matsumoto is a Pure Land Buddhist monk, AI ethics pioneer and futurist exploring how Buddhist philosophy informs ethical AI development. Currently Visiting Professor at University of Bonn for AI in the Human Context, his research focuses on AI, Buddhism, and Transperspectivity. CEO of Interbeing Inc. and international speaker on Human Literacy in the Age of AI, he advocates for Middle Path leadership and coexistence between human and machine intelligence. He is the author of bestselling books translated into 20+ languages.
      </p>
    </div>
  );
}
