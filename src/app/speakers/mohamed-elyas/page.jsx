import Image from "next/image";
import elyas from "@/../public/elyas.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={elyas}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Mohamed Elyas
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Mohamed Elyas is Chief Technology Officer at NCTR with over 20 years of experience in product and project planning, technology leadership, and organizational development. He has held progressive roles including Product Manager, Products Quality Manager, and Development Manager at Edupowers, where he implemented electronic education
systems. Recognized for team mentoring and leadership, Elyas specializes in researching new technologies and markets, prioritizing resources, implementing efficient management processes, and inspiring technical teams toward innovation and goal achievement.
      </p>
    </div>
  );
}
