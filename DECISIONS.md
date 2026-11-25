# Decisions

## D-1: Blog as one data file + static [slug] route
Date: 2026-11-24    Model: Claude Opus 5.5
Context:    Need 4 keyword-targeted blog posts before a 26 Nov panel; site is a static export (no server) on Hostinger.
Options:    1) lib/blog-data.ts + app/blog/[slug] with generateStaticParams, dynamicParams=false  2) one hand-written folder per post  3) MDX or a headless CMS (e.g. Sanity)
Chosen:     1
Why:        One template keeps all posts consistent with existing page patterns; adding a post = adding one object; no new dependency; supported by static export (node_modules/next/dist/docs/01-app/02-guides/static-exports.md).
Trade-off:  Non-developers can't add posts without editing a TypeScript file; no rich formatting beyond headings/paragraphs/lists.
Revisit if: The team wants to publish posts themselves regularly (then move to a CMS such as Sanity).

## D-2: Deploy as a static export to Hostinger; GitHub mirrors what is live
Date: 2026-11-25    Model: Claude Opus 5.5
Context:    Domain points to Hostinger; repo main also auto-builds on Vercel (not the live domain).
Options:    1) static `out/` zip via Hostinger API (upload + deploy-static-site-archive)  2) Hostinger Node.js build from Git  3) move the domain to Vercel
Chosen:     1
Why:        next.config uses output:"export", so no server is needed; deploys in minutes; Vercel builds of main confirm the code builds.
Trade-off:  Deploy is manual (build → zip → upload); a Node rebuild in hPanel would re-add Passenger lines and override the static site.
Revisit if: Someone wants push-to-deploy (then point the domain at Vercel or set up Hostinger Git deploy as static).

## D-3: Content facts the site must keep true
Date: 2026-11-25    Model: Claude Opus 5.5
Context:    Earlier AI-written copy invented shisha and cocktails.
Chosen:     No shisha/hookah (not allowed in Bengaluru) and no alcohol/cocktails anywhere — site, schema, llms*.txt, Business Profile. Menu = real Fernway menu from EazyDiner (lib/menu-data.ts, 228 items, Nov 2026). Price ₹800 for two (owner-confirmed).
Why:        Wrong claims mislead guests and can hurt trust with Google and the panel.
Trade-off:  Menu changes need a manual edit of lib/menu-data.ts.
Revisit if: The licence or menu changes (update lib/menu-data.ts, FAQ, schema, llms files together).
