import Image from "next/image";
import stephin from "@/../public/stephin.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={stephin}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Stephen Ibaraki
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Stephen Ibaraki is one of the world’s leading futurists and investors, working with more than 1 million CEOs, investors, and scientists to advance AI, quantum computing, and sustainable investments. As the driving force behind AI for Good at the UN ITU, his leadership impacts industries, governments, and startups globally. Microsoft AI Awards since 2018 and a grand judge at top global innovation competitions, Stephen’s expertise is shaping the future of technology - driven economic growth.
      </p>
    </div>
  );
}
