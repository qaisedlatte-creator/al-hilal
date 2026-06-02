import type { Metadata } from "next";
import HomeHero from "@/components/sections/HomeHero";
import ClientMarquee from "@/components/sections/ClientMarquee";
import ServicesGrid from "@/components/sections/ServicesGrid";
import GalleryPreview from "@/components/sections/GalleryPreview";
import CaseStudies from "@/components/sections/CaseStudies";
import ProcessTeaser from "@/components/sections/ProcessTeaser";
import HomeCTA from "@/components/sections/HomeCTA";

export const metadata: Metadata = {
  title: "Al Hilal Printing & Advertising | Sharjah UAE Since 1993",
  description:
    "Sharjah's trusted printing & advertising company since 1993. Offset printing, digital printing, rubber stamps, corporate gifts, large format & signage. Serving Sharjah, Dubai & UAE. Call +971 50 9454953.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ClientMarquee />
      <ServicesGrid />
      <GalleryPreview />
      <CaseStudies limit={3} />
      <ProcessTeaser />
      <HomeCTA />
    </>
  );
}
