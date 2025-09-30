import Image from "next/image";
import prakash from "@/../public/prakash.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={prakash}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Prakash Singh Bisen</h1>
      <p className="mt-4 text-lg text-gray-700">
        Prof. Prakash Singh Bisen is Director at Madhav Institute of Technology and Science, Gwalior, since March 2007, with over 32 years of academic experience. He previously served as Vice Chancellor of Jiwaji University and Director of Bundelkhand University. Holding a D.Sc. in Plant Biotechnology, Prof. Bisen has advised prestigious bodies including the Ministry of Human Resource Development, Ministry of Environment, UPSC, UGC, and Jawaharlal Nehru University, contributing significantly to India's higher education and scientific policy landscape.
      </p>
    </div>
  );
}