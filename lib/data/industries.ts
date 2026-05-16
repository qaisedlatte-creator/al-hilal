export interface Industry {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  services: string[];
  challenges: string[];
  solutions: string[];
  metaTitle: string;
  metaDescription: string;
}

export const industries: Industry[] = [
  {
    slug: "hospitality",
    title: "Hospitality",
    tagline: "Where brand is the guest experience",
    description:
      "Hotels, resorts, restaurants, and food & beverage operations depend on print to define the guest experience — from arrival to departure.",
    longDescription:
      "In hospitality, every printed touchpoint is a brand moment. A poorly produced menu undermines a chef's finest work. An inconsistent room directory erodes the sense of curation your design team built over months. Al Hilal has been the print partner of choice for UAE hotels, resorts, restaurants, and leisure facilities for over 25 years. We understand the critical importance of material specification, colour consistency, and on-time delivery in an industry where brand standards are measured to the millimetre and delivery windows are dictated by check-in schedules, not print production calendars.",
    services: [
      "Menus and wine lists",
      "Guest room collateral and directories",
      "Conference and event print",
      "Loyalty programme materials",
      "Uniform and workwear production",
      "Wayfinding and directional signage",
      "Outdoor hoardings and banners",
      "Corporate gift and amenity packages",
    ],
    challenges: [
      "Strict brand standards and colour consistency requirements",
      "Multiple formats, materials, and finishes across a single property",
      "Seasonal and event-driven reprinting requirements",
      "Short lead times dictated by operational schedules",
    ],
    solutions: [
      "Dedicated account management for large properties",
      "Brand profile storage for zero-variation reprints",
      "Standing order programmes for regularly consumed items",
      "Priority production slots for event-driven requirements",
    ],
    metaTitle: "Hospitality Print & Signage Partner UAE | Hotels & Resorts | Al Hilal",
    metaDescription:
      "Premium print, signage, uniforms, and branded materials for hotels, resorts, and restaurants across UAE. 25+ years serving hospitality brands.",
  },
  {
    slug: "retail",
    title: "Retail",
    tagline: "Print that converts browsers to buyers",
    description:
      "From shop-front signage to point-of-purchase displays, packaging, and loyalty materials — retail brands need print that drives in-store behaviour.",
    longDescription:
      "Retail is the most demanding environment for print production because the stakes are measurable. When in-store signage performs, dwell time increases and conversion improves. When it fails — through poor colour, wrong sizing, or inconsistency across locations — the brand suffers quantifiably. Al Hilal produces the full spectrum of retail print and signage, from nationwide rollouts of standardised in-store graphics packages to one-off campaign materials for flagship locations. We manage multi-location projects with the same account team throughout, ensuring every branch in a network receives identical materials to identical specifications.",
    services: [
      "Shop-front and fascia signage",
      "Point-of-purchase (POP) displays",
      "Window graphics and seasonal campaigns",
      "In-store wayfinding and category signage",
      "Loyalty card and membership programmes",
      "Packaging and retail bags",
      "Staff uniforms and branded workwear",
      "Promotional flyers and catalogues",
    ],
    challenges: [
      "Multi-location consistency across UAE and Gulf",
      "Campaign materials with tight launch windows",
      "Seasonal refreshes at scale",
      "Balancing brand consistency with store-specific needs",
    ],
    solutions: [
      "Multi-location rollout management with single project contact",
      "Templated production systems for rapid campaign deployment",
      "Dedicated stock items for high-frequency retail consumables",
      "Size-variation management for mixed-format networks",
    ],
    metaTitle: "Retail Print, Signage & POP Production UAE | Al Hilal",
    metaDescription:
      "Retail print, signage, window graphics, and POP displays across UAE. Multi-location rollouts, campaign materials, consistent brand execution.",
  },
  {
    slug: "events",
    title: "Events & Exhibitions",
    tagline: "Production that performs under pressure",
    description:
      "Trade shows, corporate events, product launches, and public exhibitions require print production that is both exceptional in quality and immune to deadline pressure.",
    longDescription:
      "Events are the highest-pressure print environment that exists. Deadlines are absolute, quantities are fixed, and the consequences of failure are immediate and visible. Al Hilal has supplied print and production for the UAE's largest exhibitions, international trade shows, government-backed events, and corporate product launches for over two decades. We operate with event teams who understand the difference between a standard production schedule and an event production schedule — and who know when to absorb a client's last-minute artwork revision without collapsing the timeline for everything else.",
    services: [
      "Exhibition stand graphics and environmental branding",
      "Conference and delegate print packs",
      "Event registration and credential materials",
      "Stage backdrops and speaker graphics",
      "Outdoor hoardings and event signage",
      "Branded merchandise and visitor gifts",
      "Event programme and schedule publications",
      "Installation and de-rig services",
    ],
    challenges: [
      "Absolute, immovable delivery deadlines",
      "Late artwork changes and last-minute client requests",
      "Multi-format packages requiring simultaneous production",
      "Installation coordination at event venues",
    ],
    solutions: [
      "Dedicated event production manager for each project",
      "Pre-event production planning with buffer management",
      "In-house installation teams familiar with major UAE venues",
      "24-hour production capability for critical deadline situations",
    ],
    metaTitle: "Event & Exhibition Print Production UAE | Al Hilal",
    metaDescription:
      "Exhibition stand graphics, event signage, delegate packs, and branded materials for events and trade shows across UAE. Reliable deadline delivery.",
  },
  {
    slug: "construction",
    title: "Construction",
    tagline: "Site presence as professional as the project",
    description:
      "Construction sites, project offices, and property developments require signage and print that communicates professionalism, safety compliance, and brand authority.",
    longDescription:
      "Construction sites are public brand statements. Before a building is finished, the hoarding tells the story. The safety signage communicates operational standards. The project branding establishes the premium positioning that sales will depend on. Al Hilal has worked with UAE's largest construction groups, property developers, and project management consultancies for over 25 years, producing everything from site safety boards and temporary hoardings to premium property launch materials and sales centre fit-outs. We understand the operational environment — working around restricted access windows, coordinating with site managers, and supplying materials that survive the UAE construction site conditions.",
    services: [
      "Site hoardings and perimeter graphics",
      "Safety signage and regulatory boards",
      "Project launch and sales centre print",
      "Site staff uniforms and PPE branding",
      "Property brochures and development materials",
      "Directional and traffic management signage",
      "Contractor and visitor credentials",
      "Building identification and address signage",
    ],
    challenges: [
      "Outdoor durability requirements in UAE climate",
      "Safety and regulatory compliance for signage content",
      "Access and installation on active construction sites",
      "Multi-phase project requirements over extended timelines",
    ],
    solutions: [
      "UV-cured outdoor materials rated for UAE climate (3–5 year fade resistance)",
      "In-house knowledge of UAE safety signage regulatory requirements",
      "Installation teams experienced in active site access protocols",
      "Phase-based production planning for long-duration projects",
    ],
    metaTitle: "Construction Site Signage & Print Production UAE | Al Hilal",
    metaDescription:
      "Site hoardings, safety signage, property brochures, and construction branding across UAE. Outdoor-rated materials, professional installation.",
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    tagline: "Precision communication in critical environments",
    description:
      "Hospitals, clinics, pharmacies, and healthcare groups require print and signage that combines clinical accuracy, regulatory compliance, and compassionate brand communication.",
    longDescription:
      "Healthcare print is a category where errors have consequences beyond brand reputation. Wayfinding must be unambiguous. Patient information must be accurate and legible for audiences with varying literacy levels. Regulatory displays must comply with UAE Ministry of Health requirements. Stamps and documentation must be precise and official. Al Hilal has worked with major UAE hospital networks, pharmacy chains, and healthcare groups for over 25 years, understanding the unique production requirements of this sector — the sanitiser-resistant materials, the large-print formats for accessibility, the rapid production of outbreak-response communications, and the regulatory approval workflows for patient-facing materials.",
    services: [
      "Hospital and clinic wayfinding systems",
      "Patient information materials and brochures",
      "Regulatory compliance and certification displays",
      "Pharmacy retail signage and POP materials",
      "Staff identification and uniform production",
      "Rubber stamps for documentation and authentication",
      "Emergency and outbreak communication materials",
      "Annual reports and institutional publications",
    ],
    challenges: [
      "Regulatory compliance and Ministry of Health requirements",
      "Accessibility and legibility standards for patient-facing materials",
      "Infection control requirements for materials used in clinical areas",
      "Rapid production for time-sensitive health communications",
    ],
    solutions: [
      "Healthcare regulatory knowledge embedded in pre-press review",
      "Substrate options compliant with clinical area hygiene requirements",
      "Large-print and accessibility format options as standard",
      "Priority production for emergency health communications",
    ],
    metaTitle: "Healthcare Print, Signage & Wayfinding UAE | Al Hilal",
    metaDescription:
      "Hospital wayfinding, patient materials, pharmacy signage, and healthcare regulatory displays across UAE. Compliant, accessible, precise.",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
