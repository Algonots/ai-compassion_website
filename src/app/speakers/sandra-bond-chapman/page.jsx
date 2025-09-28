import Image from "next/image";
import sandra from "@/../public/sandra.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={sandra}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Dr. Sandra Bond Chapman
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Dr. Sandra Bond Chapman is Chief Director of Center for BrainHealth at UT Dallas and Dee Wyly Distinguished University Professor. Co-creator of The BrainHealth Project involving 32 leading experts, she has secured 50+ research grants and published 250+ peer-reviewed studies. Chapman leads development of the first BrainHealth Index and directs clinical trials focused on enhancing cognitive capacity across the lifespan, working to democratize brain health strategies globally, transforming how we approach brain health.
      </p>
    </div>
  );
}
