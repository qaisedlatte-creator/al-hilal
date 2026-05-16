import Link from "next/link";
import { services } from "@/lib/data/services";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

export default function ServicesGrid() {
  return (
    <section className="page-section bg-paper">
      <div className="site-shell">
        {/* Header */}
        <FadeIn className="mb-14 max-w-xl">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="display-subtitle text-ink balanced font-display font-bold">
            Seven specialisations.
            <br />
            One production partner.
          </h2>
        </FadeIn>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex flex-col bg-paper p-8 md:p-10 hover:bg-ink transition-colors duration-300 h-full min-h-[240px]"
              >
                <div className="mb-auto">
                  <div className="w-6 h-0.5 bg-green mb-6 group-hover:bg-paper/40 transition-colors" />
                  <h3 className="font-display font-bold text-xl text-ink group-hover:text-paper transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted group-hover:text-paper/60 transition-colors leading-relaxed">
                    {service.tagline}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-[0.1em] text-green group-hover:text-paper/50 transition-colors">
                  <span>Learn more</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </StaggerItem>
          ))}

          {/* View all card */}
          <StaggerItem>
            <Link
              href="/services"
              className="group flex flex-col items-center justify-center bg-surface hover:bg-green transition-colors duration-300 p-8 md:p-10 min-h-[240px]"
            >
              <div className="text-center">
                <p className="font-display font-bold text-xl text-ink group-hover:text-paper transition-colors mb-2">
                  All Services
                </p>
                <p className="text-sm text-muted group-hover:text-paper/60 transition-colors mb-6">
                  View the complete offering
                </p>
                <div className="inline-flex items-center justify-center w-10 h-10 border border-ink/20 group-hover:border-paper/30 rounded-full transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="text-ink group-hover:text-paper transition-colors"/>
                  </svg>
                </div>
              </div>
            </Link>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
