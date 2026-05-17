import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/site";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import HomeCTA from "@/components/sections/HomeCTA";

export const metadata: Metadata = {
  title: "About Al Hilal | Printing & Advertising, Sharjah UAE Since 1999",
  description:
    "Al Hilal Printing & Advertising has been producing offset printing, digital printing, corporate gifts, stamps and signage from Sharjah, UAE since 1999.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ivory pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <FadeIn>
            <SectionLabel>About Us</SectionLabel>
            <h1 className="display-hero font-display font-bold text-charcoal mt-3">
              Printing &amp; Branding
              <br />
              <span className="text-navy">since 1999.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="body-large text-steel">
              AL HILAL Print Press is a Sharjah-based print and advertising production company
              offering offset printing, digital printing, corporate gifts, rubber stamps, and
              signage services to businesses across the UAE.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Brand bar instead of compressed image */}
      <div className="bg-navy py-8">
        <div className="site-shell flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-ivory/20">
              <Image src="/logo.jpg" alt="Al Hilal" fill className="object-cover" />
            </div>
            <div>
              <p className="font-display font-bold text-ivory text-xl">AL HILAL</p>
              <p className="text-[10px] uppercase tracking-[0.16em] text-ivory/40 mt-0.5">Print Press · Sharjah, UAE · Est. 1999</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-ivory/10 ml-4" />
          <div className="flex gap-6 sm:ml-4">
            <div>
              <p className="font-display font-bold text-gold text-xl">Est.</p>
              <p className="font-display font-bold text-ivory text-2xl -mt-1">1999</p>
            </div>
            <div className="w-px h-10 bg-ivory/10" />
            <div className="flex flex-col gap-1">
              <a href={`tel:${COMPANY.phone}`} className="text-ivory/70 text-sm hover:text-ivory transition-colors">{COMPANY.phone}</a>
              <a href={`mailto:${COMPANY.email}`} className="text-ivory/40 text-xs hover:text-ivory/70 transition-colors">{COMPANY.email}</a>
            </div>
          </div>
        </div>
      </div>

      {/* About content */}
      <section className="page-section bg-surface">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeIn>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-3 mb-6">
              Based in Sharjah.
              <br />
              <span className="text-navy">Serving the UAE.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="flex flex-col gap-5">
            <p className="body-large text-steel">
              AL HILAL Printing &amp; Advertising is located on Al Arouba Street in Al Ghuwair,
              Sharjah. We have been operating from this location since {COMPANY.established},
              providing print and branding services to businesses across the UAE.
            </p>
            <p className="body-large text-steel">
              Our production covers offset printing for business stationery and marketing
              materials, digital printing for signage and promotional items, corporate gift
              production including sublimation and engraving, rubber stamps, and outdoor/indoor
              advertising signage.
            </p>
            <p className="body-large text-steel">
              We work with hotels, restaurants, retail businesses, corporate companies, and
              individual clients from across Sharjah, Dubai, and the wider UAE.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services summary */}
      <section className="page-section bg-ivory">
        <div className="site-shell">
          <FadeIn className="mb-10">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-3">
              What we produce
            </h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Offset Printing",
                items: ["Brochures", "Business Cards", "Flyers", "Letter Heads", "Calendars", "Catalogues", "Booklets"],
              },
              {
                title: "Digital Printing",
                items: ["Stickers", "Roll-Ups", "Pop-Ups", "Banners", "Acrylic Signs", "Sign Boards", "Window Films"],
              },
              {
                title: "Corporate Gifts",
                items: ["Sublimation", "T-Shirt Printing", "Epoxy Coating", "Canvas Bags", "Cups & Pens", "Engraving", "Gift Sets"],
              },
              {
                title: "Rubber Stamps",
                items: ["Self-Inking", "Pre-Inked", "Traditional", "Date Stamps", "Company Stamps"],
              },
              {
                title: "Signage & Advertising",
                items: ["Hoardings", "Signboards", "LED Displays", "Vehicle Wraps", "Exhibition Stands"],
              },
            ].map((cat) => (
              <StaggerItem key={cat.title}>
                <div className="p-6 bg-paper border border-border h-full">
                  <div className="w-5 h-0.5 bg-gold mb-5" />
                  <h3 className="font-display font-bold text-xl text-charcoal mb-4">{cat.title}</h3>
                  <ul className="flex flex-col gap-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[13px] text-steel">
                        <span className="w-1 h-1 rounded-full bg-navy/40 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Real clients */}
      <section className="page-section bg-surface">
        <div className="site-shell">
          <FadeIn className="mb-8">
            <SectionLabel>Our Clients</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-3">
              Businesses who trust us
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {["Pullman", "Ramada", "Pearl Imperial", "AASA Group", "Drip Burgers", "Avenue", "IRC", "Ruqaya", "Legend", "Sported", "UQC International"].map((name) => (
                <div key={name} className="flex items-center justify-center p-5 bg-ivory border border-border text-center">
                  <span className="font-semibold text-charcoal text-sm">{name}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Location */}
      <section className="page-section bg-ivory">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <FadeIn>
            <SectionLabel>Find Us</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-3 mb-6">
              Visit our facility
            </h2>
            <div className="flex flex-col gap-4 text-steel">
              <p className="font-semibold text-charcoal">AL HILAL Print Press</p>
              <p className="text-sm">Offset, Digital &amp; Advertising Services (STAMPS)</p>
              <p className="text-sm">Al Arouba St - Al Ghuwair - Hay Al Gharb</p>
              <p className="text-sm">Sharjah, United Arab Emirates</p>
              <div className="flex flex-col gap-2 mt-2">
                <a href={`tel:${COMPANY.phone}`} className="text-navy font-medium hover:text-navy-mid transition-colors">{COMPANY.phone}</a>
                <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`} className="text-[#25D366] font-medium">{COMPANY.whatsapp} (WhatsApp)</a>
                <a href={`mailto:${COMPANY.email}`} className="text-steel hover:text-charcoal transition-colors">{COMPANY.email}</a>
              </div>
              <div className="mt-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-ivory text-sm font-semibold hover:bg-navy-mid transition-colors">
                  Contact Us
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="overflow-hidden border border-border">
              <iframe
                src={COMPANY.mapsEmbed}
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Al Hilal Print Press"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
