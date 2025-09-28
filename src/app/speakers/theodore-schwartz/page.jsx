import Image from "next/image";
import schwartz from "@/../public/schwartz.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={schwartz}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Dr. Theodore H. Schwartz
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Dr. Theodore H. Schwartz is a neurosurgeon/neuroscientist and former David and Ursel Barnes Endowed Professor at Weill Cornell Medicine for 25 years. He has published 500+ scientific articles and lectures worldwide on minimally invasive surgical techniques he helped develop. Author of Gray Matters: A Biography of Brain Surgery, selected by The Economist as a best book of 2024, Dr. Schwartz is a Harvard alumnus whose writing appears globally and currently serves as CEO of medtech company Illumination Diagnostics.
      </p>
    </div>
  );
}
