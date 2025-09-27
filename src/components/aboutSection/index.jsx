import Image from "next/image";
import ab1 from "@/../public/ab1.webp";
import pillarsImg from "@/../public/pillars.webp";
import globeImg from "@/../public/globe.png";
import city from "@/../public/city.png";
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

export function ConstraintsSection() {
  return (
    <section
      className="my-11"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        alignItems: "start",
        padding: "4rem 2rem",
      }}
    >
      {/* Left Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Header */}
        <div>
          <h2 style={{ fontSize: "1.2rem", fontWeight: "600" }}>
            Turning Constraints into Strengths
          </h2>
          <p style={{ fontSize: "0.9rem", color: "#555", marginTop: "0.5rem" }}>
            Rather than viewing geographic and logistical limitations as
            obstacles, we designed them as features that enhance our mission.
          </p>
        </div>

        {/* First row with two cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 5fr",
            gap: "1.5rem",
          }}
        >
          {/* Intimate Gathering */}
          <div
            style={{
              backgroundColor: "#ec407a",
              color: "white",
              padding: "3rem",
              borderRadius: "1rem",
              boxShadow: "8px 8px 0px #f8bbd0",
            }}
          >
            <h3
              style={{
                marginBottom: "0.5rem",
                fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              Intimate Gathering
            </h3>
            <p style={{ fontSize: "0.9rem", lineHeight: "1.4" }}>
              A small, high-trust in-person assembly in Osaka creates the
              conditions for meaningful connection and breakthrough thinking.
            </p>
          </div>

          {/* Global Relay */}
          <div
            style={{
              backgroundColor: "#ec407a",
              color: "white",
              padding: "3rem",
              borderRadius: "1rem",
              boxShadow: "8px 8px 0px #f8bbd0",
            }}
          >
            <h3
              style={{
                marginBottom: "0.5rem",
                fontSize: "1rem",
                fontWeight: "600",
              }}
            >
              Global Relay
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: "1.4",
                marginBottom: "0.5rem",
              }}
            >
              A 24-hour online participation structure spans three global zones,
              ensuring diverse voices are included:
            </p>
            <ul
              style={{
                fontSize: "0.9rem",
                lineHeight: "1.4",
                paddingLeft: "1.2rem",
              }}
            >
              <li>Asia-Pacific</li>
              <li>Europe–Africa</li>
              <li>Americas</li>
            </ul>
          </div>
        </div>

        {/* Full-width Symbolic Completion */}
        <div
          style={{
            backgroundColor: "#ec407a",
            color: "white",
            padding: "1.5rem",
            borderRadius: "1rem",
            boxShadow: "8px 8px 0px #f8bbd0",
          }}
        >
          <h3
            style={{
              marginBottom: "0.5rem",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            Symbolic Completion
          </h3>
          <p style={{ fontSize: "0.9rem", lineHeight: "1.4" }}>
            Closing the event in Kyoto completes our symbolic ring, connecting
            ancient wisdom with future innovation.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Image src={globeImg} alt="Globe" width={400} height={400} />
      </div>
    </section>
  );
}

