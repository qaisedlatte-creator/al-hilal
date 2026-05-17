"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/site";

export default function HomeHero() {
  return (
    <section className="relative bg-navy min-h-screen flex flex-col overflow-hidden" style={{ paddingTop: "72px" }}>

      {/* Background video — mobile-safe attributes */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
        src="/images/hero-video.mp4"
        style={{ objectPosition: "center" }}
      />

      {/* Dark overlay — consistent opacity */}
      <div className="absolute inset-0 bg-navy/80" />

      {/* Main content */}
      <div className="relative z-10 site-shell flex-1 flex flex-col justify-center py-14 md:py-20">

        {/* Logo + brand */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex items-center gap-3 mb-9"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white/25">
            <Image src="/logo.jpg" alt="Al Hilal" fill className="object-cover" priority />
          </div>
          <div>
            <span className="font-display font-bold text-white text-sm tracking-tight">AL HILAL</span>
            <span className="text-[9px] uppercase tracking-[0.16em] text-white/40 block mt-0.5">
              Printing &amp; Branding · Sharjah, UAE
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-display font-bold text-white mb-5 max-w-3xl"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)", lineHeight: 1.05, letterSpacing: "-0.025em" }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          Printing &amp; Branding
          <br />
          <span className="text-gold">for Sharjah &amp; UAE</span>
        </motion.h1>

        {/* Services subtitle — ivory not dark */}
        <motion.p
          className="text-white/50 text-sm font-medium uppercase tracking-[0.12em] mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Offset · Digital · Large Format · Corporate Gifts · Stamps · Signage
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-white/65 max-w-lg mb-10 leading-relaxed"
          style={{ fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        >
          Based in Sharjah since 1999. Offset printing, digital printing, large format,
          corporate gifts, rubber stamps, and advertising production — from one production house.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mb-14"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
        >
          <Link
            href="/get-a-quote"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-navy text-sm font-bold hover:bg-gold/90 transition-colors"
          >
            Get a Free Quote →
          </Link>
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/25 text-white text-sm font-medium hover:border-white/50 hover:bg-ivory/10 transition-all"
          >
            See Our Work
          </Link>
          <a
            href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#25D366] text-white text-sm font-semibold hover:bg-[#1DAA53] transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 18 18" fill="currentColor">
              <path d="M9 0a9 9 0 0 0-7.8 13.5L0 18l4.65-1.2A9 9 0 1 0 9 0z"/>
            </svg>
            WhatsApp
          </a>
        </motion.div>

        {/* Bottom trust bar — ALL IVORY TEXT on navy bg */}
        <motion.div
          className="flex flex-wrap items-center gap-5 pt-7 border-t border-white/15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <div className="flex items-center gap-2.5">
            <span className="font-display font-bold text-gold text-xl">Est.</span>
            <div>
              <span className="font-display font-bold text-white text-xl">1999</span>
              <p className="text-[10px] text-white/40 uppercase tracking-[0.1em] mt-0.5">Sharjah, UAE</p>
            </div>
          </div>
          <div className="w-px h-7 bg-ivory/15" />
          <a href={`tel:${COMPANY.phone}`} className="group">
            <span className="font-semibold text-white text-sm group-hover:text-gold transition-colors block">
              {COMPANY.phone}
            </span>
            <p className="text-[10px] text-white/40 uppercase tracking-[0.1em]">Call us</p>
          </a>
          <div className="w-px h-7 bg-ivory/15 hidden sm:block" />
          <a href={`mailto:${COMPANY.email}`} className="text-sm text-white/50 hover:text-white transition-colors hidden sm:block">
            {COMPANY.email}
          </a>
        </motion.div>
      </div>

      {/* Services ticker */}
      <div className="relative z-10 border-t border-white/10 py-3 overflow-hidden bg-navy/50 backdrop-blur-sm">
        <div className="marquee-track gap-10">
          {[
            "Offset Printing", "Business Cards", "Brochures", "Flyers", "Stickers",
            "Roll-Ups", "Banners", "Corporate Gifts", "T-Shirt Printing", "Sublimation",
            "Rubber Stamps", "Signage", "Acrylic Signs", "Window Films", "Hoardings",
            "Offset Printing", "Business Cards", "Brochures", "Flyers", "Stickers",
            "Roll-Ups", "Banners", "Corporate Gifts", "T-Shirt Printing", "Sublimation",
            "Rubber Stamps", "Signage", "Acrylic Signs", "Window Films", "Hoardings",
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-10 shrink-0">
              <span className="text-[10px] uppercase tracking-[0.16em] text-white/35 font-semibold whitespace-nowrap">{s}</span>
              <span className="w-1 h-1 rounded-full bg-gold/30 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
