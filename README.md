# Capital Advisors — Next.js Template

A modern, multi-page Next.js website template designed for investment firms, capital advisors, and financial services companies. Features a polished green-and-gold color scheme with clean typography, scroll-reveal animations, and a professional corporate aesthetic.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** CSS (global stylesheet with CSS custom properties)
- **Font:** Inter (Google Fonts)
- **Animations:** Intersection Observer scroll-reveal

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, stats, services, industries, case studies, approach, insights, CTA |
| `/about` | About — editorial split, why-us section, team grid with profile links |
| `/about/meet-team/[name]` | Individual team member profile pages (3 members) |
| `/services` | Services — customized financing and financial advisory detail pages |
| `/industries` | Industries — senior housing, education, healthcare, plus additional sectors |
| `/case-studies` | Case studies index — featured work with detail pages |
| `/case-studies/[slug]` | Individual case study detail page (3 with full detail) |
| `/insights` | Insights — market commentary, transaction announcements, perspectives archive |
| `/contact` | Contact — form, office info, contact cards, expectations |

## Project Structure

```
captial-invest/
├── app/
│   ├── about/
│   │   ├── meet-team/
│   │   │   ├── jane-mitchell/page.tsx
│   │   │   ├── robert-chen/page.tsx
│   │   │   └── sarah-williams/page.tsx
│   │   └── page.tsx
│   ├── case-studies/
│   │   ├── [slug]/page.tsx
│   │   ├── data.ts
│   │   └── page.tsx
│   ├── components/
│   │   ├── RevealOnScroll.tsx
│   │   ├── SiteFooter.tsx
│   │   └── SiteNav.tsx
│   ├── contact/page.tsx
│   ├── industries/page.tsx
│   ├── insights/page.tsx
│   ├── services/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/assets/clients/    ← Client logo images
├── package.json
└── tsconfig.json
```

## Design Tokens

Key CSS custom properties defined in `globals.css`:

| Token | Color | Usage |
|---|---|---|
| `--green-deep` | `#395f40` | Headlines, primary buttons, footer background |
| `--green-mid` | `#2f4f35` | Hover states, links |
| `--green-surface` | `#f2f5f3` | Card backgrounds |
| `--gold` | `#b8943f` | Accent text, icons, labels |
| `--gold-light` | `#d4b96a` | On-dark accent |
| `--text-primary` | `#1a1d1b` | Body text |
| `--text-secondary` | `#5a615d` | Supporting copy |

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization Guide

**Branding:** Replace "Capital Advisors" across files with your firm name. Key locations:
- `app/layout.tsx` — metadata title/description
- `app/components/SiteNav.tsx` — `.nav-logo-text` and link text
- `app/components/SiteFooter.tsx` — company name, address, phone

**Colors:** Edit CSS custom properties in `app/globals.css` lines 29-41 (the `:root` block).

**Content:** Each page is a standalone React component. Edit the copy, images, and data directly in the respective `page.tsx` files.

**Team:** Edit the `teamMembers` array in `app/about/page.tsx` and update individual profile pages under `app/about/meet-team/`.

**Case Studies:** Edit `app/case-studies/data.ts` to add, remove, or modify case study entries.

**Contact:** Replace placeholder phone, address, and Google Maps link in `app/contact/page.tsx`.

## License

This template is provided for use in themedown projects.
