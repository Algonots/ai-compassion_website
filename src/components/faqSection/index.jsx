"use client";

import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

const faqs = [
    {
        question: "What is the AI+Compassion Global Summit?",
        answer: "It is a global summit focused on exploring the intersection of AI and compassion, bringing together experts and leaders worldwide."
    },
    {
        question: "Who is organizing this event?",
        answer: "The summit is organized by Compassion AI in collaboration with global academic and industry partners."
    },
    {
        question: "What makes this summit unique?",
        answer: "The focus on human-centered AI and compassionate technology makes this summit stand out from typical tech conferences."
    },
    {
        question: "What are the main objectives?",
        answer: "The objectives include knowledge-sharing, fostering collaboration, and promoting responsible AI practices."
    },
    {
        question: "Where is the USA Pavilion located at Expo 2025?",
        answer: "The USA Pavilion will be located in Osaka, Japan during Expo 2025."
    },
    {
        question: "How can I participate?",
        answer: ""
    },
    {
        question: "What is the cost to attend?",
        answer: ""
    },
    {
        question: "Can I attend virtually?",
        answer: ""
    },
    {
        question: "How do I register?",
        answer: ""
    },
    {
        question: "Are meals included?",
        answer: ""
    },
    {
        question: "What is the complete schedule?",
        answer: ""
    },
    {
        question: "How does the global relay work?",
        answer: ""
    },
    {
        question: "What happens during the USA Pavilion event?",
        answer: ""
    },
    {
        question: "What is the Kyoto closing ceremony?",
        answer: ""
    },
    {
        question: "What if my question isn't answered here?",
        answer: ""
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Split faqs into 3 roughly equal chunks
    const columns = [[], [], []];
    faqs.forEach((faq, i) => {
        columns[i % 3].push(faq);
    });

    return (
        <div id="faq" className="bg-[#FAF7F0] text-[#0A2144] px-6 py-8 md:py-12 md:px-20 m-4 my-6 rounded-4xl md:rounded-[4rem]">
            <h2 className="text-2xl md:text-3xl font-libre font-bold text-center mb-8">
                Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-8">
                {columns.map((col, colIndex) => (
                    <div key={colIndex} className="max-w-2xl mx-auto flex flex-col divide-y divide-gray-300 w-full">
                        {col.map((faq, index) => {
                            const actualIndex = colIndex * faqs.length + index;
                            return (
                                <div key={index} className="py-4 ">
                                    <button
                                        onClick={() => toggleFAQ(actualIndex)}
                                        className="w-full flex gap-4 items-center justify-between font-sen text-left text-lg focus:outline-none"
                                    >
                                        {faq.question}
                                        <GoChevronDown
                                            className={`transform transition-transform duration-300 ${openIndex === actualIndex ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    {openIndex === actualIndex && (
                                        <p className="mt-3 text-sm text-gray-700">{faq.answer}</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
}