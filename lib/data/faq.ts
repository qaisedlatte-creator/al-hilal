export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "services" | "pricing" | "delivery" | "quality";
}

export const faqItems: FaqItem[] = [
  {
    id: "general-1",
    category: "general",
    question: "How long has Al Hilal been operating in the UAE?",
    answer:
      "Al Hilal Printing & Advertising was established in 1999, making us one of Sharjah's most experienced print and advertising production companies. Over 25 years, we have served over a thousand clients across hospitality, retail, construction, healthcare, and corporate sectors throughout the UAE and wider Gulf region.",
  },
  {
    id: "general-2",
    category: "general",
    question: "What types of businesses do you work with?",
    answer:
      "We serve businesses of all sizes — from individual entrepreneurs and small businesses to multinational corporations, government entities, and luxury hospitality groups. Our client base spans hospitality, retail, construction, healthcare, events and exhibitions, corporate, and public sector. If you need something printed, produced, or branded, we can help.",
  },
  {
    id: "general-3",
    category: "general",
    question: "Are you based in Sharjah? Do you serve other emirates?",
    answer:
      "Our production facility is located in Industrial Area 1, Sharjah, UAE. We serve clients across all UAE emirates — Dubai, Abu Dhabi, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain — and also supply clients in Qatar, Saudi Arabia, Kuwait, Bahrain, and Oman for specific project types. Contact us to discuss delivery and logistics for your region.",
  },
  {
    id: "services-1",
    category: "services",
    question: "What is the difference between offset printing and digital printing?",
    answer:
      "Offset printing uses aluminium plates and a transfer process to deliver extremely consistent colour across high-volume runs — it becomes more cost-effective the higher your quantity goes. Digital printing prints directly from a digital file without plates, making it ideal for short runs, personalised print, and on-demand production. For quantities under 500, digital is typically more cost-effective. For quantities above 1,000, offset generally delivers better per-unit pricing and superior colour consistency. We'll recommend the right method for your project during the briefing process.",
  },
  {
    id: "services-2",
    category: "services",
    question: "Can you handle the full production of my project, including design?",
    answer:
      "Yes. While many of our clients supply print-ready artwork, we also offer artwork preparation, design refinement, and pre-press services for clients who need support bringing their concepts to production. We work with your existing brand guidelines or, where needed, recommend design partners who specialise in the type of project you're producing. Please note: we do not offer full brand creation or graphic design from scratch as a primary service.",
  },
  {
    id: "services-3",
    category: "services",
    question: "Can you supply rubber stamps same-day?",
    answer:
      "Yes. Self-inking stamps (the most common type for office and business use) are typically produced same-day or next-day for orders placed before 12:00pm on working days. Traditional hand stamps take slightly longer depending on complexity. Bring or email your artwork and we'll give you an accurate lead time when you enquire.",
  },
  {
    id: "services-4",
    category: "services",
    question: "What is the minimum order for corporate gifts?",
    answer:
      "Minimum quantities vary by product type. For most branded items — pens, notebooks, USB drives, tote bags — minimums start at 50 units. For custom-manufactured items with significant tooling requirements, minimums may be higher. We'll clarify minimum quantities specific to your chosen item when we provide your quotation.",
  },
  {
    id: "pricing-1",
    category: "pricing",
    question: "How do I get a price for my project?",
    answer:
      "The fastest way to get an accurate price is to use our Get a Quote form and provide as much detail as possible — product type, dimensions, quantities, materials, and any finishing requirements. For complex or multi-item projects, we recommend a brief phone or WhatsApp call with our team so we can ask the right questions. Most standard quotations are returned within 4 business hours.",
  },
  {
    id: "pricing-2",
    category: "pricing",
    question: "Do you offer volume discounts?",
    answer:
      "Yes. Pricing for offset printing, large format, uniforms, and corporate gifts all decrease meaningfully with higher quantities — the economics of print production reward scale. For large-volume or ongoing supply contracts, we also offer framework pricing and standing order rates that provide pricing certainty for regular procurement. Ask about our standing order programme when you enquire.",
  },
  {
    id: "pricing-3",
    category: "pricing",
    question: "Can I get a fixed price for regular orders?",
    answer:
      "Yes. For clients who order the same or similar items regularly — menus, business cards, promotional flyers, staff uniforms — we offer standing order frameworks that fix pricing for an agreed period, simplifying your procurement process and protecting your budget from cost fluctuations.",
  },
  {
    id: "delivery-1",
    category: "delivery",
    question: "How quickly can you produce and deliver my order?",
    answer:
      "Lead times depend on the product, quantity, and finishing requirements. As a general guide: digital print is typically 24–48 hours, standard offset print is 3–5 working days, large format is 2–4 working days, rubber stamps are same-day to next-day, uniforms are 7–14 days depending on quantity and complexity, and corporate gifts range from 5 to 21 days depending on sourcing. Rush production is available for most products — let us know your deadline when you enquire.",
  },
  {
    id: "delivery-2",
    category: "delivery",
    question: "Do you deliver to sites across the UAE?",
    answer:
      "Yes. We deliver across all seven UAE emirates. For large format and signage projects, our installation teams travel to site across the UAE. For printed materials, we use our own transport for same-day Sharjah/Dubai deliveries, and courier partners for overnight UAE-wide delivery. Delivery costs are quoted based on size, weight, and destination.",
  },
  {
    id: "quality-1",
    category: "quality",
    question: "What format should I supply my artwork in?",
    answer:
      "We accept artwork in PDF (print-ready, press quality), AI (Adobe Illustrator), PSD (Photoshop, 300dpi minimum), and INDD (InDesign). Files should include 3mm bleed on all sides, all fonts embedded or converted to outlines, and images at 300dpi minimum. CMYK colour mode is required for offset and digital print. If you're unsure whether your file is production-ready, send it to us and our pre-press team will check it and advise — at no charge.",
  },
  {
    id: "quality-2",
    category: "quality",
    question: "Can I see a proof before production begins?",
    answer:
      "Yes. For offset print jobs, we provide a digital soft proof as standard. Physical hard proofs (printed proofs on the actual production substrate) are available at an additional cost and are strongly recommended for colour-critical work or premium finishing. For digital print jobs, we can provide a single printed sample before running the full quantity on request.",
  },
  {
    id: "quality-3",
    category: "quality",
    question: "How do you ensure colour consistency?",
    answer:
      "Our offset presses are calibrated to ISO 12647-2 standards and we perform regular density and colour checks throughout each run. For Pantone colour matching, we use calibrated ink mixing equipment to achieve accurate spot colour reproduction. For large format work, we profile our printers to each substrate type. We can accommodate colour sign-off on press for critical commercial or brand-sensitive jobs.",
  },
];

export function getFaqByCategory(category: FaqItem["category"]): FaqItem[] {
  return faqItems.filter((item) => item.category === category);
}

export const faqCategories: { key: FaqItem["category"]; label: string }[] = [
  { key: "general", label: "General" },
  { key: "services", label: "Services" },
  { key: "pricing", label: "Pricing" },
  { key: "delivery", label: "Delivery" },
  { key: "quality", label: "Quality & Artwork" },
];
