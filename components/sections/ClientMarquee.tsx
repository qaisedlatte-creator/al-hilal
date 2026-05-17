import Image from "next/image";
import { clients } from "@/lib/data/clients";

const ALL_CLIENTS = [...clients, ...clients];

export default function ClientMarquee() {
  return (
    <section className="py-10 bg-ivory border-y border-border overflow-hidden">
      <div className="site-shell mb-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-steel/50 text-center">
          Trusted by businesses across Sharjah &amp; UAE
        </p>
      </div>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-ivory to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-ivory to-transparent pointer-events-none" />

        <div className="flex overflow-hidden">
          <div
            className="flex shrink-0"
            style={{ animation: "marquee 35s linear infinite", width: "max-content" }}
          >
            {ALL_CLIENTS.map((client, i) => (
              <div
                key={i}
                className="flex items-center justify-center px-8 border-r border-border shrink-0"
                style={{ minWidth: "160px", height: "72px" }}
              >
                {client.logo ? (
                  <div className="relative w-24 h-10 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="font-display font-bold text-steel/50 text-sm whitespace-nowrap hover:text-charcoal transition-colors">
                      {client.name}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.1em] text-steel/30">{client.category}</span>
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
