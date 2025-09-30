import Image from "next/image";
import saurabh from "@/../public/saurabh.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={saurabh}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Saurabh Bhatt</h1>
      <p className="mt-4 text-lg text-gray-700">
        Saurabh Bhatt is Founder and CEO of A5E Consulting, a Mumbai-based digital transformation solutions company. A Chartered Accountant with executive education from Columbia Business School and MIT in Digital Transformation, he brings unique expertise blending financial acumen and technology. His distinguished career includes leadership roles at TCS (Global Program Director), Nielsen (Executive Director for 100+ countries), and Reliance (CIO, Petrochemical), driving large-scale business transformation programs. He has been an active angel investor since 2018.

      </p>
    </div>
  );
}