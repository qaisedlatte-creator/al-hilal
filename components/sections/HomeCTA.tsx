import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/site";
import FadeIn from "@/components/animations/FadeIn";

export default function HomeCTA() {
  return (
    <section className="bg-navy py-16 md:py-20 relative overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-72 opacity-5 pointer-events-none">
        <svg width="288" height="100%" viewBox="0 0 288 400" fill="none" preserveAspectRatio="xMaxYMid meet">
          <circle cx="288" cy="200" r="200" stroke="white" strokeWidth="0.5"/>
          <circle cx="288" cy="200" r="150" stroke="white" strokeWidth="0.5"/>
          <circle cx="288" cy="200" r="100" stroke="white" strokeWidth="0.5"/>
        </svg>
      </div>

      <div className="site-shell relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20">
                <Image src="/logo.jpg" alt="Al Hilal" fill className="object-cover" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm">AL HILAL</p>
                <p className="text-[9px] uppercase tracking-[0.14em] text-white/30">Est. {COMPANY.established} · Sharjah, UAE</p>
              </div>
            </div>
            <h2 className="display-title font-display font-bold text-white mb-4">
              Start your project
              <br />
              today.
            </h2>
            <p className="body-large text-white/50 max-w-sm">
              Call us, WhatsApp us, or send an email. We&rsquo;ll get back to you with a quote quickly.
            </p>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="flex flex-col gap-4">
              {/* Primary action */}
              <Link href="/get-a-quote" className="flex items-center justify-between gap-4 px-6 py-5 bg-gold hover:bg-gold/90 transition-colors group">
                <div>
                  <p className="text-navy font-bold text-base">Request a Quote</p>
                  <p className="text-navy/60 text-sm">Fast response on all enquiries</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-navy group-hover:translate-x-1 transition-transform">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {/* WhatsApp */}
              <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 px-6 py-4 bg-[#25D366] hover:bg-[#1DAA53] transition-colors group">
                <div className="flex items-center gap-3">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="white">
                    <path d="M9 0a9 9 0 0 0-7.8 13.5L0 18l4.65-1.2A9 9 0 1 0 9 0z"/>
                  </svg>
                  <div>
                    <p className="text-white font-semibold text-sm">WhatsApp</p>
                    <p className="text-white/70 text-xs">{COMPANY.whatsapp}</p>
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white/60 group-hover:translate-x-1 transition-transform">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Phone + email */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a href={`tel:${COMPANY.phone}`} className="flex-1 flex items-center gap-3 px-4 py-3 border border-white/15 hover:border-white/30 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white/40">
                    <path d="M13 10.33l-2.93.34A9.3 9.3 0 0 1 6.05 7.9 9.3 9.3 0 0 1 3.33 3.93L3.67 1H1A11 11 0 0 0 13 13v-2.67z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="text-white text-xs font-medium">{COMPANY.phone}</p>
                    <p className="text-white/30 text-[10px]">Call us</p>
                  </div>
                </a>
                <a href={`mailto:${COMPANY.email}`} className="flex-1 flex items-center gap-3 px-4 py-3 border border-white/15 hover:border-white/30 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-white/40">
                    <path d="M1 3h12v8H1V3zm0 0l6 5 6-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <p className="text-white text-xs font-medium truncate">{COMPANY.email}</p>
                    <p className="text-white/30 text-[10px]">Email us</p>
                  </div>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
