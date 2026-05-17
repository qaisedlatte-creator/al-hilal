import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { industries, getIndustry } from "@/lib/data/industries";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import HomeCTA from "@/components/sections/HomeCTA";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical: `/industries/${slug}` },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <section className="bg-ivory pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="site-shell">
          <FadeIn className="flex items-center gap-2 mb-8">
            <Link href="/industries" className="text-[11px] uppercase tracking-[0.1em] text-steel hover:text-navy transition-colors flex items-center gap-1.5">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M8 5H2M4 3L2 5l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
              All Industries
            </Link>
          </FadeIn>
          <FadeIn>
            <SectionLabel>Industry</SectionLabel>
            <h1 className="display-hero font-display font-bold text-charcoal mt-3">{industry.title}</h1>
            <p className="mt-3 font-display font-medium text-navy" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)" }}>
              {industry.tagline}
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-6 max-w-2xl">
            <p className="body-large text-steel">{industry.description}</p>
          </FadeIn>
        </div>
      </section>

      <section className="page-section bg-surface">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeIn>
            <SectionLabel>Our Understanding</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-3 mb-6">25 years of sector experience</h2>
            <p className="body-large text-steel leading-relaxed">{industry.longDescription}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionLabel>Services for {industry.title}</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-3 mb-6">What we produce</h2>
            <ul className="flex flex-col gap-3">
              {industry.services.map((s) => (
                <li key={s} className="flex items-center gap-3 text-steel body-md border-b border-border py-3 last:border-0">
                  <span className="w-4 h-px bg-navy/30 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="page-section bg-ivory">
        <div className="site-shell grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeIn>
            <SectionLabel>Challenges We Solve</SectionLabel>
            <ul className="mt-6 flex flex-col gap-3">
              {industry.challenges.map((c) => (
                <li key={c} className="flex items-start gap-3 p-5 bg-surface border border-border">
                  <span className="mt-1 w-4 h-4 rounded-full bg-steel/10 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-steel/50" />
                  </span>
                  <p className="text-sm text-charcoal">{c}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionLabel>How We Solve Them</SectionLabel>
            <ul className="mt-6 flex flex-col gap-3">
              {industry.solutions.map((s) => (
                <li key={s} className="flex items-start gap-3 p-5 bg-navy-light border border-navy/10">
                  <span className="mt-1 w-4 h-4 rounded-full bg-navy/20 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy" />
                  </span>
                  <p className="text-sm text-charcoal">{s}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
