import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data/services";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import HomeCTA from "@/components/sections/HomeCTA";

export const metadata: Metadata = {
  title: "Printing & Advertising Services | Al Hilal, Sharjah UAE",
  description:
    "Offset printing, digital printing, corporate gifts, rubber stamps, and signage. Sharjah, UAE. Call +971 50 9454953.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ivory pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="site-shell">
          <FadeIn>
            <SectionLabel>Our Services</SectionLabel>
            <h1 className="display-hero font-display font-bold text-charcoal mt-3">
              What we produce
              <br />
              <span className="text-navy">in Sharjah.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-5 max-w-xl">
            <p className="body-large text-steel">
              Offset printing, digital printing, corporate gifts, rubber stamps, and signage —
              produced from our facility in Al Ghuwair, Sharjah, UAE.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services — one section per service with real image */}
      {services.map((service, i) => (
        <section key={service.slug} className={`py-12 md:py-16 ${i % 2 === 0 ? "bg-ivory" : "bg-surface"}`}>
          <div className="site-shell grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Image */}
            <div className={`${i % 2 !== 0 ? "lg:order-2" : ""}`}>
              <FadeIn direction={i % 2 === 0 ? "right" : "left"}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-navy/20" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1.5 bg-gold text-navy text-[10px] font-bold uppercase tracking-[0.1em]">
                      {service.shortTitle}
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Content */}
            <div className={`${i % 2 !== 0 ? "lg:order-1" : ""}`}>
              <FadeIn direction={i % 2 === 0 ? "left" : "right"} delay={0.1}>
                <h2 className="font-display font-bold text-charcoal mb-3" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
                  {service.title}
                </h2>
                <p className="text-navy font-medium text-base mb-4">{service.tagline}</p>
                <p className="text-steel body-md mb-6">{service.description}</p>

                {/* Items grid */}
                <div className="grid grid-cols-2 gap-2 mb-7">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 p-3 bg-paper border border-border">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span className="text-[13px] text-charcoal font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-ivory text-sm font-semibold hover:bg-navy-mid transition-colors"
                >
                  Quote for {service.shortTitle}
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      <HomeCTA />
    </>
  );
}
