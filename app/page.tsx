import type { Metadata } from "next";
import HomeHero from "@/components/sections/HomeHero";
import ClientMarquee from "@/components/sections/ClientMarquee";
import ServicesGrid from "@/components/sections/ServicesGrid";
import GalleryPreview from "@/components/sections/GalleryPreview";
import CaseStudies from "@/components/sections/CaseStudies";
import ProcessTeaser from "@/components/sections/ProcessTeaser";
import HomeCTA from "@/components/sections/HomeCTA";

export const metadata: Metadata = {
  title: "Al Hilal Printing & Advertising | Sharjah, UAE",
  description:
    "Offset printing, digital printing, corporate gifts, rubber stamps, and signage production. Based in Sharjah, UAE since 1999. Call +971 50 9454953.",
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
