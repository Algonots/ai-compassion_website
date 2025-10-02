import Image from "next/image";
import dafa from "@/../public/nichol.png";

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
      <h1 className="text-3xl font-bold mt-6">Nichol Bradford
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Nichol Bradford is a futurist, investor, and SHRM's AI + HI Executive-in-Residence, shaping global strategies impacting 362 million workers through 340,000 HR professionals in 180 countries. She founded Human Tech Week (2025) with 250 speakers and 1200+ attendees, evolving from TransformativeTech.org, her global community reaching 72 countries. Co-Founder of Niremia Collective venture fund targeting the $8.5 trillion human potential market, Bradford combines psychology, neuroscience, and organizational change to guide AI adoption that amplifies humanity, reaching 100,000+ people annually through speaking and thought leadership.
      </p>
    </div>
  );
}