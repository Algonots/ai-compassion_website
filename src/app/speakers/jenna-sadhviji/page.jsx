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
        Jenna Sadhviji (Sadhvi Bhagawati Saraswati) is a spiritual leader, bestselling author, and social activist based in Rishikesh, India. With a Ph.D. from Stanford, she has lived 25+ years in the Himalayas and is President and Spiritual Head of Parmarth Niketan Ashram. Co-President of Religions for Peace and UN Advisory Council member, she authored the #1 bestseller Hollywood to the Himalayas and received the Lifetime Achievement Award from President Biden. Originally from Los Angeles, dedicated to wisdom teaching and humanitarian service.
      </p>
    </div>
  );
}
