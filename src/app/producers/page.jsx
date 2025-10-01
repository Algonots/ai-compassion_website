import React from "react";

// Example producers data (replace with real data as needed)
const producers = [
  { name: "Chris Edwald", subtitle: "", img: "/chris.png" },
  { name: "Producer 2", subtitle: "", img: "/producer2.png" },
  { name: "Producer 3", subtitle: "Creative Producer", img: "/producer3.png" },
  { name: "Producer 4", subtitle: "Technical Producer", img: "/producer4.png" },
  { name: "Producer 5", subtitle: "Line Producer", img: "/producer5.png" },
  { name: "Producer 6", subtitle: "Supervising Producer", img: "/producer6.png" },
  { name: "Producer 7", subtitle: "Field Producer", img: "/producer7.png" },
  { name: "Producer 8", subtitle: "Co-Producer", img: "/producer8.png" },
  { name: "Producer 9", subtitle: "Consulting Producer", img: "/producer9.png" },
];

export default function ProducersPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#0A2144BF]">Our Producers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {producers.map((producer, idx) => (
          <div key={idx} className="bg-white rounded shadow p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 mb-4 flex items-center justify-center overflow-hidden">
              {producer.img && (
                <img
                  src={producer.img}
                  alt={producer.name}
                  className="object-cover w-full h-full"
                />
              )}
            </div>
            <div className="font-semibold text-center w-full">{producer.name}</div>
            <div className="text-sm text-gray-500 text-center w-full">{producer.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
