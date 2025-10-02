import Image from "next/image";
import dafa from "@/../public/fady.png";

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
      <h1 className="text-3xl font-bold mt-6">Fady Ismaeel
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Fady Ismaeel is Founder and CEO of AGX Consultant, a venture studio empowering startups and SMEs through governance, fundraising, and scaling strategies. With a Doctorate in Business Administration and 20 years in ICT, he serves as General Secretary of AFBAN and Founder of Delta Angels, strengthening angel investment networks across Egypt, GCC, and Africa. Former visiting professor at AAST Cairo and
Hull University, he has delivered 3,000+ hours of mentorship in digital transformation and strategic innovation.
      </p>
    </div>
  );
}