"use client";
import React, { useState } from "react";

const schedule = [
    // {
    //     time: "11:00 AM - 5:00 PM JST",
    //     title: "USA Pavilion Opening",
    //     subtitle: "Osaka: October 2, 2025",
    //     items: [
    //         "11:00a - 5:00p Osaka",
    //         "7:30a - 1:30p Mumbai",
    //         "7:00p - 1:00a San Francisco",
    //     ],
    // },
    {
        time: "",
        title: "Tamami Tono",
        subtitle: "",
        items: [
            ,
        ],
    },
    // {
    //     time: "12:00 PM - 1:00 PM JST",
    //     title: "Cultural Foundations",
    //     subtitle: "“East Meets West: Integrating Wisdom Traditions”",
    //     items: [
    //         "12:00–12:45: From Storytelling to System Building",
    //         "12:45–1:00: Interactive synthesis & table discussions",
    //     ],
    // },
    {
        time: "",
        title: "Dr. Olaf Witkowski",
        subtitle: "",
        // items: [
        //     "12:00–12:45: From Storytelling to System Building",
        //     "12:45–1:00: Interactive synthesis & table discussions",
        // ],
    },
    // {
    //     time: "1:00 PM - 2:00 PM JST",
    //     title: "Working Lunch & Academic Leadership",
    //     subtitle: "“Research Frontiers in Compassionate AI”",
    //     items: [
    //         "1:00–1:30: Working lunch with structured networking",
    //         "1:30–2:00: Education in the Age of Empathy",
    //     ],
    // },
    {
        time: "",
        title: "Sister Jenna",
        subtitle: "",
        // items: [
        //     "1:00–1:30: Working lunch with structured networking",
        //     "1:30–2:00: Education in the Age of Empathy",
        // ],
    },
    // {
    //     time: "2:00 PM - 3:00 PM JST",
    //     title: "Innovation Showcase",
    //     subtitle: "“Compassionate AI in Action”",
    //     items: [
    //         "2:00–2:20: Healthcare AI demonstration",
    //         "2:20–2:40: Future of Work applications",
    //         "2:40–3:00: Interactive Q&A",
    //     ],
    // },
    {
        time: "",
        title: "Toshie Takahashi",
        subtitle: "",
        // items: [
        //     "2:00–2:20: Healthcare AI demonstration",
        //     "2:20–2:40: Future of Work applications",
    //     "2:40–3:00: Interactive Q&A",
    // ],
    },
    // {
    //     time: "3:00 PM - 4:00 PM JST",
    //     title: "Co-Creation Workshop",
    //     subtitle: "“Building Frameworks Together”",
    //     items: [
    //         "Hands-on framework development (parallel sessions)",
    //         "Bias mitigation, wisdom integration, measurement frameworks",
    //         "Cross-track synthesis & commitments",
    //     ],
    // },
    {
        time: "",
        title: "Toshie Takahashi",
        subtitle: "",
        // items: [
        //     "Hands-on framework development (parallel sessions)",
        //     "Bias mitigation, wisdom integration, measurement frameworks",
        //     "Cross-track synthesis & commitments",
        // ],
    },
    // {
    //     time: "4:00 PM - 5:00 PM JST",
    //     title: "Alliance Launch & Global Handoff",
    //     subtitle: "“The Osaka Compact Ceremony”",
    //     items: [
    //         "Platform launch & group signing",
    //         "Global AI+Compassion Alliance commitments",
    //         "Handoff to South Asia",
    //     ],
    // },
    {
        time: "",
        title: "Hiroshi Ishiguro & Edi Pyrek",
        subtitle: "",
        // items: [
        //     "Platform launch & group signing",
        //     "Global AI+Compassion Alliance commitments",
        //     "Handoff to South Asia",
        // ],
    },
    // {
    //     time: "5:00 PM - 8:00 PM JST",
    //     title: "South Asia Region (Mumbai)",
    //     items: [
    //         "Regional opening with traditional Indian music",
    //         "Workshop: Inclusive AI Design for Diverse Communities",
    //         "Regional commitments & handoff to GCC/Europe",
    //     ],
    // },
    {
        time: "",
        title: "Alex Cahana",
        // items: [
        //     "Regional opening with traditional Indian music",
        //     "Workshop: Inclusive AI Design for Diverse Communities",
        //     "Regional commitments & handoff to GCC/Europe",
        // ],
    },
    {
        time: "",
        title: "Yoichi Ochiai / Narumi Yoshikawa",
        // items: [
        //     "Regional opening with traditional Indian music",
        //     "Workshop: Inclusive AI Design for Diverse Communities",
        //     "Regional commitments & handoff to GCC/Europe",
        // ],
    },
];

