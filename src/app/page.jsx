import Herosection from "@/components/heroSection";
import Joinsection from "@/components/joinSection";
import SponsorSection from "@/components/sponsorSection";
import FaqSection from "@/components/faqSection";
import TimelineSection from "@/components/timelineSection";
import AboutSection from "@/components/aboutSection";
import SpeakerSection from "@/components/speakerSection";

export default function Home() {
  return (
    <>
      <Herosection />
      <AboutSection />
      <SpeakerSection />
      <TimelineSection />
      <SponsorSection />
      <FaqSection />
      <Joinsection />
    </>
  );
}