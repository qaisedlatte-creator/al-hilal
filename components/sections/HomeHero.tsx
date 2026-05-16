"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/site";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-paper overflow-hidden">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(30,58,42,0.06) 0%, transparent 50%)",
        }}
      />

      {/* Main content */}
      <div className="site-shell flex-1 flex flex-col justify-center pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-green" />
          <span className="text-xs font-sans font-semibold uppercase tracking-[0.16em] text-green">
            Est. {COMPANY.established} &middot; Sharjah, UAE
          </span>
        </motion.div>

        {/* Hero headline */}
        <div className="mb-10 max-w-5xl">
          <motion.h1
            className="font-display text-ink balanced"
            style={{ letterSpacing: "-0.03em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
          >
            <motion.span
              className="block"
              style={{ fontSize: "clamp(4rem, 11vw, 8.5rem)", lineHeight: 0.9 }}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Print.
            </motion.span>
            <motion.span
              className="block"
              style={{ fontSize: "clamp(4rem, 11vw, 8.5rem)", lineHeight: 0.9 }}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Produce.
            </motion.span>
            <motion.span
              className="block text-green"
              style={{ fontSize: "clamp(4rem, 11vw, 8.5rem)", lineHeight: 0.9 }}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              Prevail.
            </motion.span>
          </motion.h1>
        </div>

        {/* Subline + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 max-w-4xl"
        >
          <p className="body-large text-muted max-w-md">
            {COMPANY.years} years of premium print production, large-format advertising, and
            branded manufacturing for the Gulf&rsquo;s most demanding businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-7 py-4 border border-ink text-ink text-sm font-medium tracking-wide hover:bg-ink hover:text-paper transition-colors duration-200"
            >
              Explore Our Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-7 py-4 bg-green text-paper text-sm font-medium tracking-wide hover:bg-green-hover transition-colors duration-200"
            >
              Get a Quote
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="site-shell pb-8 flex items-center justify-between border-t border-border pt-6"
      >
        <div className="flex items-center gap-6 text-xs font-sans font-medium uppercase tracking-[0.1em] text-muted">
          <span>Offset</span>
          <span className="w-px h-3 bg-border" />
          <span>Digital</span>
          <span className="w-px h-3 bg-border" />
          <span>Large Format</span>
          <span className="w-px h-3 bg-border hidden sm:inline-block" />
          <span className="hidden sm:inline">Signage</span>
        </div>
        <motion.button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className="flex items-center gap-2 text-xs font-sans font-medium uppercase tracking-[0.1em] text-muted hover:text-ink transition-colors"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M2.5 7.5L6 11l3.5-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
}
