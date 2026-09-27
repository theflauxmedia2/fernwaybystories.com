# Live baseline — Fernway by Stories

Fetched from the live site on 2026-09-27 (not from the repo). Production domain: `https://fernwaybystories.com` (non-www, HTTPS, trailing slash).

No `noindex` on any production URL below.

## Stack and hosting

| Item | Finding |
| --- | --- |
| Framework | Next.js 16.2.6 App Router, `output: "export"`, `trailingSlash: true` |
| Package manager | npm (`package-lock.json`, lockfileVersion 3) |
| Node used for this baseline build | v24.17.0, npm 11.13.0 |
| Live host | Hostinger static files (`platform: hostinger`, `panel: hpanel`, `server: hcdn`) |
| Deploy path | `npm run build` writes `out/`; upload contents to `public_html`. `scripts/postbuild-static.mjs` renames `/_next/` to `/next-assets/` and copies `public/.htaccess` |
| Config files | `public/.htaccess` present. No `vercel.json`, no `netlify.toml`. A local `.vercel/` link exists and is gitignored; live responses are Hostinger, not Vercel |
| Public routes | `/`, `/about/`, `/menu/`, `/gallery/`, `/events/`, `/contact/`, plus `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/llms.txt`, and the generated `/404.html` |

## Redirects

| Request | Status | Location |
| --- | --- | --- |
| `http://fernwaybystories.com/` | 301 | `https://fernwaybystories.com/` |
| `http://www.fernwaybystories.com/` | 301 | `https://www.fernwaybystories.com/` |
| `https://www.fernwaybystories.com/` | 301 | `https://fernwaybystories.com/` |
| `https://www.fernwaybystories.com/menu/` | 301 | `https://fernwaybystories.com/menu/` |
| `https://www.fernwaybystories.com/about/` | 301 | `https://fernwaybystories.com/about/` |
| `https://fernwaybystories.com/about` (no slash) | 301 | `https://fernwaybystories.com/about/` |
| `https://fernwaybystories.com/menu` | 301 | `https://fernwaybystories.com/menu/` |
| `https://fernwaybystories.com/gallery` | 301 | `https://fernwaybystories.com/gallery/` |
| `https://fernwaybystories.com/events` | 301 | `https://fernwaybystories.com/events/` |
| `https://fernwaybystories.com/contact` | 301 | `https://fernwaybystories.com/contact/` |

Chain for `http://www`: HTTP www → HTTPS www → HTTPS non-www. Canonical style to preserve: `https://fernwaybystories.com/` with a trailing slash on inner pages.

## robots.txt

`GET https://fernwaybystories.com/robots.txt` → 200.

`User-Agent: *` allows `/` and disallows `/api/`, `/next-assets/`, `/private/`. The same allow, without `/private/`, is repeated for GPTBot, ChatGPT-User, OAI-SearchBot, Google-Extended, anthropic-ai, ClaudeBot, Claude-Web, PerplexityBot, Applebot-Extended, cohere-ai, FacebookBot, and meta-externalagent.

`Host: fernwaybystories.com`  
`Sitemap: https://fernwaybystories.com/sitemap.xml`

No live page is disallowed.

## sitemap.xml

`GET https://fernwaybystories.com/sitemap.xml` → 200. `lastmod` on every URL is `2026-07-29T12:06:36.408Z`.

| loc | changefreq | priority |
| --- | --- | --- |
| `https://fernwaybystories.com/` | weekly | 1 |
| `https://fernwaybystories.com/about` | monthly | 0.85 |
| `https://fernwaybystories.com/menu` | weekly | 0.9 |
| `https://fernwaybystories.com/gallery` | weekly | 0.8 |
| `https://fernwaybystories.com/events` | weekly | 0.85 |
| `https://fernwaybystories.com/contact` | monthly | 0.9 |

Inner sitemap URLs omit the trailing slash. Those paths 301 to the slash form, which is what the canonical tags use.

## Public pages

