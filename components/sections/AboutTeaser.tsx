import Link from "next/link";
import { COMPANY } from "@/lib/site";
import FadeIn from "@/components/animations/FadeIn";

export default function AboutTeaser() {
  return (
    <section className="page-section bg-surface">
      <div className="site-shell">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — large display text */}
          <FadeIn direction="right">
            <h2
              className="font-display font-bold text-ink"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
              }}
            >
              {COMPANY.years} Years of
              <br />
              Print Authority
              <br />
              <em className="not-italic text-green">in the Gulf.</em>
            </h2>
          </FadeIn>

          {/* Right — body copy */}
          <FadeIn direction="left" delay={0.15}>
            <div className="flex flex-col gap-5">
              <p className="body-large text-muted">
                Since 1999, Al Hilal has been the production backbone for some of the Gulf&rsquo;s most
                recognisable brands — delivering consistent, precision print work across offset,
                digital, large format, signage, corporate gifts, uniforms, and stamps.
              </p>
              <p className="body-large text-muted">
                We are not a broker or reseller. Every project is produced in our own facility, by
                our own teams, to our own quality standards. That means absolute accountability
                from brief to delivery — and no surprises between the proof and the finished
                product.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-green transition-colors"
                >
                  About Al Hilal
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link
                  href="/process"
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition-colors"
                >
                  How we work
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
