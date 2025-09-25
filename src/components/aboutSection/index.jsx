import Image from "next/image";
import ab1 from "@/../public/ab1.webp";
import {
  GlobeAltIcon,
  BookOpenIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  PauseCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const pillars = [
  {
    title: "Harmony Across Systems",
    description:
      "Designing AI to coexist with natural ecosystems, social systems, and technological networks.",
    icon: <GlobeAltIcon className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Ma in Innovation",
    description:
      "Embedding intentional pauses for reflection and co-creation in the AI development process.",
    icon: <PauseCircleIcon className="w-8 h-8 text-pink-600" />,
  },
  {
    title: "Cultural Wisdom & Global Equity",
    description:
      "Ensuring AI honors diverse traditions, languages, and perspectives.",
    icon: <UserGroupIcon className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Regenerative AI Economics",
    description:
      "Building AI-driven business models that restore environmental and community well-being.",
    icon: <SparklesIcon className="w-8 h-8 text-green-600" />, // closest replacement for "Leaf"
  },
  {
    title: "Trust, Transparency and Accountability",
    description:
      "Closing the global trust gap through openness and ethical governance.",
    icon: <ShieldCheckIcon className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Education for Co-Flourishing",
    description:
      "Cultivating AI literacy and eco-social awareness in the next generation.",
    icon: <BookOpenIcon className="w-8 h-8 text-orange-600" />,
  },
];

export default function AboutSection() {
  // Globe layout for thematic pillars
  // Arrange pillars in a circle using absolute positioning
  const globePillars = [
    { ...pillars[0], angle: 270 }, // Top
    { ...pillars[1], angle: 330 },
    { ...pillars[2], angle: 30 },
    { ...pillars[3], angle: 90 }, // Bottom
    { ...pillars[4], angle: 150 },
    { ...pillars[5], angle: 210 },
  ];
  const globeRadius = 160; // px, adjust for size

  return (
    <div
      id="about"
      className="flex flex-col gap-14 px-4 py-8 md:p-8 lg:p-16 text-[#0A2144]"
    >
      {/* About Us */}
      <h1 className="text-2xl md:text-3xl font-semibold">About Us</h1>
      <div className="flex flex-col xl:flex-row gap-12 items-center justify-between">
        <div className="w-full xl:w-1/2 flex flex-col gap-4 items-start">
          <b className="text-xl md:text-2xl font-semibold">Our Vision</b>
          <p className="text-base md:text-lg leading-relaxed">
            Artificial intelligence is advancing faster than ever, yet global
            trust in these systems remains uncertain. We imagine a future where
            nature, humanity, and technology thrive together. This forum
            explores how AI can move beyond fear and competition to nurture
            ecosystems, preserve cultural heritage, and strengthen communities.
            <br />
            <br />
            Our approach is guided by two essential Japanese concepts:
          </p>
          <div className="border-l-4 pl-4 py-4 border-[#CB4B4B]">
            <b>Wa (和)</b>
            <p className="text-base md:text-lg pt-2">
              The principle of harmony and peaceful unity, where diverse
              elements come together in balance.
            </p>
          </div>
          <div className="border-l-4 pl-4 py-4 border-[#CB4B4B]">
            <b>Ma (間)</b>
            <p className="text-base md:text-lg pt-2">
              The concept of vital space between elements—the pause that gives
              meaning and allows for reflection.
            </p>
          </div>
        </div>

        <div className="w-full xl:w-1/2">
          <Image
            src={ab1}
            alt="About Us"
            className="w-[95%] h-[95%] shadow-[25px_25px_0px_rgba(255,205,119,0.8)] lg:shadow-[35px_35px_0px_rgba(255,205,119,0.8)] rounded-t-[5rem] rounded-r-[5rem]"
          />
        </div>
      </div>

      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-1 justify-center flex">
        Why Now : The Critical Moment
      </h2>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card */}
        <div className="rounded-2xl bg-pink-300 p-10 shadow-lg flex flex-col justify-center">
          <h3 className="justify-center flex text-5xl font-extrabold text-gray-900">
            5
          </h3>
          <p className="mt-3 text-lg font-semibold text-gray-800 justify-center flex">
            GPT-5 Impact
          </p>
          <p className="mt-4 text-sm text-gray-700">
            The latest AI represents a "PhD-level expert in your pocket" with
            unprecedented reasoning abilities and multilingual mastery.
          </p>
        </div>

        {/* Right Card */}
        <div className="rounded-2xl bg-purple-400 p-20 shadow-lg flex flex-col justify-center">
          <h3 className="text-5xl font-extrabold text-white justify-center flex">
            54%
          </h3>
          <p className="mt-3 text-lg font-semibold text-white justify-center flex">
            Global AI Trust
          </p>
          <p className="mt-4 text-sm text-white/90">
            Only slightly more than half of people worldwide express trust in
            artificial intelligence systems (47-country comprehensive study).
          </p>
        </div>
      </div>

      {/* Bottom Description */}
      <p className="mt-1 text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto">
        Between these growing capabilities and limited trust lies the vital
        space that must be filled with empathy and accountability. This Forum
        addresses this gap at a pivotal moment in technological development.
      </p>

      {/* Thematic Pillars Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Thematic Pillars
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-center">
          Six interconnected themes will guide our discussions, workshops, and
          commitments. Each pillar will feature dedicated sessions led by global
          experts who embody both technical expertise and humanistic values,
          ensuring a holistic approach to AI development.
        </p>

        {/* Globe layout */}
        <div
          className="relative mx-auto my-12"
          style={{ width: 400, height: 400, maxWidth: "100%" }}
        >
          {/* Globe background */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-100 to-purple-200 border-4 border-purple-200 shadow-lg"
            style={{ width: 320, height: 320 }}
          />
          {/* Pillars positioned around the globe */}
          {globePillars.map((pillar, idx) => {
            const angleRad = (pillar.angle * Math.PI) / 180;
            const x =
              Math.cos(angleRad) * globeRadius + 200 - 80; // center + offset - half card width
            const y =
              Math.sin(angleRad) * globeRadius + 200 - 60; // center + offset - half card height
            return (
              <div
                key={idx}
                className="absolute w-40 h-28 flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-purple-100 p-3 rounded-2xl shadow-md hover:shadow-lg transition"
                style={{
                  left: x,
                  top: y,
                  textAlign: "center",
                }}
              >
                <div className="flex justify-center mb-2">{pillar.icon}</div>
                <h3 className="text-base font-semibold mb-1">{pillar.title}</h3>
                <p className="text-gray-600 text-xs">{pillar.description}</p>
              </div>
            );
          })}
          {/* Center Globe Icon */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <GlobeAltIcon className="w-20 h-20 text-purple-400 mb-2" />
            <span className="font-bold text-lg text-purple-700">
              AI+Compassion
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
