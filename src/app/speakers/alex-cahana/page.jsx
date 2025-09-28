import Image from "next/image";
import alex from "@/../public/alex.webp";
export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={alex}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}x
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Alex Cahana</h1>
      <p className="mt-4 text-lg text-gray-700">
        Dr. Alex Cahana specializes in Web 3.0 transformation in emerging markets and developing economies. Founding partner at ImpactRooms and Blockchain Healthcare Expert for UN/CEFACT, he serves on boards of AdanianLabs Africa and ACHA. With 25+ years clinical medical experience including Department of Defense, he was former Professor and Chief of Pain Medicine at University of Washington. A decorated Israeli Defense Forces Officer, he has published 100+ articles and received the University of Washington President's medal for remarkable leadership, social impact and public service.
      </p>
    </div>
  );
}
