import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
  title: "Printing & Advertising Insights | Al Hilal Blog",
  description:
    "Expert guides on printing and advertising in UAE — rubber stamps, offset printing, digital printing, large format, corporate gifts, signage and advertising from Al Hilal Sharjah.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "how-much-does-printing-cost-in-uae",
    title: "How Much Does Printing Cost in UAE? (2025 Price Guide)",
    excerpt: "Realistic price benchmarks for business cards, brochures, banners, rubber stamps, and corporate gifts in the UAE — and what actually affects the price.",
    category: "Pricing Guide",
    date: "10 Jun 2025",
    readTime: "7 min read",
  },
  {
    slug: "rubber-stamp-uae-guide",
    title: "How to Get a Rubber Stamp Made in UAE — Complete Guide",
    excerpt: "Types of stamps, what to provide, turnaround times, and where to order rubber stamps in Sharjah and Dubai. Same-day production available.",
    category: "Rubber Stamps",
    date: "25 May 2025",
    readTime: "5 min read",
  },
  {
    slug: "company-stamp-requirements-uae",
    title: "Company Stamp Requirements in UAE — What Every Business Needs",
    excerpt: "What information must appear on a UAE company stamp, when you need one, and how to get yours made quickly in Sharjah.",
    category: "Rubber Stamps",
    date: "18 May 2025",
    readTime: "5 min read",
  },
  {
    slug: "how-to-advertise-business-uae",
    title: "How to Advertise Your Business in UAE — A Practical Guide for SMEs",
    excerpt: "The most effective advertising options for UAE small and medium businesses — print, signage, corporate gifts, and outdoor — with real cost benchmarks.",
    category: "Advertising",
    date: "5 May 2025",
    readTime: "8 min read",
  },
  {
    slug: "how-to-choose-printing-company-sharjah",
    title: "How to Choose the Right Printing Company in Sharjah UAE",
    excerpt: "What separates a reliable print partner from a supplier that will cost you time and credibility — and the questions to ask before you commit.",
    category: "Production Guide",
    date: "28 Apr 2025",
    readTime: "6 min read",
  },
  {
    slug: "offset-vs-digital-printing-guide",
    title: "Offset vs Digital Printing: How to Choose for Your Next Project",
    excerpt: "The print industry's most common question has a nuanced answer. Here's how to think about it based on your quantities, timeline, and quality requirements.",
    category: "Production Guide",
    date: "12 May 2025",
    readTime: "6 min read",
  },
  {
    slug: "business-card-printing-uae-guide",
    title: "Business Card Printing in UAE — Sizes, Finishes and What to Specify",
    excerpt: "Everything you need to know about ordering business cards in UAE — standard sizes, paper stocks, finishes, and how to get cards that make the right impression.",
    category: "Offset Printing",
    date: "15 Apr 2025",
    readTime: "6 min read",
  },
  {
    slug: "sublimation-printing-uae",
    title: "Sublimation Printing in UAE — What It Is and What You Can Make",
    excerpt: "How sublimation printing works, which products it works on, and why it's the go-to process for branded corporate gifts in the UAE.",
    category: "Corporate Gifts",
    date: "2 Apr 2025",
    readTime: "5 min read",
  },
  {
    slug: "signage-guide-uae-businesses",
    title: "Signage for UAE Businesses — Types, Materials and What to Specify",
    excerpt: "From shopfront signs to outdoor hoardings and vehicle wraps — a complete guide to business signage in UAE with materials, costs and lead times.",
    category: "Signage",
    date: "22 Mar 2025",
    readTime: "7 min read",
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
    slug: "roll-up-banner-guide-uae",
    title: "Roll-Up Banners in UAE — Complete Guide for Events and Exhibitions",
    excerpt: "Sizes, hardware quality, design principles, and how to get the most out of roll-up banners and pop-up displays at UAE events.",
    category: "Large Format",
    date: "10 Mar 2025",
    readTime: "5 min read",
  },
  {
    slug: "t-shirt-printing-uae-guide",
    title: "T-Shirt and Uniform Printing in UAE — What Businesses Need to Know",
    excerpt: "Printing methods, fabric choices, minimum quantities, and what to specify for UAE staff uniforms and event merchandise.",
    category: "Corporate Gifts",
    date: "25 Feb 2025",
    readTime: "6 min read",
  },
  {
    slug: "large-format-printing-outdoor-uae",
    title: "Why Most Outdoor Graphics Fail in the UAE (And What to Specify Instead)",
    excerpt: "UV radiation, humidity, and wind loading in the UAE test outdoor graphics harder than almost any other climate.",
    category: "Large Format",
    date: "18 Feb 2025",
    readTime: "7 min read",
  },
  {
    slug: "brochure-printing-uae",
    title: "Brochure Printing in UAE — Formats, Paper Stocks and Finishing Guide",
    excerpt: "The formats that work, paper weights and finishes that make the right impression, and quantities that make financial sense for UAE businesses.",
    category: "Offset Printing",
    date: "10 Feb 2025",
    readTime: "6 min read",
  },
  {
    slug: "sticker-printing-uae",
    title: "Sticker Printing in UAE — Types, Materials and What to Order",
    excerpt: "From vinyl stickers to floor graphics, clear labels, die-cut stickers and one-way vision window vinyl — everything UAE businesses need to know.",
    category: "Digital Printing",
    date: "28 Jan 2025",
    readTime: "5 min read",
  },
  {
    slug: "exhibition-stand-printing-uae",
    title: "Exhibition Stand Printing in UAE — What to Order Before Your Next Show",
    excerpt: "What to order, how to brief your printer, and realistic timelines for Gitex, Big 5, Arab Health and other UAE trade shows.",
    category: "Large Format",
    date: "20 Jan 2025",
    readTime: "6 min read",
  },
  {
    slug: "window-graphics-vinyl-uae",
    title: "Window Graphics and Vinyl Films for UAE Shops",
    excerpt: "How window graphics, one-way vision vinyl, frosted film, and decorative vinyl are used by UAE retail and commercial businesses.",
    category: "Signage",
    date: "12 Jan 2025",
    readTime: "5 min read",
  },
  {
    slug: "corporate-gifts-buyer-guide-uae",
    title: "Corporate Gifts in UAE — The Complete Buyer's Guide for 2025",
    excerpt: "Popular items, quantities, lead times, personalisation options, and how to avoid the most common corporate gifting mistakes in UAE.",
    category: "Corporate Gifts",
    date: "8 Jan 2025",
    readTime: "7 min read",
  },
  {
    slug: "artwork-file-preparation-print",
    title: "How to Prepare Print-Ready Artwork Files (The Complete Guide)",
    excerpt: "Bleed, resolution, colour modes, embedded fonts — a complete guide to setting up your artwork so nothing gets rejected at pre-press.",
    category: "Production Guide",
    date: "5 Jan 2025",
    readTime: "10 min read",
  },
  {
    slug: "printing-advertising-dubai-sharjah",
    title: "Printing and Advertising Companies in Dubai and Sharjah — What to Look For",
    excerpt: "How to find and evaluate printing and advertising companies in Dubai and Sharjah UAE — services, pricing, and the right questions to ask.",
    category: "Advertising",
    date: "2 Jan 2025",
    readTime: "6 min read",
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
              Practical guides and production knowledge from 30+ years of printing and advertising in the UAE. Rubber stamps, offset printing, signage, corporate gifts and more.
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
