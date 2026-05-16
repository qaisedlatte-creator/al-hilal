import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProject } from "@/lib/data/projects";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/animations/FadeIn";
import HomeCTA from "@/components/sections/HomeCTA";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.client} | Al Hilal`,
    description: project.description,
    alternates: { canonical: `/work/${slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-paper pt-36 pb-16 md:pt-44 md:pb-24">
        <div className="site-shell">
          <FadeIn className="flex items-center gap-3 mb-8">
            <Link href="/work" className="text-xs font-medium uppercase tracking-[0.1em] text-muted hover:text-ink transition-colors flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10 6H2M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              All Work
            </Link>
            <span className="text-muted/30">/</span>
            <span className="text-xs font-medium uppercase tracking-[0.1em] text-muted">{project.categoryLabel}</span>
          </FadeIn>
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted mb-4">
              {project.client} &middot; {project.year}
            </p>
            <h1
              className="font-display font-bold text-ink"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              {project.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-8 max-w-2xl">
            <p className="body-large text-muted">{project.description}</p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-medium bg-surface text-muted px-3 py-1.5">
                {tag}
              </span>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Image */}
      <div className="w-full aspect-[21/9] bg-surface" />

      {/* Case study content */}
      <section className="page-section bg-paper">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          <div className="lg:col-span-2 flex flex-col gap-10">
            <FadeIn>
              <SectionLabel>The Challenge</SectionLabel>
              <p className="body-large text-muted mt-3 leading-relaxed">{project.challenge}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionLabel>Our Solution</SectionLabel>
              <p className="body-large text-muted mt-3 leading-relaxed">{project.solution}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <SectionLabel>The Result</SectionLabel>
              <p className="body-large text-muted mt-3 leading-relaxed">{project.result}</p>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <FadeIn delay={0.1} className="flex flex-col gap-6">
            <div className="border-t-2 border-green pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted mb-2">Client</p>
              <p className="font-display font-bold text-xl text-ink">{project.client}</p>
            </div>
            <div className="border-t border-border pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted mb-2">Service</p>
              <p className="font-medium text-ink">{project.categoryLabel}</p>
            </div>
            <div className="border-t border-border pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted mb-2">Year</p>
              <p className="font-medium text-ink">{project.year}</p>
            </div>
            <div className="border-t border-border pt-6">
              <Link
                href="/get-a-quote"
                className="flex items-center gap-2 text-sm font-medium text-green hover:text-ink transition-colors"
              >
                Start a similar project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* More work */}
      <section className="page-section bg-surface">
        <div className="site-shell">
          <FadeIn className="mb-10">
            <SectionLabel>More Work</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-ink mt-2">
              Other projects
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((p) => (
              <FadeIn key={p.slug}>
                <Link href={`/work/${p.slug}`} className="group block">
                  <div className="aspect-[4/3] bg-cream mb-4 overflow-hidden">
                    <div className="w-full h-full bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300" />
                  </div>
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted mb-1">{p.client}</p>
                  <h3 className="font-display font-bold text-lg text-ink group-hover:text-green transition-colors">{p.title}</h3>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
