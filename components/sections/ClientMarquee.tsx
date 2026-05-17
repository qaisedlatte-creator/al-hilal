import FadeIn from "@/components/animations/FadeIn";

const CLIENTS = [
  { name: "Emaar Properties", category: "Real Estate" },
  { name: "Rotana Hotels", category: "Hospitality" },
  { name: "Spinneys", category: "Retail" },
  { name: "Jumeirah Group", category: "Hospitality" },
  { name: "RAK Properties", category: "Real Estate" },
  { name: "ENOC", category: "Energy" },
  { name: "Life Pharmacy", category: "Healthcare" },
  { name: "Al-Futtaim Group", category: "Conglomerate" },
  { name: "Carrefour UAE", category: "Retail" },
  { name: "Dubai Parks", category: "Leisure" },
  { name: "Mövenpick Hotels", category: "Hospitality" },
  { name: "Sobha Realty", category: "Real Estate" },
];

// Duplicate for seamless loop
const ALL_CLIENTS = [...CLIENTS, ...CLIENTS];

export default function ClientMarquee() {
  return (
    <section className="py-12 bg-navy border-y border-ivory/5 overflow-hidden">
      <div className="site-shell mb-6">
        <FadeIn>
          <p className="label text-ivory/30 text-center">Trusted by leading UAE businesses for 25+ years</p>
        </FadeIn>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-navy to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-navy to-transparent pointer-events-none" />

        <div className="flex overflow-hidden">
          <div
            className="flex gap-0 shrink-0"
            style={{
              animation: "marquee 40s linear infinite",
              width: "max-content",
            }}
          >
            {ALL_CLIENTS.map((client, i) => (
              <div
                key={i}
                className="flex items-center gap-8 px-6 border-r border-ivory/10 shrink-0"
                style={{ minWidth: "200px" }}
              >
                {/* Client "logo" — styled text treatment */}
                <div className="flex flex-col py-4">
                  <span className="font-display font-bold text-ivory/60 text-sm leading-tight whitespace-nowrap hover:text-ivory transition-colors">
                    {client.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.12em] text-ivory/20 mt-0.5">{client.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
