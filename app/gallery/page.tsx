"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/animations/FadeIn";

const GALLERY_IMAGES = Array.from({ length: 24 }, (_, i) => ({
  src: `/images/gallery/${String(i + 1).padStart(2, "0")}.jpg`,
  alt: `Al Hilal print work ${i + 1}`,
}));

const CATEGORIES = [
  { key: "all", label: "All Work" },
  { key: "print", label: "Print" },
  { key: "signage", label: "Signage" },
  { key: "gifts", label: "Corporate Gifts" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      <section className="bg-ivory pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="site-shell">
          <FadeIn>
            <SectionLabel>Gallery</SectionLabel>
            <h1 className="display-hero font-display font-bold text-charcoal mt-3">
              Our work.
              <br />
              <span className="text-navy">In their hands.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-5 max-w-xl">
            <p className="body-large text-steel">
              A selection of print, advertising, signage, and corporate gift work produced from our
              Sharjah facility for clients across the UAE.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="pb-20 bg-ivory">
        <div className="site-shell">
          {/* Masonry-style grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: (i % 8) * 0.04 }}
                viewport={{ once: true }}
                className="break-inside-avoid"
              >
                <button
                  onClick={() => setLightbox(img.src)}
                  className="group block w-full relative overflow-hidden bg-surface"
                  aria-label={img.alt}
                >
                  <div className={`relative w-full ${i % 5 === 0 ? "aspect-[3/4]" : i % 3 === 0 ? "aspect-[4/3]" : "aspect-square"}`}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-ivory text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M11 2H2v12h12V5L11 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M11 2v3h3M5 9h6M5 12h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                        View
                      </span>
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-navy/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Gallery image"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 text-ivory/60 hover:text-ivory bg-navy/60 rounded-full p-2"
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
