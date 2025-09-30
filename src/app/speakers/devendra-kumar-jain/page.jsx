import Image from "next/image";
import dev from "@/../public/dev.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={dev}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Devendra Kumar Jain</h1>
      <p className="mt-4 text-lg text-gray-700">
        Dr. Devendra Kumar Jain is Professor of Accounting and Finance at UPES School of Business in Dehradun, India, with over four decades spanning banking and academia. His banking career began in 1982 with Andhra Bank, progressing to senior positions across multiple countries including FOREX Manager at Crane Bank in Uganda, Head of Operations/Risk/Compliance at International Commercial Bank in The Gambia, and CEO at Exchange & Finance (Fiji) Ltd, providing strategic leadership in currency trading and money transfer operations.
      </p>
    </div>
  );
}