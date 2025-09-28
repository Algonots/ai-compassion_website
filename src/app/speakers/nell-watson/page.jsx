import Image from "next/image";
import nell from "@/../public/nell.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={nell}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Eleanor 'Nell' Watson
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Eleanor 'Nell' Watson, a pioneering researcher in the ethics and safety of machine intelligence, has been a driving force behind some of the most innovative AI ethics standardization and certification initiatives from organizations such as the IEEE. Serves as IEEE Ethics Maestro and chairs the Transparency Experts Focus Group. Former Executive Consultant for Apple and recognized as an Icon by the Royal Academy of Engineering for innovation. Author of Taming the Machine and columnist for Fast Company and Big Think, Watson has spoken at the UN General Assembly and World Bank.
      </p>
    </div>
  );
}
