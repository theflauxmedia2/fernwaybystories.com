import type { MetadataRoute } from "next";
import { SITE_ROUTES } from "@/lib/seo";
import { pageUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return SITE_ROUTES.map(({ path, changeFrequency, priority }) => ({
    // Trailing slash matches canonical tags (trailingSlash: true); static folders 301 /x → /x/
    url: pageUrl(path === "/" ? "/" : `${path}/`),
    lastModified,
    changeFrequency,
    priority,
  }));
}
