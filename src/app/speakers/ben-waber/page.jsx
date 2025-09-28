import Image from "next/image";
import ben from "@/../public/ben.webp";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={ben}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Ben Waber</h1>
      <p className="mt-4 text-lg text-gray-700">
        Ben Waber is a visiting scientist at MIT Media Lab and senior visiting researcher at Ritsumeikan University, recognized as a leading thinker at the intersection of management, data, workplace, and people. Former president and CEO of Humanyze, a workplace analytics company he co-founded, and senior researcher at Harvard Business School. His international bestseller People Analytics was published in 2013, and he regularly speaks at major institutions including the UN and World Economic Forum.
      </p>
    </div>
  );
}
