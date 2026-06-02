import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { services } from "@/lib/data/services";

const lastMod = new Date("2026-06-02");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: lastMod, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/gallery`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.9 },
    { url: `${SITE_URL}/get-a-quote`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.9 },
    { url: `${SITE_URL}/faq`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blog`, lastModified: lastMod, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/process`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.5 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: lastMod,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages];
}
