import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SmoothScroll, { ScrollProgress } from "@/components/layout/SmoothScroll";
import { COMPANY, SITE_URL } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.name} | Printing & Advertising, Sharjah UAE`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Offset printing, digital printing, corporate gifts, rubber stamps, and signage in Sharjah, UAE. Based in Al Ghuwair since 1999. Call +971 50 9454953.",
  keywords: [
    "printing company Sharjah",
    "offset printing UAE",
    "digital printing Sharjah",
    "corporate gifts UAE",
    "rubber stamps Sharjah",
    "advertising signage UAE",
    "Al Hilal printing Sharjah",
    "print shop Al Ghuwair",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_URL,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Premium Print Production`,
    description:
      "25+ years of premium offset printing, digital printing, large format, corporate gifts and signage. Serving the Gulf's most demanding businesses.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: COMPANY.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Premium Print Production`,
    description: "25+ years of premium print production in Sharjah, UAE.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} antialiased`}
    >
      <body className="bg-ivory text-charcoal font-sans overflow-x-hidden" style={{ WebkitFontSmoothing: "antialiased" }}>
        <ScrollProgress />
        <SmoothScroll>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
