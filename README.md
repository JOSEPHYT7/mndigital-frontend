# M&N Digital – Frontend

React (Vite) frontend for [M&N Digital](https://mndigital.com). Dark theme (navy #0F172A, orange #F97316), Framer Motion animations, React Helmet for SEO.

## Stack

- **React 19** + **Vite 7**
- **Tailwind CSS v4** (@tailwindcss/vite)
- **Framer Motion** – animations
- **React Helmet Async** – meta tags, Open Graph, Twitter Card
- **React Router** – routing with lazy-loaded pages

## Setup

```bash
npm install --legacy-peer-deps
```

Create `.env` from `.env.example` and set `VITE_API_URL` to your backend (e.g. `http://localhost:5000` for local, `https://api.mndigital.com` for production).

## Scripts

- **Dev:** `npm run dev` (or `node node_modules/vite/bin/vite.js` if `npm run dev` fails in paths with `&`)
- **Build:** `npm run build` (or `node node_modules/vite/bin/vite.js build`)
- **Preview:** `npm run preview`

## Structure

- `src/components` – Layout, Nav, Footer, Button, PageMeta
- `src/pages` – Home, Services, ServiceDetail, Pricing, About, Contact, Privacy, Terms
- `src/data/services.js` – Service list and detail copy
- `src/utils/indexNow.js` – IndexNow API helper (call after publishing new content)
- `public/` – favicon.svg, robots.txt, sitemap.xml, IndexNow key file

## SEO

- Per-page `<title>` and `<meta name="description">` via React Helmet
- Open Graph and Twitter Card tags on all pages
- `public/sitemap.xml` – all main URLs
- `public/robots.txt` – allows crawlers, references sitemap
- **IndexNow:** Key file at `/mndigitalkey123.txt`. Use `notifyIndexNow(['https://mndigital.com/new-page'])` when you add or update pages.

## Deployment (Vercel)

1. Connect the repo to Vercel.
2. Set env: `VITE_API_URL=https://api.mndigital.com`
3. Add domain: `www.mndigital.com` (and optionally `mndigital.com`).

Build command: `npm run build` (or `node node_modules/vite/bin/vite.js build` if needed). Output: `dist`.
