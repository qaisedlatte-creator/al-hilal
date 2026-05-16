"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems, faqCategories } from "@/lib/data/faq";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/animations/FadeIn";
import HomeCTA from "@/components/sections/HomeCTA";

function FaqAccordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left"
      >
        <span className="font-sans font-medium text-ink text-base pr-4">{question}</span>
        <span
          className={`shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center transition-transform duration-300 ${open ? "rotate-45" : ""}`}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 2v6M2 5h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted leading-relaxed body-md">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState<string>("general");
  const filtered = faqItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <section className="bg-paper pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="site-shell">
          <FadeIn>
            <SectionLabel>FAQ</SectionLabel>
            <h1
              className="font-display font-bold text-ink mt-2"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
            >
              Questions, answered.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-8 max-w-xl">
            <p className="body-large text-muted">
              Everything you need to know about working with Al Hilal. Can&rsquo;t find what you&rsquo;re
              looking for?{" "}
              <a href="/contact" className="text-ink underline hover:text-green transition-colors">
                Contact our team.
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="page-section bg-paper">
        <div className="site-shell grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 lg:gap-20">
          {/* Category nav */}
          <FadeIn>
            <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible sticky lg:top-28">
              {faqCategories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`shrink-0 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-left transition-colors ${
                    activeCategory === cat.key
                      ? "bg-ink text-paper"
                      : "border border-border text-muted hover:border-ink hover:text-ink"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </nav>
          </FadeIn>

          {/* FAQ items */}
          <FadeIn delay={0.1}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {filtered.map((item) => (
                  <FaqAccordion key={item.id} question={item.question} answer={item.answer} />
                ))}
              </motion.div>
            </AnimatePresence>
          </FadeIn>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
