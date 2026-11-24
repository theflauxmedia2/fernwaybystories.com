# Decisions

## D-1: Blog as one data file + static [slug] route
Date: 2026-11-24    Model: Claude Opus 5.5
Context:    Need 4 keyword-targeted blog posts before a 26 Nov panel; site is a static export (no server) on Hostinger.
Options:    1) lib/blog-data.ts + app/blog/[slug] with generateStaticParams, dynamicParams=false  2) one hand-written folder per post  3) MDX or a headless CMS (e.g. Sanity)
Chosen:     1
Why:        One template keeps all posts consistent with existing page patterns; adding a post = adding one object; no new dependency; supported by static export (node_modules/next/dist/docs/01-app/02-guides/static-exports.md).
Trade-off:  Non-developers can't add posts without editing a TypeScript file; no rich formatting beyond headings/paragraphs/lists.
Revisit if: The team wants to publish posts themselves regularly (then move to a CMS such as Sanity).
