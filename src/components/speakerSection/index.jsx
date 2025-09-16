'use client'

import { useState } from "react";
import Image from "next/image";
import dummy from "@/../public/dummy.webp";

const speakers = [
    {
        name: "John Smith",
        title: "John Smith is a leading expert in artificial intelligence, with over a decade of experience in machine learning and data science. As the founder of Tech Innovations, he has spearheaded numerous projects that leverage AI to solve real-world problems. ",
        img: dummy,
    },
    {
        name: "John Smith",
        title: "John Smith is a leading expert in artificial intelligence, with over a decade of experience in machine learning and data science. As the founder of Tech Innovations, he has spearheaded numerous projects that leverage AI to solve real-world problems. ",
        img: dummy,
    }, {
        name: "John Smith",
        title: "John Smith is a leading expert in artificial intelligence, with over a decade of experience in machine learning and data science. As the founder of Tech Innovations, he has spearheaded numerous projects that leverage AI to solve real-world problems. ",
        img: dummy,
    }, {
        name: "John Smith",
        title: "John Smith is a leading expert in artificial intelligence, with over a decade of experience in machine learning and data science. As the founder of Tech Innovations, he has spearheaded numerous projects that leverage AI to solve real-world problems. ",
        img: dummy,
    }, {
        name: "John Smith",
        title: "John Smith is a leading expert in artificial intelligence, with over a decade of experience in machine learning and data science. As the founder of Tech Innovations, he has spearheaded numerous projects that leverage AI to solve real-world problems. ",
        img: dummy,
    }, {
        name: "John Smith",
        title: "John Smith is a leading expert in artificial intelligence, with over a decade of experience in machine learning and data science. As the founder of Tech Innovations, he has spearheaded numerous projects that leverage AI to solve real-world problems. ",
        img: dummy,
    }, {
        name: "John Smith",
        title: "John Smith is a leading expert in artificial intelligence, with over a decade of experience in machine learning and data science. As the founder of Tech Innovations, he has spearheaded numerous projects that leverage AI to solve real-world problems. ",
        img: dummy,
    },
    {
        name: "John Smith",
        title: "John Smith is a leading expert in artificial intelligence, with over a decade of experience in machine learning and data science. As the founder of Tech Innovations, he has spearheaded numerous projects that leverage AI to solve real-world problems. ",
        img: dummy,
    },
]

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
                Our speakers are global voices at the intersection of technology, culture,
                policy, and the environment.
            </p>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {speakers.map((speaker, index) => (
                    <div
                        key={index}
                        className="h-60 md:h-fit relative overflow-hidden rounded-4xl cursor-pointer group"
                        onClick={() => handleClick(index)}
                    >
                        <Image
                            src={speaker.img}
                            alt={speaker.name}
                            width={160}
                            height={160}
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay: shows on hover OR if clicked */}
                        <div
                            className={`absolute inset-0 bg-[#D1462E] flex flex-col items-center justify-center gap-2 md:gap-4 text-center text-white px-2 transition-opacity duration-300
              ${activeIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                        >
                            <h2 className="font-semibold md:text-2xl">{speaker.name}</h2>
                            <p className="text-[.65rem] md:text-sm">{speaker.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}