import Image from "next/image";
import jenna from "@/../public/jenna.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={jenna}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Sister Dr. Jenna
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Sister Dr. Jenna is a spiritual mentor, author, and TV personality who hosts The Next Normal on YouTube and founded the Brahma Kumaris Meditation Museum in Maryland. Recipient of the Presidential Lifetime Achievement Award for National Community Service, she presented the Illuminating the Light Within fashion show for Paris 2024 Olympics. Author of Meditation: Intimate Experiences with the Divine and The Sister Gita Effect, she has appeared on major media outlets and speaks internationally on spiritual leadership.
      </p>
    </div>
  );
}
