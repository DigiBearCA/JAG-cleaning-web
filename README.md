# JAAG Contracting & Constructions website

The marketing website for a commercial cleaning and contracting company in Edmonton, Alberta. Visitors can learn about the services and request a free quote by form, phone, or WhatsApp.

**Live site:** https://jaag-cleaning-web.vercel.app (this address changes when the custom domain goes live; the current address is set in `src/config/site.ts`).

## Contents

1. [What this is](#what-this-is)
2. [Tech at a glance](#tech-at-a-glance)
3. [Quick start](#quick-start)
4. [Project structure](#project-structure)
5. [Where do I change...?](#where-do-i-change)
6. [How the quote form works](#how-the-quote-form-works)
7. [Design system in brief](#design-system-in-brief)
8. [Content rules](#content-rules)
9. [SEO and AI visibility](#seo-and-ai-visibility)
10. [Deploying](#deploying)
11. [Quality checks](#quality-checks)
12. [Conventions](#conventions)
13. [Troubleshooting and FAQ](#troubleshooting-and-faq)
14. [Glossary](#glossary)

---

## What this is

A fast, static website for a local business. It explains what the company does, who it works with, and makes it easy to ask for a quote. There are no user accounts and no database; the only server code is the quote form handler.

| Page | Address | What it shows |
|---|---|---|
| Main page | `/` | Hero, who we work with, how it works, why choose us, FAQ, quote form |
| Services | `/services` | All services grouped into chapters; each card opens a detail overlay |
| Contact | `/contact` | Phone, WhatsApp, email, hours, service area, business details, quote form, map |
| Privacy Policy | `/privacy-policy` | How form data is handled |
| Terms | `/terms` | Terms of service |

A custom "page not found" screen covers any other address.

## Tech at a glance

| Part | Choice |
|---|---|
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 with theme tokens in `src/app/globals.css` and `src/styles/palettes.css` |
| Animation | `motion` library plus plain CSS animations |
| Email delivery | EmailJS REST API (no SDK) |
| Hosting | Vercel |
| Node.js | 20 or newer (developed on 22) |

## Quick start

You need [Node.js](https://nodejs.org) installed. Open a terminal in the project folder and run:

| Command | What it does |
|---|---|
| `npm install` | Downloads the packages the site needs. Run once, and again after `package.json` changes. |
| `npm run dev` | Starts a local copy at http://localhost:3000 that refreshes as you edit. |
| `npm run build` | Builds the production version and reports any errors. |
| `npm run start` | Serves the production build locally (run `build` first). |
| `npm run lint` | Checks the code for common mistakes. |
| `npx tsc --noEmit` | Checks that all TypeScript types are correct. |
| `npm run indexnow -- https://your-live-domain` | Tells search engines that pages changed (see [SEO](#seo-and-ai-visibility)). |

**Environment variables:** copy `.env.example` to a new file named `.env.local` and fill in the four EmailJS values. Without them the form still works locally: submissions are printed in the terminal instead of emailed.

## Project structure

```
.
├── .env.example              Template for the EmailJS keys (copy to .env.local)
├── eslint.config.mjs         Lint rules
├── next.config.ts            Security headers and permanent redirects for old links
├── package.json              Scripts and dependencies
├── postcss.config.mjs        Connects Tailwind CSS
├── tsconfig.json             TypeScript settings (strict)
├── public/
│   └── <32-character key>.txt  IndexNow key file (must stay at the site root)
├── scripts/
│   └── indexnow.mjs          Pings IndexNow with every URL in the live sitemap
└── src/
    ├── app/                  One folder per page; Next.js turns these into routes
    │   ├── layout.tsx        Shared shell: fonts, header, footer, site-wide metadata
    │   ├── page.tsx          Main page
    │   ├── globals.css       Theme tokens: fonts, radii, type scale, animations
    │   ├── not-found.tsx     "Page not found" screen
    │   ├── opengraph-image.tsx  The preview image shown when a link is shared
    │   ├── robots.ts         Generates /robots.txt
    │   ├── sitemap.ts        Generates /sitemap.xml
    │   ├── icon.svg, icon.png, apple-icon.png  Browser and phone icons
    │   ├── api/quote/route.ts   Receives the quote form and sends the email
    │   ├── contact/page.tsx
    │   ├── services/page.tsx
    │   ├── privacy-policy/page.tsx
    │   └── terms/page.tsx
    ├── components/
    │   ├── forms/QuoteForm.tsx   The quote form (validation, states, submit)
    │   ├── layout/           Header, mobile menu, footer, logo, sticky contact bar, skip link
    │   ├── motion/           Entrance animations, scroll reveals, welcome intro
    │   ├── sections/         Page sections (hero, FAQ, quote, contact details, legal page...)
    │   │   └── services/     Services page parts: chapter bands, cards, detail overlay, grid spans
    │   ├── seo/JsonLd.tsx    Prints structured data into the page safely
    │   ├── ui/               Small building blocks: button, chip, card, accordion, form fields
    │   ├── icons/            Hand-drawn SVG icon set and the brand logo (e.g. icons.tsx)
    │   └── illustrations/    Flat SVG scenes used in cards (e.g. OfficeScene.tsx)
    ├── config/
    │   ├── site.ts           Every business fact: name, phone, email, hours, URL, socials, cities
    │   └── images.ts         Which photo goes where, with its alt text
    ├── content/              All page text, kept apart from layout code
    │   ├── home.ts, contact.ts, faq.ts, legal.ts, navigation.ts
    │   ├── services.ts       The list of services, their order, and their details
    │   └── types.ts          Shapes of the content objects
    ├── images/               Photos (WebP), imported by src/config/images.ts
    ├── lib/                  Helpers: metadata, structured data, quote validation,
    │                         email delivery, rate limiting, contact links, class names
    └── styles/palettes.css   Colour palettes A and B
```

## Where do I change...?

| I want to change... | Edit this | What it affects |
|---|---|---|
| Phone, WhatsApp, email, hours | `src/config/site.ts` | Header, footer, Contact page, sticky bar, structured data |
| Website address (domain) | `SITE.url` in `src/config/site.ts` | Canonical links, sitemap, robots.txt, share previews, structured data |
| Street address, map | `SITE.address` and `SITE.showAddressText` | Contact page text and map |
| Cities served | `SITE.serviceCities` | Contact page "Business details" and structured data `areaServed` |
| Social links | `SITE.social` | Footer icons; real (non-placeholder) URLs also go into structured data |
| Search Console / Bing tokens | `SITE.verification` | Verification meta tags (empty = not printed) |
| Allow or block search engines | `SITE.indexable` | `noindex` meta and robots.txt |
| Page text and FAQs | `src/content/*.ts` | The matching page |
| Services, their order, details | `src/content/services.ts` | Services page, footer list, quote form dropdown, structured data |
| Photos | Add to `src/images/`, then update `src/config/images.ts` | The matching image and its alt text |
| Colours | `src/styles/palettes.css`; switch with `SITE.palette` (`"a"` or `"b"`) | Whole site |
| Page titles and descriptions | `HOME_META` in `src/content/home.ts`, `CONTACT_META` in `src/content/contact.ts`, `src/app/services/page.tsx`, `src/content/legal.ts` | Browser tab, search results, share previews |
| Redirects for old links | `redirects()` in `next.config.ts` | Old addresses that should forward |
| Quote form fields and limits | `src/lib/quote-validation.ts` | Form and server checks (both use the same rules) |
| IndexNow key | Replace the `.txt` file in `public/` (name and content must match) | IndexNow pings |

## How the quote form works

1. The visitor fills in `QuoteForm`. Fields are checked in the browser using the rules in `src/lib/quote-validation.ts`.
2. The form posts JSON to `/api/quote` (`src/app/api/quote/route.ts`).
3. The server checks again with the same rules, then sends the email through EmailJS (`src/lib/deliver-quote.ts`).

**Environment variables** (server only, never prefixed with `NEXT_PUBLIC_`): `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`, `EMAILJS_PRIVATE_KEY`. In the EmailJS dashboard, enable "Allow EmailJS API for non-browser applications" and "Use Private Key".

**Spam and abuse protection:** a hidden honeypot field (bots fill it, the server quietly drops the request), a same-site origin check, a 10 KB body limit, and a rate limit of 5 requests per visitor per 10 minutes (`src/lib/rate-limit.ts`; it resets when the server restarts, so treat it as a burst guard).

**When it is not configured:** in development the quote is printed in the terminal and the form shows success. In production the form shows a message asking the visitor to call or use WhatsApp.

## Design system in brief

**Palettes** (switch with `SITE.palette`; values in `src/styles/palettes.css`):

| Role | A: Evergreen and sunrise (default) | B: Moss and lagoon |
|---|---|---|
| Background | `#f7f9fa` | `#f7f9fa` |
| Primary | `#12403a` | `#2b3a1f` |
| Accent | `#f2a93b` | `#f2a93b` |
| Text | `#1f2b2e` | `#0f1f1a` |
| Alternate section | `#d8ecee` | `#0a4e68` |
| Dark section / footer | `#12403a` | `#2b3a1f` |

**Fonts:** Newsreader (headings, weight 500) and DM Sans (body, 400 and 500), loaded through `next/font`.

**Type scale:** H1 36px (48px on large screens), H2 28px (36px), H3 22px (24px), H4 20px, lead 18px, body 16px, small 14px, caption 12px. Use the `type-*` classes, never raw sizes.

**Shapes:** buttons, chips, and inputs are pills (`rounded-pill`). Cards use 24px corners (`rounded-card`), large panels 32px (`rounded-panel`), menus 16px.

**Spacing:** sections use 48px vertical padding on mobile and 64px from 768px; containers have 16px side padding on mobile and 24px from 768px.

**Icons and illustrations:** custom inline SVG only, drawn in the palette colours. No icon libraries and no stock illustration packs.

**Motion:** short, calm, and purposeful, all using the brand easing curve (`ease-brand`). Every animation respects the visitor's "reduce motion" setting. Animate transforms and opacity only.

## Content rules

- **Voice:** plain, direct, friendly. Short sentences. Talk to the reader ("you").
- **Claims:** only state confirmed facts: free quotes, insured, brings its own supplies and equipment, open 24/7. No prices, reviews, ratings, awards, or "years in business" unless the business confirms them, and never in structured data unless they are visible on the page.
- **Language policy:** the site is positioned as commercial-first. Do not use these words in visible text: home, homes, homeowner(s), house(s), household(s), domestic, home page, homepage. The only exception is the "Home" navigation link. A local check script scans the built pages for them (it is kept out of the repository).
- **One source of truth:** business facts live in `src/config/site.ts` only. Never type the phone, email, or domain anywhere else.

## SEO and AI visibility

**What the code does**

| Area | What happens | Where |
|---|---|---|
| Metadata | Every page has its own title, description, canonical link, Open Graph and Twitter tags, built by one helper so no page can miss a field | `src/lib/metadata.ts`, each `page.tsx` |
| Snippets | Indexable pages allow full snippets and large image previews (`max-snippet:-1`, `max-image-preview:large`) | `src/app/layout.tsx` |
| Verification | Google and Bing verification tags, printed only when the tokens are filled in | `SITE.verification` |
| robots.txt | Allows every crawler, including AI search and training bots; blocks `/api/`; points to the sitemap. Blocks everything while `SITE.indexable` is false | `src/app/robots.ts` |
| Sitemap | Lists the five pages. No fake "last modified" dates | `src/app/sitemap.ts` |
| Structured data | One connected graph per page: the business (`HomeAndConstructionBusiness`, a kind of `LocalBusiness`) with cities served, hours, phone, email, and real social profiles; the website; the page (`ContactPage` on Contact); a breadcrumb on inner pages; every service on `/services`; the FAQ on the main page. No street address, prices, or reviews | `src/lib/structured-data.ts`, `src/components/seo/JsonLd.tsx` |
| Server-rendered content | All text, including the closed service overlays and FAQ answers, is in the HTML sent by the server, so crawlers that do not run JavaScript still see it | All pages |
| Consistent facts | The business name, cities, hours, and contact details shown on the Contact page "Business details" block match the structured data exactly | `src/components/sections/ContactDetails.tsx` |
| IndexNow | Key file at the site root and a script that sends every sitemap URL to IndexNow | `public/*.txt`, `scripts/indexnow.mjs` |

**After each production deploy (optional):** `npm run indexnow -- https://your-live-domain`

**After deploying, test the live pages** in Google's [Rich Results Test](https://search.google.com/test/rich-results) and the [Schema Markup Validator](https://validator.schema.org).

**Owner checklist (things code cannot do)**

1. Create and verify a **Google Business Profile**. Set it up as a service-area business if the address stays private; add every service, the cities served, hours (24/7 if confirmed), phone, website, and the exact same business name as the site.
2. Verify the site in **Google Search Console** and **Bing Webmaster Tools**, paste the tokens into `SITE.verification`, and submit `/sitemap.xml` in both.
3. Keep the business name, phone, and hours **identical** everywhere: website, Google Business Profile, Facebook, Instagram, and every directory.
4. List the business in directories and maps (Bing Places, Apple Business Connect, Facebook, local directories) with the same facts.
5. Collect **real, specific reviews** on Google and other platforms. Never fake them, and never add reviews to structured data unless they are shown on the page.
6. In Vercel, check the Firewall and bot protection settings so the crawlers allowed in robots.txt are not blocked by an "AI bots" rule.
7. After launch, ask ChatGPT, Gemini, Perplexity, and Claude questions such as "commercial cleaning company in Edmonton" and note which sources they cite; it shows what to improve next.
8. Replace the placeholder Instagram and Facebook links in `SITE.social` and confirm the list in `SITE.serviceCities`.

## Deploying

Vercel builds and deploys automatically on every push to `main`. Preview deployments are created for other branches.

1. **Environment variables:** in Vercel, open the project, then Settings, then Environment Variables, and add the four `EMAILJS_*` values for Production (and Preview if you want the form to send from previews).
2. **Custom domain:** in Vercel, open Settings, then Domains, and add the domain. Follow the DNS instructions. Then set `SITE.url` in `src/config/site.ts` to the new address (no trailing slash), commit, and push. Choose one main host (`www` or the bare domain) and let Vercel redirect the other.
3. **`.vercel.app` address:** once the custom domain works, redirect the `.vercel.app` address to it in Vercel so search engines see one site.
4. **`SITE.indexable`:** `true` lets search engines index the site; `false` adds `noindex` everywhere and blocks all crawlers in robots.txt. Only set it to `true` when every placeholder that matters is replaced.

## Quality checks

Run before every push:

```
npm run lint
npx tsc --noEmit
npm run build
```

All three must finish without errors or warnings. Performance targets: Lighthouse mobile Performance 90 or higher on `/`, `/services`, and `/contact`, Accessibility and SEO 100, and no layout shift (CLS 0).

## Conventions

- **TypeScript is strict:** no `any`, no `!` non-null assertions, no `@ts-ignore`.
- **Styling:** Tailwind theme utilities only. No raw hex colours outside `src/styles/palettes.css`, `src/app/icon.svg`, and `src/app/opengraph-image.tsx`.
- **Server components by default.** Add `"use client"` only for interactivity (forms, menus, animations).
- **Where new code goes:** page text in `src/content/`, business facts in `src/config/site.ts`, page sections in `src/components/sections/`, reusable pieces in `src/components/ui/`, helpers in `src/lib/`.
- **No new dependencies** without a clear reason; prefer native browser and platform features.

## Troubleshooting and FAQ

**The quote form says requests are not set up.** The EmailJS variables are missing in Vercel. Add all four and redeploy.

**I changed the phone number but the old one still shows.** Check that you edited `src/config/site.ts`, committed, and pushed, then wait for Vercel to finish the deploy. Hard-refresh the browser.

**The site does not appear in Google.** Check that `SITE.indexable` is `true`, verify the site in Search Console, and submit the sitemap. New sites can take days to weeks to appear.

**`npm run build` fails.** Read the first error in the output; it names the file and line. Type errors usually mean a content object is missing a field.

**How do I switch colours?** Set `palette` in `src/config/site.ts` to `"a"` or `"b"`.

**Where are the old service page addresses?** `/services/residential-cleaning`, `/services/commercial-cleaning`, and `/services/snow-removal` permanently redirect to the matching section of `/services` (see `next.config.ts`).

## Glossary

| Term | Meaning |
|---|---|
| Build | Turning the source code into the optimised files that are actually served |
| Canonical | The one official address of a page, so search engines do not count copies twice |
| Crawler / bot | A program that reads websites for a search engine or AI service |
| Deploy | Publishing a new build to the live site |
| Environment variable | A secret or setting stored outside the code (for example the EmailJS keys) |
| IndexNow | A way to tell Bing and other search engines that pages changed |
| JSON-LD / structured data | Machine-readable facts about the business added to each page for search engines |
| Lint | An automatic check for common code mistakes |
| Metadata | The page title, description, and share-preview information |
| robots.txt | A file telling crawlers which parts of the site they may read |
| SEO | Search engine optimisation: making the site easy for search engines to find and understand |
| Sitemap | A list of every page address for search engines |