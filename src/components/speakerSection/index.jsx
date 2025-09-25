'use client'

import { useState } from "react";
import Image from "next/image";
import hiroshi from "@/../public/hiroshi.png";
import gary from "@/../public/gary.png";
import kunal from "@/../public/kunal.png";
import aaker from "@/../public/aaker.png";
import jenna from "@/../public/jenna.png";
import stephin from "@/../public/stephin.png";
import alex from "@/../public/alex.png";
import nell from "@/../public/nell.png";

const speakers = [
  {
    name: "Hiroshi Ishiguro",
    title:
      "Hiroshi Ishiguro, a renowned robotics and android scientist and creator of the Geminoid avatar, is a professor and research leader who has received multiple international awards, making him a distinguished speaker in the field.",
    img: hiroshi,
  },
  {
    name: "Gary Bolles",
    title:
      "Gary A. Bolles lectures and writes about the intersection of impact, innovation, and capital. He is a co-founder of SoCap Global, the enduring conference helping entrepreneurs and investors to explore strategies for “doing well and doing good.” ...",
    img: gary,
  },
  {
    name: "Kunal Sood",
    title:
      "Kunal Sood, is an award-winning disruptive innovator, family executive and high impact philanthropist. ...",
    img: kunal,
  },
  {
    name: "Jennifer Aaker",
    title:
      "Dr. Jennifer Aaker, General Atlantic Professor at Stanford Graduate School of Business, is a renowned behavioral scientist and leading expert ...",
    img: aaker,
  },
  {
    name: "Sister Jenna",
    title:
      "Sister Dr. Jenna is a spiritual mentor, author, radio and TV personality, and speaker. ...",
    img: jenna,
  },
  {
    name: "Stephen Ibaraki",
    title:
      "Stephen Ibaraki is a serial entrepreneur, investor, and futurist whose work spans over 100 organizations ...",
    img: stephin,
  },
  {
    name: "Alex Cahana, MD",
    title:
      "Dr. Alex Cahana specializes in Web 3.0 transformation, in emerging markets and developing economies (EMDE). ...",
    img: alex,
  },
  {
    name: "Nell Watson",
    title:
      "Eleanor ‘Nell’ Watson is a leading AI ethics and safety researcher, driving global standardization and certification initiatives ...",
    img: nell,
  },
];

export default function SpeakerSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="speakers" className="py-12 text-center">
      <h1 className="text-3xl md:text-4xl font-libre font-semibold text-[#0A2144]">
        Speakers
      </h1>
      <p className="px-4 md:px-8 w-full lg:w-1/2 mx-auto font-libre my-6 text-sm md:text-lg text-[#0A2144BF]">
        Our speakers are global voices at the intersection of technology,
        culture, policy, and the environment.
      </p>

      {/* Horizontal slider */}
      <div className="mt-10 overflow-x-auto">
        <div className="flex gap-6 px-4 py-2 w-max">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="relative min-w-[200px] md:min-w-[240px] max-w-[240px] aspect-[3/4] overflow-hidden rounded-3xl cursor-pointer group flex-shrink-0"
              onClick={() => handleClick(index)}
              style={{ transition: "box-shadow 0.2s" }}
            >
              <Image
                src={speaker.img}
                alt={speaker.name}
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-[#D1462E] flex flex-col items-center justify-center gap-2 md:gap-4 text-center text-white px-2 transition-opacity duration-300
                  ${
                    activeIndex === index
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
              >
                <h2 className="font-semibold md:text-2xl">{speaker.name}</h2>
                <p className="text-[.65rem] md:text-sm">{speaker.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
