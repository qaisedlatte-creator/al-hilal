import type { Metadata } from "next";
import HomeHero from "@/components/sections/HomeHero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProcessTeaser from "@/components/sections/ProcessTeaser";
import AboutTeaser from "@/components/sections/AboutTeaser";
import HomeCTA from "@/components/sections/HomeCTA";

export const metadata: Metadata = {
  title: "Al Hilal Print & Advertising | Premium Print Production, Sharjah UAE",
  description:
    "25+ years of premium offset printing, digital printing, large format, corporate gifts, and signage. The Gulf's trusted print production partner, based in Sharjah, UAE.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsBar />
      <ServicesGrid />
      <PortfolioPreview />
      <IndustriesSection />
      <ProcessTeaser />
      <AboutTeaser />
      <HomeCTA />
    </>
  );
}
