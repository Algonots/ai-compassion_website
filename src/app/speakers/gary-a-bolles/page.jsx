import Image from "next/image";
import gary from "@/../public/gary.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={gary}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Gary A Bolles</h1>
      <p className="mt-4 text-lg text-gray-700">
        Gary A. Bolles is co-founder of SoCap Global and partner at Charrette LLC, specializing in impact, innovation, and capital strategies. A leading expert on the future of work, he authored The Next Rules of Work and created LinkedIn courses with 1.7 million learners. As Global Fellow for Transformation at Singularity University, he guides organizations on leveraging AI and exponential technologies. Previously led major technology companies and directed six technology magazines including Yahoo! Internet Life.
      </p>
    </div>
  );
}
