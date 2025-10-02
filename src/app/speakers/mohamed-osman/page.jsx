import Image from "next/image";
import osman from "@/../public/osman.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={osman}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Mohamed Osman
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Mohamed Osman has 15+ years of ICT industry experience with 10+ years in VAS, OSS, and BSS telecom projects. Specializing in Operation Management, Internal Audit, Process Excellence, and Business Continuity Management, he holds expertise in COBIT, ISO27001, ISO22301, ITIL, and TM Frameworks. His experience includes IT governance implementation, risk assessment, incident and crisis management, and continuity strategies. Osman has led BCM consultation projects including Sudan National Telecom Emergency plans and MTN Sudan Business Continuity implementation.
      </p>
    </div>
  );
}
