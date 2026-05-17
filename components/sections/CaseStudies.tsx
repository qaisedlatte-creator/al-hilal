import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/lib/data/caseStudies";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

export default function CaseStudies() {
  return (
    <section className="page-section bg-ivory">
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
          <Link href="/gallery" className="text-sm font-medium text-navy hover:text-navy-mid transition-colors shrink-0 flex items-center gap-1.5">
            See full gallery
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {caseStudies.map((cs) => (
            <StaggerItem key={cs.client}>
              <div className="group flex flex-col h-full border border-border hover:border-navy/25 hover:shadow-card transition-all duration-300 bg-paper overflow-hidden">
                {/* Header — dark bg with client logo */}
                <div
                  className="relative h-24 flex items-center justify-center px-6"
                  style={{ backgroundColor: cs.bgColor }}
                >
                  {cs.logo ? (
                    <div className="relative h-12 w-32">
                      <Image
                        src={cs.logo}
                        alt={cs.client}
                        fill
                        className="object-contain brightness-0 invert opacity-90"
                      />
                    </div>
                  ) : (
                    <span className="font-display font-bold text-ivory text-xl">{cs.client}</span>
                  )}
                  {/* Category badge */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[9px] uppercase tracking-[0.12em] text-ivory/50 font-semibold border border-ivory/20 px-2 py-0.5">
                      {cs.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-xl text-charcoal mb-2">{cs.client}</h3>
                  <p className="text-sm text-steel leading-relaxed mb-4 flex-1">{cs.description}</p>

                  {/* What was produced */}
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.12em] text-steel/50 font-semibold mb-2">Produced</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cs.produced.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] font-medium text-navy bg-navy-light px-2.5 py-1 border border-navy/10"
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
