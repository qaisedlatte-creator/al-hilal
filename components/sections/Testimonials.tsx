import SectionLabel from "@/components/ui/SectionLabel";
import FadeIn, { StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";

const TESTIMONIALS = [
  {
    quote:
      "Al Hilal has been our go-to print supplier for over a decade. They delivered our complete hotel rebranding — menus, directories, conference packs — on time and exactly to specification. The colour consistency across every format was exceptional.",
    name: "F&B Director",
    company: "5-Star Hotel, Dubai",
    category: "Hospitality",
    rating: 5,
  },
  {
    quote:
      "We needed 40,000 personalised direct mail pieces with variable data in 72 hours. Al Hilal turned it around without compromising on quality. Their pre-press team caught a colour profile issue that would have cost us the entire run. True professionals.",
    name: "Marketing Manager",
    company: "Retail Group, Sharjah",
    category: "Retail",
    rating: 5,
  },
  {
    quote:
      "Our exhibition stand graphics for GITEX were produced and installed by Al Hilal. The quality drew compliments from other exhibitors. Same-day rubber stamps, corporate gift packs, and printed collateral — all from one supplier. That simplicity is valuable.",
    name: "Events Director",
    company: "Regional Technology Group",
    category: "Events",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill="currentColor" className="text-gold">
          <path d="M6.5 1l1.59 3.22 3.55.52-2.57 2.5.61 3.54L6.5 9.1l-3.18 1.68.61-3.54L1.36 4.74l3.55-.52L6.5 1z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="page-section bg-ivory">
      <div className="site-shell">
        <FadeIn className="mb-10">
          <SectionLabel>Client Reviews</SectionLabel>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="display-subtitle font-display font-bold text-charcoal mt-2">
              What our clients
              <br />
              <span className="text-navy">actually say.</span>
            </h2>
            <div className="flex items-center gap-3 shrink-0 pb-1">
              <div className="flex flex-col items-end">
                <span className="font-display font-bold text-3xl text-navy">5.0</span>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map((i) => <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#C8902E"><path d="M6 1l1.4 2.83 3.12.45-2.26 2.2.53 3.12L6 8.1 3.21 9.6l.53-3.12L1.48 4.28l3.12-.45L6 1z"/></svg>)}
                </div>
                <span className="text-[10px] text-steel">Google Reviews</span>
              </div>
            </div>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <StaggerItem key={i}>
              <div className="flex flex-col h-full p-7 bg-paper border border-border hover:border-navy/30 hover:shadow-card transition-all duration-300">
                {/* Category & stars */}
                <div className="flex items-center justify-between mb-5">
                  <span className="label text-green">{t.category}</span>
                  <Stars count={t.rating} />
                </div>

                {/* Quote */}
                <blockquote className="text-steel body-md leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="pt-5 border-t border-border">
                  <p className="font-semibold text-charcoal text-sm">{t.name}</p>
                  <p className="text-[12px] text-steel mt-0.5">{t.company}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Trust stats row */}
        <FadeIn delay={0.2}>
          <div className="mt-10 p-6 bg-navy grid grid-cols-2 md:grid-cols-4 gap-6 md:divide-x md:divide-ivory/10">
            {[
              { val: "25+", label: "Years in business" },
              { val: "1000+", label: "Clients served" },
              { val: "ISO", label: "Calibrated production" },
              { val: "UAE", label: "Wide delivery" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1 md:pl-6 first:pl-0">
                <span className="font-display font-bold text-ivory text-2xl leading-none">{s.val}</span>
                <span className="text-[11px] text-ivory/40 uppercase tracking-[0.1em]">{s.label}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
