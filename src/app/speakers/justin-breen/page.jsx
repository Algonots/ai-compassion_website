import Image from "next/image";
import breen from "@/../public/breen.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={breen}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Justin Breen
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Justin Breen is Co-Founder/CEO of The Epic F.I.T. Network, named one of the Top 5 Masterminds globally by Business Traveler USA Magazine. Co-Founder of Corvia.AI, an education platform teaching AI song creation, he authored "Epic Life" with foreword by Dr. Peter Diamandis, reaching #1 on Amazon Kindle and making Wall Street Journal and USA Today bestseller lists. His upcoming book "Epic Journey" features an introduction from Dr. Deepak Chopra with Gary Sinise documentary narration.
      </p>
    </div>
  );
}
