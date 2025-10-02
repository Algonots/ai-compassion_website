import Image from "next/image";
import haythem from "@/../public/haythem.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={haythem}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Haytham El-Azaizy
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Haytham El-Azaizy is Managing Partner at Intuitio VC, Founder of Octopus Outsourcing, and Top 40 Under 40 MENA honoree with 16+ years of executive experience. He built high-performance cultures, hiring 1,200+ people in eight months and growing client accounts by 200%+. Financial Advisor at Atqen Holding Saudi Arabia, he designed financial modeling for 140+ companies and raised 220M SAR in GCC within three years. Keynote speaker at AIM Congress, Websummit, Startup Worldcup, Startup Connect, GITEX, and RiseUP Summit.
      </p>
    </div>
  );
}
