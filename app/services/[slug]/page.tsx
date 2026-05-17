import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { services, getService, getRelatedServices } from "@/lib/data/services";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import HomeCTA from "@/components/sections/HomeCTA";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = getRelatedServices(slug, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-ivory pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="site-shell">
          <FadeIn className="flex items-center gap-3 mb-8">
            <Link href="/services" className="text-[11px] uppercase tracking-[0.1em] text-steel hover:text-navy transition-colors flex items-center gap-1.5">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M8 5H2M4 3L2 5l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              Services
            </Link>
          </FadeIn>
          <FadeIn>
            <SectionLabel>Service</SectionLabel>
            <h1 className="display-hero font-display font-bold text-charcoal mt-3">{service.title}</h1>
            <p className="mt-3 font-display font-medium text-navy" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)" }}>
              {service.tagline}
            </p>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-6 max-w-2xl">
            <p className="body-large text-steel">{service.description}</p>
          </FadeIn>
          <FadeIn delay={0.25} className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/get-a-quote" className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy text-ivory text-sm font-semibold hover:bg-navy-mid transition-colors">
              Request a Quote for {service.shortTitle}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 border border-navy/20 text-navy text-sm font-medium hover:border-navy hover:bg-navy/5 transition-all">
              Talk to our team
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Image placeholder */}
      <div className="w-full h-48 bg-gradient-to-r from-navy to-navy-mid relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 29px, white 29px, white 30px), repeating-linear-gradient(90deg, transparent, transparent 29px, white 29px, white 30px)" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-ivory/20 font-display font-bold text-4xl uppercase tracking-wider">{service.title}</p>
        </div>
      </div>

      {/* Content */}
      <section className="page-section bg-surface">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeIn>
            <SectionLabel>What to Expect</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-3 mb-6">
              About this service
            </h2>
            <p className="body-large text-steel leading-relaxed">{service.longDescription}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionLabel>What&rsquo;s Included</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-3 mb-6">
              Features &amp; capabilities
            </h2>
            <ul className="flex flex-col gap-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 py-3 border-b border-border last:border-0">
                  <span className="mt-1 w-4 h-4 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy" />
                  </span>
                  <p className="text-sm text-charcoal">{f}</p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Use cases + Industries */}
      <section className="page-section bg-ivory">
        <div className="site-shell grid grid-cols-1 md:grid-cols-2 gap-10">
          <FadeIn>
            <SectionLabel>Applications</SectionLabel>
            <h2 className="section-title font-display font-bold text-charcoal mt-3 mb-6">Common use cases</h2>
            <ul className="flex flex-col gap-2.5">
              {service.useCases.map((uc) => (
                <li key={uc} className="flex items-center gap-3 text-steel body-md">
                  <span className="w-4 h-px bg-navy/30 shrink-0" />
                  {uc}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionLabel>Industries</SectionLabel>
            <h2 className="section-title font-display font-bold text-charcoal mt-3 mb-6">Who uses this service</h2>
            <div className="flex flex-wrap gap-2.5">
              {service.industries.map((ind) => (
                <span key={ind} className="px-4 py-2 border border-border text-sm font-medium text-charcoal bg-paper hover:border-navy/30 transition-colors">
                  {ind}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related services */}
      <section className="page-section bg-navy">
        <div className="site-shell">
          <FadeIn className="mb-8">
            <SectionLabel light>More Services</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-ivory mt-3">Also from Al Hilal</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((rel) => (
              <StaggerItem key={rel.slug}>
                <Link href={`/services/${rel.slug}`} className="group flex flex-col gap-4 p-6 border border-ivory/10 hover:border-gold/40 transition-colors h-full">
                  <div className="w-4 h-0.5 bg-gold" />
                  <h3 className="font-display font-bold text-lg text-ivory group-hover:text-gold transition-colors">{rel.title}</h3>
                  <p className="text-[13px] text-ivory/40">{rel.tagline}</p>
                  <span className="text-[11px] font-semibold text-gold/60 flex items-center gap-1 mt-auto">
                    Learn more →
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
