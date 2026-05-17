import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/site";
import FadeIn from "@/components/animations/FadeIn";

export default function HomeCTA() {
  return (
    <section className="bg-navy py-16 md:py-20 overflow-hidden relative">
      {/* Decorative element */}
      <div className="absolute right-0 top-0 bottom-0 w-80 opacity-5 pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
            <circle cx="320" cy="160" r="200" stroke="white" strokeWidth="1"/>
            <circle cx="320" cy="160" r="140" stroke="white" strokeWidth="1"/>
            <circle cx="320" cy="160" r="80" stroke="white" strokeWidth="1"/>
          </svg>
        </div>
      </div>

      <div className="site-shell relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-ivory/20">
                <Image src="/logo.jpg" alt="Al Hilal" fill className="object-cover" />
              </div>
              <div>
                <p className="font-display font-bold text-ivory text-sm">AL HILAL</p>
                <p className="text-[9px] uppercase tracking-[0.14em] text-ivory/30">Print &amp; Branding · Sharjah</p>
              </div>
            </div>
            <h2 className="display-title font-display font-bold text-ivory mb-4">
              Ready to start
              <br />
              your project?
            </h2>
            <p className="body-large text-ivory/50 max-w-md">
              Tell us what you need. Most quotations returned within 4 business hours.
              No obligation — just a fast, accurate quote.
            </p>
          </FadeIn>

          {/* Right — actions */}
          <FadeIn delay={0.12}>
            <div className="flex flex-col gap-4">
              <Link
                href="/get-a-quote"
                className="flex items-center justify-between gap-4 px-6 py-5 bg-gold hover:bg-gold/90 transition-colors group"
              >
                <div>
                  <p className="text-navy font-bold text-base">Get a Free Quote</p>
                  <p className="text-navy/60 text-sm">Response within 4 hours</p>
                </div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-navy group-hover:translate-x-1 transition-transform">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 px-6 py-5 border border-ivory/15 hover:border-ivory/30 transition-colors group"
              >
                <div>
                  <p className="text-ivory font-medium text-base flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor" className="text-[#25D366]">
                      <path d="M9 0a9 9 0 0 0-7.8 13.5L0 18l4.65-1.2A9 9 0 1 0 9 0z"/>
                    </svg>
                    WhatsApp Us
                  </p>
                  <p className="text-ivory/40 text-sm ml-6">{COMPANY.whatsapp}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-ivory/30 group-hover:translate-x-1 transition-transform">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <div className="flex items-center gap-6 pt-2 pl-1">
                <a href={`tel:${COMPANY.phone}`} className="text-[12px] text-ivory/30 hover:text-ivory/60 transition-colors">
                  {COMPANY.phone}
                </a>
                <span className="w-px h-3 bg-ivory/10" />
                <a href={`mailto:${COMPANY.email}`} className="text-[12px] text-ivory/30 hover:text-ivory/60 transition-colors">
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
