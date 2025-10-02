import Image from "next/image";
import dafa from "@/../public/dafa.png";

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
      <h1 className="text-3xl font-bold mt-6">Dr. Anour F A Dafa-Alla
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Dr. Anour F A Dafa-Alla is a computer science professor, cybersecurity researcher, and founder of Sudanese Researchers Foundation, which grew to 630,000+ members globally. As TED's #1 most active translator for 5+ consecutive years, he translated 1,659+ TED Talks into Arabic and now serves as AI Dubbing Specialist. Featured on CBS 60 Minutes and speaker at 9 TEDx events worldwide, he holds consulting roles at Qatar Foundation and Primary Health Care Corporation, advancing technology education and innovation.
      </p>
    </div>
  );
}
