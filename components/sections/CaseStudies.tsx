import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/data/caseStudies";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

interface CaseStudiesProps {
  limit?: number;
}

export default function CaseStudies({ limit }: CaseStudiesProps) {
  const items = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <section className="page-section bg-surface">
      <div className="site-shell">
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <SectionLabel>Client Work</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-2">
              What we created
              <br />
              <span className="text-navy">for them.</span>
            </h2>
          </div>
          {limit && (
            <Link
              href="/about#clients"
              className="text-sm font-medium text-navy hover:text-navy-mid transition-colors shrink-0 flex items-center gap-1.5"
            >
              See all client work
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          )}
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((cs) => (
            <StaggerItem key={cs.client}>
              <div className="group flex flex-col h-full bg-paper border border-border hover:border-navy/20 hover:shadow-card transition-all duration-300 overflow-hidden">

                {/* Logo area — clean white/paper bg, no dark overlay */}
                <div className="flex items-center justify-center px-8 py-7 bg-white border-b border-border">
                  {cs.logo ? (
                    <div className="relative h-12 w-36 opacity-85 group-hover:opacity-100 transition-all duration-300">
                      <Image
                        src={cs.logo}
                        alt={cs.client}
                        fill
                        className="object-contain"
                        sizes="144px"
                      />
                    </div>
                  ) : (
                    <span className="font-display font-bold text-charcoal/50 text-xl">{cs.client}</span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-bold text-xl text-charcoal">{cs.client}</h3>
                    <span className="text-[9px] uppercase tracking-[0.12em] text-steel font-semibold border border-border px-2 py-0.5 shrink-0">
                      {cs.category}
                    </span>
                  </div>

                  <p className="text-sm text-steel leading-relaxed mb-4 flex-1">{cs.description}</p>

                  {/* What was produced */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-[9px] uppercase tracking-[0.12em] text-steel/50 font-semibold mb-2">
                      Produced
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cs.produced.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] font-semibold text-navy bg-navy-light px-2.5 py-1"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
