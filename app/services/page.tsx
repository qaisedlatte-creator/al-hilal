import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data/services";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import HomeCTA from "@/components/sections/HomeCTA";

export const metadata: Metadata = {
  title: "Print & Advertising Services | Al Hilal, Sharjah UAE",
  description:
    "Seven professional print and advertising services: offset printing, digital printing, large format, corporate gifts, uniforms, rubber stamps, and signage. Sharjah, UAE.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ivory pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="site-shell">
          <FadeIn>
            <SectionLabel>Our Services</SectionLabel>
            <h1 className="display-hero font-display font-bold text-charcoal mt-3">
              Seven ways we
              <br />
              <span className="text-navy">produce excellence.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-6 max-w-xl">
            <p className="body-large text-steel">
              From a single rubber stamp to a 40-metre building wrap, from a personalised campaign to
              a 100,000-unit catalogue run — every project carries the same standard of precision.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ivory pb-20">
        <div className="site-shell">
          <StaggerContainer className="flex flex-col">
            {services.map((service, i) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col md:flex-row md:items-center gap-5 py-8 border-b border-border hover:bg-paper px-5 -mx-5 transition-colors"
                >
                  <span className="font-display font-bold text-navy/10 group-hover:text-navy/20 transition-colors shrink-0 w-12 text-right text-2xl" style={{ letterSpacing: "-0.04em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h2 className="font-display font-bold text-xl text-charcoal group-hover:text-navy transition-colors mb-1.5">
                      {service.title}
                    </h2>
                    <p className="text-steel body-md max-w-2xl">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {service.useCases.slice(0, 3).map((uc) => (
                        <span key={uc} className="text-[11px] font-medium text-steel/70 bg-surface px-2.5 py-1 border border-border">
                          {uc}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 text-sm font-medium text-navy group-hover:gap-4 transition-all">
                    <span className="whitespace-nowrap">Explore</span>
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
