# Bandaru Nithinkumar — Portfolio

Premium developer portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Production-ready for **Vercel** deployment.

## Features

- Dark-mode glass UI with refined typography and motion
- Sticky floating navbar with scroll-spy active state
- Hero with typing roles, magnetic CTAs, and illustration
- Project cards with expandable detail modals (architecture, features, challenges, results)
- Live GitHub profile, repos, language stats, and contribution graph
- Contact form with validation, loading/success states, and copy-email
- Full SEO: metadata, Open Graph, Twitter cards, robots, sitemap, manifest, JSON-LD
- Accessibility: skip link, landmarks, focus states, reduced motion
- Performance: dynamic imports, image optimization, asset caching headers
- Vercel Analytics

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Shadcn-style UI primitives (Radix)
- Lucide React + React Icons
- EmailJS
- Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical site URL for SEO |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Optional | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Optional | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Optional | EmailJS public key |
| `GITHUB_TOKEN` | Optional | Raises GitHub API rate limits |

Without EmailJS keys, the contact form still works in local demo mode and shows a success state.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

### Lint & Typecheck

```bash
npm run lint
npm run typecheck
```

### Optimize Assets

```bash
npm run optimize:assets
```

## Deploy on Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Add environment variables from `.env.example`
4. Deploy — the default build command `next build` is used automatically

Replace `public/resume.pdf` with your real resume before shipping.

Update `SITE_CONFIG.url` in `src/constants/site.ts` if your production domain differs.

## Project Structure

```
src/
  app/           # Layout, page, SEO routes, GitHub API
  components/    # UI primitives, layout, shared, illustrations
  constants/     # Site config, content, projects, skills
  hooks/         # Client hooks
  lib/           # Utilities, email, GitHub, motion
  sections/      # Page sections
  types/         # Shared TypeScript types
public/          # Static assets, resume, project images
```

## License

Personal portfolio — all rights reserved.
