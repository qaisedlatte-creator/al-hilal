import Link from "next/link";
import { COMPANY } from "@/lib/site";
import FadeIn from "@/components/animations/FadeIn";

export default function HomeCTA() {
  return (
    <section className="bg-ink py-20 md:py-28">
      <div className="site-shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <FadeIn className="max-w-2xl">
            <h2
              className="font-display font-bold text-paper"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
              }}
            >
              Ready to start
              <br />
              your project?
            </h2>
            <p className="body-large text-paper/50 mt-5 max-w-md">
              Tell us what you need. Most quotations returned within 4 business hours.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="flex flex-col gap-4 shrink-0">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green text-paper text-sm font-medium tracking-wide hover:bg-green-hover transition-colors"
            >
              Get a Quote
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a
              href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-paper/20 text-paper text-sm font-medium tracking-wide hover:bg-paper/10 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor" className="opacity-70">
                <path d="M9 0a9 9 0 0 0-7.8 13.5L0 18l4.65-1.2A9 9 0 1 0 9 0zm0 16.5a7.5 7.5 0 0 1-3.9-1.1l-.27-.165-2.82.735.75-2.745-.18-.285A7.5 7.5 0 1 1 9 16.5zm4.11-5.565c-.225-.12-1.335-.66-1.545-.735-.21-.075-.36-.12-.51.12-.15.24-.585.735-.72.885-.135.15-.27.165-.495.045-.225-.12-.945-.345-1.8-1.11-.665-.59-1.11-1.32-1.245-1.545-.135-.225-.015-.345.1-.465.105-.105.225-.27.345-.405.12-.135.165-.225.24-.375.075-.15.045-.285-.015-.405-.06-.12-.51-1.23-.7-1.68-.18-.435-.375-.375-.51-.39h-.435c-.15 0-.39.06-.6.285-.21.225-.78.765-.78 1.86s.8 2.16.915 2.31c.12.15 1.575 2.4 3.81 3.36.535.225.945.36 1.27.465.54.165 1.02.135 1.41.09.435-.06 1.335-.54 1.53-1.065.195-.525.195-.975.135-1.065-.06-.09-.21-.15-.435-.27z"/>
              </svg>
              WhatsApp Us
            </a>
            <div className="pt-2 space-y-1">
              <a href={`tel:${COMPANY.phone}`} className="block text-xs text-paper/30 hover:text-paper/60 transition-colors">
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="block text-xs text-paper/30 hover:text-paper/60 transition-colors">
                {COMPANY.email}
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
