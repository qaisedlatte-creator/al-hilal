import Link from "next/link";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

// 8 preview images from the real gallery
const PREVIEW_IMAGES = [
  { src: "/images/gallery/01.jpg", alt: "Al Hilal print work" },
  { src: "/images/gallery/02.jpg", alt: "Al Hilal print work" },
  { src: "/images/gallery/03.jpg", alt: "Al Hilal print work" },
  { src: "/images/gallery/04.jpg", alt: "Al Hilal print work" },
  { src: "/images/gallery/05.jpg", alt: "Al Hilal print work" },
  { src: "/images/gallery/06.jpg", alt: "Al Hilal print work" },
  { src: "/images/gallery/07.jpg", alt: "Al Hilal print work" },
  { src: "/images/gallery/08.jpg", alt: "Al Hilal print work" },
];

export default function GalleryPreview() {
  return (
    <section className="page-section bg-surface">
      <div className="site-shell">
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <SectionLabel>Our Work</SectionLabel>
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-2">
              Real production.
              <br />
              <span className="text-navy">Real results.</span>
            </h2>
          </div>
          <Link href="/gallery" className="text-sm font-medium text-navy hover:text-navy-mid transition-colors shrink-0 flex items-center gap-1.5">
            Full gallery
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </FadeIn>

        {/* Grid — 4+4 layout */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {PREVIEW_IMAGES.map((img, i) => (
            <StaggerItem key={i}>
              <Link href="/gallery" className="group block relative overflow-hidden bg-surface">
                <div className={`relative overflow-hidden ${i === 0 || i === 5 ? "aspect-[4/5]" : "aspect-square"}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-300" />
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="mt-8 text-center">
          <Link href="/gallery" className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-ivory text-sm font-semibold hover:bg-navy-mid transition-colors">
            View All Work
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2.5 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
