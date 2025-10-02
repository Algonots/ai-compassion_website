import Image from "next/image";
import chada from "@/../public/chada.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={chada}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Chada El Islam Benmahcene
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Chada is CEO and Founder of ENTROGX Ventures with 13 years at Microsoft, General Electric, and Baker Hughes, plus 10+ years in startups. Named Top 50 Most Influential Women in Dubai 2023 and among 100 Arab Female Heroes in Volunteering by BBC, she's an angel investor and thought leader in digital policy with Observer Research Foundation. She empowered 1000+ women at Baker Hughes, serves on multiple tech and energy boards, and co-leads LeanIn Dubai Women in Tech.
      </p>
    </div>
  );
}
