import { HeroSection } from "@/components/sections/hero-section";
import { SectorCards } from "@/components/sections/sector-cards";
import { StatsSection } from "@/components/sections/stats-section";
import { BoardOfDirectors } from "@/components/sections/board-of-directors";
import { NewsSection } from "@/components/sections/news-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SectorCards />
      <StatsSection />
      <BoardOfDirectors />
      <NewsSection />
      <ContactSection />
    </>
  );
}
