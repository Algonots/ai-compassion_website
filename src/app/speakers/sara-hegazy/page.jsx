import Image from "next/image";
import sara from "@/../public/sara.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={sara}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Sara Hegazy
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Sara Hegazy is a serial entrepreneur, holistic psychotherapist, and health tech innovator with 20 years of international experience. An award-winning conscious entrepreneur mentor, she specializes in transpersonal therapy, trauma transformation, and Traditional Chinese Medicine. Founder of The SouL-houette initiative, she bridges alternative and modern medicine by merging neuropsychology with health technology for innovative wellness solutions. Author of "The Psychology of the Entrepreneur," Hegazy guides individuals and businesses toward sustainable growth through holistic wellness and personal development.
      </p>
    </div>
  );
}
