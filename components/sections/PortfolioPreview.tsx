import Link from "next/link";
import { getFeaturedProjects } from "@/lib/data/projects";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const PROJECT_GRADIENTS = [
  "from-navy to-navy-mid",
  "from-[#2A1A3D] to-[#1A0A2D]",
  "from-[#1A3D1A] to-[#0A2D0A]",
];

const PROJECT_PATTERNS = [
  // Grid lines pattern
  "repeating-linear-gradient(0deg, transparent, transparent 29px, rgba(255,255,255,0.03) 29px, rgba(255,255,255,0.03) 30px), repeating-linear-gradient(90deg, transparent, transparent 29px, rgba(255,255,255,0.03) 29px, rgba(255,255,255,0.03) 30px)",
  // Diagonal stripes
  "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 11px)",
  // Dots
  "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
];

export default function PortfolioPreview() {
  const projects = getFeaturedProjects();

  return (
    <section className="page-section bg-surface">
      <div className="site-shell">
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-2">
              Real projects.
              <br />
              <span className="text-navy">Real results.</span>
            </h2>
          </div>
          <Link href="/work" className="text-sm font-medium text-navy hover:text-navy-mid transition-colors shrink-0 flex items-center gap-1.5">
            Full portfolio
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </FadeIn>

        {/* Featured project grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {projects.map((project, i) => {
            const gradient = PROJECT_GRADIENTS[i % PROJECT_GRADIENTS.length];
            const pattern = PROJECT_PATTERNS[i % PROJECT_PATTERNS.length];
            const isLarge = i === 0;

            return (
              <StaggerItem key={project.slug} className={isLarge ? "md:col-span-7" : "md:col-span-5"}>
                <Link href={`/work/${project.slug}`} className="group block h-full">
                  {/* Visual card */}
                  <div
                    className={`relative overflow-hidden ${isLarge ? "aspect-[16/10]" : "aspect-[4/3]"} bg-gradient-to-br ${gradient}`}
                    style={{ backgroundImage: pattern, backgroundSize: "30px 30px" }}
                  >
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-2.5 py-1 bg-ivory/15 backdrop-blur-sm text-ivory text-[10px] font-semibold uppercase tracking-[0.1em] border border-ivory/20">
                        {project.categoryLabel}
                      </span>
                    </div>

                    {/* Year */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-[11px] text-ivory/40 font-medium">{project.year}</span>
                    </div>

                    {/* Visual content — Abstract print representation */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                      <div className={`${isLarge ? "w-64 h-48" : "w-40 h-32"} border border-ivory/30`}>
                        <div className="w-full h-1/3 border-b border-ivory/20 flex">
                          <div className="w-1/3 h-full bg-ivory/10 border-r border-ivory/20" />
                          <div className="w-2/3 h-full" />
                        </div>
                        <div className="p-3 flex flex-col gap-1.5">
                          <div className="h-1 bg-ivory/30 w-3/4 rounded-sm" />
                          <div className="h-1 bg-ivory/20 w-1/2 rounded-sm" />
                          <div className="h-1 bg-ivory/20 w-2/3 rounded-sm" />
                        </div>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center px-6">
                        <p className="text-ivory font-display font-bold text-lg mb-1">{project.title}</p>
                        <p className="text-ivory/60 text-sm mb-4">{project.client}</p>
                        <span className="inline-flex items-center gap-2 text-gold text-sm font-medium">
                          View Case Study →
                        </span>
                      </div>
                    </div>

                    {/* Gold accent border on hover */}
                    <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Info below */}
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-steel font-medium mb-1">
                        {project.client}
                      </p>
                      <h3 className="font-display font-bold text-lg text-charcoal group-hover:text-navy transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="shrink-0 w-8 h-8 border border-border flex items-center justify-center group-hover:bg-navy group-hover:border-navy transition-all mt-1">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-charcoal group-hover:text-ivory transition-colors">
                        <path d="M2.5 9.5l7-7M4 2.5h5.5v5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeIn delay={0.3} className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-steel text-sm">
            We&rsquo;ve produced for hotels, developers, retailers, and enterprises across the Gulf for 25+ years.
          </p>
          <Link
            href="/work"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 bg-navy text-ivory text-sm font-medium hover:bg-navy-mid transition-colors"
          >
            All Projects
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
