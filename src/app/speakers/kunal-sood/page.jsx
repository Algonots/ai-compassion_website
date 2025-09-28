import Image from "next/image";
import kunal from "@/../public/kunal.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={kunal}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Kunal Sood
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Kunal Sood is founder of Audacity AI, We The Planet, and X Impact Group, serving as Chief Impact Officer at the Chopra Foundation and Director of Social Impact at Stanford University's CCARE. A TED Resident and Tribeca Fellow, he holds an MBA from Kellogg, masters from UCSF and UPenn in positive psychology, and is completing his doctorate at ISB focused on developing the theory of audacity.
      </p>
    </div>
  );
}
