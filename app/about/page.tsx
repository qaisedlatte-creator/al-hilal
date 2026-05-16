import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, HOME_STATS, PROCESS_STEPS } from "@/lib/site";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import StatsBar from "@/components/sections/StatsBar";
import HomeCTA from "@/components/sections/HomeCTA";

export const metadata: Metadata = {
  title: "About Al Hilal | 25 Years of Print Excellence",
  description:
    "Established in 1999 in Sharjah, UAE. Al Hilal has been the production backbone for the Gulf's most demanding brands for over 25 years. Learn our story.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Precision",
    description:
      "Every colour, every cut, every delivery window is treated as a commitment. We operate to ISO-calibrated standards and hold ourselves accountable to specifications — not approximations.",
  },
  {
    title: "Partnership",
    description:
      "We are a production partner, not a vendor. When your project succeeds, we succeed. That means proactively flagging issues, suggesting improvements, and treating your deadline as our deadline.",
  },
  {
    title: "Integrity",
    description:
      "No hidden costs. No unapproved substitutions. No silent compromises on material quality to protect a margin. What we quote is what we deliver.",
  },
  {
    title: "Craft",
    description:
      "Print is a physical craft, and we respect it. Every press operator, every finisher, every delivery driver represents Al Hilal's standard. That standard does not vary by job size or client size.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-paper pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="site-shell">
          <FadeIn>
            <SectionLabel>Est. {COMPANY.established}</SectionLabel>
            <h1
              className="font-display font-bold text-ink mt-2"
              style={{
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              The Gulf&rsquo;s
              <br />
              Print Authority.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-10 max-w-2xl">
            <p className="body-large text-muted">
              For over 25 years, Al Hilal Printing &amp; Advertising has operated from Sharjah as
              the production partner that the UAE&rsquo;s hospitality groups, retail chains,
              construction developers, healthcare networks, and corporate enterprises depend on to
              make their brands visible in the physical world.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="page-section bg-surface">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <FadeIn>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-ink mt-2 mb-8">
              Built in Sharjah.
              <br />
              Trusted across the Gulf.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="flex flex-col gap-5">
            <p className="body-large text-muted">
              Al Hilal was founded in 1999 in Sharjah&rsquo;s Industrial Area, at a time when the
              UAE&rsquo;s appetite for professional print was growing faster than the supply of
              suppliers who could meet enterprise-grade quality standards. We set out to fill that
              gap — with a small but precise offset operation and an absolute commitment to delivery
              on time, every time.
            </p>
            <p className="body-large text-muted">
              Over 25 years, we expanded our production capabilities across every major print
              discipline: digital printing, large format, corporate gifts, uniforms, rubber stamps,
              and comprehensive signage and advertising production. Each new capability was added
              when client demand was strong enough to justify the investment in proper equipment and
              proper expertise — not before.
            </p>
            <p className="body-large text-muted">
              Today, we serve over a thousand active clients across all seven UAE emirates and
              selected Gulf markets. Our clients range from independent restaurants to multinational
              hospitality groups, from startup retail brands to construction groups developing
              billions in assets. What they share is a need for a production partner who delivers
              without excuses.
            </p>
            <p className="body-large text-muted">
              That is what Al Hilal has always been. That is what we remain.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Values */}
      <section className="page-section bg-paper">
        <div className="site-shell">
          <FadeIn className="mb-14">
            <SectionLabel>What We Stand For</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-ink">
              Four values.
              <br />
              Non-negotiable.
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="border-t-2 border-green pt-6">
                  <h3 className="font-display font-bold text-2xl text-ink mb-3">{value.title}</h3>
                  <p className="body-md text-muted">{value.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Capabilities */}
      <section className="page-section bg-ink">
        <div className="site-shell">
          <FadeIn className="mb-14">
            <SectionLabel light>Full Capabilities</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-paper">
              Everything in-house.
              <br />
              Nothing outsourced.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Offset Printing",
                items: ["CMYK & Pantone colour", "Up to 400gsm paper weight", "ISO 12647-2 calibrated", "Full in-house finishing"],
              },
              {
                title: "Digital & Large Format",
                items: ["Short run from 1 unit", "Variable data printing", "Print widths to 5m", "UV-cured outdoor inks"],
              },
              {
                title: "Branded Production",
                items: ["Corporate gifts sourcing", "Uniform embroidery & print", "Self-inking stamp systems", "Full signage fabrication"],
              },
            ].map((cap) => (
              <FadeIn key={cap.title}>
                <div className="border border-paper/10 p-8 h-full">
                  <h3 className="font-display font-bold text-xl text-paper mb-6">{cap.title}</h3>
                  <ul className="flex flex-col gap-3">
                    {cap.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-paper/50">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green shrink-0" />
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
