import Image from "next/image";
import jenna from "@/../public/sadhviji.webp";

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
      <h1 className="text-3xl font-bold mt-6">Jenna Sadhviji (Sadhvi Bhagawati Saraswati)
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Sadhvi Bhagawati Saraswati, known as Sadhviji, is a global spiritual leader and bestselling author who has spent nearly 30 years teaching in the Himalayas. A Stanford psychology PhD graduate raised in Hollywood, she found profound healing on the Ganga River in Rishikesh, India. She serves on the United Nations Advisory Council on Religion, as International Director of Parmarth Niketan, Secretary-General of the Global Interfaith WASH Alliance, and President of Divine Shakti Foundation, leading initiatives in sustainability, women's empowerment, and interfaith collaboration.
      </p>
    </div>
  );
}
