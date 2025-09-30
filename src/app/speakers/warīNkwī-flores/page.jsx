import Image from "next/image";
import flores from "@/../public/flores.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={flores}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">WarīNkwī Flores
</h1>
      <p className="mt-4 text-lg text-gray-700">
        WarīNkwī Flores is a first-generation Kara and Kichwa Nations PhD student, IDX International Indigenous Data Sovereignty and AI Governance scholar, Founder/PI of Kinray Hub, and ancestral land trustee of the Chichupampa Clan, Kutakachi Pueblo. Their work intersects rights, data, technology, nature, and culture within Indigenous biocomplexity systems. Flores designs rights-based research and innovation frameworks for land reunion, Indigenous institutionality, and sovereignty, committed to community resilience and trans-systems worldviews.
      </p>
    </div>
  );
}
