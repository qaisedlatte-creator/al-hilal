import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn from "@/components/animations/FadeIn";
import HomeCTA from "@/components/sections/HomeCTA";

const posts = [
  {
    slug: "offset-vs-digital-printing-guide",
    title: "Offset vs Digital Printing: How to Choose for Your Next Project",
    category: "Production Guide",
    date: "12 May 2025",
    readTime: "6 min read",
    excerpt: "The print industry's most common question has a nuanced answer.",
    content: `The question "should I use offset or digital?" comes up in almost every brief we receive at Al Hilal. The answer depends on three variables: quantity, timeline, and quality requirements.\n\n**Quantity is the primary driver.** Offset printing has a setup cost — the time and materials required to produce aluminium plates, make ready the press, and calibrate colour. That cost is absorbed across the run. At 500 copies, you're paying a high per-unit contribution to setup. At 5,000 copies, the setup cost becomes negligible and the economics strongly favour offset. The crossover point varies by format and complexity, but as a rule of thumb: below 500 units, digital wins on price. Above 1,000 units, offset wins.\n\n**Colour consistency is offset's strongest argument.** A well-calibrated offset press running ISO 12647-2 delivers colour accuracy that digital simply cannot match at scale. For brand-critical colour — Pantone matches, consistent photography, corporate identity materials — offset is the right choice for runs above a few hundred copies.\n\n**Digital wins on speed, flexibility, and personalisation.** No plates means no setup time. A digital job can go from approved artwork to finished copies in 24–48 hours for most standard formats. And variable data printing — where each copy in a run carries unique information — is only possible on digital equipment.\n\n**Our recommendation:** Use digital for anything under 500 copies, anything that needs personalisation, and anything where you need next-day or 48-hour turnaround. Use offset for anything over 1,000 copies where quality consistency and per-unit cost are priorities.`,
  },
  {
    slug: "corporate-gifting-uae-ramadan",
    title: "Corporate Gifting in UAE: The Ramadan Programme Playbook",
    category: "Corporate Gifts",
    date: "3 Mar 2025",
    readTime: "8 min read",
    excerpt: "Ramadan gifting is the most important gifting moment in the UAE business calendar.",
    content: `Ramadan gifting in the UAE is not optional for serious businesses. It is one of the most visible expressions of how a company values its relationships — with clients, partners, and employees. Get it right and the goodwill is significant. Get it wrong — late delivery, wrong quality, impersonal execution — and the signal is equally powerful.\n\n**Plan twelve weeks out, not four.** The single biggest mistake companies make is starting the planning process in week three of Ramadan. By then, premium items are out of stock, production queues are full, and delivery logistics are compressed by the fasting schedule and altered business hours. Start planning in January for a Ramadan that falls in March.\n\n**Quality speaks louder than quantity.** A premium leather-bound notebook and a branded pen in an elegant gift box outperforms a hamper full of generic items at twice the cost. The perceived quality of the gift reflects directly on the perceived value of your relationship with the recipient.\n\n**Personalisation is increasingly expected.** Variable data printing makes it possible to include a personalised note, a recipient's name on the gift card, or even a name embossed on a notebook cover — at scale. This is not expensive to add, and the difference in recipient perception is significant.\n\n**Think about the last mile.** Who is delivering the gift, and how? Individual courier delivery to recipients' addresses, office building drop-offs, and event handouts all require different logistics planning. Build your delivery plan before you confirm your quantities.\n\n**The minimum lead time for a well-executed Ramadan programme is eight weeks** from final brief to delivery. Twelve weeks is comfortable. Four weeks is crisis territory.`,
  },
  {
    slug: "large-format-printing-outdoor-uae",
    title: "Why Most Outdoor Graphics Fail in the UAE (And What to Specify Instead)",
    category: "Large Format",
    date: "18 Feb 2025",
    readTime: "7 min read",
    excerpt: "UV radiation, humidity, and wind loading in the UAE test outdoor graphics harder than almost any other climate.",
    content: `The UAE outdoor environment is one of the most demanding for printed materials anywhere in the world. Extreme UV radiation, ambient temperatures reaching 50°C in summer, significant humidity on the coast, and occasional strong wind loading combine to test outdoor graphics in ways that European or North American specifications do not account for.\n\n**Solvent ink will fade faster than you expect.** Many large format suppliers use solvent-based inks because the equipment is cheaper and the production speed is faster. In UAE conditions, solvent inks can show visible fading within 12 months of outdoor exposure. For anything expected to remain in place for more than six months, UV-cured inks are the minimum specification.\n\n**Material selection matters as much as ink.** The right ink on the wrong substrate fails just as fast. PVC banner for short-term events and promotions is fine. For hoardings, building wraps, and anything expected to survive 18+ months, look at materials with UV inhibitors built into the substrate — not just the ink layer.\n\n**Finishing affects lifespan significantly.** Eyelets, welded edges, and pole pockets that fail allow water ingress, which accelerates delamination. Specify welded edges rather than heat-sealed for anything in exposed locations.\n\n**Ask for an outdoor durability rating, not a marketing claim.** A credible large format supplier should be able to tell you the expected outdoor life of a material under UAE conditions — not a general "outdoor rated" claim, but a specific estimate: 12 months, 3 years, 5 years. If they can't tell you, that's a signal.`,
  },
  {
    slug: "artwork-file-preparation-print",
    title: "How to Prepare Print-Ready Artwork Files (The Complete Guide)",
    category: "Production Guide",
    date: "5 Jan 2025",
    readTime: "10 min read",
    excerpt: "Bleed, resolution, colour modes, embedded fonts — a complete guide to setting up your artwork for print.",
    content: `Preparing print-ready artwork correctly the first time saves time, money, and the frustration of receiving a job back from pre-press with a list of corrections. This is what our pre-press team checks on every file we receive.\n\n**Bleed (3mm minimum).** Bleed is the extension of your artwork beyond the trim line, which allows for slight cutting variation without white edges appearing on the finished piece. 3mm bleed on all four sides is standard. For large format, 5mm is recommended.\n\n**Resolution (300dpi at final size).** Images must be 300 dots per inch at the size they will be printed. A 72dpi web image cannot be printed at quality — it will appear pixelated. The critical measurement is resolution at the final print size, not the original file size.\n\n**Colour mode (CMYK, not RGB).** Screens display in RGB (Red, Green, Blue) light. Print reproduces in CMYK (Cyan, Magenta, Yellow, Key/Black) ink. RGB colours that look vivid on screen — particularly bright oranges, electric blues, and neon greens — can shift significantly when converted to CMYK. Convert your document to CMYK before you finalise your colour choices, so you're seeing what will actually print.\n\n**Fonts (embed or convert to outlines).** If you supply a file with fonts that are not embedded or converted to outlines, and the pre-press system doesn't have that font installed, text will reflow or substitute — changing your layout. Convert all text to outlines (in Illustrator: Type > Create Outlines) or ensure all fonts are embedded in your PDF export settings.\n\n**PDF export settings.** Export as PDF/X-1a or PDF/X-4 for offset print. Include bleed in your export settings. Use "Press Quality" or "High Quality Print" preset as a starting point, then add 3mm bleed marks.\n\nIf you're unsure whether your file is production-ready, send it to us. Our pre-press team will check it and let you know if anything needs correcting — at no charge.`,
  },
];

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Al Hilal Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = post.content.split("\n\n");

  return (
    <>
      <section className="bg-paper pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="site-shell max-w-3xl">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <Link href="/blog" className="text-xs font-medium uppercase tracking-[0.1em] text-muted hover:text-ink transition-colors flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10 6H2M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                All Articles
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-green">{post.category}</span>
              <span className="text-border">·</span>
              <span className="text-xs text-muted">{post.date}</span>
              <span className="text-border">·</span>
              <span className="text-xs text-muted">{post.readTime}</span>
            </div>
            <h1
              className="font-display font-bold text-ink"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1, letterSpacing: "-0.025em" }}
            >
              {post.title}
            </h1>
          </FadeIn>
        </div>
      </section>

      <div className="w-full aspect-[21/9] bg-surface" />

      <section className="page-section bg-paper">
        <div className="site-shell max-w-3xl">
          <FadeIn>
            <div className="flex flex-col gap-6 prose-custom">
              {paragraphs.map((para, i) => {
                if (para.startsWith("**") && para.endsWith("**")) {
                  return (
                    <h2 key={i} className="font-display font-bold text-2xl text-ink mt-4">
                      {para.replace(/\*\*/g, "")}
                    </h2>
                  );
                }
                const formatted = para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
                return (
                  <p
                    key={i}
                    className="body-large text-muted leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formatted }}
                  />
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="mt-16 pt-12 border-t border-border">
            <SectionLabel>Have a project in mind?</SectionLabel>
            <div className="flex flex-col sm:flex-row gap-4 mt-5">
              <Link href="/get-a-quote" className="inline-flex items-center gap-2 px-7 py-4 bg-green text-paper text-sm font-medium hover:bg-green-hover transition-colors">
                Get a Quote
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 px-7 py-4 border border-ink text-ink text-sm font-medium hover:bg-ink hover:text-paper transition-colors">
                View All Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <HomeCTA />
    </>
  );
}
