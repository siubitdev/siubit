# siubit.dev

Static bilingual site (English at `/`, Chinese at `/zh-hk/`) built with Astro.

## Commands

- `npm install` — install dependencies
- `npm run dev` — local preview at http://localhost:4321
- `npm run build` — build the site into `dist/`

## Where things are

- `src/i18n/ui.ts` — all page copy in both languages, plus email, handles and WhatsApp number
- `src/content/work/<lang>/*.md` — case studies; fill in `result` to show an outcome line
- `src/components/Home.astro` — home page sections
- `src/layouts/Base.astro` — head, header, footer
- `src/styles/global.css` — colours, type, layout

## Deploy to Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Framework preset: Astro. Build command `npm run build`, output directory `dist`. Node 22.
4. After the first build, Custom domains → add `siubit.dev` (and `www.siubit.dev`).

Or deploy from a terminal without Git: `npm run build && npx wrangler pages deploy`.

## Email: catch-all

The site shows `ahbit@siubit.dev`. In Cloudflare: domain → Email → Email Routing → Enable
(accept the MX/SPF records it adds), then Routing rules → Catch-all address → Send to an email →
your inbox → Active. Verify the destination address from the email Cloudflare sends.
Optionally add a custom address `ahbit` pointing to the same inbox.
