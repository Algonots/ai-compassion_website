import Image from "next/image";
import dafa from "@/../public/sofia.png";

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
      <h1 className="text-3xl font-bold mt-6">Sofia Couto da Rocha
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Sofia Couto da Rocha is an MD leading innovation and virtual client at Lusíadas Saúde, one of Portugal's largest private health groups. Specializing in smart aging and precision medicine, she holds an MBA from The Lisbon MBA and earned scholarships from MIT and Harvard Medical School. Winner of Singularity University's Global Impact Challenge and European private hospitals' 2023 best innovation project, she serves as Medical Officer at Patient Innovation and teaches innovation and new technologies in healthcare.
      </p>
    </div>
  );
}