export function ExpoInspiration() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        alignItems: "center",
        padding: "4rem 2rem",
      }}
    >
      {/* Left Image with orange background */}
      <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
        {/* <div
          style={{
            position: "absolute",
            bottom: "-20px",
            right: "-20px",
            width: "541px",
            height: "722px",
            backgroundColor: "#F4A640",
            borderRadius: "1rem",
            zIndex: 0,
          }}
        /> */}
        <div
          style={{
            borderRadius: "1rem",
            overflow: "hidden",
            position: "relative",
            zIndex: 1,
            maxWidth: "500px",
            width: "100%",
          }}
        >
          <Image src={city} alt="City View" layout="responsive" width={500} height={500} />
        </div>
      </div>

      {/* Right Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <h2 style={{ textAlign: "center", fontWeight: 700, fontSize: "1.7rem", color: "#000" }}>
          Expo 2025 Inspiration
        </h2>

        <p style={{ textAlign: "center", fontSize: "1rem", color: "#333" }}>
          Our Forum draws deep inspiration from the architectural and philosophical
          foundations of Expo 2025 Osaka:
        </p>

        {/* Box 1 */}
        <div
          style={{
            border: "1px solid #F4A640",
            borderRadius: "4px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: "0 0 10px 0", fontWeight: 700, fontSize: "1.2rem", color: "#0A2144" }}>
            Design System: ID → GROUP → WORLD
          </h3>
          <p style={{ margin: 0, fontSize: "1rem", color: "#0A2144" }}>
            A philosophy of connection that moves from individual identity to
            collective collaboration to global impact.
          </p>
        </div>

        {/* Box 2 */}
        <div
          style={{
            border: "1px solid #F4A640",
            borderRadius: "4px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: "0 0 10px 0", fontWeight: 700, fontSize: "1.2rem", color: "#0A2144" }}>
            Grand Ring
          </h3>
          <p style={{ margin: 0, fontSize: "1rem", color: "#0A2144" }}>
            The world’s largest wooden structure serves as a powerful symbol of
            unity in diversity—a continuous circle with no beginning or end.
          </p>
        </div>

        {/* Box 3 */}
        <div
          style={{
            border: "1px solid #F4A640",
            borderRadius: "4px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: "0 0 10px 0", fontWeight: 700, fontSize: "1.2rem", color: "#0A2144" }}>
            Myaku–Myaku
          </h3>
          <p style={{ margin: 0, fontSize: "1rem", color: "#0A2144" }}>
            The Expo mascot embodies the pulse of continuity and interconnection,
            representing the heartbeat of our shared planet.
          </p>
        </div>

        <p style={{ textAlign: "center", fontSize: "12px", color: "#333" }}>
          Our event design intentionally mirrors these principles, creating a living
          metaphor for harmonious coexistence.
        </p>
      </div>
    </section>
  );
}


export default function AboutSection() {
  // Globe layout for thematic pillars (pie segments)
  // Each segment will be a rotated div with icon in the center
  const pieSegments = [
    { ...pillars[0], rotate: 0 },
    { ...pillars[1], rotate: 60 },
    { ...pillars[2], rotate: 120 },
    { ...pillars[3], rotate: 180 },
    { ...pillars[4], rotate: 240 },
    { ...pillars[5], rotate: 300 },
  ];

  return (
    <div
      id="about"
      className="flex flex-col gap-10 px-4 py-8 md:p-8 lg:p-16 text-[#0A2144]"
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
      <h2 className="text-2xl font-bold text-gray-900 mt-15 justify-center flex">
        Why Now : The Critical Moment
      </h2>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card */}
        <div className="rounded-2xl bg-pink-300 p-10 shadow-lg flex flex-col justify-center w-90 mx-auto">
          <h3 className="justify-center flex text-5xl font-extrabold text-gray-900">
            5
          </h3>
          <p className="mt-3 text-lg font-semibold text-gray-800 justify-center flex">
            GPT-5 Impact
          </p>
          <p className="mt-4 text-sm text-gray-700 text-center">
            The latest AI represents a "PhD-level expert in your pocket" with
            unprecedented reasoning abilities and multilingual mastery.
          </p>
        </div>

        {/* Right Card */}
        <div className="rounded-2xl bg-purple-400 p-10 shadow-lg flex flex-col justify-center w-90 mx-auto">
          <h3 className="text-5xl font-extrabold text-white justify-center flex">
            54%
          </h3>
          <p className="mt-3 text-lg font-semibold text-white justify-center flex">
            Global AI Trust
          </p>
          <p className="mt-4 text-sm text-white/90 text-center">
            Only slightly more than half of people worldwide express trust in
            artificial intelligence systems (47-country comprehensive study).
          </p>
        </div>
      </div>

      {/* Bottom Description */}
      <p className="mt-1 text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
        Between these growing capabilities and limited trust lies the vital
        space that must be filled with empathy and accountability. This Forum
        addresses this gap at a pivotal moment in technological development.
      </p>

      {/* Constraints Section */}
      <ConstraintsSection />

      {/* Expo Inspiration Section */}
      <ExpoInspiration />

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

        {/* Globe Pie Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left 3 pillar descriptions */}
          <div className="flex flex-col gap-12 items-end justify-center flex-1">
            <div className="max-w-xs text-right">
              <h3 className="font-bold">{pillars[0].title}</h3>
              <p className="text-gray-600 text-sm">{pillars[0].description}</p>
            </div>
            <div className="max-w-xs text-right">
              <h3 className="font-bold">{pillars[5].title}</h3>
              <p className="text-gray-600 text-sm">{pillars[5].description}</p>
            </div>
            <div className="max-w-xs text-right">
              <h3 className="font-bold">{pillars[4].title}</h3>
              <p className="text-gray-600 text-sm">{pillars[4].description}</p>
            </div>
          </div>
          {/* Globe Pie */}
          <div
            className="relative"
            style={{ width: 320, height: 320, minWidth: 320 }}
          >
            {/* Center Globe Image */}
            <div className="items-center">
              <Image src={pillarsImg} alt="Pillars Globe" width={1000} height={1000} />
            </div>
          </div>
          {/* Right 3 pillar descriptions */}
          <div className="flex flex-col gap-12 items-start justify-center flex-1">
            <div className="max-w-xs text-left">
              <h3 className="font-bold">{pillars[1].title}</h3>
              <p className="text-gray-600 text-sm">{pillars[1].description}</p>
            </div>
            <div className="max-w-xs text-left">
              <h3 className="font-bold">{pillars[2].title}</h3>
              <p className="text-gray-600 text-sm">{pillars[2].description}</p>
            </div>
            <div className="max-w-xs text-left">
              <h3 className="font-bold">{pillars[3].title}</h3>
              <p className="text-gray-600 text-sm">{pillars[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

