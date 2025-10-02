import Image from "next/image";
import dafa from "@/../public/ani.png";

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
      <h1 className="text-3xl font-bold mt-6">Ani Chahal Honan
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Ani Chahal Honan is the Founder & Managing Partner of IMAGINE, a global capital, startup labs, and advisory innovation ecosystem prioritizing human and planetary flourishing. IMAGINE is part of the world’s largest  coalition of AI scientists beyond Big Tech, advancing AGI, sovereign AI, and AI compute. She’s contributed to companies with over $49B in exits and is honored by the U.S. Congress, the XPRIZE Board of Trustees, and global organizations for her leadership and impact.
      </p>
    </div>
  );
}