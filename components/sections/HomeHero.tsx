"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/site";

export default function HomeHero() {
  return (
    <section className="relative bg-navy min-h-screen flex flex-col pt-16 overflow-hidden">

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        src="/images/hero-video.mp4"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90" />

      {/* Main content */}
      <div className="relative z-10 site-shell flex-1 flex flex-col justify-center py-16 md:py-20">

        {/* Logo + brand */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-ivory/30">
            <Image src="/logo.jpg" alt="Al Hilal" fill className="object-cover" priority />
          </div>
          <div>
            <span className="font-display font-bold text-ivory text-base tracking-tight">AL HILAL</span>
            <span className="text-[9px] uppercase tracking-[0.16em] text-ivory/40 block">
              Print &amp; Branding · {COMPANY.addressFull.split('\n')[0]}
            </span>
          </div>
        </motion.div>

        {/* Headline — real, honest positioning */}
        <motion.h1
          className="font-display font-bold text-ivory mb-6 max-w-3xl"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          Printing &amp; Branding
          <br />
          <span className="text-gold">for Sharjah &amp; UAE</span>
          <br />
          <span className="text-ivory/60" style={{ fontSize: "0.55em", fontWeight: 400 }}>
            Offset · Digital · Corporate Gifts · Stamps · Signage
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          className="body-large text-ivory/60 max-w-xl mb-10"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          Based in Sharjah since 1999. Offset printing, digital printing, large format,
          corporate gifts, rubber stamps, and advertising production — from one production house.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
        >
          <Link href="/get-a-quote" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-navy text-sm font-bold hover:bg-gold/90 transition-colors">
            Get a Free Quote
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="/gallery" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-ivory/25 text-ivory text-sm font-medium hover:border-ivory/50 hover:bg-ivory/10 transition-all">
            See Our Work
          </Link>
          <a
            href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white text-sm font-medium hover:bg-[#1DAA53] transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 18 18" fill="currentColor">
              <path d="M9 0a9 9 0 0 0-7.8 13.5L0 18l4.65-1.2A9 9 0 1 0 9 0z"/>
            </svg>
            WhatsApp
          </a>
        </motion.div>

        {/* Real facts — no fake numbers */}
        <motion.div
          className="flex flex-wrap items-center gap-6 pt-8 border-t border-ivory/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <div className="flex items-center gap-2.5">
            <span className="font-display font-bold text-gold text-2xl">Est.</span>
            <div>
              <span className="font-display font-bold text-ivory text-2xl">1999</span>
              <p className="text-[10px] text-ivory/30 uppercase tracking-[0.1em]">Sharjah, UAE</p>
            </div>
          </div>
          <div className="w-px h-8 bg-ivory/10" />
          <div>
            <a href={`tel:${COMPANY.phone}`} className="font-display font-bold text-ivory text-lg hover:text-gold transition-colors">
              {COMPANY.phone}
            </a>
            <p className="text-[10px] text-ivory/30 uppercase tracking-[0.1em]">Call us</p>
          </div>
          <div className="w-px h-8 bg-ivory/10" />
          <a href={`mailto:${COMPANY.email}`} className="text-sm text-ivory/50 hover:text-ivory transition-colors">
            {COMPANY.email}
          </a>
        </motion.div>
      </div>

      {/* Services ticker */}
      <div className="relative z-10 border-t border-ivory/10 bg-navy/40 py-3 overflow-hidden">
        <div className="marquee-track gap-8">
          {[
            "Offset Printing", "Business Cards", "Brochures", "Stickers", "Roll-Ups", "Banners",
            "Corporate Gifts", "T-Shirt Printing", "Sublimation", "Rubber Stamps", "Signage", "Acrylic Signs",
            "Offset Printing", "Business Cards", "Brochures", "Stickers", "Roll-Ups", "Banners",
            "Corporate Gifts", "T-Shirt Printing", "Sublimation", "Rubber Stamps", "Signage", "Acrylic Signs",
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-8 shrink-0">
              <span className="text-[10px] uppercase tracking-[0.14em] text-ivory/30 font-medium whitespace-nowrap">{s}</span>
              <span className="w-1 h-1 rounded-full bg-gold/30 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
