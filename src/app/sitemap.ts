import type { MetadataRoute } from "next";
import { posts } from "@/content/all-posts";
import { profiles } from "@/lib/compare-data";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL },
    { url: `${SITE_URL}/compare` },
    ...profiles.map((p) => ({ url: `${SITE_URL}/compare/${p.slug}` })),
    { url: `${SITE_URL}/blog` },
    ...posts.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: p.date })),
  ];
}
