import Image from "next/image";
import ian from "@/../public/ian.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={ian}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Ian Haycroft</h1>
      <p className="mt-4 text-lg text-gray-700">
        Ian Haycroft is an Australian entrepreneur and mentor who spent 20 years in international relief work before returning to Australia in 1999 to establish a kinesiology practice. Co-founder of a successful crowdfunding venture capital business, he combines business mentoring with individual coaching. Currently focused on writing and connecting global communities committed to conscious renewal, Haycroft is passionate about finding wisdom paths to assist positive change for humanity and the planet.
      </p>
    </div>
  );
}
