"use client";
import Image from "next/image";
import plant from '@/../public/1st block image.png';
import pot from '@/../public/second block image.png';
import dance from '@/../public/fourth block image.png';
import temple from '@/../public/third block image.png';
export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-20 py-20 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-8">
        {/* Left Content */}
        <div className="flex flex-col justify-center h-full max-w-xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            AI+Compassion <br />
            Global Forum 2025
          </h1>
          <p className="mt-6 font-bold text-black-700 text-[32px]">
            October 2, 2025 | USA Pavilion, Expo 2025 Osaka
          </p>
          <p className="mt-4 text-base text-gray-600">
            The Global Forum on AI + Compassion unites innovators, policymakers,
            and cultural leaders to explore how artificial intelligence can
            serve humanity and the planet. Together, we’ll launch a global
            alliance, spark a new narrative, and activate projects that place
            compassion at the heart of technology.
          </p>
          <div className="mt-8">
            <a
              href="#register"
              className="inline-block rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-purple-700 transition"
            >
              Register Now
            </a>
          </div>
        </div>

        {/* Right Content - Images Grid */}
        <div className="mt-12 grid grid-cols-2 gap-6 lg:mt-0">
          <div className="overflow-hidden rounded-2xl ">
            <Image
              src={plant}
              alt="Plant in hands"
              width={500}
              height={500}
              className="h-full w-full"
            />
          </div>
          <div className="overflow-hidden rounded-2xl mt-10">
            <Image
              src={pot}
              alt="Clay pots"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="overflow-hidden">
            <Image
              src={temple}
              alt="Temple"
              width={500}
              height={500}
              className="h-full w-full object-fit"
            />
          </div>
          <div className="overflow-hidden rounded-2xlx mt-10">
            <Image
              src={dance}
              alt="Traditional dancer"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
