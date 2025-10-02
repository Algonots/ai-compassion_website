import Image from "next/image";
import aliaa from "@/../public/aliaa.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={aliaa}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Aliaa Mohamed
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Aliaa Mohamed is Founder of Beyond The Verses, exploring the intersection of science, consciousness, and innovation. A Certified HeartMath Facilitator specializing in heart-brain synchronization, her interdisciplinary research spans neuroscience, quantum physics, epigenetics, nutritional biochemistry, sacred geometry, and BioGeometry. Mohamed collaborates with scientists and global leaders on projects integrating consciousness studies with technology. Her work bridges governmental innovation, scientific research, and metaphysical exploration, focusing on human potential and sustainable consciousness development through multidimensional approaches to wellness and evolution.
      </p>
    </div>
  );
}
