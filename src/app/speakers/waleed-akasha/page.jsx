import Image from "next/image";
import waleed from "@/../public/waleed.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={waleed}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Waleed Akasha
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Waleed Akasha is a senior executive with 20 years of experience in healthcare technology across UAE, Oman, and the Middle East/Africa markets. Specializing in EHR, departmental, and imaging solutions, he has consistently achieved sales and financial goals while leading strategic initiatives for multinational companies. With 16 years in the region, Akasha has built extensive networks with healthcare decision makers including Ministries of Health, hospital officials, and IT directors, driving business development, market penetration, and revenue growth.
      </p>
    </div>
  );
}
