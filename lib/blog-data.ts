// Blog posts live as one JSON file each in content/blog/ (D-27 in flaux-surface): adding a post = adding a file
// and committing; the deploy workflow builds and publishes it. Read at build time only (static export), so every
// importer must be a server module (today: app/blog pages, lib/seo.ts, lib/json-ld.ts).
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { BUSINESS } from "./site";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  /** Full title — rendered in the <h1> and used for <title> */
  title: string;
  /** Short display word(s) for the big hero heading */
  heroTitle: string;
  description: string;
  /** ISO date (YYYY-MM-DD) */
  datePublished: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  sections: BlogSection[];
};

// Facts used in posts must stay true, so posts say {{name}} and the value comes from here (one place to change).
const FACTS: Record<string, string> = {
  hoursDisplay: BUSINESS.hoursDisplay,
  address: BUSINESS.address.full,
  phone: BUSINESS.phoneDisplay,
  fridayJam: "every Friday, a candlelight midnight jamming session runs from 11pm to 2am",
  saturdayBand: "every Saturday night a live band plays in the garden",
};

const DIR = path.join(process.cwd(), "content", "blog");
const isText = (v: unknown): v is string => typeof v === "string" && v.trim() !== "";

function fill(text: string, file: string) {
  return text.replace(/\{\{(\w+)\}\}/g, (_, name: string) => {
    if (!(name in FACTS)) throw new Error(`${file}: unknown placeholder {{${name}}} (known: ${Object.keys(FACTS).join(", ")})`);
    return FACTS[name];
  });
}

// A bad post fails the build with the file name, so nothing broken ever reaches the live site.
function load(file: string): BlogPost {
  const p = JSON.parse(readFileSync(path.join(DIR, file), "utf8"));
  for (const key of ["slug", "title", "heroTitle", "description", "datePublished", "image", "imageAlt"] as const) {
    if (!isText(p[key])) throw new Error(`${file}: "${key}" is missing or empty`);
  }
  if (`${p.slug}.json` !== file) throw new Error(`${file}: slug must match the file name`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(p.datePublished)) throw new Error(`${file}: datePublished must be YYYY-MM-DD`);
  if (!Array.isArray(p.keywords) || !Array.isArray(p.sections) || !p.sections.length) throw new Error(`${file}: needs keywords[] and sections[]`);
  for (const s of p.sections) {
    if (!isText(s.heading) || !Array.isArray(s.paragraphs)) throw new Error(`${file}: every section needs a heading and paragraphs[]`);
  }
  return {
    ...p,
    title: fill(p.title, file),
    description: fill(p.description, file),
    sections: p.sections.map((s: BlogSection) => ({
      heading: fill(s.heading, file),
      paragraphs: s.paragraphs.map((t) => fill(t, file)),
      ...(s.list ? { list: s.list.map((t) => fill(t, file)) } : {}),
    })),
  };
}

// Newest first, so a new post shows at the top of /blog; same-day posts by title.
export const blogPosts: BlogPost[] = readdirSync(DIR)
  .filter((f) => f.endsWith(".json"))
  .map(load)
  .sort((a, b) => b.datePublished.localeCompare(a.datePublished) || a.title.localeCompare(b.title));

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
