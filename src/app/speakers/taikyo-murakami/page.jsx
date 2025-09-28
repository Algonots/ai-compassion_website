import Image from "next/image";
import murakami from "@/../public/murakami.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={murakami}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Taikyo Murakami
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Taikyo Murakami is the acharya of Shingon Esoteric Buddhism and chief priest of Kogenji Temple, specializing in esoteric Buddhism and Heian-Kamakura period culture. With a master's degree from Otani Graduate School in Buddhist culture, he has conducted over 10,000 face-to-face consultations and serves as dean of Faculty of Education at Gokurakuji Temple. A clinical Buddhist chaplain involved in palliative care and secretary of WCRP Japan Youth Group, he has completed the extreme Shou Hassenmai Goma training.
      </p>
    </div>
  );
}
