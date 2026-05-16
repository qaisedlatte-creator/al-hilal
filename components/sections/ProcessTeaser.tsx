import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const steps = [
  { number: "01", title: "Brief", desc: "We define scope, quantities, substrates, and delivery requirements." },
  { number: "02", title: "Design", desc: "Artwork is reviewed, refined, and approved for production." },
  { number: "03", title: "Produce", desc: "Your project moves through press, finishing, and quality checks." },
  { number: "04", title: "Deliver", desc: "Completed work is packed, dispatched, and installed on schedule." },
];

export default function ProcessTeaser() {
  return (
    <section className="page-section bg-ink">
      <div className="site-shell">
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <SectionLabel light>How We Work</SectionLabel>
            <h2 className="display-subtitle text-paper balanced font-display font-bold">
              A process built
              <br />
              for results.
            </h2>
          </div>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-sm font-medium text-paper/50 hover:text-paper transition-colors shrink-0"
          >
            Full process overview
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/10">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="bg-ink p-8 flex flex-col h-full min-h-[200px]">
                <span
                  className="font-display font-bold text-paper/10 block mb-6 leading-none"
                  style={{ fontSize: "4rem", letterSpacing: "-0.04em" }}
                >
                  {step.number}
                </span>
                <h3 className="font-display font-bold text-xl text-paper mb-3">{step.title}</h3>
                <p className="text-sm text-paper/50 leading-relaxed">{step.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
