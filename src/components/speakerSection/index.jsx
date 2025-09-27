'use client'
import React, { useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee"; // 👈 add this
import hiroshi from "@/../public/hiroshi.png";
import gary from "@/../public/gary.png";
import kunal from "@/../public/kunal.png";
import aaker from "@/../public/aaker.png";
import jenna from "@/../public/jenna.png";
import stephin from "@/../public/stephin.png";
import alex from "@/../public/alex.png";
import nell from "@/../public/nell.png";
import sandra from "@/../public/sandra.png";
import olaf from "@/../public/olaf1.png";
import schwartz from "@/../public/schwartz.png";
import tim from "@/../public/tim.png";
import sadhviji from "@/../public/sadhviji.png";
import olivera from "@/../public/olivera.png";
import douglas from "@/../public/douglas.png";
import ben from "@/../public/ben.png";
import ian from "@/../public/ian.png";
import narumi from "@/../public/narumi.png";
import ochiai from "@/../public/ochiai.png";
import manos from "@/../public/manos.png";
import tono from "@/../public/tono.png";
import inam from "@/../public/inam.png";
import edi from "@/../public/edi.png";
import toshie from "@/../public/toshie.png";
const speakers = [
  { name: "", title: "Hiroshi Ishiguro is Professor of Department of Systems Innovation at Osaka University and Visiting Director at Advanced Telecommunications Research Institute, specializing in interactive robotics, avatar, and android science. Creator of Geminoid, an avatar android copy of himself, Ishiguro serves as CEO of AVITA Inc., Project Manager of MOONSHOT R&D, and Thematic Project Producer of EXPO 2025 Osaka. His groundbreaking work has earned prestigious awards including the Sheikh Mohammed Bin Rashid Al Maktoum Knowledge Award.", img: hiroshi },
  { name: "", title: "Gary A. Bolles is co-founder of SoCap Global and partner at Charrette LLC, specializing in impact, innovation, and capital strategies. A leading expert on the future of work, he authored The Next Rules of Work and created LinkedIn courses with 1.7 million learners. As Global Fellow for Transformation at Singularity University, he guides organizations on leveraging AI and exponential technologies. Previously led major technology companies and directed six technology magazines including Yahoo! Internet Life.", img: gary },
  { name: "", title: "Kunal Sood is founder of Audacity AI, We The Planet, and X Impact Group, serving as Chief Impact Officer at the Chopra Foundation and Director of Social Impact at Stanford University's CCARE. A TED Resident and Tribeca Fellow, he holds an MBA from Kellogg, masters from UCSF and UPenn in positive psychology, and is completing his doctorate at ISB focused on developing the theory of audacity.", img: kunal },
  { name: "", title: "Dr. Jennifer Aaker is General Atlantic Professor at Stanford Graduate School of Business and a renowned behavioral scientist specializing in purpose, meaning, and technology's impact on well-being. Winner of the Distinguished Scientific Achievement Award and MBA Professor of the Year, her bestselling books including Humor, Seriously have been translated into 20+ languages. She serves on boards of the Obama Presidential Foundation and other organizations, helping leaders foster purpose and connection in business.", img: aaker },
  { name: "", title: "Sister Dr. Jenna is a spiritual mentor, author, and TV personality who hosts The Next Normal on YouTube and founded the Brahma Kumaris Meditation Museum in Maryland. Recipient of the Presidential Lifetime Achievement Award for National Community Service, she presented the Illuminating the Light Within fashion show for Paris 2024 Olympics. Author of Meditation: Intimate Experiences with the Divine and The Sister Gita Effect, she has appeared on major media outlets and speaks internationally on spiritual leadership.", img: jenna },
  { name: "", title: "Stephen Ibaraki is one of the world’s leading futurists and investors, working with more than 1 million CEOs, investors, and scientists to advance AI, quantum computing, and sustainable investments. As the driving force behind AI for Good at the UN ITU, his leadership impacts industries, governments, and startups globally. Microsoft AI Awards since 2018 and a grand judge at top global innovation competitions, Stephen’s expertise is shaping the future of technology - driven economic growth.", img: stephin },
  { name: "", title: "Dr. Alex Cahana specializes in Web 3.0 transformation in emerging markets and developing economies. Founding partner at ImpactRooms and Blockchain Healthcare Expert for UN/CEFACT, he serves on boards of AdanianLabs Africa and ACHA. With 25+ years clinical medical experience including Department of Defense, he was former Professor and Chief of Pain Medicine at University of Washington. A decorated Israeli Defense Forces Officer, he has published 100+ articles and received the University of Washington President's medal for remarkable leadership, social impact and public service.", img: alex },
  { name: "", title: "Eleanor 'Nell' Watson, a pioneering researcher in the ethics and safety of machine intelligence, has been a driving force behind some of the most innovative AI ethics standardization and certification initiatives from organizations such as the IEEE. Serves as IEEE Ethics Maestro and chairs the Transparency Experts Focus Group. Former Executive Consultant for Apple and recognized as an Icon by the Royal Academy of Engineering for innovation. Author of Taming the Machine and columnist for Fast Company and Big Think, Watson has spoken at the UN General Assembly and World Bank.", img: nell },
  { name: "", title: "Dr. Sandra Bond Chapman is Chief Director of Center for BrainHealth at UT Dallas and Dee Wyly Distinguished University Professor. Co-creator of The BrainHealth Project involving 32 leading experts, she has secured 50+ research grants and published 250+ peer-reviewed studies. Chapman leads development of the first BrainHealth Index and directs clinical trials focused on enhancing cognitive capacity across the lifespan, working to democratize brain health strategies globally, transforming how we approach brain health.", img: sandra },
  { name: "", title: "Dr. Olaf Witkowski is a pioneering leader exploring artificial minds and compassionate AI technology. Founding Director of Cross Labs AI research institute in Kyoto and President of the International Society for Artificial Life, he serves as Board Director at Cross Compass AI. With a PhD from University of Tokyo and Princeton Institute alumnus, Witkowski has co-founded research ventures across three continents including YHouse Inc. in New York and centers in Kathmandu and Kyoto, focusing on diverse intelligences and consciousness.", img: olaf },
  { name: "", title: "Dr. Theodore H. Schwartz is a neurosurgeon/neuroscientist and former David and Ursel Barnes Endowed Professor at Weill Cornell Medicine for 25 years. He has published 500+ scientific articles and lectures worldwide on minimally invasive surgical techniques he helped develop. Author of Gray Matters: A Biography of Brain Surgery, selected by The Economist as a best book of 2024, Dr. Schwartz is a Harvard alumnus whose writing appears globally and currently serves as CEO of medtech company Illumination Diagnostics.", img: schwartz },
  { name: "", title: "Tim Moriarty is an accomplished Australian artist and digital creator specializing in aerial drone art and indigenous-inspired designs. Of Yanyuwa Aboriginal heritage from Borroloola, Northern Territory, his skin name is Bundiyan (Cheeky Brown Snake). A licensed and certified pilot creating public installations, with extensive creative strategy experience for major companies including Google, YouTube, National Museum of Australia, and Tourism Australia, his latest project is a multi-million-dollar stainless steel optically illusive emu dreaming installation for Badgerys Creek airport.", img: tim },
  { name: "", title: "Jenna Sadhviji (Sadhvi Bhagawati Saraswati) is a spiritual leader, bestselling author, and social activist based in Rishikesh, India. With a Ph.D. from Stanford, she has lived 25+ years in the Himalayas and is President and Spiritual Head of Parmarth Niketan Ashram. Co-President of Religions for Peace and UN Advisory Council member, she authored the #1 bestseller Hollywood to the Himalayas and received the Lifetime Achievement Award from President Biden. Originally from Los Angeles, dedicated to wisdom teaching and humanitarian service.", img: sadhviji},
  { name: "", title: "Olivera Tomic is founder of 8people Intelligence and a visionary AI transformation leader helping enterprises integrate artificial intelligence with clarity and impact. A certified AI Agent Specialist with over a decade of international experience across Australia, Asia, Europe, and Africa, she guides organizations through AI adoption complexities across telecommunications, automotive, insurance, e-commerce, and retail sectors. Her strategic approach focuses on AI consulting, solutions, and upskilling to deliver measurable business outcomes.", img: olivera},
  { name: "", title: "Douglas Thomas is Professor at USC Iovine and Young Academy and USC Annenberg, researching the intersection of technology and culture. He founded Games & Culture, the first academic journal studying video game culture, and collaborated with John Seely Brown to develop gamer disposition, named a Harvard Business Review Breakthrough Ideas. Their book A New Culture of Learning is read worldwide. Thomas has consulted with governments on educational reform and is currently working on Bodies of Code.", img: douglas},
  { name: "", title: "Ben Waber is a visiting scientist at MIT Media Lab and senior visiting researcher at Ritsumeikan University, recognized as a leading thinker at the intersection of management, data, workplace, and people. Former president and CEO of Humanyze, a workplace analytics company he co-founded, and senior researcher at Harvard Business School. His international bestseller People Analytics was published in 2013, and he regularly speaks at major institutions including the UN and World Economic Forum.", img: ben},
  { name: "", title: "Ian Haycroft is an Australian entrepreneur and mentor who spent 20 years in international relief work before returning to Australia in 1999 to establish a kinesiology practice. Co-founder of a successful crowdfunding venture capital business, he combines business mentoring with individual coaching. Currently focused on writing and connecting global communities committed to conscious renewal, Haycroft is passionate about finding wisdom paths to assist positive change for humanity and the planet.", img: ian},
  { name: "", title: "Dr. Narumi Yoshikawa holds a Ph.D. in agricultural economics specializing in agri-anthropology. She heads the Uehiro Research Center for Japan Environment Studies and serves as a specially appointed professor at RIHN, Professor at Prefectural University of Hiroshima, and Visiting Professor at Waseda University. Her research focuses on environmental studies from a cultural perspective, emphasizing social implementation through Community Supported Agriculture projects that became the foundation of Japan's organic farming movement. She designed environmental education programs connecting universities across 10 Asian countries.", img: narumi},
  { name: "", title: "Yoichi Ochiai is a Japanese media artist, entrepreneur, and academic with a doctorate from the University of Tokyo. He serves as Associate Professor at University of Tsukuba Library; Information and Media Associate Professor and Director of the Centre for Digital Nature Development and Research. Ochiai also serves as a specially-appointed professor at Digital Hollywood University and visiting professor at Osaka University of Arts, Kyoto City University of Arts, and Kanazawa College of Art while pioneering innovative digital media art and technology, leading digital nature research and media innovation.", img: ochiai},
  { name: "", title: "Matthew Manos is founder of verynice, a design-strategy consultancy that gives half its work away to nonprofits, serving clients including Apple, Google, UNICEF, and NASA. As Associate Dean at the Academy, he leads programs challenging students to design solutions for complex social issues. A global lecturer and author on design and social innovation, Manos created Apple Education training across 36 countries, co-designed the Iovine Young curriculum and was named by Huffington Post one of seven millennials changing the world.", img: manos},
  { name: "", title: "Tamami Tono is an award-winning composer and graduate of Kunitachi College of Music and Keio University. Former resident composer of Yo-Yo Ma's Silk Road Ensemble and CCMIX, she has been a member of Reigakusha Gagaku Ensemble since 1990, performing traditional Gagaku and contemporary music. Winner of National Theater Composition Prize and ISCM awards, Tono creates multimedia Breathing Media performances combining traditional Gagaku with modern electronics, and has performed at Tanglewood and Lincoln Center festivals.", img: tono},
  { name: "", title: "Ahmer Inam is a visionary AI and data leader with over two decades of experience at the forefront of artificial intelligence evolution. A member of XPRIZE Brain Trust, he has pioneered high-impact AI solutions across diverse industries including financial services, healthcare, high-tech, consumer, and retail. From early symbolic AI work in the late '90s to today's cutting-edge neuro-symbolic AI, Inam consistently develops transformative AI applications across multiple sectors, driving breakthrough AI initiatives and leading digital transformation across global markets.", img: inam},
  { name: "", title: "Edi Pyrek is co-founder of GAIA Foundation (Global Artificial Intelligence Alliance), focusing on decentralized, compassion-based AI. In March 2023, his foundation received a Davos award for technologies that can change millions of lives. A peace negotiator between Afghan tribal leaders after 9/11, Pyrek has advised three Polish prime ministers and trained Forbes-listed individuals. Author of 10 books including for National Geographic, he's a five-time TEDx speaker and creator of Brand Religion methodology and Academy of Future co-founder.", img: edi},
  { name: "", title: "Toshie Takahashi is Professor in the School of Culture, Media and Society and Institute for AI and Robotics at Waseda University, Tokyo, and Associate Fellow at Cambridge CFI. She has held visiting appointments at Oxford, Harvard, and Columbia, conducting cross-cultural research on robots' social impact and AI for Good. Her book Towards the age of Digital Wisdom won the Telecommunication social science award. She holds a PhD from LSE and advises Japan's Ministry of Internal Affairs and Communications, leading youth AI projects for human happiness.", img: toshie},
];

export default function SpeakerSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <div id="speakers" className="py-12 text-center">
      <h1 className="text-3xl md:text-4xl font-libre font-semibold text-[#0A2144]">
        Speakers
      </h1>
      <p className="px-4 md:px-8 w-full lg:w-1/2 mx-auto font-libre my-6 text-sm md:text-lg text-[#0A2144BF]">
        Our speakers are global voices at the intersection of technology,
        culture, policy, and the environment.
      </p>

      {/* ✅ Auto-scrolling marquee */}
      <Marquee pauseOnHover speed={50} gradient={false}>
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="relative min-w-[200px] md:min-w-[240px] max-w-[240px] aspect-[3/4] mx-3"
            style={{
              perspective: "1200px",
              display: "inline-block",
            }}
            onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
          >
            <div
              className="w-full h-full"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                transition: "transform 0.6s",
                transformStyle: "preserve-3d",
                borderRadius: "1.5rem",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                cursor: "pointer",
                transform: flippedIndex === index ? "rotateY(180deg)" : "none",
              }}
            >
              {/* Front Side */}
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backfaceVisibility: "hidden",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={speaker.img}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                  style={{ borderRadius: "1.5rem" }}
                />
              </div>
              {/* Back Side */}
              <div
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-3"
                style={{
                  background: "#E69F46",
                  color: "#fff",
                  borderRadius: "1.5rem",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  textAlign: "center",
                  overflowY: "auto",
                  padding: "1rem",
                  boxSizing: "border-box",
                }}
              >
                <h2 className="font-semibold md:text-2xl">{speaker.name}</h2>
                <p className="text-[0.65rem] md:text-m">{speaker.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
