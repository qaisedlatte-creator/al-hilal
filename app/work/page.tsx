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

const CARD_GRADIENTS = [
  "from-navy to-[#1A3A5C]",
  "from-[#1A2F1A] to-[#0D1F0D]",
  "from-[#2A1F3D] to-[#1A0D2D]",
  "from-[#3D2A1A] to-[#2D1A0A]",
  "from-[#1A2A3D] to-[#0A1A2D]",
  "from-[#3D1F1A] to-[#2D0D0A]",
  "from-charcoal to-[#0D0D1A]",
  "from-[#1A3D2A] to-[#0A2D1A]",
];

export default function WorkPage() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="bg-ivory pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="site-shell">
          <FadeIn>
            <SectionLabel>Portfolio</SectionLabel>
            <h1 className="display-hero font-display font-bold text-charcoal mt-3">
              Work that speaks
              <br />
              <span className="text-navy">for itself.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-5 max-w-xl">
            <p className="body-large text-steel">
              Selected projects across print, signage, large format, corporate gifts, uniforms, and
              branded production for clients across UAE and the Gulf.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter */}
      <div className="bg-ivory border-b border-border sticky top-16 z-10">
        <div className="site-shell py-3 flex gap-2 overflow-x-auto">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`shrink-0 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                active === cat.key
                  ? "bg-navy text-ivory"
                  : "border border-border text-steel hover:border-navy/40 hover:text-navy"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="page-section bg-ivory">
        <div className="site-shell">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filtered.map((project, i) => {
                const gradient = CARD_GRADIENTS[i % CARD_GRADIENTS.length];
                return (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                  >
                    <Link href={`/work/${project.slug}`} className="group block">
                      {/* Visual card */}
                      <div className={`relative aspect-[4/3] bg-gradient-to-br ${gradient} overflow-hidden`}>
                        {/* Pattern overlay */}
                        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 8px, white 8px, white 9px)" }} />

                        {/* Category + year */}
                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                          <span className="px-2.5 py-1 bg-ivory/15 backdrop-blur-sm text-ivory text-[10px] font-semibold uppercase tracking-[0.1em] border border-ivory/20">
                            {project.categoryLabel}
                          </span>
                          <span className="text-[11px] text-ivory/40">{project.year}</span>
                        </div>

                        {/* Abstract print visual */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                          <div className="w-28 h-20 border border-ivory/40 flex flex-col">
                            <div className="h-1/3 bg-ivory/30 border-b border-ivory/30" />
                            <div className="flex-1 p-2 flex flex-col gap-1">
                              <div className="h-0.5 bg-ivory/40 w-3/4" />
                              <div className="h-0.5 bg-ivory/30 w-1/2" />
                            </div>
                          </div>
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-gold text-sm font-semibold flex items-center gap-2">
                            View Case Study →
                          </span>
                        </div>

                        {/* Gold border on hover */}
                        <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>

                      <div className="mt-4">
                        <p className="text-[11px] uppercase tracking-[0.1em] text-steel font-medium mb-1">
                          {project.client} &middot; {project.year}
                        </p>
                        <h2 className="font-display font-bold text-lg text-charcoal group-hover:text-navy transition-colors">
                          {project.title}
                        </h2>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
