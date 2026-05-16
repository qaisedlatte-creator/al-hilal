export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  materials: string[];
  useCases: string[];
  industries: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "offset-printing",
    title: "Offset Printing",
    shortTitle: "Offset",
    tagline: "High-volume precision at every scale",
    description:
      "Industry-standard offset lithography for catalogues, brochures, magazines, and marketing collateral — delivering consistent colour fidelity across runs from 500 to 500,000.",
    longDescription:
      "Offset printing remains the gold standard for high-volume print production, and for good reason. Using aluminium plates and a transfer process that never lets ink contact paper directly, offset delivers an accuracy of colour reproduction that digital processes simply cannot match at scale. At Al Hilal, our offset presses are calibrated to ISO 12647-2 standards, ensuring every sheet across a 100,000-unit run is as precise as the first. From A5 business cards to A0 catalogue spreads, we manage paper weight selection, Pantone colour matching, varnish application, and post-press finishing in-house — reducing production time and eliminating quality gaps between supplier handoffs.",
    features: [
      "CMYK and Pantone spot colour printing",
      "Consistent colour accuracy across large runs",
      "Paper weights from 80gsm to 400gsm",
      "Full bleed and precision cut finishing",
      "UV coating, gloss/matte lamination, spot UV",
      "Saddle-stitch, perfect binding, and wire-o binding",
      "ISO 12647-2 colour management",
      "Pre-press proofing and colour sign-off",
    ],
    materials: [
      "Art paper (gloss & silk)",
      "Uncoated bond paper",
      "Recycled kraft stock",
      "Cardboard and board",
      "Speciality textured stocks",
    ],
    useCases: [
      "Product catalogues and lookbooks",
      "Annual reports and corporate brochures",
      "Magazines and publications",
      "Menus and hospitality collateral",
      "Marketing leaflets and flyers",
      "Business cards and stationery",
      "Event programmes and booklets",
    ],
    industries: ["Hospitality", "Retail", "Corporate", "Healthcare", "Events"],
    metaTitle: "Offset Printing Services in Sharjah, UAE | Al Hilal",
    metaDescription:
      "Professional offset printing for catalogues, brochures, and large-run marketing materials. ISO-calibrated colour, fast turnaround, Sharjah & UAE delivery.",
  },
  {
    slug: "digital-printing",
    title: "Digital Printing",
    shortTitle: "Digital",
    tagline: "On-demand. Personalised. Fast.",
    description:
      "Variable data, short-run, and personalised print production — from single copies to 5,000 units with next-day availability on most formats.",
    longDescription:
      "When your project demands speed, flexibility, or personalisation, digital printing is the answer. Al Hilal's digital print division operates high-resolution production presses capable of delivering photographic-quality output on a vast range of substrates — from standard coated stocks to canvas, self-adhesive vinyl, and fine art papers. Variable data printing allows each piece in a run to carry unique names, addresses, codes, or imagery — essential for personalised direct mail, loyalty card programmes, or individualised event credentials. With no plate setup costs, short-run digital printing is cost-effective from a single sheet and available next day on most standard formats.",
    features: [
      "Variable data printing (VDP) for personalisation",
      "Short-run from 1 to 5,000 units",
      "Next-day availability on standard formats",
      "Wide substrate compatibility",
      "Soft proofing and physical proofing available",
      "Consistent colour across the run",
      "Digital cutting for irregular shapes",
      "White ink capability for dark substrates",
    ],
    materials: [
      "Coated and uncoated paper",
      "Canvas and textiles",
      "Self-adhesive vinyl",
      "Magnetic material",
      "Fine art and photographic paper",
    ],
    useCases: [
      "Direct mail and personalised campaigns",
      "Loyalty cards and membership packs",
      "Event credentials and invitations",
      "Product labels and packaging",
      "Prototypes and product samples",
      "Small-run booklets and brochures",
      "Personalised corporate gifts",
    ],
    industries: ["Retail", "Hospitality", "Events", "Healthcare", "Corporate"],
    metaTitle: "Digital Printing Services UAE | On-Demand & Short Run | Al Hilal",
    metaDescription:
      "Fast digital printing in Sharjah, UAE. Variable data, personalisation, short runs from 1 unit. Next-day turnaround on most formats.",
  },
  {
    slug: "large-format-printing",
    title: "Large Format Printing",
    shortTitle: "Large Format",
    tagline: "Presence at scale — indoors and out",
    description:
      "Exhibition stands, hoardings, building wraps, and retail displays produced to exact specification for maximum visual impact across UAE and Gulf markets.",
    longDescription:
      "Large format print is where brand ambition meets physical scale. At Al Hilal, we operate wide-format UV flatbed and roll-to-roll printers capable of producing output up to 5 metres wide, on substrates from PVC banner to rigid aluminium composite panels. Whether it's a 40-metre building wrap for a construction site, a complete exhibition stand for GITEX, or a retail window graphics scheme across 50 locations, our large format team manages artwork sizing, substrate selection, hardware specification, and installation coordination. Our UV-cured inks are fade-resistant for 3–5 years outdoor exposure in UAE climate conditions — critical in a market where sun and sand test every material.",
    features: [
      "Print widths up to 5 metres",
      "UV-cured inks for outdoor durability (3–5 year fade resistance)",
      "Rigid and flexible substrate printing",
      "Roll-to-roll and flatbed UV printing",
      "Finishing: grommets, welded edges, pole pockets, eyelets",
      "Mounting on foam board, aluminium, Dibond",
      "Exhibition stand graphics and modular systems",
      "Installation coordination across UAE",
    ],
    materials: [
      "PVC banner (frontlit & backlit)",
      "Mesh banner for wind-through applications",
      "Aluminium composite panel (ACP/Dibond)",
      "Foam PVC board",
      "Self-adhesive vinyl",
      "Canvas and textile",
      "One-way vision perforated vinyl",
    ],
    useCases: [
      "Exhibition and trade show stands",
      "Retail window and in-store graphics",
      "Outdoor hoardings and billboards",
      "Building and site wraps",
      "Event backdrop and stage graphics",
      "Wayfinding and directional signage",
      "Vehicle wraps and fleet branding",
    ],
    industries: ["Events", "Construction", "Retail", "Hospitality", "Corporate"],
    metaTitle: "Large Format Printing UAE | Banners, Hoardings, Exhibition Stands | Al Hilal",
    metaDescription:
      "Large format printing across UAE. Banners, building wraps, exhibition stands, outdoor hoardings. UV-cured inks, fade-resistant, professional installation.",
  },
  {
    slug: "corporate-gifts",
    title: "Corporate Gifts",
    shortTitle: "Corporate Gifts",
    tagline: "Brand presence beyond paper",
    description:
      "Curated branded merchandise, executive gifts, and promotional product programmes — designed to leave an impression that outlasts the occasion.",
    longDescription:
      "Corporate gifting is a precision exercise in brand communication. The wrong gift says nothing; the right gift says everything about a company's values, quality standards, and attention to client relationships. Al Hilal's corporate gifts division sources, curates, and produces branded merchandise that reflects the standards of the brands we serve. From premium leather-bound notebooks and executive pen sets to USB drives, branded apparel, desk accessories, and custom packaging — every item is selected or produced with print quality and brand fidelity as non-negotiable requirements. We manage minimum orders, bulk production, personalisation, gift packaging, and direct-to-recipient fulfilment for corporate events, Ramadan gifting programmes, and client appreciation campaigns.",
    features: [
      "End-to-end sourcing, production, and fulfilment",
      "Brand-consistent printing on all items",
      "Custom packaging and gift box production",
      "Minimum orders from 50 units",
      "Bulk pricing for large corporate programmes",
      "Personalisation with recipient names or messages",
      "Ramadan, National Day, and event gifting programmes",
      "Showroom and sample viewing available",
    ],
    materials: [
      "Leather and PU leather goods",
      "Metal and acrylic items",
      "Bamboo and sustainable materials",
      "Textile products",
      "Electronic accessories",
      "Premium paper and stationery",
    ],
    useCases: [
      "Client appreciation and retention gifts",
      "Employee recognition and onboarding packs",
      "Conference and event giveaways",
      "Ramadan and festive gifting programmes",
      "Brand awareness promotional campaigns",
      "VIP and executive hospitality gifts",
      "Trade show booth promotional items",
    ],
    industries: ["Corporate", "Hospitality", "Events", "Retail", "Healthcare"],
    metaTitle: "Corporate Gifts & Branded Merchandise UAE | Al Hilal",
    metaDescription:
      "Premium corporate gifts, branded merchandise, and promotional products in UAE. Custom gift programmes, Ramadan gifting, executive gifts. Sharjah based.",
  },
  {
    slug: "uniforms-workwear",
    title: "Uniforms & Workwear",
    shortTitle: "Uniforms",
    tagline: "Your team, professionally presented",
    description:
      "Corporate uniforms, branded workwear, and hospitality dress programmes — embroidered, screen-printed, or heat-transferred to your exact brand specification.",
    longDescription:
      "A brand is built in every interaction — including the moment a customer first sees your team. Uniforms are one of the most consistently visible brand assets a company owns, and they deserve the same attention to detail as any other print or branding investment. Al Hilal produces corporate uniforms, hotel staff liveries, retail team dress, construction workwear, and industrial PPE branding programmes. We work with premium fabrics and provide full embroidery, screen printing, DTG (direct-to-garment) printing, and heat transfer application. Sizing, fit, and fabric sourcing are managed in collaboration with brand and HR teams to ensure consistent, professional presentation across entire workforces.",
    features: [
      "Embroidery for logos, names, and departmental insignia",
      "Screen printing for large chest and back artwork",
      "DTG printing for full-colour photographic designs",
      "Heat transfer for complex or small-run designs",
      "Full size range from XXS to 4XL",
      "Men's, women's, and unisex cut options",
      "Bulk order management for large workforces",
      "Fabric sourcing and colour matching",
    ],
    materials: [
      "100% cotton and cotton-blend shirts",
      "Polyester and performance fabrics",
      "Heavyweight workwear fabric",
      "Reflective and high-visibility materials",
      "Denim and industrial-grade cloth",
    ],
    useCases: [
      "Hotel and hospitality team uniforms",
      "Retail floor staff dress",
      "Corporate office and front-of-house wear",
      "Healthcare and clinical staff clothing",
      "Construction and site safety workwear",
      "Event staff and volunteer uniforms",
      "Sports team and club kit",
    ],
    industries: ["Hospitality", "Retail", "Healthcare", "Construction", "Events"],
    metaTitle: "Corporate Uniforms & Branded Workwear UAE | Al Hilal",
    metaDescription:
      "Corporate uniforms, hospitality liveries, and branded workwear in UAE. Embroidery, screen printing, full workforce supply. Sharjah based.",
  },
  {
    slug: "rubber-stamps",
    title: "Rubber Stamps",
    shortTitle: "Stamps",
    tagline: "Authority in every impression",
    description:
      "Self-inking, pre-inked, and traditional rubber stamps for offices, legal firms, government departments, and business operations across the UAE.",
    longDescription:
      "Rubber stamps may be one of the most underestimated business tools in any organisation. In the UAE, where official documentation, government correspondence, and formal business communications all frequently require stamped authentication, a precise, professional stamp is a daily operational necessity. Al Hilal produces self-inking stamps (Trodat, Colop, and comparable systems), traditional wooden-handle stamps, pre-inked pocket stamps, and large-format date-band stamps to exact text and logo specifications. Turnaround on standard self-inking stamps is same-day or next-day for most orders, with no minimum quantities.",
    features: [
      "Self-inking stamp systems (Trodat, Colop)",
      "Traditional wooden-handle rubber stamps",
      "Pre-inked pocket stamps for portability",
      "Date stamps with adjustable year/month/day",
      "Multi-colour stamp systems",
      "Custom logo and text stamping",
      "Same-day and next-day production",
      "Replacement pads and ink refills",
    ],
    materials: [
      "Natural rubber",
      "Polymer flash stamp material",
      "Eco-friendly biodegradable rubber",
      "ABS plastic casing (self-inking)",
      "Stainless steel components",
    ],
    useCases: [
      "Official company stamps for documentation",
      "Legal and notarial stamps",
      "Government department stamps",
      "Address and return address stamps",
      "Paid, received, approved, and status stamps",
      "Date stamps for records management",
      "Loyalty card and promotional stamps",
    ],
    industries: ["Corporate", "Healthcare", "Construction", "Retail", "Hospitality"],
    metaTitle: "Rubber Stamps UAE | Self-Inking, Custom & Official Stamps | Al Hilal",
    metaDescription:
      "Custom rubber stamps in UAE. Self-inking, pre-inked, date stamps. Same-day production. Company, legal, and official stamps. Sharjah based.",
  },
  {
    slug: "signage-advertising",
    title: "Signage & Advertising",
    shortTitle: "Signage",
    tagline: "Make your mark in the real world",
    description:
      "Outdoor and indoor signage systems, vehicle wraps, retail display, and advertising production for brands that need to own their physical environment.",
    longDescription:
      "Signage is the brand experience that operates 24 hours a day. From the moment a customer or prospect enters a physical space — a hotel lobby, a retail store, a construction site, or a corporate office — signage is communicating brand values, directing movement, and influencing perception. Al Hilal designs, produces, and installs comprehensive signage systems including illuminated fascia signs, channel letter sets, LED backlit displays, directional wayfinding systems, point-of-purchase (POP) displays, and vehicle fleet wraps. We manage the complete project — from concept and technical design through to fabrication, electrical works coordination, and supervised installation by our own teams.",
    features: [
      "Illuminated fascia and shop front signs",
      "Channel letter fabrication and installation",
      "LED backlit and lightbox displays",
      "Wayfinding and directional signage systems",
      "Vehicle wrapping and fleet branding",
      "Point-of-purchase and retail display",
      "Site safety and construction hoardings",
      "Neon and LED neon signs",
    ],
    materials: [
      "Aluminium composite panel (ACP)",
      "Stainless steel and brushed steel",
      "Acrylic and polycarbonate",
      "LED strip and module systems",
      "Cast and cut vinyl",
      "Rigid foam PVC",
      "Galvanised steel framework",
    ],
    useCases: [
      "Retail shop fronts and fascias",
      "Corporate office building signage",
      "Hotel and resort wayfinding",
      "Construction site hoardings and safety boards",
      "Restaurant and café signage",
      "Exhibition booths and pop-up stands",
      "Fleet and vehicle branding programmes",
    ],
    industries: ["Retail", "Hospitality", "Construction", "Corporate", "Events"],
    metaTitle: "Signage & Advertising Production UAE | Al Hilal",
    metaDescription:
      "Custom signage, vehicle wraps, illuminated signs and wayfinding systems in UAE. Full design to installation service. Sharjah based.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string, count = 3): Service[] {
  return services.filter((s) => s.slug !== slug).slice(0, count);
}
