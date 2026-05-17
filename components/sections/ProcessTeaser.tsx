import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const steps = [
  { number: "01", title: "Brief", desc: "Scope, quantities, substrates, and delivery defined upfront." },
  { number: "02", title: "Pre-press", desc: "Artwork reviewed and approved before a single sheet runs." },
  { number: "03", title: "Produce", desc: "Press, finishing, and quality checks — in-house, no handoffs." },
  { number: "04", title: "Deliver", desc: "Packed, dispatched, and installed on schedule." },
];

export default function ProcessTeaser() {
  return (
    <section className="page-section bg-surface">
      <div className="site-shell">
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-2">
              No surprises.
              <br />
              <span className="text-navy">Every time.</span>
            </h2>
          </div>
          <Link href="/process" className="text-sm font-medium text-navy hover:text-navy-mid transition-colors shrink-0 flex items-center gap-1.5">
            Full process
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="group p-6 bg-ivory border border-border hover:border-navy/30 hover:shadow-card transition-all duration-300 h-full">
                <span
                  className="font-display font-bold text-navy/10 block mb-4 leading-none group-hover:text-navy/20 transition-colors"
                  style={{ fontSize: "2.75rem", letterSpacing: "-0.04em" }}
                >
                  {step.number}
                </span>
                <h3 className="font-display font-bold text-lg text-charcoal mb-2">{step.title}</h3>
                <p className="text-[13px] text-steel leading-relaxed">{step.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
