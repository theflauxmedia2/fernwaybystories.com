# Journal posts

One file per post: `content/blog/<slug>.json`. Commit it to `main` and the `deploy` workflow builds the site and
publishes it (Hostinger serves the `hostinger` branch). No other file needs changing: the post page, the /blog list,
the sitemap and structured data all pick it up.

Copy an existing post and change:

- `slug` — must equal the file name (without `.json`); becomes `/blog/<slug>/`.
- `title`, `heroTitle` (short hero words), `description` (search snippet, ~155 characters).
- `datePublished` — `YYYY-MM-DD`. Newest posts show first.
- `image` (a file under `public/`, e.g. `/ambience/15.webp`) and `imageAlt`.
- `keywords` — a list of phrases.
- `sections` — each `{ "heading": "…", "paragraphs": ["…"], "list": ["…"] }` (`list` optional).

Facts that can change are written as placeholders, filled in from `lib/site.ts` at build time:
`{{hoursDisplay}}`, `{{address}}`, `{{phone}}`, `{{fridayJam}}`, `{{saturdayBand}}`.
A typo in a placeholder, a missing field or a slug/file mismatch fails the build, so a broken post never goes live.
