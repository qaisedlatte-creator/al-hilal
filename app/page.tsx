import type { Metadata } from "next";
import HomeHero from "@/components/sections/HomeHero";
import ClientMarquee from "@/components/sections/ClientMarquee";
import ServicesGrid from "@/components/sections/ServicesGrid";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Testimonials from "@/components/sections/Testimonials";
import ProcessTeaser from "@/components/sections/ProcessTeaser";
import HomeCTA from "@/components/sections/HomeCTA";

export const metadata: Metadata = {
  title: "Al Hilal Print & Branding | Premium Printing, Sharjah UAE",
  description:
    "25+ years of premium offset printing, digital printing, large format, corporate gifts, uniforms, and signage. Sharjah UAE's trusted print production partner since 1999.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ClientMarquee />
      <ServicesGrid />
      <PortfolioPreview />
      <Testimonials />
      <ProcessTeaser />
      <HomeCTA />
    </>
  );
}
