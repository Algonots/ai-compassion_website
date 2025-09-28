import Image from "next/image";
import ochiai from "@/../public/ochiai.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={ochiai}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Yoichi Ochiai
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Yoichi Ochiai is a Japanese media artist, entrepreneur, and academic with a doctorate from the University of Tokyo. He serves as Associate Professor at University of Tsukuba Library; Information and Media Associate Professor and Director of the Centre for Digital Nature Development and Research. Ochiai also serves as a specially-appointed professor at Digital Hollywood University and visiting professor at Osaka University of Arts, Kyoto City University of Arts, and Kanazawa College of Art while pioneering innovative digital media art and technology, leading digital nature research and media innovation.
      </p>
    </div>
  );
}
