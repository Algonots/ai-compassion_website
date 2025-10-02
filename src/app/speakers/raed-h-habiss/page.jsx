import Image from "next/image";
import habibi from "@/../public/habibi.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={habibi}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Raed H. Habiss
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Raed H. Habiss is Founder and Vice Chairman of Connect 2030 Forum, providing consulting and advisory services for Saudi Arabia Vision 2030. Former Vice Chairman at Destinations of The Kingdom Holdings, he led PPP and BOT projects and represented the Malaysian Government for the $4 billion Manarat Makkah Tower. As Director General Tourism Development at Islamic Chamber of Commerce & Industry, he developed tourism investments across OIC countries, with expertise in aviation, hospitality, and government technology solutions.
      </p>
    </div>
  );
}
