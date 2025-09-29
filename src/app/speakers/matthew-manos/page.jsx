import Image from "next/image";
import manos from "@/../public/manos.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={manos}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Matthew Manos
</h1>
      <p className="mt-4 text-lg text-gray-700">
        Matthew Manos is founder of verynice, a design-strategy consultancy that gives half its work away to nonprofits, serving clients including Apple, Google, UNICEF, and NASA. As Associate Dean at the Academy, he leads programs challenging students to design solutions for complex social issues. A global lecturer and author on design and social innovation, Manos created Apple Education training across 36 countries, co-designed the Iovine Young curriculum and was named by Huffington Post one of seven millennials changing the world.
      </p>
    </div>
  );
}
