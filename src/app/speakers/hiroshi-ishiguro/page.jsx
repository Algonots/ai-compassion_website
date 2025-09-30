import Image from "next/image";
import hiroshi from "@/../public/hiroshi.webp";

export default function HiroshiIshiguroPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={hiroshi}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Hiroshi Ishiguro</h1>
      <p className="mt-4 text-lg text-gray-700">
        Hiroshi Ishiguro is Professor of Department of Systems Innovation at Osaka University and Visiting Director at Advanced Telecommunications Research Institute, specializing in interactive robotics, avatar, and android science. Creator of Geminoid, an avatar android copy of himself, Ishiguro serves as CEO of AVITA Inc., Project Manager of MOONSHOT R&D, and Thematic Project Producer of EXPO 2025 Osaka. His groundbreaking work has earned prestigious awards including the Sheikh Mohammed Bin Rashid Al Maktoum Knowledge Award.
      </p>
    </div>
  );
}
