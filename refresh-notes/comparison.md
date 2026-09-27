# Live comparison — Fernway by Stories

Compared on 2026-09-27. Local site is the production static export (`out/`) served at `http://127.0.0.1:4321`. Live site is `https://fernwaybystories.com`.

Canonical style kept: `https://fernwaybystories.com/…/` (non-www, HTTPS, trailing slash). No ranking page has `noindex`.

All six live pages pass.

| Page | Status | Live title | Refreshed title | Live description | Refreshed description | Canonical | H1 | Result |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | 200 | Fernway by Stories \| Open-Air Lounge, Bengaluru | Fernway by Stories \| Open-Air Lounge, Bengaluru | Fernway by Stories — Bengaluru Mysore Highway has a new iconic landmark. Open-air seating, curated cocktails, globally inspired comfort food, and relaxed evenings under the open sky. Reserve your table. | Fernway by Stories — Bengaluru Mysore Highway has a new iconic landmark. Open-air seating, curated cocktails, and globally inspired comfort food. Reserve your table. | `https://fernwaybystories.com/` | FERNWAY | Pass |
| `/about/` | 200 | The Fernway Experience \| Fernway by Stories | The Fernway Experience, Bengaluru \| Fernway by Stories | Discover the story behind Fernway by Stories — an open-air landmark in Bengaluru built for unhurried evenings, thoughtful food, and nature-inspired ambience. | Same as live | `https://fernwaybystories.com/about/` | About | Pass |
| `/menu/` | 200 | Menu \| Fernway by Stories | Menu \| Cocktails, Plates & Shisha \| Fernway by Stories | Our menu at Fernway by Stories — small plates, mains, vegetarian selection, desserts, cocktails, and shisha at our open-air Bengaluru landmark. | Our menu at Fernway by Stories — small plates, mains, a vegetarian selection, desserts, cocktails, and shisha at our open-air Bengaluru landmark. | `https://fernwaybystories.com/menu/` | Menu | Pass |
| `/gallery/` | 200 | Gallery \| Fernway by Stories | Gallery \| Open-Air Lounge Photos \| Fernway by Stories | Moments that linger — explore open-air ambience and kitchen photography at Fernway by Stories on Bengaluru Mysore Highway, Mayaganahalli. | Moments that linger — explore open-air ambience and kitchen photography at Fernway by Stories, the lounge on Bengaluru Mysore Highway, Mayaganahalli. | `https://fernwaybystories.com/gallery/` | Gallery | Pass |
| `/events/` | 200 | Events & Private Dining \| Fernway by Stories | Events & Private Dining, Bengaluru \| Fernway by Stories | Evenings at Fernway — DJ nights, themed evenings, weekend sessions, and private celebrations in our open-air Bengaluru setting. Submit an event enquiry online. | Same as live | `https://fernwaybystories.com/events/` | Events | Pass |
| `/contact/` | 200 | Contact & Reservations \| Fernway by Stories | Contact & Reservations \| Bengaluru \| Fernway by Stories | Reserve your table at Fernway by Stories, Mayaganahalli, Bengaluru. Open daily 1pm–6am. Call 080-471-62244 or confirm your reservation online. | Reserve your table at Fernway by Stories in Mayaganahalli, Bengaluru. Open daily 1pm–6am. Call 080-471-62244 or confirm your reservation online. | `https://fernwaybystories.com/contact/` | Contact | Pass |

## Checks

- Every live page exists at the same path and returns 200.
- H1 wording is unchanged.
- Canonicals still point at the production domain with a trailing slash.
- Ranking pages are `index, follow` only. None gained `noindex`.
- 47 internal links and asset URLs in the built HTML all resolved.
- `/privacy/` is still not a page (404), same as live.
- Sitemap locs now use the trailing-slash canonicals. `robots.txt` still allows crawling and links `https://fernwaybystories.com/sitemap.xml`.

## 404 note

The live `/404.html` already sends `noindex`, then a second robots tag of `index, follow` from the site layout. The refreshed 404 keeps that same pair. It is not a ranking URL. The visible page is now branded (“Page not found”) instead of the default Next.js error.

## What a visitor would notice

- Browser tab titles are longer on About, Menu, Gallery, Events, and Contact. The homepage title is unchanged.
- Gold words and small labels on cream and sand backgrounds are a deeper gold, so they are easier to read. Gold on the dark hero and dark banners is unchanged.
- Muted body text is slightly darker.
- Event-enquiry field labels on the dark form are easier to read.
- Keyboard focus shows a light and dark ring.
- A missing URL shows a Fernway 404 with links home and to Contact, instead of the plain Next.js 404.
- Menu category names are the same on screen. They are now headings for screen readers.
- Phone, hours, address, menu items, ReserveGo, and WhatsApp destinations are unchanged.
