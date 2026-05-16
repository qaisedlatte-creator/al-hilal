import Link from "next/link";
import { industries } from "@/lib/data/industries";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const industryIcons: Record<string, string> = {
  hospitality: "M3 3h18v4H3V3zm2 4v10h4V7H5zm5 0v10h4V7h-4zm5 0v10h4V7h-4z",
  retail: "M20 7H4l1.5-3h13L20 7zm-9 3v7H9v-7h2zm4 0v7h-2v-7h2zm-8 0v7H5v-7h2zm10 0v7h-2v-7h2zm-9 9h10v2H8v-2z",
  events: "M8 2v3M16 2v3M3 8h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z",
  construction: "M2 20h20M4 20V12l8-8 8 8v8M10 20v-5h4v5M14 8.5V4h3v4.5",
  healthcare: "M12 5v14M5 12h14",
};

export default function IndustriesSection() {
  return (
    <section className="page-section bg-paper">
      <div className="site-shell">
        <FadeIn className="mb-14">
          <SectionLabel>Who We Serve</SectionLabel>
          <h2 className="display-subtitle text-ink balanced font-display font-bold">
            Built for every industry.
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industries.map((industry) => (
            <StaggerItem key={industry.slug}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group flex flex-col items-start gap-4 p-6 border border-border hover:border-green hover:bg-surface transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center text-green group-hover:scale-110 transition-transform">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={industryIcons[industry.slug] ?? "M12 12h.01"} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-ink text-sm mb-1 group-hover:text-green transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">{industry.tagline}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="mt-8 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-medium text-green hover:text-ink transition-colors"
          >
            Explore all industries
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
