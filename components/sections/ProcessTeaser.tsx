import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { PROCESS_STEPS } from "@/lib/site";

export default function ProcessTeaser() {
  return (
    <section className="page-section bg-navy">
      <div className="site-shell">
        <FadeIn className="mb-10">
          <SectionLabel light>How We Work</SectionLabel>
          <h2 className="display-subtitle font-display font-bold text-ivory mt-2">
            From brief to delivery —
            <br />
            <span className="text-gold">no surprises.</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {PROCESS_STEPS.map((step) => (
            <StaggerItem key={step.number}>
              <div className="bg-navy-mid border border-ivory/15 p-6 h-full hover:border-gold/40 transition-colors">
                <span className="font-display font-bold text-ivory/25 block mb-4 leading-none" style={{ fontSize: "2.5rem", letterSpacing: "-0.04em" }}>
                  {step.number}
                </span>
                <h3 className="font-display font-bold text-ivory text-lg mb-2">{step.title}</h3>
                <p className="text-[12px] text-ivory/60 leading-relaxed">{step.description}</p>
                <p className="mt-3 text-[10px] font-semibold text-gold uppercase tracking-[0.1em]">{step.timeline}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