const global = [
    {
        subtitle: "October 2, 2025",
        time: "",
        title: "South Asia",
        items: [
            "Sadhvi Bhagawati Saraswati",
        ],
    },
    {
        subtitle: "October 2, 2025",
        time: "",
        title: "GCC/Europe",
        items: [
            "Nell Watson",
            
        ],
    },
    {
        subtitle: "October 2, 2025",
        time: "",
        title: "Africa",
        items: [
            "Gary Bolles",
        ],
    },
    {
        subtitle: "October 2, 2025",
        time: "",
        title: "Latin America",
        items: [
            "Theodore H. Schwartz, MD",
            
        ],
    },
    {
        subtitle: "October 2, 2025",
        time: "",
        title: "North America",
        items: [
            "Stephen Ibaraki",
            "Matthew Manos",
            "Douglas Thomas",
            "Jennifer Aaker",
        ],
    },
    {
        subtitle: "October 3, 2025",
        time: "",
        title: "Oceania",
        items: [
            "Tim Moriarity",
            "Olivera Tomic",
            "Ian Haycroft",
        ],
    },
    {
        time: "<1 hour Ma break>",
        title: "",
        items: [],
    },
];

// Add Kyoto session for October 3, 2025
const kyoto = [
    {
        time: "12:00 PM - 2:00 PM JST",
        title: "Kyoto",
        subtitle: "October 3, 2025",
        items: [
            "12:00p - 2:00p Kyoto",
            "8:30a - 10:30a Mumbai",
            "8:00p - 11:00p San Francisco",
        ],
    },
    {
        time: "1:00 - 2:00 PM JST",
        title: "Cultural Integration Experience",
        subtitle: '"Ikebana Workshop: Embodying Wa (和) and Ma (間)"',
        items: [
            "1:00-1:45 PM: Traditional Japanese floral art workshop",
            "1:45-2:00 PM: Group reflection on harmony and mindful space",
        ],
    },
    {
        time: "1:00 - 2:00 PM  JST",
        title: "Working Lunch & Academic Leadership",
        subtitle: "“Research Frontiers in Compassionate AI”",
        items: [
            "1:00-1:30 PM: Working lunch with structured networking",
            '1:30-2:00 PM: "AI Education in the Age of Empathy" + "Bridging Generations Through Technology"',
            'Speakers: Dr. Noriko Arai (Japan) + Nikoru Kondo (14-year-old entrepreneur, Japan)'
        ],
    },
    {
        time: "2:00 PM - 3:00 PM JST",
        title: "Innovation Showcase",
        subtitle: "“Compassionate AI in Action”",
        items: [
            "2:00-2:20 PM: Healthcare AI demonstration - Alex Cahana, MD",
            "2:20-2:40 PM: Future of Work applications - Gary A. Bolles",
            "2:40-3:00 PM: Interactive Q&A with all presenters",
        ],
    },
    {
        time: "2:00 PM - 3:00 PM JST",
        title: "Commitment & Celebration",
        subtitle: '"The Ring of Co-Existence Complete"',
        items: [
            "2:00-2:30 PM: Final commitment ceremony and accountability partner assignments",
            "2:30-2:45 PM: Group photo and documentation",
            "2:45-3:00 PM: Closing circle and appreciation ceremony",
        ],
    }
];

// Add pre-event schedule data
const preEvent = [
  {
    title: "Lab A",
    items: [
      "Los Angeles (PDT): Sept 29, 8:00–9:00 PM",
      "Vienna (CEST): Sept 30, 5:00–6:00 AM",
      "Tokyo (JST): Sept 30, 12:00–1:00 PM",
    ],
  },
  {
    title: "Lab B",
    items: [
      "Los Angeles (PDT): Sept 29, 12:00–1:00 AM",
      "Vienna (CEST): Sept 30, 9:00–10:00 AM",
      "Tokyo (JST): Sept 30, 4:00–5:00 PM",
    ],
  },
];

