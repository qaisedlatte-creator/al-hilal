"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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

  const navBg = isHero && !scrolled
    ? "bg-transparent"
    : "bg-paper/95 backdrop-blur-md border-b border-border";

  const textColor = isHero && !scrolled ? "text-paper" : "text-ink";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      >
        <div className="site-shell flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className={`font-display font-bold text-xl tracking-tight transition-colors ${textColor}`}
            >
              AL HILAL
            </span>
            <span
              className={`text-[0.6rem] uppercase tracking-[0.18em] font-sans font-medium transition-colors ${
                isHero && !scrolled ? "text-paper/60" : "text-muted"
              }`}
            >
              Print &amp; Advertising
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-sm transition-colors hover:opacity-70 ${textColor}`}
              >
                Services
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}>
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 bg-paper border border-border shadow-card rounded-sm overflow-hidden"
                  >
                    {SERVICES.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="flex flex-col px-4 py-3 hover:bg-surface transition-colors border-b border-border last:border-0"
                      >
                        <span className="text-sm font-medium text-ink">{s.label}</span>
                        <span className="text-xs text-muted mt-0.5">{s.desc}</span>
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="flex items-center gap-2 px-4 py-3 bg-surface text-sm font-medium text-green hover:text-ink transition-colors"
                    >
                      View all services
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-sm transition-colors hover:opacity-70 ${
                  pathname === link.href
                    ? textColor + " opacity-100"
                    : textColor
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/get-a-quote"
              className="px-5 py-2.5 bg-green text-paper text-sm font-medium tracking-wide hover:bg-green-hover transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden flex flex-col gap-1.5 p-2 ${textColor}`}
            aria-label="Open menu"
          >
            <span className="block w-6 h-px bg-current" />
            <span className="block w-4 h-px bg-current" />
            <span className="block w-6 h-px bg-current" />
          </button>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-ink flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-paper/10">
              <Link href="/" onClick={() => setMobileOpen(false)} className="font-display font-bold text-xl text-paper tracking-tight">
                AL HILAL
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-paper/60 hover:text-paper transition-colors p-2"
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1">
              <Link href="/services" onClick={() => setMobileOpen(false)} className="text-paper/40 text-xs uppercase tracking-widest font-medium py-2">
                Services
              </Link>
              {SERVICES.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-paper text-lg font-display font-medium py-2 border-b border-paper/10 hover:text-paper/70 transition-colors"
                >
                  {s.label}
                </Link>
              ))}

              <div className="mt-6 pt-6 border-t border-paper/10 flex flex-col gap-1">
                {[{ href: "/work", label: "Work" }, { href: "/about", label: "About" }, { href: "/industries", label: "Industries" }, { href: "/process", label: "Process" }, { href: "/blog", label: "Blog" }, { href: "/contact", label: "Contact" }].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-paper text-2xl font-display font-medium py-2 hover:text-paper/70 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="px-6 py-6 border-t border-paper/10 flex flex-col gap-3">
              <Link
                href="/get-a-quote"
                onClick={() => setMobileOpen(false)}
                className="w-full bg-green text-paper text-center py-4 font-medium tracking-wide"
              >
                Get a Quote
              </Link>
              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace(/\s/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-paper/20 text-paper text-center py-4 font-medium flex items-center justify-center gap-2"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
                  <path d="M9 0a9 9 0 0 0-7.8 13.5L0 18l4.65-1.2A9 9 0 1 0 9 0zm0 16.5a7.5 7.5 0 0 1-3.9-1.1l-.27-.165-2.82.735.75-2.745-.18-.285A7.5 7.5 0 1 1 9 16.5zm4.11-5.565c-.225-.12-1.335-.66-1.545-.735-.21-.075-.36-.12-.51.12-.15.24-.585.735-.72.885-.135.15-.27.165-.495.045-.225-.12-.945-.345-1.8-1.11-.665-.59-1.11-1.32-1.245-1.545-.135-.225-.015-.345.1-.465.105-.105.225-.27.345-.405.12-.135.165-.225.24-.375.075-.15.045-.285-.015-.405-.06-.12-.51-1.23-.7-1.68-.18-.435-.375-.375-.51-.39h-.435c-.15 0-.39.06-.6.285-.21.225-.78.765-.78 1.86s.8 2.16.915 2.31c.12.15 1.575 2.4 3.81 3.36.535.225.945.36 1.27.465.54.165 1.02.135 1.41.09.435-.06 1.335-.54 1.53-1.065.195-.525.195-.975.135-1.065-.06-.09-.21-.15-.435-.27z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
