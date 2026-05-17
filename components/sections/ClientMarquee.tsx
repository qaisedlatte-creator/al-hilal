import Image from "next/image";
import { clients } from "@/lib/data/clients";

/* Duplicate for seamless infinite loop */
const TRACK = [...clients, ...clients];

export default function ClientMarquee() {
  return (
    <section className="py-12 bg-ivory border-y border-border overflow-hidden">
      <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-steel/40 mb-8">
        Trusted by leading businesses across Sharjah &amp; UAE
      </p>

      <div className="relative overflow-hidden">
        {/* Fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-r from-ivory to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-l from-ivory to-transparent" />

        {/* Uses .marquee-track CSS class which has @keyframes marquee animation */}
        <div className="marquee-track">
          {TRACK.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0 px-10 border-r border-border"
              style={{ minWidth: "180px", height: "100px" }}
            >
              {client.logo ? (
                <div
                  className="relative grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  style={{ width: "130px", height: "56px", position: "relative" }}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                    sizes="130px"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center gap-1">
                  <span className="font-display font-bold text-charcoal/40 text-base whitespace-nowrap">
                    {client.name}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.12em] text-steel/30 font-semibold">
                    {client.category}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
