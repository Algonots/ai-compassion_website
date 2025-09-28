import Image from "next/image";
import saionji from "@/../public/saionji.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={saionji}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Hiroo Saionji</h1>
      <p className="mt-4 text-lg text-gray-700">
        Hiroo Saionji serves as Chairman of the Goi Peace Foundation, holding Special Consultative Status with UN Economic and Social Council and official UNESCO relations. With an MBA from Michigan State University and Economics degree from Gakushuin University, he leads neutral peace initiatives worldwide through strategic partnerships with international organizations, embassies, and NGOs. Recipient of Sacred Shri Dnyaneshwar World Peace Prize (2008) and Luxembourg Peace Prize (2019), he served on Japan National Commission for UNESCO (2008-2017).
      </p>
    </div>
  );
}
