"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data/projects";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/animations/FadeIn";

const CATEGORIES = [
  { key: "all", label: "All Work" },
  { key: "offset", label: "Offset" },
  { key: "digital", label: "Digital" },
  { key: "large-format", label: "Large Format" },
  { key: "gifts", label: "Corporate Gifts" },
  { key: "signage", label: "Signage" },
  { key: "uniforms", label: "Uniforms" },
];

export default function WorkPage() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="bg-paper pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="site-shell">
          <FadeIn>
            <SectionLabel>Portfolio</SectionLabel>
            <h1
              className="font-display font-bold text-ink mt-2"
              style={{
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
              }}
            >
              Work that speaks
              <br />
              for itself.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-8 max-w-xl">
            <p className="body-large text-muted">
              Selected projects across print, signage, large format, corporate gifts, uniforms, and
              branded production — for clients across UAE and the Gulf.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="bg-paper border-b border-border sticky top-16 z-10">
        <div className="site-shell py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`shrink-0 px-4 py-2 text-xs font-sans font-semibold uppercase tracking-[0.1em] transition-colors ${
                active === cat.key
                  ? "bg-ink text-paper"
                  : "border border-border text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="page-section bg-paper">
        <div className="site-shell">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link href={`/work/${project.slug}`} className="group block">
                    {/* Image area */}
                    <div className="relative aspect-[4/3] bg-surface overflow-hidden">
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-all duration-400 flex items-end p-5">
                        <span className="text-paper text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                          View Case Study
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                          </svg>
                        </span>
                      </div>
                      <span className="absolute top-4 left-4 text-xs font-sans font-semibold uppercase tracking-[0.1em] bg-paper/90 text-ink px-3 py-1.5">
                        {project.categoryLabel}
                      </span>
                    </div>
                    {/* Info */}
                    <div className="mt-4">
                      <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted mb-1.5">
                        {project.client} &middot; {project.year}
                      </p>
                      <h2 className="font-display font-bold text-xl text-ink group-hover:text-green transition-colors">
                        {project.title}
                      </h2>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24 text-muted">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
