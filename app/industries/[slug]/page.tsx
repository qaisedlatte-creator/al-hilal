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
      <section className="bg-paper pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="site-shell">
          <FadeIn className="flex items-center gap-3 mb-8">
            <Link href="/industries" className="text-xs font-medium uppercase tracking-[0.1em] text-muted hover:text-ink transition-colors flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10 6H2M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              All Industries
            </Link>
          </FadeIn>
          <FadeIn>
            <SectionLabel>Industry</SectionLabel>
            <h1
              className="font-display font-bold text-ink mt-2"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
            >
              {industry.title}
            </h1>
            <p className="mt-4 font-display text-green font-medium" style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)" }}>
              {industry.tagline}
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-8 max-w-2xl">
            <p className="body-large text-muted">{industry.description}</p>
          </FadeIn>
        </div>
      </section>

      <section className="page-section bg-surface">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <FadeIn>
            <SectionLabel>Our Understanding</SectionLabel>
            <p className="body-large text-muted mt-4 leading-relaxed">{industry.longDescription}</p>
          </FadeIn>
          <div className="flex flex-col gap-10">
            <FadeIn delay={0.1}>
              <SectionLabel>Services for {industry.title}</SectionLabel>
              <ul className="mt-4 flex flex-col gap-3">
                {industry.services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-muted body-md">
                    <span className="w-4 h-px bg-green shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="page-section bg-paper">
        <div className="site-shell grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn>
            <SectionLabel>Common Challenges</SectionLabel>
            <ul className="mt-6 flex flex-col gap-4">
              {industry.challenges.map((c) => (
                <li key={c} className="flex items-start gap-4 p-5 border border-border">
                  <span className="mt-1 w-5 h-5 rounded-full bg-surface flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted" />
                  </span>
                  <p className="text-sm text-ink">{c}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionLabel>How We Solve Them</SectionLabel>
            <ul className="mt-6 flex flex-col gap-4">
              {industry.solutions.map((s) => (
                <li key={s} className="flex items-start gap-4 p-5 border border-green/20 bg-green/5">
                  <span className="mt-1 w-5 h-5 rounded-full bg-green/20 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-green" />
                  </span>
                  <p className="text-sm text-ink">{s}</p>
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
