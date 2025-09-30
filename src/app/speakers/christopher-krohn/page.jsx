import Image from "next/image";
import krohn from "@/../public/krohn.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={krohn}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Christopher Krohn
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Christopher Krohn operates at the intersection of technology, innovation, and systems design, developing multi-stakeholder ecosystems and programs for Fortune companies, VCs, startups, and cities. Co-founder of ism and founder of Hermetic (an earth-focused venture and technology group) and BxC (Blockchain x Climate Leadership Network), he spent nearly a decade as Director of IDEO's Climate Portfolio, investing in and accelerating circular economy and climate solutions globally while designing incubators, pilots, and investment funds.
      </p>
    </div>
  );
}
