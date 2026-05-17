import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/site";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import HomeCTA from "@/components/sections/HomeCTA";

export const metadata: Metadata = {
  title: "About Al Hilal | 25 Years of Print Excellence in Sharjah, UAE",
  description:
    "Established 1999 in Sharjah, UAE. Al Hilal Printing & Branding has been the production backbone for the Gulf's most demanding brands for 25+ years.",
  alternates: { canonical: "/about" },
};

const values = [
  { title: "Precision", description: "ISO-calibrated production. Every colour, cut, and delivery window treated as a commitment — not a target." },
  { title: "Partnership", description: "We flag issues, suggest improvements, and treat your deadline as ours. Not a vendor. A production partner." },
  { title: "Integrity", description: "No hidden costs. No silent substitutions on material quality. What we quote is what we deliver." },
  { title: "Craft", description: "Print is a physical craft. Every press operator and finisher represents Al Hilal's standard — regardless of job size." },
];

const capabilities = [
  { title: "Offset Printing", items: ["CMYK & Pantone colour", "Up to 400gsm paper weight", "ISO 12647-2 calibrated", "Full in-house finishing"] },
  { title: "Digital & Large Format", items: ["Short run from 1 unit", "Variable data printing", "Print widths up to 5m", "UV-cured outdoor inks"] },
  { title: "Branded Production", items: ["Corporate gifts sourcing", "Uniform embroidery & print", "Self-inking stamp systems", "Full signage fabrication"] },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ivory pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <FadeIn>
            <SectionLabel>Est. {COMPANY.established}</SectionLabel>
            <h1 className="display-hero font-display font-bold text-charcoal mt-3">
              The Gulf&rsquo;s
              <br />
              <span className="text-navy">Print Authority.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="body-large text-steel">
              For over 25 years, Al Hilal Printing &amp; Branding has operated from Sharjah as the
              production partner that UAE&rsquo;s hospitality groups, retail chains, construction developers,
              healthcare networks, and corporate enterprises rely on to make their brands visible in the
              physical world.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Logo feature */}
      <div className="bg-navy py-12">
        <div className="site-shell flex items-center gap-8">
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-ivory/20 shrink-0">
            <Image src="/logo.jpg" alt="Al Hilal" fill className="object-cover" />
          </div>
          <div>
            <p className="font-display font-bold text-ivory text-2xl">AL HILAL</p>
            <p className="text-sm text-ivory/50 mt-1">Printing &amp; Branding · Sharjah, UAE · Est. 1999</p>
          </div>
          <div className="ml-auto hidden md:flex gap-8">
            {[{ val: "25+", label: "Years" }, { val: "1000+", label: "Clients" }, { val: "7", label: "Services" }].map((s) => (
              <div key={s.label} className="text-center">
                <span className="font-display font-bold text-ivory text-2xl block">{s.val}</span>
                <span className="text-[11px] text-ivory/30 uppercase tracking-[0.1em]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="page-section bg-surface">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeIn>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-3">
              Built in Sharjah.
              <br />
              <span className="text-navy">Trusted across the Gulf.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="flex flex-col gap-5">
            <p className="body-large text-steel">
              Al Hilal was founded in 1999 in Sharjah&rsquo;s Industrial Area, when the UAE&rsquo;s demand for
              professional print was growing faster than the supply of suppliers who could meet
              enterprise-grade quality standards. We set out to fill that gap.
            </p>
            <p className="body-large text-steel">
              Over 25 years, we expanded across every major print discipline: digital printing,
              large format, corporate gifts, uniforms, rubber stamps, and comprehensive signage
              production. Each capability added when client demand was strong enough to justify
              proper equipment and proper expertise — not before.
            </p>
            <p className="body-large text-steel">
              Today we serve 1,000+ active clients across all UAE emirates. Hotels, retail chains,
              developers, clinics, government entities. What they share: a need for a production
              partner who delivers without excuses.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="page-section bg-ivory">
        <div className="site-shell">
          <FadeIn className="mb-10">
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-3">
              Four values.
              <br />
              <span className="text-navy">Non-negotiable.</span>
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="p-7 bg-paper border border-border hover:border-navy/20 hover:shadow-card transition-all">
                  <div className="w-6 h-0.5 bg-gold mb-5" />
                  <h3 className="font-display font-bold text-xl text-charcoal mb-3">{v.title}</h3>
                  <p className="body-md text-steel">{v.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Capabilities */}
      <section className="page-section bg-navy">
        <div className="site-shell">
          <FadeIn className="mb-10">
            <SectionLabel light>Full Capabilities</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-ivory mt-3">
              Everything in-house.
              <br />
              Nothing outsourced.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {capabilities.map((cap) => (
              <FadeIn key={cap.title}>
                <div className="border border-ivory/10 p-7 h-full">
                  <div className="w-5 h-0.5 bg-gold mb-5" />
                  <h3 className="font-display font-bold text-lg text-ivory mb-5">{cap.title}</h3>
                  <ul className="flex flex-col gap-3">
                    {cap.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-ivory/50">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
