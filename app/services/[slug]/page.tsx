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
      <section className="bg-paper pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="site-shell">
          <FadeIn>
            <SectionLabel>Service</SectionLabel>
            <h1
              className="font-display font-bold text-ink mt-2"
              style={{
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              {service.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-6">
            <p
              className="font-display font-medium text-green"
              style={{ fontSize: "clamp(1.25rem, 3vw, 2rem)", letterSpacing: "-0.01em" }}
            >
              {service.tagline}
            </p>
          </FadeIn>
          <FadeIn delay={0.2} className="mt-8 max-w-2xl">
            <p className="body-large text-muted">{service.description}</p>
          </FadeIn>
          <FadeIn delay={0.3} className="mt-8">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green text-paper text-sm font-medium tracking-wide hover:bg-green-hover transition-colors"
            >
              Request a Quote for {service.shortTitle}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Long description */}
      <section className="page-section bg-surface">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <FadeIn>
            <SectionLabel>About This Service</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-ink mt-2">
              What you can expect
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="body-large text-muted leading-relaxed">{service.longDescription}</p>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="page-section bg-paper">
        <div className="site-shell">
          <FadeIn className="mb-12">
            <SectionLabel>What&rsquo;s Included</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-ink mt-2">
              Capabilities &amp; features
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((feature) => (
              <StaggerItem key={feature}>
                <div className="flex items-start gap-4 p-5 border border-border">
                  <span className="mt-1 w-5 h-5 rounded-full bg-green/10 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-green" />
                  </span>
                  <p className="text-sm text-ink font-medium">{feature}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Use cases */}
      <section className="page-section bg-surface">
        <div className="site-shell grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeIn>
            <SectionLabel>Typical Applications</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-ink mt-2 mb-8">
              Common use cases
            </h2>
            <ul className="flex flex-col gap-3">
              {service.useCases.map((uc) => (
                <li key={uc} className="flex items-center gap-3 text-muted body-md">
                  <span className="w-4 h-px bg-green shrink-0" />
                  {uc}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionLabel>Industries Served</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-ink mt-2 mb-8">
              Who uses this service
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.industries.map((industry) => (
                <span
                  key={industry}
                  className="px-4 py-2 border border-border text-sm font-medium text-ink"
                >
                  {industry}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related services */}
      <section className="page-section bg-ink">
        <div className="site-shell">
          <FadeIn className="mb-12">
            <SectionLabel light>Related Services</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-paper mt-2">
              More from Al Hilal
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((rel) => (
              <StaggerItem key={rel.slug}>
                <Link
                  href={`/services/${rel.slug}`}
                  className="group flex flex-col gap-4 p-6 border border-paper/10 hover:border-green transition-colors"
                >
                  <div className="w-4 h-px bg-green" />
                  <h3 className="font-display font-bold text-xl text-paper group-hover:text-green transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-sm text-paper/40">{rel.tagline}</p>
                  <span className="text-xs font-medium text-green flex items-center gap-1 mt-auto">
                    Learn more
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
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
