import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Print & Production Insights | Al Hilal Blog",
  description:
    "Expert articles on print production, large format, corporate gifts, branding, and UAE market insights from Al Hilal's production team.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "offset-vs-digital-printing-guide",
    title: "Offset vs Digital Printing: How to Choose for Your Next Project",
    excerpt: "The print industry's most common question has a nuanced answer. Here's how to think about it based on your quantities, timeline, and quality requirements.",
    category: "Production Guide",
    date: "12 May 2025",
    readTime: "6 min read",
  },
  {
    slug: "corporate-gifting-uae-ramadan",
    title: "Corporate Gifting in UAE: The Ramadan Programme Playbook",
    excerpt: "Ramadan gifting is the most important gifting moment in the UAE business calendar. Here's how to plan, produce, and deliver it without the usual last-minute chaos.",
    category: "Corporate Gifts",
    date: "3 Mar 2025",
    readTime: "8 min read",
  },
  {
    slug: "large-format-printing-outdoor-uae",
    title: "Why Most Outdoor Graphics Fail in the UAE (And What to Specify Instead)",
    excerpt: "UV radiation, humidity, and wind loading in the UAE test outdoor graphics harder than almost any other climate. Here's the specification guide your print supplier should know.",
    category: "Large Format",
    date: "18 Feb 2025",
    readTime: "7 min read",
  },
  {
    slug: "artwork-file-preparation-print",
    title: "How to Prepare Print-Ready Artwork Files (The Complete Guide)",
    excerpt: "Bleed, resolution, colour modes, embedded fonts — a complete guide to setting up your artwork so nothing gets rejected at pre-press and your colours match on press.",
    category: "Production Guide",
    date: "5 Jan 2025",
    readTime: "10 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-paper pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="site-shell">
          <FadeIn>
            <SectionLabel>Insights</SectionLabel>
            <h1
              className="font-display font-bold text-ink mt-2"
              style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)", lineHeight: 0.95, letterSpacing: "-0.03em" }}
            >
              Print, production,
              <br />
              and the Gulf market.
            </h1>
          </FadeIn>
          <FadeIn delay={0.15} className="mt-8 max-w-xl">
            <p className="body-large text-muted">
              Practical guides, industry insights, and production knowledge from 25 years of print and advertising in the UAE.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="page-section bg-paper">
        <div className="site-shell">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="aspect-[16/9] bg-surface mb-5 overflow-hidden">
                    <div className="w-full h-full bg-ink/0 group-hover:bg-ink/10 transition-colors duration-300" />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.1em] text-green">{post.category}</span>
                    <span className="text-border">·</span>
                    <span className="text-xs text-muted">{post.date}</span>
                    <span className="text-border">·</span>
                    <span className="text-xs text-muted">{post.readTime}</span>
                  </div>
                  <h2 className="font-display font-bold text-2xl text-ink group-hover:text-green transition-colors mb-3 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-muted text-sm leading-relaxed">{post.excerpt}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