// Add mapping for locations and their time conversions
const locations = [
  { label: "UTC", key: "UTC", offset: -9 },
  { label: "San Francisco (PDT)", key: "PDT", offset: -16 },      // UTC-7, JST-16
  { label: "Osaka (JST)", key: "JST", offset: 0 },                // JST+0
  { label: "Mumbai (IST)", key: "IST", offset: -3.5 },            // UTC+5:30, JST-3.5
  { label: "Abu Dhabi (GST)", key: "GST", offset: -5 },           // UTC+4, JST-5
  { label: "London (BST)", key: "BST", offset: -8 },              // UTC+1, JST-8
  { label: "New York (EDT)", key: "EDT", offset: -13 },           // UTC-4, JST-13
  { label: "Lagos (WAT)", key: "WAT", offset: -8 },               // UTC+1, JST-8
  { label: "Rio de Janeiro (BRT)", key: "BRT", offset: -12 },     // UTC-3, JST-12
  { label: "Sydney (AEST)", key: "AEST", offset: +1 },            // UTC+10, JST+1
];

// Helper to convert time string from JST to other timezones
function convertTimeRange(jstRange, offset) {
  // Example input: "11:00 AM - 12:00 PM JST"
  // Returns: "7:00 PM - 8:00 PM PDT" (if offset = -16)
  if (!jstRange) return "";
  const match = jstRange.match(/(\d{1,2}:\d{2})\s*(AM|PM)\s*-\s*(\d{1,2}:\d{2})\s*(AM|PM)/i);
  if (!match) return jstRange;
  let [ , start, startPeriod, end, endPeriod ] = match;

  function to24h(time, period) {
    let [h, m] = time.split(":").map(Number);
    if (period.toUpperCase() === "PM" && h !== 12) h += 12;
    if (period.toUpperCase() === "AM" && h === 12) h = 0;
    return h * 60 + m;
  }
  function from24h(mins) {
    mins = (mins + 24 * 60) % (24 * 60);
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    let period = h >= 12 ? "PM" : "AM";
    if (h === 0) h = 12;
    else if (h > 12) h -= 12;
    return `${h}:${m.toString().padStart(2, "0")} ${period}`;
  }
  const startMins = to24h(start, startPeriod) + offset * 60;
  const endMins = to24h(end, endPeriod) + offset * 60;
  return `${from24h(startMins)} - ${from24h(endMins)}`;
}

