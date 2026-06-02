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
    default: `${COMPANY.name} | Printing & Advertising Sharjah UAE`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Al Hilal Printing & Advertising — Sharjah's premier print house since 1993. Offset printing, digital printing, rubber stamps, corporate gifts, large format, signage & advertising. Serving UAE businesses. Call +971 50 9454953.",
  keywords: [
    // Core brand + location
    "Al Hilal Printing Advertising Sharjah",
    "Al Hilal print press Sharjah",
    "printing company Sharjah UAE",
    "printing and advertising company Sharjah",
    "printing and advertising companies Dubai",
    "printing and advertising UAE",
    "printing company UAE",
    "advertising company Sharjah",
    // Rubber stamps (high-volume keywords from research)
    "rubber stamp UAE",
    "rubber stamp Sharjah",
    "stamp maker Sharjah",
    "company stamp UAE",
    "UAE company stamp",
    "self inking stamp UAE",
    "custom rubber stamp UAE",
    "stamp maker UAE",
    "rubber stamp maker Sharjah",
    // Offset printing
    "offset printing Sharjah",
    "offset printing UAE",
    "brochure printing Sharjah",
    "business card printing Sharjah",
    "flyer printing UAE",
    "catalogue printing Sharjah",
    "booklet printing UAE",
    // Digital printing
    "digital printing Sharjah",
    "digital printing UAE",
    "sticker printing UAE",
    "roll up banner printing Sharjah",
    "banner printing UAE",
    "vinyl banner printing Sharjah",
    // Large format
    "large format printing UAE",
    "large format printing Sharjah",
    "hoarding printing UAE",
    "billboard printing Sharjah",
    "outdoor signage UAE",
    // Corporate gifts
    "corporate gifts UAE",
    "corporate gifts Sharjah",
    "corporate gifts supplier UAE",
    "sublimation printing UAE",
    "T-shirt printing Sharjah",
    "engraving service UAE",
    "promotional gifts Dubai",
    // Signage
    "signage company Sharjah",
    "signage company UAE",
    "acrylic sign Sharjah",
    "LED signage UAE",
    "shop signage Sharjah",
    "indoor signage UAE",
    // General
    "print shop Sharjah",
    "print shop Al Ghuwair",
    "printing press Sharjah",
    "full service print house UAE",
    "printing services Sharjah",
  ],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_URL,
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Printing & Advertising Since 1993`,
    description:
      "Sharjah's most trusted print house since 1993. Offset printing, digital printing, rubber stamps, corporate gifts, large format & signage. One facility, complete production.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Al Hilal Printing & Advertising — Sharjah, UAE" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Printing & Advertising Sharjah UAE`,
    description: "Complete print & advertising production from Sharjah since 1993. Offset, digital, stamps, gifts, signage.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  alternates: { canonical: SITE_URL },
  verification: {
    google: "google-site-verification",
  },
  category: "printing advertising",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#organization`,
      "name": "Al Hilal Printing & Advertising",
      "alternateName": ["Al Hilal Print Press", "Al Hilal Stamps Sharjah", "Al Hilal Printing Sharjah"],
      "url": SITE_URL,
      "logo": `${SITE_URL}/logo.png`,
      "image": `${SITE_URL}/og-image.jpg`,
      "description": "Al Hilal Printing & Advertising is a full-service printing and advertising production company based in Sharjah, UAE. Established in 1993, we offer offset printing, digital printing, large format printing, rubber stamps, corporate gifts, and signage services to businesses across the UAE.",
      "foundingDate": "1993",
      "telephone": "+971509454953",
      "email": "alhilalsales@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Al Arouba Street, Al Ghuwair, Hay Al Gharb",
        "addressLocality": "Sharjah",
        "addressRegion": "Sharjah",
        "addressCountry": "AE",
        "postalCode": ""
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.3557538",
        "longitude": "55.3885145"
      },
      "hasMap": "https://maps.google.com/?cid=15850015813249218497",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
          "opens": "08:30",
          "closes": "18:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Friday",
          "opens": "08:30",
          "closes": "12:00"
        }
      ],
      "priceRange": "$$",
      "currenciesAccepted": "AED",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "areaServed": [
        { "@type": "City", "name": "Sharjah" },
        { "@type": "City", "name": "Dubai" },
        { "@type": "City", "name": "Abu Dhabi" },
        { "@type": "City", "name": "Ajman" },
        { "@type": "Country", "name": "United Arab Emirates" }
      ],
      "knowsAbout": [
        "Offset Printing", "Digital Printing", "Large Format Printing",
        "Rubber Stamps", "Corporate Gifts", "Signage", "Advertising Production",
        "T-Shirt Printing", "Sublimation", "Business Cards", "Brochures",
        "Banners", "Roll-Up Stands", "Acrylic Signs", "Vehicle Wraps"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Printing & Advertising Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Offset Printing",
              "description": "High-quality offset printing for brochures, business cards, flyers, letterheads, catalogues, calendars, and booklets in Sharjah, UAE."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Printing",
              "description": "Digital printing for stickers, banners, roll-up stands, pop-ups, acrylic signs, signboards, and window films in Sharjah, UAE."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Large Format Printing",
              "description": "Large format printing for hoardings, billboards, outdoor banners, exhibition graphics, and building wraps across UAE."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Rubber Stamps",
              "description": "Custom rubber stamps including self-inking stamps, pre-inked stamps, traditional stamps, date stamps, and company stamps. Made in Sharjah, UAE."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Corporate Gifts",
              "description": "Corporate gift production including sublimation printing, T-shirt printing, epoxy coating, canvas bags, engraving, and gift sets for UAE businesses."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Signage & Advertising",
              "description": "Signage and advertising production including LED displays, acrylic signs, shop signboards, vehicle wraps, and exhibition stands across UAE."
            }
          }
        ]
      },
      "sameAs": [
        "https://www.instagram.com/alhilalprinting_",
        "https://www.youtube.com/@ALHILALPrintingadvertising"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": SITE_URL,
      "name": "Al Hilal Printing & Advertising",
      "description": "Official website of Al Hilal Printing & Advertising, Sharjah, UAE",
      "publisher": { "@id": `${SITE_URL}/#organization` },
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": `${SITE_URL}/services?q={search_term_string}` },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What printing services does Al Hilal offer in Sharjah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Al Hilal Printing & Advertising offers offset printing, digital printing, large format printing, rubber stamps, corporate gifts (sublimation, engraving, T-shirt printing), signage, acrylic signs, window films, vehicle wraps, and advertising production. All services are available from our Sharjah facility."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Al Hilal Printing located in Sharjah?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Al Hilal Printing & Advertising is located on Al Arouba Street, Al Ghuwair, Hay Al Gharb, Sharjah, United Arab Emirates. We have been at this location since 1993."
          }
        },
        {
          "@type": "Question",
          "name": "Do you make rubber stamps in Sharjah UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Al Hilal makes all types of rubber stamps in Sharjah, including self-inking stamps, pre-inked stamps, traditional rubber stamps, date stamps, and custom company stamps. Contact us at +971 50 9454953 or WhatsApp +971 50 6790859."
          }
        },
        {
          "@type": "Question",
          "name": "What is the minimum order for offset printing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Minimum orders vary by product. Business cards typically start from 250 pieces, brochures from 500 pieces, and flyers from 1000 pieces. Contact us for a custom quote based on your exact quantities and specifications."
          }
        },
        {
          "@type": "Question",
          "name": "Does Al Hilal deliver printing orders across the UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Al Hilal Printing & Advertising delivers completed orders to clients across Sharjah, Dubai, Abu Dhabi, and the wider UAE. We also offer same-day and express turnaround for urgent print requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How long has Al Hilal Printing been operating?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Al Hilal Printing & Advertising was established in 1993 — over 30 years of serving businesses in Sharjah and the UAE. We are one of the longest-running print houses in the region."
          }
        },
        {
          "@type": "Question",
          "name": "Can Al Hilal produce corporate gifts and promotional items?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Al Hilal produces a wide range of corporate gifts including sublimation printing on mugs, phone cases and frames; T-shirt and uniform printing; epoxy-coated items; canvas bags; engraved awards and plaques; and complete branded gift sets for UAE businesses."
          }
        },
        {
          "@type": "Question",
          "name": "What types of large format printing does Al Hilal offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Al Hilal offers large format printing for hoardings, billboards, outdoor vinyl banners, mesh banners, exhibition graphics, building wraps, wall graphics, and window graphics. All materials are UV-resistant and suitable for UAE outdoor conditions."
          }
        }
      ]
    }
  ]
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
