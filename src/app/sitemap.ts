import type { MetadataRoute } from "next";
import { nav } from "@/lib/data";

const base = "https://www.schmuck-friedberg.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...nav.map((n) => n.href)].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
