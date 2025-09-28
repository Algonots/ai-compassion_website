import Image from "next/image";
import olivera from "@/../public/olivera.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={olivera}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Olivera Tomic
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Olivera Tomic is founder of 8people Intelligence and a visionary AI transformation leader helping enterprises integrate artificial intelligence with clarity and impact. A certified AI Agent Specialist with over a decade of international experience across Australia, Asia, Europe, and Africa, she guides organizations through AI adoption complexities across telecommunications, automotive, insurance, e-commerce, and retail sectors. Her strategic approach focuses on AI consulting, solutions, and upskilling to deliver measurable business outcomes.
      </p>
    </div>
  );
}
