import Link from "next/link";
import { services } from "@/lib/data/services";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const SERVICE_COLORS: Record<string, { bg: string; accent: string; text: string }> = {
  "offset-printing": { bg: "bg-navy", accent: "bg-gold", text: "text-ivory" },
  "digital-printing": { bg: "bg-navy-mid", accent: "bg-gold", text: "text-ivory" },
  "large-format-printing": { bg: "bg-charcoal", accent: "bg-green", text: "text-ivory" },
  "corporate-gifts": { bg: "bg-[#2A1F3D]", accent: "bg-gold", text: "text-ivory" },
  "uniforms-workwear": { bg: "bg-[#1A2F1A]", accent: "bg-green", text: "text-ivory" },
  "rubber-stamps": { bg: "bg-[#3D1F1F]", accent: "bg-gold", text: "text-ivory" },
  "signage-advertising": { bg: "bg-[#1A2A3D]", accent: "bg-gold", text: "text-ivory" },
};

const SERVICE_ICONS: Record<string, string> = {
  "offset-printing": "M4 4h16v2H4V4zm2 4h12v2H6V8zm0 4h12v2H6v-2zm0 4h8v2H6v-2z",
  "digital-printing": "M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5zm3 4h8v2H8V7zm0 4h8v2H8v-2zm0 4h4v2H8v-2z",
  "large-format-printing": "M2 3h20v18H2V3zm2 2v14h16V5H4zm2 2h12v2H6V7zm0 4h12v2H6v-2z",
  "corporate-gifts": "M20 7h-4V5.5A2.5 2.5 0 0 0 13.5 3h-3A2.5 2.5 0 0 0 8 5.5V7H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-9-1.5A.5.5 0 0 1 11.5 5h1a.5.5 0 0 1 .5.5V7h-2V5.5z",
  "uniforms-workwear": "M12 2L2 7v2h2v11h16V9h2V7L12 2zm0 2.618L19.618 9H4.382L12 4.618z",
  "rubber-stamps": "M7 2h10v4H7V2zm-3 4h16v2H4V6zm2 4h12v12H6V10z",
  "signage-advertising": "M3 3h18v2H3V3zm2 4h14v14H5V7zm4 3v8l7-4-7-4z",
};

export default function ServicesGrid() {
  return (
    <section className="page-section bg-ivory">
      <div className="site-shell">
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-2">
              Seven specialisations.
              <br />
              <span className="text-navy">One production partner.</span>
            </h2>
          </div>
          <Link href="/services" className="text-sm font-medium text-navy hover:text-navy-mid transition-colors shrink-0 flex items-center gap-1.5">
            All services
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((service) => {
            const colors = SERVICE_COLORS[service.slug] ?? { bg: "bg-navy", accent: "bg-gold", text: "text-ivory" };
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className={`group relative flex flex-col p-6 ${colors.bg} overflow-hidden h-full min-h-[200px] hover:scale-[1.01] transition-transform duration-300`}
                >
                  {/* Accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 ${colors.accent}`} />

                  {/* Icon */}
                  <div className="mb-auto">
                    <div className="w-10 h-10 mb-5 opacity-30 group-hover:opacity-50 transition-opacity">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d={SERVICE_ICONS[service.slug] ?? "M12 12h.01"} />
                      </svg>
                    </div>
                    <h3 className={`font-display font-bold text-lg ${colors.text} leading-tight mb-2`}>
                      {service.title}
                    </h3>
                    <p className="text-[13px] text-ivory/50 leading-relaxed line-clamp-2">{service.tagline}</p>
                  </div>

                  {/* Arrow */}
                  <div className={`mt-6 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.1em] font-semibold ${colors.accent === "bg-gold" ? "text-gold/70" : "text-green/70"} group-hover:gap-3 transition-all`}>
                    <span>Explore</span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                      <circle cx="64" cy="64" r="48" stroke="white" strokeWidth="1"/>
                      <circle cx="64" cy="64" r="32" stroke="white" strokeWidth="1"/>
                    </svg>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
