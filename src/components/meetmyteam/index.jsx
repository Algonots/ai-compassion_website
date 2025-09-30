import React from "react";

// Example team data (replace img with actual URLs or imports)
const team = [
  { name: "Jun Suto", role: "", img: "/jun.png" },
  { name: "Chris Ewald", role: "", img: "/chris.png" },
  { name: "Anuka Roinishvili", role: "", img: "/anuka.png" },
  { name: "Naomi Yamazaki", role: "", img: "/naomi.png" },
  { name: "Maki Kawamura", role: "", img: "/maki.png" },
  { name: "Deepu Nath", role: "", img: "/deepu.png" },
  { name: "Akshaya Sita Rajesh", role: "", img: "/akshaya.png" },
  { name: "Rasha Hasoon", role: "", img: "/rasha.png" },
  { name: "Nash", role: "", img: "/nash.png" },
  { name: "Dany Koshy", role: "", img: "/dany.png" },
  { name: "Akshat Pradeep", role: "", img: "/akshat.png" },
  { name: "Jibu Mathew", role: "", img: "/jibu.png" },
];

export default function MeetMyTeam() {
  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#0A2144BF]">Meet My Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {team.map((member, idx) => (
          <div key={idx} className="bg-white rounded shadow p-4 flex flex-col items-center">
            {member.img ? (
              <img
                src={member.img}
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover mb-3"
              />
            ) : (
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-3" />
            )}
            <div className="font-semibold">{member.name}</div>
            <div className="text-sm text-gray-500">{member.role}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
