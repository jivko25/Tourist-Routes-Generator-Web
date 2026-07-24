# Travel Go (Next.js)

Landing page for **Travel Go**, rewritten from the Figma Make export to Next.js App Router with SSR, SEO, and GEO (AI / answer-engine) optimization.

## Develop

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL
npm run dev
```

## Build

```bash
npm run build && npm start
```

## SEO & GEO

- Server-rendered homepage (App Router)
- Metadata, Open Graph / Twitter cards, canonical URLs
- `robots.txt` + `sitemap.xml` (AI crawlers allowed)
- JSON-LD: Organization, WebSite, SoftwareApplication, HowTo, FAQPage
- `/llms.txt` for assistants
- FAQ section with answer-first copy

Original Figma export remains in `Design Travel Go Landing Page/` for reference.
