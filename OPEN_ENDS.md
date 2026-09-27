# Open ends — Fernway by Stories

<!--
Tracked by Flaux HQ. Rules:
- One item per line: "- [ ] text #tags"
- Priority tags: #high #medium #low (default medium)
- Other tags allowed: #mobile #blog #homepage etc.
- When fixed: tick it "- [x]" or delete the line, in the same commit as the fix.
- Or write "closes OE: <item text>" in the commit message.
- Keep the section headings exactly as they are.
-->

## Bugs
## SEO
- [ ] Expand /about/ (about 267 words), /menu/ (about 142), /gallery/ (about 97), /events/ (about 173), and /contact/ (about 125) past 300 words with client-approved copy where these pages should rank #medium #homepage
- [ ] Add the real Facebook profile to sameAs in lib/json-ld.ts once the client replaces the placeholder in lib/site.ts #medium
- [ ] Confirm whether Restaurant opening hours in lib/json-ld.ts should split 1pm–6am into two schema ranges so midnight is not treated as the same day #low
## Client inputs needed
- [ ] Provide the real Facebook URL. lib/site.ts still has https://www.facebook.com/ and the site hides it #medium
- [ ] Provide a business email if it should appear on /contact/ and in JSON-LD. None is published today #medium
- [ ] Provide an SVG logo. Current marks are public/logo.png and public/Green-logo.png #low
- [ ] Provide privacy policy copy. /privacy/ is not a live page #medium
- [ ] Provide terms copy. /terms/ is not a live page #medium
- [ ] Provide testimonials if they should appear on the site. None are published today #low
- [ ] Grant Google Business Profile access for Fernway by Stories, Mayaganahalli #medium
- [ ] Grant domain and DNS access for fernwaybystories.com before hosting is relinked #high
## Features to build
## Content
- [ ] Add a /privacy/ page only after the client supplies the policy text. Do not invent legal copy #medium
- [ ] Add a /terms/ page only after the client supplies the terms text. Do not invent legal copy #medium
## Performance & accessibility
- [ ] ESLint 10.11 failed: eslint-plugin-react still calls contextOrFilename.getFilename. The site stayed on ESLint 9.39.5 #low
- [ ] TypeScript 7.0.2 built, but typescript-eslint only allows TypeScript below 6.1. The site stayed on TypeScript 6.0.3 #low
- [ ] Small gold labels on dark heroes (#CC9921 on #2C3669) are about 4.4:1, just under 4.5 for small text. Gold on cream was darkened #low
## Launch & infra
- [ ] Merge and deploy refresh-2026 after review. Production must stay on main until then #high
- [ ] Relink Hostinger to theflauxmedia2/fernwaybystories.com and keep the production branch as main #high
- [ ] Confirm the Node version to pin in engines and .nvmrc. Hostinger serves static files and does not run Node. This refresh built on Node v24.17.0 #medium
- [ ] Verify Google Search Console for fernwaybystories.com and submit https://fernwaybystories.com/sitemap.xml #medium
- [ ] Decide whether to add GA4. No analytics ID is in the codebase. Do not add one without the client #medium
- [ ] On production, test the events enquiry. It opens WhatsApp to +91 96069 19636 and does not send email #medium
- [ ] On production, test Reserve a Table. It opens the existing ReserveGo link and must not be retargeted #medium
- [ ] Add uptime monitoring for https://fernwaybystories.com/ #low
