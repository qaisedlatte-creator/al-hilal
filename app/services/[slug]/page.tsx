import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
      <section className="bg-ivory pt-32 pb-0 md:pt-40">
        <div className="site-shell pb-10">
          <FadeIn className="flex items-center gap-2 mb-7">
            <Link href="/services" className="text-[11px] uppercase tracking-[0.1em] text-steel hover:text-navy transition-colors flex items-center gap-1.5">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M8 5H2M4 3L2 5l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
              All Services
            </Link>
          </FadeIn>
          <FadeIn>
            <SectionLabel>Service</SectionLabel>
            <h1 className="display-hero font-display font-bold text-charcoal mt-3">{service.title}</h1>
            <p className="mt-3 text-navy font-medium text-lg">{service.tagline}</p>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-5 max-w-xl">
            <p className="body-large text-steel">{service.description}</p>
          </FadeIn>
          <FadeIn delay={0.25} className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link href="/get-a-quote" className="inline-flex items-center gap-2 px-6 py-3.5 bg-navy text-ivory text-sm font-semibold hover:bg-navy-mid transition-colors">
              Get a Quote for {service.shortTitle}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </FadeIn>
        </div>

        {/* Real service image */}
        <div className="relative h-56 md:h-72 overflow-hidden">
          <Image src={service.image} alt={service.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-navy/30" />
        </div>
      </section>

      {/* What we offer */}
      <section className="page-section bg-surface">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn>
            <SectionLabel>What&rsquo;s Included</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-3 mb-8">
              {service.title} products
            </h2>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.items.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-center gap-3 p-4 bg-ivory border border-border hover:border-navy/20 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                    <span className="font-medium text-charcoal text-sm">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          <FadeIn delay={0.1}>
            <SectionLabel>How to Order</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-3 mb-8">
              Simple process
            </h2>
            <div className="flex flex-col gap-5">
              {[
                { n: "1", t: "Contact us", d: "Call, WhatsApp, or email with your requirements." },
                { n: "2", t: "Send artwork", d: "Share your design files or we can help with setup." },
                { n: "3", t: "Approve & produce", d: "We confirm specs, approve, and begin production." },
                { n: "4", t: "Collect or deliver", d: "Pick up from our Sharjah facility or UAE-wide delivery." },
              ].map((step) => (
                <div key={step.n} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-navy/10 flex items-center justify-center text-navy font-bold text-xs shrink-0 mt-0.5">{step.n}</span>
                  <div>
                    <p className="font-semibold text-charcoal text-sm mb-0.5">{step.t}</p>
                    <p className="text-steel text-sm">{step.d}</p>
                  </div>
                </div>
              ))}
              <div className="mt-4 flex flex-col gap-2">
                <Link href="/get-a-quote" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-navy text-sm font-bold hover:bg-gold/90 transition-colors self-start">
                  Get a Quote →
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Other services */}
      <section className="page-section bg-navy">
        <div className="site-shell">
          <FadeIn className="mb-8">
            <SectionLabel light>More Services</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-ivory mt-3">Also from Al Hilal</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {related.map((rel) => (
              <StaggerItem key={rel.slug}>
                <Link href={`/services/${rel.slug}`} className="group block overflow-hidden border border-ivory/10 hover:border-gold/40 transition-colors">
                  <div className="relative h-36 overflow-hidden bg-navy-mid">
                    <Image src={rel.image} alt={rel.title} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 duration-500" />
                    <div className="absolute inset-0 bg-navy/30" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-ivory text-lg group-hover:text-gold transition-colors mb-1">{rel.title}</h3>
                    <p className="text-[12px] text-ivory/40">{rel.tagline}</p>
                  </div>
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
