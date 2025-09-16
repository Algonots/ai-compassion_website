"use client";

const schedule = [
    {
        time: "11:00 AM - 12:00 PM JST",
        title: "Opening & Foundation",
        subtitle: "“Setting Intention in the Space Between”",
        items: [
            "11:00–11:15: Welcome ceremony with traditional Japanese elements",
            "11:15–11:30: Mindful opening practice",
            "11:30–12:00: Keynote — The Neuroscience of Compassion",
        ],
    },
    {
        time: "12:00 PM - 1:00 PM JST",
        title: "Cultural Foundations",
        subtitle: "“East Meets West: Integrating Wisdom Traditions”",
        items: [
            "12:00–12:45: From Storytelling to System Building",
            "12:45–1:00: Interactive synthesis & table discussions",
        ],
    },
    {
        time: "1:00 PM - 2:00 PM JST",
        title: "Working Lunch & Academic Leadership",
        subtitle: "“Research Frontiers in Compassionate AI”",
        items: [
            "1:00–1:30: Working lunch with structured networking",
            "1:30–2:00: Education in the Age of Empathy",
        ],
    },
    {
        time: "2:00 PM - 3:00 PM JST",
        title: "Innovation Showcase",
        subtitle: "“Compassionate AI in Action”",
        items: [
            "2:00–2:20: Healthcare AI demonstration",
            "2:20–2:40: Future of Work applications",
            "2:40–3:00: Interactive Q&A",
        ],
    },
    {
        time: "3:00 PM - 4:00 PM JST",
        title: "Co-Creation Workshop",
        subtitle: "“Building Frameworks Together”",
        items: [
            "Hands-on framework development (parallel sessions)",
            "Bias mitigation, wisdom integration, measurement frameworks",
            "Cross-track synthesis & commitments",
        ],
    },
    {
        time: "4:00 PM - 5:00 PM JST",
        title: "Alliance Launch & Global Handoff",
        subtitle: "“The Osaka Compact Ceremony”",
        items: [
            "Platform launch & group signing",
            "Global AI+Compassion Alliance commitments",
            "Handoff to South Asia",
        ],
    },
    {
        time: "5:00 PM - 8:00 PM JST",
        title: "South Asia Region (Mumbai)",
        items: [
            "Regional opening with traditional Indian music",
            "Workshop: Inclusive AI Design for Diverse Communities",
            "Regional commitments & handoff to GCC/Europe",
        ],
    },
];

const global = [
    {
        time: "5:00 PM - 8:00 PM JST",
        title: "South Asia Region (Mumbai)",
        items: [
            "5:00-5:30 PM: Regional opening with traditional Indian music/cultural expression",
            '5:30-6:30 PM: Panel - "AI for Human Development in Emerging Markets"',
            '6:30-7:30 PM: Workshop - "Inclusive AI Design for Diverse Communities"',
            "7:30-8:00 PM: Regional commitments and handoff to GCC/Europe"
        ],
    },
    {
        time: "8:00 PM - 11:00 PM JST",
        title: "GCC/Europe Region (Dubai/London)",
        items: [
            "8:00-8:30 PM: Multi-regional opening ceremony",
            '8:30-9:30 PM: "AI Governance Across Cultures" - featuring potential Polish Deputy PM remarks',
            '9:30-10:30 PM: "Ethics in AI: European Perspectives" with Edi Pyrek (Poland)',
            "10:30-11:00 PM: Regional synthesis and handoff to Africa"
        ],
    },
    {
        time: "11:00 PM JST - 2:00 AM JST (Oct 3)",
        title: "Africa Region",
        items: [
            "11:00-11:30 PM: Regional opening with African musical traditions",
            '11:30 PM-12:30 AM: "AI for Social Development and Community Resilience"',
            '12:30-1:30 AM: "Indigenous Knowledge and Technology Integration"',
            "1:30-2:00 AM: Regional commitments and handoff to South America"
        ],
    },
    {
        time: "2:00 AM - 5:00 AM JST (Oct 3)",
        title: "South America Region",
        items: [
            "2:00-2:30 AM: Regional opening with Latin American cultural expression",
            '2:30-3:30 AM: "AI for Social Justice and Community Development"',
            '3:30-4:30 AM: "Technology and Environmental Stewardship in Latin America"',
            "4:30-5:00 AM: Regional commitments and handoff to North America"
        ],
    },
    {
        time: "5:00 AM - 8:00 AM JST (Oct 3)",
        title: "North America Region",
        items: [
            "5:00-5:30 AM: Regional opening",
            '5:30-6:30 AM: "Silicon Valley Meets Compassionate Design" - Douglas Thomas (USC)',
            '6:30-7:30 AM: "The Future of Human-AI Collaboration" - Ben Waber (MIT Media Lab)',
            "7:30-8:00 AM: Regional commitments and handoff to Oceania"
        ],
    },
    {
        time: "8:00 AM - 11:00 AM JST (Oct 3)",
        title: "Oceania Region (Sydney)",
        items: [
            "8:00-8:30 AM: Regional opening with Indigenous Australian perspectives",
            '8:30-9:30 AM: "Cultural Philosophy and AI Ethics" - Tim Moriarty (Indigenous Artist)',
            '9:30-10:30 AM: Workshop - "AI and Environmental Stewardship"',
        ],
    },
];

const kyoto = [
    {
        time: "12:00 - 1:00 PM JST",
        title: "Gathering & Reflection",
        subtitle: '"Ancient Wisdom, Future Innovation"',
        items: [
            "12:00-12:15 PM: Welcome to historic Kyoto venue",
            '12:15-12:45 PM: Synthesis presentation - "24 Hours Around the World: What We Learned"',
            "12:45-1:00 PM: Individual reflection and journaling",
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
function TimelineSection({ title, events, lineColor, showProducer = false }) {
  return (
    <div className="mb-12">
      <h1
        className={`text-3xl font-bold pl-4 md:text-center my-6`}
        style={{ color: lineColor }}
      >
        {title}
      </h1>

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
                <EventCard event={event} lineColor={lineColor} showProducer={showProducer} />
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
                <EventCard event={event} lineColor={lineColor} showProducer={showProducer} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EventCard({ event, lineColor, showProducer }) {
  return (
    <div className="p-6 pl-10 md:pl-6 w-full md:max-w-md relative" style={{ color: lineColor }}>
      <span
        className="absolute top-6 left-0 md:hidden w-5 h-5 rounded-full"
        style={{ backgroundColor: lineColor }}
      />
      <p className="text-sm md:text-base font-semibold">{event.time}</p>
      <h3 className="text-xl md:text-2xl py-1 font-bold">{event.title}</h3>
      {event.subtitle && <p>{event.subtitle}</p>}
      {showProducer && <b>Producer: [TBD] | Programming: 3 hours</b>}
      {event.items && (
        <ul className="mt-3 text-sm md:text-base list-disc list-inside space-y-1">
          {event.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Timeline() {
  return (
    <div id="schedule" className="py-12">
      <TimelineSection title="Complete 24-Hour Schedule" events={schedule} lineColor="#CB4B4B" />
      <TimelineSection title="Global 24-Hour Relay Schedule" events={global} lineColor="#CB4B4B" showProducer />
      <TimelineSection title="Kyoto Closing Ceremony" events={kyoto} lineColor="#8851A5" />
    </div>
  );
}