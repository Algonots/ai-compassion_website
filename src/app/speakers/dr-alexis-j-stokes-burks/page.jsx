import Image from "next/image";
import alexis from "@/../public/alexis.png";

export default function GaryABolles() {
  return (
    <div className="p-8 max-w-3xl mx-auto text-center mt-20">
      <Image
        src={alexis}
        alt="Hiroshi Ishiguro"
        width={300}
        height={300}
        className="mx-auto rounded-2xl shadow-md"
      />
      <h1 className="text-3xl font-bold mt-6">Dr. Alexis J. Stokes-Burks</h1>
      <p className="mt-4 text-lg text-gray-700">
        Dr. Alexis J. Stokes-Burks is an accomplished equity and inclusion strategist, keynote speaker, and leadership development facilitator with over 15 years of experience.
She is the Founder and Chief Strategist of Stokes Strategy & Consulting, partnering with universities, nonprofit, and corporate organizations to build policies, practices and a culture where everyone can thrive. She previously served as Associate Chief Diversity and Inclusion Officer at Harvard University and Assistant Dean at Harvard School of Engineering.

      </p>
    </div>
  );
}