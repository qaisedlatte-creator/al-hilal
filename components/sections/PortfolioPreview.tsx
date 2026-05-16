import Link from "next/link";
import { getFeaturedProjects } from "@/lib/data/projects";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const categoryColors: Record<string, string> = {
  offset: "bg-surface text-ink",
  digital: "bg-surface text-ink",
  "large-format": "bg-surface text-ink",
  gifts: "bg-surface text-ink",
  signage: "bg-surface text-ink",
  uniforms: "bg-surface text-ink",
};

export default function PortfolioPreview() {
  const projects = getFeaturedProjects();

  return (
    <section className="page-section bg-surface">
      <div className="site-shell">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="display-subtitle text-ink balanced font-display font-bold">
              Built for brands that
              <br />
              demand excellence.
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-ink hover:text-green transition-colors shrink-0"
          >
            View All Work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </FadeIn>

        {/* Projects grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <StaggerItem key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className={`group block ${i === 0 ? "md:col-span-2" : ""}`}
              >
                {/* Image placeholder */}
                <div
                  className={`relative w-full overflow-hidden bg-cream ${
                    i === 0 ? "aspect-[16/10]" : "aspect-[4/3]"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-paper/20 to-surface/60 group-hover:opacity-0 transition-opacity duration-500" />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-sans font-semibold uppercase tracking-[0.1em] px-3 py-1.5 ${categoryColors[project.category] ?? "bg-surface text-ink"}`}>
                      {project.categoryLabel}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                    <span className="text-paper text-sm font-medium flex items-center gap-2">
                      View Case Study
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Project info */}
                <div className="mt-4">
                  <p className="text-xs font-sans font-medium uppercase tracking-[0.1em] text-muted mb-1.5">
                    {project.client} &middot; {project.year}
                  </p>
                  <h3 className="font-display font-bold text-lg text-ink group-hover:text-green transition-colors">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
