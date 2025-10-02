import Image from "next/image";
import anas from "@/../public/anas.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={anas}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Anas Almarie
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Anas Almarie is an award-winning digital growth consultant and engineer with 17 years of experience, leading Social Station Branding & Marketing Agency in Dubai. He serves Fortune 500 companies and local businesses with branding, digital marketing, AI, and social media solutions. As Digital Marketing Institute trainer and LinkedIn Solutions Advisor, he maintains 98% satisfaction feedback. A keynote speaker featured on Dubai Eye, Sky News Arabia, Al Arabiya, and CNBC Arabia, Almarie speaks at events across the MENA region.
      </p>
    </div>
  );
}
