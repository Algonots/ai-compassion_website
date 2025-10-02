import Image from "next/image";
import dafa from "@/../public/krishna.png";

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
      <h1 className="text-3xl font-bold mt-6">Krishna Raj
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Krishna Raj is an Impact-focused EdTech entrepreneur targeting early learning in Africa and upskilling in the Middle East. With extensive experience building international business for Godrej across Middle East, North Africa, and CIS, he established distributor networks and achieved #1 market positions. Former Global Strategy head at a Supply Chain start-up building 1000+ customer base, he serves on the board of Al Dar University College in Dubai and advises startups on GTM strategy. He is a frequent speaker and consultant for Big 4 firms on supply chain and market entry.
      </p>
    </div>
  );
}
