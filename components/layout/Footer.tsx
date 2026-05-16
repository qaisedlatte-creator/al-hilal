import Link from "next/link";
import { COMPANY } from "@/lib/site";

const FOOTER_SERVICES = [
  { href: "/services/offset-printing", label: "Offset Printing" },
  { href: "/services/digital-printing", label: "Digital Printing" },
  { href: "/services/large-format-printing", label: "Large Format Printing" },
  { href: "/services/corporate-gifts", label: "Corporate Gifts" },
  { href: "/services/uniforms-workwear", label: "Uniforms & Workwear" },
  { href: "/services/rubber-stamps", label: "Rubber Stamps" },
  { href: "/services/signage-advertising", label: "Signage & Advertising" },
];

const FOOTER_COMPANY = [
  { href: "/about", label: "About Us" },
  { href: "/work", label: "Our Work" },
  { href: "/process", label: "Our Process" },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const FOOTER_INDUSTRIES = [
  { href: "/industries/hospitality", label: "Hospitality" },
  { href: "/industries/retail", label: "Retail" },
  { href: "/industries/events", label: "Events & Exhibitions" },
  { href: "/industries/construction", label: "Construction" },
  { href: "/industries/healthcare", label: "Healthcare" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper/70">
      {/* Large brand name */}
      <div className="site-shell pt-16 pb-4 border-b border-paper/10">
        <p className="font-display font-bold text-paper/10 select-none"
          style={{ fontSize: "clamp(3rem, 10vw, 9rem)", lineHeight: 0.9, letterSpacing: "-0.04em" }}>
          AL HILAL
        </p>
      </div>

      {/* Nav columns */}
      <div className="site-shell py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Services */}
        <div>
          <h4 className="text-paper text-xs uppercase tracking-[0.14em] font-sans font-semibold mb-5">
            Services
          </h4>
          <ul className="flex flex-col gap-2.5">
            {FOOTER_SERVICES.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-paper/60 hover:text-paper transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-paper text-xs uppercase tracking-[0.14em] font-sans font-semibold mb-5">
            Company
          </h4>
          <ul className="flex flex-col gap-2.5">
            {FOOTER_COMPANY.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-paper/60 hover:text-paper transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h4 className="text-paper text-xs uppercase tracking-[0.14em] font-sans font-semibold mb-5">
            Industries
          </h4>
          <ul className="flex flex-col gap-2.5">
            {FOOTER_INDUSTRIES.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-paper/60 hover:text-paper transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-paper text-xs uppercase tracking-[0.14em] font-sans font-semibold mb-5">
            Connect
          </h4>
          <div className="flex flex-col gap-3 text-sm text-paper/60">
            <a href={`mailto:${COMPANY.email}`} className="hover:text-paper transition-colors">{COMPANY.email}</a>
            <a href={`tel:${COMPANY.phone}`} className="hover:text-paper transition-colors">{COMPANY.phone}</a>
            <a
              href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-paper transition-colors"
            >
              WhatsApp: {COMPANY.whatsapp}
            </a>
            <address className="not-italic text-paper/40 mt-1 leading-relaxed text-xs">
              {COMPANY.address}
            </address>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.instagram.com/alhilalprinting_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@ALHILALPrintingadvertising"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper transition-colors"
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.8 8.001a2.75 2.75 0 0 0-1.936-1.948C18.2 5.6 12 5.6 12 5.6s-6.2 0-7.864.453A2.75 2.75 0 0 0 2.2 8.001 28.8 28.8 0 0 0 1.75 12a28.8 28.8 0 0 0 .45 3.999 2.75 2.75 0 0 0 1.936 1.948C5.8 18.4 12 18.4 12 18.4s6.2 0 7.864-.453a2.75 2.75 0 0 0 1.936-1.948A28.8 28.8 0 0 0 22.25 12a28.8 28.8 0 0 0-.45-3.999zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="site-shell py-5 border-t border-paper/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-paper/30">
          &copy; {year} {COMPANY.name}. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs text-paper/30">
          <Link href="/privacy" className="hover:text-paper/60 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-paper/60 transition-colors">Terms</Link>
          <Link href="/get-a-quote" className="hover:text-paper/60 transition-colors">Get a Quote</Link>
        </div>
      </div>
    </footer>
  );
}