// Helper to convert inner time strings (e.g., "11:00–11:15: ...") for schedule items
function convertInnerTime(item, offset, locationKey) {
  // Match patterns like "11:00–11:15: ..." or "11:00–11:15 ..."
  const match = item.match(/^(\d{1,2}:\d{2})[–-](\d{1,2}:\d{2})(?::)?\s*(.*)$/);
  if (!match) return item;
  let [, start, end, rest] = match;

  function to24h(time) {
    let [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  }
  function from24h(mins) {
    mins = (mins + 24 * 60) % (24 * 60);
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    let period = h >= 12 ? "PM" : "AM";
    if (h === 0) h = 12;
    else if (h > 12) h -= 12;
    return `${h}:${m.toString().padStart(2, "0")} ${period}`;
  }
  // Assume original times are JST and in 24h format
  const startMins = to24h(start) + offset * 60;
  const endMins = to24h(end) + offset * 60;
  return `${from24h(startMins)}–${from24h(endMins)}${rest ? ": " + rest : ""} ${locationKey}`;
}

// Helper to convert global time strings (e.g., "5:00-5:30 PM: ...") for global schedule items
function convertGlobalTime(item, offset, locationKey) {
  // Match patterns like "5:00-5:30 PM: ..." or "11:30 PM-12:30 AM: ..."
  const match = item.match(/^(\d{1,2}:\d{2})\s*(AM|PM)[–-](\d{1,2}:\d{2})\s*(AM|PM):?\s*(.*)$/i);
  if (!match) return item;
  let [, start, startPeriod, end, endPeriod, rest] = match;

  function to24h(time, period) {
    let [h, m] = time.split(":").map(Number);
    if (period.toUpperCase() === "PM" && h !== 12) h += 12;
    if (period.toUpperCase() === "AM" && h === 12) h = 0;
    return h * 60 + m;
  }
  function from24h(mins) {
    mins = (mins + 24 * 60) % (24 * 60);
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    let period = h >= 12 ? "PM" : "AM";
    if (h === 0) h = 12;
    else if (h > 12) h -= 12;
    return `${h}:${m.toString().padStart(2, "0")} ${period}`;
  }
  const startMins = to24h(start, startPeriod) + offset * 60;
  const endMins = to24h(end, endPeriod) + offset * 60;
  return `${from24h(startMins)}-${from24h(endMins)}: ${rest} ${locationKey}`;
}

function TimelineSection({
  title,
  events,
  lineColor,
  showProducer = false,
  locationKey = "JST",
  locationOffset = 0,
  showLocationButtons = false,
  onLocationChange = () => {},
  stickyTitle = false,
  fixedLocationKey,
  fixedLocationOffset,
  showDropdown = false,
  useParentLocation = false, // NEW: use parent location state
  parentLocationKey,
  parentLocationOffset,
}) {
  // Use parent location if requested (for global relay)
  const effectiveLocationKey = useParentLocation ? parentLocationKey : (fixedLocationKey ?? locationKey);
  const effectiveLocationOffset = useParentLocation ? parentLocationOffset : (fixedLocationOffset ?? locationOffset);

  // Responsive: show dropdown on all screens if showDropdown, otherwise dropdown on mobile and buttons on md+
  return (
    <div className="mb-12">
      <div
        className={
          stickyTitle
            ? "sticky top-0 z-10 bg-white border-b border-gray-200"
            : ""
        }
      >
        <h1
          className={`text-3xl font-bold pl-4 md:text-center my-6`}
          style={{ color: lineColor }}
        >
          {title}
        </h1>
        {showLocationButtons && !showDropdown && (
          <>
            {/* Mobile: dropdown */}
            <div className="flex md:hidden justify-center mb-6">
              <select
                className="border-2 border-[#89478D] rounded px-4 py-2 font-semibold"
                style={{
                  backgroundColor: "#89478D",
                  color: "#fff"
                }}
                value={locationKey}
                onChange={e => {
                  const selected = locations.find(l => l.key === e.target.value);
                  if (selected) onLocationChange(selected.key, selected.offset);
                }}
              >
                {locations.map(loc => (
                  <option
                    key={loc.key}
                    value={loc.key}
                    style={{
                      backgroundColor: locationKey === loc.key ? "#89478D" : "#fff",
                      color: locationKey === loc.key ? "#fff" : "#89478D"
                    }}
                  >
                    {loc.label}
                  </option>
                ))}
              </select>
            </div>
            {/* Desktop: buttons */}
            <div className="gap-4 justify-center mb-6 hidden md:flex">
              {locations.map((loc) => (
                <button
                  key={loc.key}
                  type="button"
                  className={`px-4 py-2 rounded font-semibold border-2 transition focus:outline-none`}
                  style={{
                    backgroundColor: locationKey === loc.key ? "#89478D" : "#fff",
                    color: locationKey === loc.key ? "#fff" : "#89478D",
                    borderColor: "#89478D"
                  }}
                  onClick={() => onLocationChange(loc.key, loc.offset)}
                >
                  {loc.label}
                </button>
              ))}
            </div>
          </>
        )}
        {showDropdown && (
          <div className="flex justify-center mb-6">
            <select
              className="border-4 border-[#89478D] rounded px-4 py-2 font-semibold"
              style={{
                backgroundColor: "#89478D",
                color: "#fff"
              }}
              value={locationKey}
              onChange={e => {
                const selected = locations.find(l => l.key === e.target.value);
                if (selected) onLocationChange(selected.key, selected.offset);
              }}
            >
              {locations.map(loc => (
                <option
                  key={loc.key}
                  value={loc.key}
                  style={{
                    backgroundColor: locationKey === loc.key ? "#89478D" : "#fff",
                    color: locationKey === loc.key ? "#fff" : "#89478D"
                  }}
                >
                  {loc.label}
                </option>
              ))}
            </select>
          </div>
        )}
        {/* For fixed time zone, show a label */}
        {fixedLocationKey && !showDropdown && (
          <div className="flex justify-center mb-4">
            <span
              className="inline-block px-4 py-2 rounded font-semibold border-2 border-[#89478D]"
              style={{
                backgroundColor: "#89478D",
                color: "#fff"
              }}
            >
              {locations.find(l => l.key === fixedLocationKey)?.label || fixedLocationKey}
            </span>
          </div>
        )}
      </div>
      <div className="relative w-full max-w-5xl mx-auto px-4 md:px-0">
        <div
          className="absolute top-0 left-6 md:left-1/2 md:-translate-x-1/2 w-1 h-full"
          style={{ backgroundColor: lineColor }}
        />
        {events.map((event, index) => (
          <div
            key={index}
            className="relative grid grid-cols-1 md:grid-cols-9 items-start"
          >
            {/* Left Column */}
            <div className="md:col-span-4 md:pr-6 flex md:justify-end">
              {index % 2 === 0 && (
                <EventCard
                  event={event}
                  lineColor={lineColor}
                  showProducer={showProducer}
                  locationKey={effectiveLocationKey}
                  locationOffset={effectiveLocationOffset}
                />
              )}
            </div>
            {/* Center Line */}
            <div className="md:col-span-1 flex justify-center">
              <div className="hidden md:flex items-start">
                <span
                  className="w-5 h-5 rounded-full mt-6"
                  style={{ backgroundColor: lineColor }}
                />
              </div>
            </div>
            {/* Right Column */}
            <div className="md:col-span-4 md:pl-6 flex md:justify-start">
              {index % 2 === 1 && (
                <EventCard
                  event={event}
                  lineColor={lineColor}
                  showProducer={showProducer}
                  locationKey={effectiveLocationKey}
                  locationOffset={effectiveLocationOffset}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EventCard({
  event,
  lineColor,
  showProducer,
  locationKey = "UTC",
  locationOffset = -9,
}) {
  // For schedule section, convert time if present
  const displayTime =
    event.time && locationKey !== "JST"
      ? `${convertTimeRange(event.time, locationOffset)} ${locationKey}`
      : event.time
      ? `${event.time.replace("JST", "JST")}`
      : undefined;
  return (
    <div
      className="p-6 pl-10 md:pl-6 w-full md:max-w-md relative"
      style={{ color: "#000" }}
    >
      <span
        className="absolute top-6 left-0 md:hidden w-5 h-5 rounded-full"
        style={{ backgroundColor: lineColor }}
      />
      {/* Show date before time if subtitle exists and looks like a date */}
      {event.subtitle && event.subtitle.match(/\d{4}/) && (
        <p className="text-sm md:text-base font-semibold" style={{ color: "#000" }}>{event.subtitle}</p>
      )}
      {displayTime && (
        <p className="text-sm md:text-base font-semibold" style={{ color: "#000" }}>{displayTime}</p>
      )}
      {/* If subtitle is not a date, show it below the title as before */}
      <h3 className="text-xl md:text-2xl py-1 font-bold" style={{ color: "#000" }}>{event.title}</h3>
      {event.subtitle && !event.subtitle.match(/\d{4}/) && <p style={{ color: "#000" }}>{event.subtitle}</p>}
      {/* Removed producer/programming line */}
      {event.items && (
        <ul className="mt-3 text-sm md:text-base list-disc list-inside space-y-1" style={{ color: "#000" }}>
          {event.items.map((item, i) => (
            <li key={i}>
              {/* Only convert inner times for schedule and global sections */}
              {event.time
                ? convertInnerTime(item, locationOffset, locationKey)
                : (
                  // For global section, convert if matches time pattern
                  convertGlobalTime(item, locationOffset, locationKey)
                )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Timeline() {
  // State for location selection in Complete 24-Hour Schedule
  const [locationKey, setLocationKey] = useState("UTC");
  const [locationOffset, setLocationOffset] = useState(-9);

  return (
    <div id="schedule" className="py-12 flex flex-col items-center space-y-8">
      {/* Pre-Event Frame */}
      <div
        className="border-4 border-gray-300 rounded-xl shadow-lg bg-white"
        style={{
          width: "100%",
          maxWidth: "1100px",
          // Remove height and overflowY to disable scrolling for pre-event
          boxSizing: "border-box",
        }}
      >
        <TimelineSection
          title="Pre-Event Global Labs"
          events={preEvent}
          lineColor="#89478D"
          stickyTitle
        />
      </div>
      {/* Main Timeline Frames */}
      <div
        className="border-4 border-gray-300 rounded-xl shadow-lg bg-white"
        style={{
          width: "100%",
          maxWidth: "1100px",
          height: "700px",
          overflowY: "auto",
          boxSizing: "border-box",
        }}
      >
        {/* Timeline content inside scrollable frame */}
        <TimelineSection
          title="Complete 24-Hour Schedule"
          events={schedule}
          lineColor="#89478D"
          showLocationButtons
          locationKey={locationKey}
          locationOffset={locationOffset}
          onLocationChange={(key, offset) => {
            setLocationKey(key);
            setLocationOffset(offset);
          }}
          stickyTitle
        />
        <TimelineSection
          title="Global 24-Hour Relay Schedule"
          events={global}
          lineColor="#89478D"
          showProducer
          useParentLocation // NEW: use the same time zone as Complete 24-Hour
          parentLocationKey={locationKey}
          parentLocationOffset={locationOffset}
          stickyTitle
        />
        {/* Kyoto Closing Ceremony removed */}
      </div>
    </div>
  );
}


