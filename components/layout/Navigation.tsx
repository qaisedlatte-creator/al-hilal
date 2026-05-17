"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { COMPANY } from "@/lib/site";

const SERVICES = [
  { href: "/services/offset-printing", label: "Offset Printing", desc: "High-volume, precision colour" },
  { href: "/services/digital-printing", label: "Digital Printing", desc: "On-demand, short-run, fast" },
  { href: "/services/large-format-printing", label: "Large Format", desc: "Banners, hoardings, displays" },
  { href: "/services/corporate-gifts", label: "Corporate Gifts", desc: "Branded merchandise & gifts" },
  { href: "/services/uniforms-workwear", label: "Uniforms & Workwear", desc: "Corporate & industrial dress" },
  { href: "/services/rubber-stamps", label: "Rubber Stamps", desc: "Self-inking & custom stamps" },
  { href: "/services/signage-advertising", label: "Signage & Advertising", desc: "Outdoor & indoor signage" },
];

const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrolledStyle = scrolled
    ? "bg-ivory/97 backdrop-blur-md border-b border-border shadow-sm"
    : "bg-ivory/97 border-b border-border";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolledStyle}`}>
        <div className="site-shell flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-border">
              <Image
                src="/logo.jpg"
                alt="Al Hilal Printing & Advertising"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-navy text-[15px] tracking-tight">AL HILAL</span>
              <span className="font-sans text-[9px] uppercase tracking-[0.14em] text-steel">Print &amp; Branding</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`flex items-center gap-1.5 px-3 py-2 text-[13px] font-medium text-charcoal hover:text-navy transition-colors rounded-sm`}>
                Services
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}>
                  <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-68 bg-ivory border border-border shadow-card rounded-sm overflow-hidden"
                    style={{ width: "260px" }}
                  >
                    {SERVICES.map((s) => (
                      <Link key={s.href} href={s.href} className="flex flex-col px-4 py-2.5 hover:bg-surface border-b border-border/50 last:border-0 transition-colors">
                        <span className="text-[13px] font-medium text-charcoal">{s.label}</span>
                        <span className="text-[11px] text-steel mt-0.5">{s.desc}</span>
                      </Link>
                    ))}
                    <Link href="/services" className="flex items-center gap-2 px-4 py-2.5 bg-surface text-[12px] font-semibold text-navy hover:text-navy-mid transition-colors uppercase tracking-wide">
                      All Services →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-[13px] font-medium rounded-sm transition-colors ${
                  pathname === link.href ? "text-navy" : "text-charcoal hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[12px] font-medium text-steel hover:text-navy transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 18 18" fill="currentColor" className="text-green">
                <path d="M9 0a9 9 0 0 0-7.8 13.5L0 18l4.65-1.2A9 9 0 1 0 9 0zm4.11 12.435c-.225-.12-1.335-.66-1.545-.735-.21-.075-.36-.12-.51.12-.15.24-.585.735-.72.885-.135.15-.27.165-.495.045-.225-.12-.945-.345-1.8-1.11-.665-.59-1.11-1.32-1.245-1.545-.135-.225-.015-.345.1-.465.105-.105.225-.27.345-.405.12-.135.165-.225.24-.375.075-.15.045-.285-.015-.405-.06-.12-.51-1.23-.7-1.68-.18-.435-.375-.375-.51-.39h-.435c-.15 0-.39.06-.6.285-.21.225-.78.765-.78 1.86s.8 2.16.915 2.31c.12.15 1.575 2.4 3.81 3.36.535.225.945.36 1.27.465.54.165 1.02.135 1.41.09.435-.06 1.335-.54 1.53-1.065.195-.525.195-.975.135-1.065-.06-.09-.21-.15-.435-.27z"/>
              </svg>
              WhatsApp
            </a>
            <Link
              href="/get-a-quote"
              className="px-4 py-2 bg-navy text-ivory text-[12px] font-semibold tracking-wide hover:bg-navy-mid transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2 text-charcoal"
            aria-label="Open menu"
          >
            <span className="block w-5 h-0.5 bg-current" />
            <span className="block w-3.5 h-0.5 bg-current" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[100] bg-navy flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-ivory/10">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image src="/logo.jpg" alt="Al Hilal" fill className="object-cover" />
                </div>
                <span className="font-display font-bold text-ivory text-[15px]">AL HILAL</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-ivory/60 hover:text-ivory p-2" aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-1">
              {SERVICES.map((s) => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="py-2.5 text-ivory/70 hover:text-ivory text-base font-medium border-b border-ivory/10 transition-colors">
                  {s.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-ivory/10 flex flex-col gap-1">
                {[...NAV_LINKS, { href: "/process", label: "Process" }, { href: "/blog", label: "Blog" }, { href: "/faq", label: "FAQ" }].map((l) => (
                  <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="py-2.5 text-ivory text-xl font-display font-bold hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="px-6 py-5 border-t border-ivory/10 flex flex-col gap-3">
              <Link href="/get-a-quote" onClick={() => setMobileOpen(false)} className="w-full bg-gold text-ivory text-center py-3.5 font-semibold text-sm tracking-wide">
                Get a Quote
              </Link>
              <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`} target="_blank" rel="noopener noreferrer" className="w-full border border-ivory/20 text-ivory text-center py-3.5 text-sm font-medium flex items-center justify-center gap-2">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0a9 9 0 0 0-7.8 13.5L0 18l4.65-1.2A9 9 0 1 0 9 0z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
