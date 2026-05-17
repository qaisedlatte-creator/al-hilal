"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/site";

const TRUST_BADGES = [
  { label: "Est. 1999", sub: "Sharjah, UAE" },
  { label: "25+", sub: "Years serving Gulf" },
  { label: "1000+", sub: "Clients produced" },
  { label: "7", sub: "Print specialisations" },
];

export default function HomeHero() {
  return (
    <section className="relative bg-ivory min-h-screen flex flex-col pt-16 overflow-hidden">
      {/* Subtle top accent */}
      <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-navy/10 to-transparent" />

      <div className="site-shell flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center py-12 lg:py-0">

        {/* ─── LEFT: Content ─── */}
        <div className="flex flex-col justify-center py-8 lg:py-16 lg:pr-12 order-2 lg:order-1">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex items-center gap-2.5 mb-7"
          >
            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-border">
              <Image src="/logo.jpg" alt="Al Hilal" fill className="object-cover" priority />
            </div>
            <span className="label text-steel">Al Hilal Printing &amp; Branding — Sharjah, UAE</span>
          </motion.div>

          {/* Headline — reduced from 8.5rem max to ~4.75rem */}
          <motion.h1
            className="display-hero font-display font-bold text-charcoal mb-6 balanced"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            Premium Print
            <br />
            &amp; Branding
            <br />
            <span className="text-navy">for the Gulf.</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            className="body-large text-steel max-w-md mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            25 years of offset printing, large-format production, corporate gifting, signage,
            and branded manufacturing — for the UAE&rsquo;s most demanding businesses.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
          >
            <Link
              href="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-navy text-ivory text-sm font-semibold hover:bg-navy-mid transition-colors"
            >
              Get a Free Quote
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2.5 6.5h8M7 3L10.5 6.5 7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-navy/30 text-navy text-sm font-medium hover:border-navy hover:bg-navy/5 transition-all"
            >
              View Our Work
            </Link>
            <a
              href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-green/30 text-green text-sm font-medium hover:border-green hover:bg-green/5 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 18 18" fill="currentColor">
                <path d="M9 0a9 9 0 0 0-7.8 13.5L0 18l4.65-1.2A9 9 0 1 0 9 0z"/>
              </svg>
              WhatsApp
            </a>
          </motion.div>

          {/* Trust stats — compact */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 pt-8 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            {TRUST_BADGES.map((b) => (
              <div key={b.label} className="flex flex-col gap-0.5">
                <span className="font-display font-bold text-navy text-2xl leading-none">{b.label}</span>
                <span className="text-[11px] text-steel">{b.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ─── RIGHT: Visual ─── */}
        <motion.div
          className="relative order-1 lg:order-2 h-[50vw] lg:h-screen max-h-[600px] lg:max-h-none overflow-hidden"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main image area */}
          <div className="relative w-full h-full bg-navy">
            {/* Brand logo large - centered visual element */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8">
              <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-ivory/20 shadow-2xl">
                <Image
                  src="/logo.jpg"
                  alt="Al Hilal Print & Branding"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="text-center">
                <p className="font-display font-bold text-ivory text-2xl md:text-3xl tracking-tight">AL HILAL</p>
                <p className="label text-ivory/40 mt-1.5">Printing &amp; Branding</p>
                <p className="text-xs text-ivory/25 mt-1">Est. 1999 · Sharjah, UAE</p>
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-8 rounded-full border border-ivory/5" />
              <div className="absolute inset-16 rounded-full border border-ivory/5" />
            </div>

            {/* Floating service chips */}
            <div className="absolute bottom-6 left-4 right-4 flex flex-wrap justify-center gap-2">
              {["Offset Print", "Large Format", "Corporate Gifts", "Signage", "Uniforms", "Stamps"].map((s) => (
                <span key={s} className="px-3 py-1.5 bg-ivory/10 backdrop-blur-sm text-ivory/70 text-[11px] font-medium border border-ivory/10">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Overlay gradient to blend with bg */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ivory/0 to-transparent lg:hidden" />
        </motion.div>
      </div>

      {/* Services ticker */}
      <div className="bg-navy py-3 overflow-hidden">
        <div className="marquee-track gap-8">
          {["Offset Printing", "Digital Printing", "Large Format", "Corporate Gifts", "Uniforms & Workwear", "Rubber Stamps", "Signage & Advertising",
            "Offset Printing", "Digital Printing", "Large Format", "Corporate Gifts", "Uniforms & Workwear", "Rubber Stamps", "Signage & Advertising"].map((s, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0">
              <span className="text-[11px] uppercase tracking-[0.14em] text-ivory/40 font-medium whitespace-nowrap">{s}</span>
              <span className="w-1 h-1 rounded-full bg-gold/40 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