| URL | Status | Title | Meta description | Canonical | H1 | Robots |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | 200 | Fernway by Stories \| Open-Air Lounge, Bengaluru (47) | Fernway by Stories — Bengaluru Mysore Highway has a new iconic landmark. Open-air seating, curated cocktails, globally inspired comfort food, and relaxed evenings under the open sky. Reserve your table. (202) | `https://fernwaybystories.com/` | FERNWAY | index, follow |
| `/about/` | 200 | The Fernway Experience \| Fernway by Stories (43) | Discover the story behind Fernway by Stories — an open-air landmark in Bengaluru built for unhurried evenings, thoughtful food, and nature-inspired ambience. (157) | `https://fernwaybystories.com/about/` | About | index, follow |
| `/menu/` | 200 | Menu \| Fernway by Stories (25) | Our menu at Fernway by Stories — small plates, mains, vegetarian selection, desserts, cocktails, and shisha at our open-air Bengaluru landmark. (143) | `https://fernwaybystories.com/menu/` | Menu | index, follow |
| `/gallery/` | 200 | Gallery \| Fernway by Stories (28) | Moments that linger — explore open-air ambience and kitchen photography at Fernway by Stories on Bengaluru Mysore Highway, Mayaganahalli. (137) | `https://fernwaybystories.com/gallery/` | Gallery | index, follow |
| `/events/` | 200 | Events & Private Dining \| Fernway by Stories (44) | Evenings at Fernway — DJ nights, themed evenings, weekend sessions, and private celebrations in our open-air Bengaluru setting. Submit an event enquiry online. (159) | `https://fernwaybystories.com/events/` | Events | index, follow |
| `/contact/` | 200 | Contact & Reservations \| Fernway by Stories (43) | Reserve your table at Fernway by Stories, Mayaganahalli, Bengaluru. Open daily 1pm–6am. Call 080-471-62244 or confirm your reservation online. (142) | `https://fernwaybystories.com/contact/` | Contact | index, follow |

`html lang` is `en-IN` on every HTML page. Open Graph and Twitter cards are present, using existing ambience and food images.

Other live URLs:

| URL | Status | Notes |
| --- | --- | --- |
| `/llms.txt` | 200 | Plain-text site summary |
| `/manifest.webmanifest` | 200 | Web app manifest |
| `/404.html` | 200 | Next.js not-found file, requested directly. Title is concatenated: `404: This page could not be found.Fernway by Stories \| Open-Air Lounge, Bengaluru`. H1 `404`. Robots `index, follow`. Canonical is the homepage. Description is the homepage description. |
| `/privacy/` | 404 | Same not-found HTML as above. Not a live page. |
| `/terms/` | 404 | Same not-found HTML. Not a live page. |

## Code baseline (main at `77e65a9`)

Run on 2026-09-27 with Node v24.17.0 before any refresh edits.

| Step | Result |
| --- | --- |
| `npm ci` | Passed. 362 packages. npm reported 9 vulnerabilities (1 low, 1 moderate, 6 high, 1 critical). |
| `npm run lint` | Passed. No errors. |
| `npm run build` | Passed. Next.js 16.2.6 static export, then postbuild rewrite to `next-assets/`. Routes: `/`, `/_not-found`, `/about`, `/contact`, `/events`, `/gallery`, `/manifest.webmanifest`, `/menu`, `/robots.txt`, `/sitemap.xml`. |
| Tests | No test script. |

`npm ci` did not change `package-lock.json`.

## Environment

The app does not read `process.env`. A local production build does not need `.env.local`.

`.gitignore` ignores `.env*` and keeps `.env.example`. `.env.example` lists no names because none are used.

## Secrets

Scanned the working tree and all 8 commits in git history for env files, API keys, tokens, passwords, private keys, Firebase, Supabase, and SMTP credentials.

No secrets found. `.claude/settings.local.json` existed in an older commit and is not on `main`; it only stored local permission allow-rules. No history rewrite.

## Not decided yet

Live Hostinger does not run Node. There is no `engines` field, no `.nvmrc`, and no `vercel.json` Node pin. The baseline build used Node v24.17.0. Pinning `engines.node` waits for confirmation of the Node version to record.
