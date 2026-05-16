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
      {/* Hero */}
      <section className="bg-paper pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="site-shell">
          <FadeIn>
            <SectionLabel>Our Services</SectionLabel>
            <h1
              className="font-display font-bold text-ink mt-2"
              style={{
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              Seven ways we
              <br />
              produce excellence.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-10 max-w-xl">
            <p className="body-large text-muted">
              From a single rubber stamp to a 40-metre building wrap, from a personalised direct
              mail campaign to a 100,000-unit catalogue run — every project is managed with the
              same standard of precision and accountability.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-paper pb-24">
        <div className="site-shell">
          <StaggerContainer className="flex flex-col divide-y divide-border">
            {services.map((service, i) => (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col md:flex-row md:items-center gap-6 py-10 hover:bg-surface transition-colors px-0 -mx-0"
                >
                  <span
                    className="font-display text-ink/10 font-bold shrink-0 w-16 text-center"
                    style={{ fontSize: "2.5rem", letterSpacing: "-0.04em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-ink group-hover:text-green transition-colors mb-2">
                      {service.title}
                    </h2>
                    <p className="text-muted body-md max-w-2xl">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.useCases.slice(0, 3).map((uc) => (
                        <span key={uc} className="text-xs font-sans font-medium text-muted/70 bg-surface px-3 py-1">
                          {uc}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 flex items-center gap-2 text-sm font-medium text-green group-hover:gap-4 transition-all">
                    <span className="whitespace-nowrap">Learn more</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
