import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data/services";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

export default function ServicesGrid() {
  return (
    <section className="page-section bg-ivory">
      <div className="site-shell">
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-2">
              Offset. Digital. Gifts.
              <br />
              <span className="text-navy">All under one roof.</span>
            </h2>
          </div>
          <Link href="/services" className="text-sm font-medium text-navy hover:text-navy-mid transition-colors shrink-0 flex items-center gap-1.5">
            View all services
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <Link href={`/services/${service.slug}`} className="group block overflow-hidden border border-border hover:border-navy/30 hover:shadow-card transition-all duration-300 bg-paper">
                {/* Real image */}
                <div className="relative h-44 overflow-hidden bg-surface">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/50 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-ivory/90 text-navy text-[10px] font-bold uppercase tracking-[0.1em]">
                      {service.shortTitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display font-bold text-xl text-charcoal group-hover:text-navy transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[13px] text-steel leading-relaxed mb-4">{service.tagline}</p>
                  {/* Sub-items preview */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.items.slice(0, 4).map((item) => (
                      <span key={item} className="text-[10px] font-medium text-steel/60 bg-surface px-2 py-0.5 border border-border">
                        {item}
                      </span>
                    ))}
                    {service.items.length > 4 && (
                      <span className="text-[10px] font-medium text-navy/60 px-2 py-0.5">
                        +{service.items.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
