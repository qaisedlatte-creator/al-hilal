import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/site";

const FOOTER_SERVICES = [
  { href: "/services/offset-printing", label: "Offset Printing" },
  { href: "/services/digital-printing", label: "Digital Printing" },
  { href: "/services/large-format-printing", label: "Large Format" },
  { href: "/services/corporate-gifts", label: "Corporate Gifts" },
  { href: "/services/uniforms-workwear", label: "Uniforms & Workwear" },
  { href: "/services/rubber-stamps", label: "Rubber Stamps" },
  { href: "/services/signage-advertising", label: "Signage & Advertising" },
];

const FOOTER_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/work", label: "Our Work" },
  { href: "/process", label: "Process" },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

const INDUSTRIES = [
  { href: "/industries/hospitality", label: "Hospitality" },
  { href: "/industries/retail", label: "Retail" },
  { href: "/industries/events", label: "Events & Exhibitions" },
  { href: "/industries/construction", label: "Construction" },
  { href: "/industries/healthcare", label: "Healthcare" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white/70">
      {/* Top bar */}
      <div className="site-shell pt-14 pb-10 border-b border-white/10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
            <Image src="/logo.jpg" alt="Al Hilal Print & Branding" fill className="object-cover" />
          </div>
          <div>
            <p className="font-display font-bold text-white text-xl tracking-tight">AL HILAL</p>
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/40 mt-0.5">Print &amp; Branding · Est. {COMPANY.established}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 md:text-right">
          <a href={`tel:${COMPANY.phone}`} className="text-sm text-white/60 hover:text-white transition-colors">{COMPANY.phone}</a>
          <a href={`mailto:${COMPANY.email}`} className="text-sm text-white/60 hover:text-white transition-colors">{COMPANY.email}</a>
          <p className="text-xs text-white/30">{COMPANY.address}</p>
        </div>
      </div>

      {/* Nav grid */}
      <div className="site-shell py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.14em] font-semibold text-white/30 mb-5">Services</h4>
          <ul className="flex flex-col gap-2.5">
            {FOOTER_SERVICES.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[13px] text-white/50 hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.14em] font-semibold text-white/30 mb-5">Company</h4>
          <ul className="flex flex-col gap-2.5">
            {FOOTER_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[13px] text-white/50 hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.14em] font-semibold text-white/30 mb-5">Industries</h4>
          <ul className="flex flex-col gap-2.5">
            {INDUSTRIES.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[13px] text-white/50 hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.14em] font-semibold text-white/30 mb-5">Connect</h4>
          <div className="flex flex-col gap-3">
            <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-white/50 hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0a9 9 0 0 0-7.8 13.5L0 18l4.65-1.2A9 9 0 1 0 9 0z"/></svg>
              WhatsApp
            </a>
            <a href="https://www.instagram.com/alhilalprinting_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-white/50 hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
              @alhilalprinting_
            </a>
            <a href="https://www.youtube.com/@ALHILALPrintingadvertising" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[13px] text-white/50 hover:text-white transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21.8 8a2.75 2.75 0 0 0-1.936-1.948C18.2 5.6 12 5.6 12 5.6s-6.2 0-7.864.452A2.75 2.75 0 0 0 2.2 8 28.8 28.8 0 0 0 1.75 12a28.8 28.8 0 0 0 .45 4 2.75 2.75 0 0 0 1.936 1.948C5.8 18.4 12 18.4 12 18.4s6.2 0 7.864-.452A2.75 2.75 0 0 0 21.8 16a28.8 28.8 0 0 0 .45-4 28.8 28.8 0 0 0-.45-4zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
              YouTube
            </a>
            <Link href="/get-a-quote" className="mt-3 inline-block px-5 py-2.5 bg-gold text-white text-[12px] font-semibold uppercase tracking-wide hover:bg-gold/90 transition-colors">
              Get a Quote →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="site-shell py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-white/25">&copy; {year} Al Hilal Printing &amp; Advertising. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <Link href="/privacy" className="text-[11px] text-white/25 hover:text-white/50 transition-colors">Privacy</Link>
          <Link href="/terms" className="text-[11px] text-white/25 hover:text-white/50 transition-colors">Terms</Link>
          <span className="w-px h-3 bg-white/10" />
          <a
            href="https://webbes.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/20 hover:text-white/50 transition-colors"
          >
            Designed by Webbes.in
          </a>
        </div>
      </div>
    </footer>
  );
}
