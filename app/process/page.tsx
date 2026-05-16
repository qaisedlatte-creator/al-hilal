import type { Metadata } from "next";
import Link from "next/link";
import { PROCESS_STEPS } from "@/lib/site";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import HomeCTA from "@/components/sections/HomeCTA";

export const metadata: Metadata = {
  title: "Our Production Process | Al Hilal Print & Advertising",
  description:
    "From brief to delivery — how Al Hilal manages every print and advertising project. Six steps, one accountable team, zero surprises.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <section className="bg-paper pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="site-shell">
          <FadeIn>
            <SectionLabel>How We Work</SectionLabel>
            <h1
              className="font-display font-bold text-ink mt-2"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
            >
              A process built
              <br />
              for certainty.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-8 max-w-xl">
            <p className="body-large text-muted">
              Every Al Hilal project follows the same disciplined six-step production process.
              No shortcuts. No silent compromises. No surprises between proof and delivery.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="page-section bg-surface">
        <div className="site-shell">
          <StaggerContainer className="flex flex-col divide-y divide-border">
            {PROCESS_STEPS.map((step, i) => (
              <StaggerItem key={step.number}>
                <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_120px] gap-6 py-12 items-start">
                  <span
                    className="font-display font-bold text-ink/10"
                    style={{ fontSize: "3rem", letterSpacing: "-0.04em", lineHeight: 1 }}
                  >
                    {step.number}
                  </span>
                  <div>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-ink mb-4">{step.title}</h2>
                    <p className="body-large text-muted max-w-2xl">{step.description}</p>
                  </div>
                  <div className="md:text-right">
                    <span className="inline-block text-xs font-semibold font-sans uppercase tracking-[0.12em] text-green bg-green/10 px-3 py-1.5">
                      {step.timeline}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="page-section bg-ink">
        <div className="site-shell grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Dedicated Account Manager", desc: "Every project has one point of contact from brief to delivery. No handoffs between departments, no lost context." },
            { title: "Pre-press Quality Review", desc: "Every file is checked for bleed, resolution, colour mode, and production specifications before a single sheet is printed." },
            { title: "Production Accountability", desc: "If something is not right, we fix it. We do not deliver substandard work and expect the client to accept it." },
          ].map((item) => (
            <FadeIn key={item.title}>
              <div className="border border-paper/10 p-8">
                <div className="w-6 h-0.5 bg-green mb-6" />
                <h3 className="font-display font-bold text-xl text-paper mb-3">{item.title}</h3>
                <p className="text-sm text-paper/50 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
