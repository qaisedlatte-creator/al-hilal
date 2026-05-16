import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/lib/data/industries";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import HomeCTA from "@/components/sections/HomeCTA";

export const metadata: Metadata = {
  title: "Industries We Serve | Al Hilal Print & Advertising",
  description:
    "Print, signage, and branded production for hospitality, retail, events, construction, and healthcare businesses across UAE and the Gulf.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-paper pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="site-shell">
          <FadeIn>
            <SectionLabel>Industries</SectionLabel>
            <h1
              className="font-display font-bold text-ink mt-2"
              style={{
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              Built for every
              <br />
              industry.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-8 max-w-xl">
            <p className="body-large text-muted">
              Different industries have different print requirements, different regulatory
              environments, and different standards for quality. We&rsquo;ve spent 25 years learning
              them all.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="page-section bg-paper">
        <div className="site-shell">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <StaggerItem key={industry.slug}>
                <Link
                  href={`/industries/${industry.slug}`}
                  className="group flex flex-col p-8 border border-border hover:border-green hover:bg-surface transition-all duration-300 h-full min-h-[280px]"
                >
                  <div className="mb-6">
                    <h2 className="font-display font-bold text-2xl text-ink group-hover:text-green transition-colors mb-2">
                      {industry.title}
                    </h2>
                    <p className="text-sm font-medium text-green/70 italic">{industry.tagline}</p>
                  </div>
                  <p className="text-muted body-md mb-6 flex-1">{industry.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-green">
                    <span>Explore</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
