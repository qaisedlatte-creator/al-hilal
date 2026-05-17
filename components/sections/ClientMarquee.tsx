import Image from "next/image";
import { clients } from "@/lib/data/clients";

const ALL_CLIENTS = [...clients, ...clients];

export default function ClientMarquee() {
  return (
    <section className="py-14 bg-ivory border-y border-border overflow-hidden">
      {/* Header */}
      <div className="site-shell mb-8 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-steel/50">
          Trusted by leading businesses across Sharjah &amp; UAE
        </p>
      </div>

      {/* Scrolling track */}
      <div className="relative overflow-hidden">
        {/* Fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-ivory to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-ivory to-transparent" />

        <div className="flex overflow-hidden select-none">
          <div
            className="flex shrink-0"
            style={{
              animation: "marquee 40s linear infinite",
              width: "max-content",
            }}
          >
            {ALL_CLIENTS.map((client, i) => (
              <div
                key={i}
                className="flex items-center justify-center shrink-0 px-10 border-r border-border"
                style={{ minWidth: "180px", height: "96px" }}
              >
                {client.logo ? (
                  <div className="relative w-32 h-14 grayscale hover:grayscale-0 transition-all duration-400 opacity-50 hover:opacity-100">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-1">
                    <span className="font-display font-bold text-steel/40 text-base whitespace-nowrap hover:text-charcoal transition-colors">
                      {client.name}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.12em] text-steel/25 font-semibold">{client.category}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
