import Image from "next/image";
import aaker from "@/../public/aaker.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={aaker}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Dr. Jennifer Aaker
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Dr. Jennifer Aaker is General Atlantic Professor at Stanford Graduate School of Business and a renowned behavioral scientist specializing in purpose, meaning, and technology's impact on well-being. Winner of the Distinguished Scientific Achievement Award and MBA Professor of the Year, her bestselling books including Humor, Seriously have been translated into 20+ languages. She serves on boards of the Obama Presidential Foundation and other organizations, helping leaders foster purpose and connection in business.
      </p>
    </div>
  );
}
