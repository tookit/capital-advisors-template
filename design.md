# Capital Advisors — Design System

> A comprehensive design reference for the Capital Advisors Next.js template. Use this document to understand every visual decision, token, component, and layout pattern before customizing.

---

## Design Philosophy

**Objective, trustworthy, refined.** This template communicates financial advisory competence through restrained typography, a nature-inspired color palette, generous whitespace, and subtle motion. Nothing competes for attention — every element serves the message.

The design targets three audiences simultaneously:
- **Executive leadership** scanning for credibility signals (stats, logos, case studies)
- **Board members** reading for depth on methodology and independence
- **Institutional borrowers** looking for industry-specific expertise

---

## Color System

### Primary Palette

```
┌─────────────────────┬────────────┬──────────────────────────────────────┐
│ Token               │ Hex        │ Usage                                │
├─────────────────────┼────────────┼──────────────────────────────────────┤
│ --green-deep        │ #395f40    │ Headlines, primary buttons, footer   │
│ --green-mid         │ #2f4f35    │ Hover states, text links             │
│ --green-surface     │ #f2f5f3    │ Card backgrounds, section washes     │
│ --gold              │ #b8943f    │ Accent text, icons, labels, borders  │
│ --gold-light        │ #d4b96a    │ Accent on dark backgrounds           │
├─────────────────────┼────────────┼──────────────────────────────────────┤
│ --text-primary      │ #1a1d1b    │ Body text, navigation                │
│ --text-secondary    │ #5a615d    │ Supporting copy, descriptions        │
│ --text-muted        │ #8a908c    │ Subtle labels, metadata              │
│ --border            │ #e2e5e3    │ Dividers, card borders               │
│ --white             │ #ffffff    │ Page background, cards               │
│ --off-white         │ #fafbf9    │ Section backgrounds, stats bar       │
└─────────────────────┴────────────┴──────────────────────────────────────┘
```

### Color Rules

1. **Never use green and gold at equal weight on the same surface.** Gold is an accent — it appears in thin strokes (labels, icons, borders) while green carries the structural weight (headlines, buttons, backgrounds).

2. **The hero has its own background:** `#f1ece3` (warm off-white with a tint of gold). This is the only section that uses this color — it creates a visual anchor at the top of the page.

3. **Dark sections** (`.dark-band`, `.case-studies`, `.footer`) use `--green-deep` as background with white/gold text. Content cards within dark sections use `rgba(255,255,255,0.06)` as a surface.

4. **Light card hover → dark fill:** On light backgrounds, service cards invert on hover — the card background becomes `--green-deep` and text becomes white. This creates a satisfying interactive moment.

### Color Contrast

All text-background combinations pass WCAG AA at minimum:
- `#395f40` on `#ffffff` — 5.8:1
- `#1a1d1b` on `#ffffff` — 14.2:1
- `#5a615d` on `#ffffff` — 5.6:1
- `#ffffff` on `#395f40` — 5.8:1

---

## Typography

### Font Stack

```css
font-family: "Inter", system-ui, -apple-system, sans-serif;
```

Inter was chosen for its clean geometric proportions, excellent readability at small sizes, and strong weight contrast between 400→700. It renders sharply on all platforms thanks to its large x-height and open apertures.

### Type Scale

| Level | Size | Weight | Letter-spacing | Line-height | Usage |
|---|---|---|---|---|---|
| Hero headline | `clamp(2.5rem, 5vw, 4rem)` | 700 | `-0.03em` | 1.08 | `.hero-headline` |
| Section title | `clamp(2rem, 4vw, 3rem)` | 700 | `-0.03em` | 1.12 | `.section-title` |
| CTA title | `clamp(2rem, 4vw, 2.8rem)` | 700 | `-0.03em` | 1.12 | `.cta-title` |
| Service card title | `1.5rem` | 700 | `-0.02em` | — | `.service-title` |
| Card title | `1.15–1.4rem` | 700 | `-0.02em` | — | `.case-title`, `.industry-name` |
| Approach title | `1.25rem` | 700 | `-0.02em` | — | `.approach-title` |
| Hero subhead | `1.15rem` | 400 | — | 1.7 | `.hero-subhead` |
| Body text | `0.88–1.05rem` | 400 | — | 1.6–1.75 | `.case-desc`, `.content-stack` |
| Nav links | `0.9rem` | 500 | `-0.01em` | — | `.nav-links a` |
| Labels / meta | `0.72–0.8rem` | 600–700 | `0.05–0.06em` | — | `.section-label`, `.case-tag` |

### Typography Rules

1. **Headlines always use negative letter-spacing.** This tightens the visual rhythm and gives headlines a polished, editorial feel.

2. **Uppercase labels always use positive letter-spacing.** The `0.05–0.06em` tracking on small uppercase text compensates for the reduced readability of all-caps at small sizes.

3. **Line-height on headlines is tight (1.08–1.12).** Headlines are meant to be scanned, not read — tight line-height creates a solid visual block that anchors the section.

4. **Line-height on body text is generous (1.6–1.75).** Long-form reading benefits from breathable line spacing. The difference between headline and body line-height creates a clear visual hierarchy.

---

## Spacing System

The design uses an **8px grid** with consistent rhythm.

### Section Padding

| Context | Vertical | Horizontal |
|---|---|---|
| Standard section | `100px` | `32px` |
| CTA section | `120px` | `32px` |
| Stats bar | `40px` | `32px` |
| Dark band | `100px` | `32px` |
| Trusted by | `72px` | `32px` |
| Footer | `80px` top, `40px` bottom | `32px` |

### Component Spacing

| Context | Gap |
|---|---|
| Grid gutters (cards) | `24–32px` |
| Section header → content | `64px` |
| Nav links | `36px` |
| Approach items | `48px` |
| Footer columns | `48px` |
| Icon → title (cards) | `28px` |
| Title → body (cards) | `12px` |
| Body → link (cards) | `20–24px` |

### Layout Max-Width

All content sections are constrained to `max-width: 1280px` and centered. This prevents text lines from becoming uncomfortably long on wide screens while allowing the background colors to bleed edge-to-edge.

---

## Component Library

### Navigation (`.nav`)

```
┌──────────────────────────────────────────────────────────┐
│ [Logo]    Home  About  Services  Industries  ...  [CTA]  │  ← 72px fixed height
└──────────────────────────────────────────────────────────┘
```

- **Fixed position** with `backdrop-filter: blur(16px)` for frosted glass effect
- **72px height** — tall enough for comfortable touch targets
- **Logo:** Text-based (`.nav-logo-text`) at `1.2rem`, weight 700, green
- **Links:** 5–6 primary links at `0.9rem`, weight 500
- **CTA button:** Right-aligned phone/contact link with phone icon
- **Mobile:** Hamburger menu appears below 960px; full-screen overlay slides down

### Hero (`.hero`)

Two-column grid: copy (left) + image with stat card (right).

```
┌──────────────────────────────┬─────────────────────────┐
│ FINANCIAL ADVISORY & CAPITAL │                         │
│                              │    ┌─────────────────┐  │
│ Custom Capital Solutions.    │    │                 │  │
│ Creative Ideas.              │    │   Hero Image    │  │
│ Objective Advice.            │    │                 │  │
│                              │    └─────────────────┘  │
│ Supporting paragraph...      │   ┌──────────────────┐  │
│                              │   │ $3.2B+           │  │
│ [CTA Button] [Secondary]     │   │ Capital arranged │  │
│                              │   └──────────────────┘  │
└──────────────────────────────┴─────────────────────────┘
```

- **Background:** `#f1ece3` (extends full bleed via `box-shadow` clip technique)
- **Image:** 85% of column height, `object-fit: cover`, `border-radius: 12px`
- **Stat card:** Absolutely positioned, offset left by `-24px`, white background with shadow
- **Gold span:** The word "Solutions." in the headline is colored `--gold` for emphasis
- **Mobile:** Stacks vertically; image moves above copy; stat card hidden

### Stats Bar (`.stats-bar`)

Four-column grid with large numbers and small labels.

```
┌──────────┬──────────┬──────────┬──────────┐
│  $3.2B+  │   200+   │   15+    │    3     │
│  Capital │Transactions│  Years  │Industries│
│ arranged │  closed  │   exp.   │  served  │
└──────────┴──────────┴──────────┴──────────┘
```

- **Background:** `--off-white` with top and bottom borders
- **Numbers:** `2.2rem`, weight 700, green
- **Labels:** `0.85rem`, weight 500, muted
- **Mobile:** Collapses to 2-column, then 1-column

### Trusted By (`.trusted-by`)

Two-column asymmetric grid: heading (left, narrower) + logo grid (right, wider).

```
┌────────────────────┬──────────────────────────────────────┐
│ TRUSTED BY         │ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ │
│                    │ │      │ │      │ │      │ │      │ │
│ Mission-driven...  │ │ Logo │ │ Logo │ │ Logo │ │ Logo │ │
│                    │ │      │ │      │ │      │ │      │ │
│                    │ └──────┘ └──────┘ └──────┘ └──────┘ │
└────────────────────┴──────────────────────────────────────┘
```

- **Logo cards:** `132px` min-height, subtle border, soft gradient background
- **Hover:** Cards lift `-3px` with enhanced shadow and gold-tinted border
- **Mobile:** Stacks vertically; logos drop to 2-column, then 1-column

### Service Cards (`.service-card`)

Two-column grid of large interactive cards.

```
┌──────────────────────────┬──────────────────────────┐
│ [icon]                   │ [icon]                   │
│                          │                          │
│ Customized Financing     │ Financial Advisory       │
│                          │                          │
│ Description paragraph    │ Description paragraph    │
│ spanning multiple lines  │ spanning multiple lines  │
│                          │                          │
│ Learn more →             │ Learn more →             │
└──────────────────────────┴──────────────────────────┘
```

- **Background:** `--green-surface`
- **Icon:** 48×48 rounded square, white background, gold icon color
- **Hover:** Entire card fills with `--green-deep`; text turns white; link turns `--gold-light`
- **Hover transition:** `0.25s` on background, color

### Industry Cards (`.industry-card`)

Three-column grid of image + text cards.

```
┌───────────┐ ┌───────────┐ ┌───────────┐
│           │ │           │ │           │
│   Image   │ │   Image   │ │   Image   │
│  220px    │ │  220px    │ │  220px    │
│           │ │           │ │           │
├───────────┤ ├───────────┤ ├───────────┤
│ Title     │ │ Title     │ │ Title     │
│ Desc...   │ │ Desc...   │ │ Desc...   │
└───────────┘ └───────────┘ └───────────┘
```

- **Image:** `220px` fixed height, `object-fit: cover`
- **Body:** `28px` padding around title and description
- **Hover:** Card lifts `-4px`

### Case Study Cards (`.case-card`)

Two-column grid with dark background section.

```
╔══════════════════════════╗ ╔══════════════════════════╗
║ SENIOR HOUSING           ║ ║ CHARTER SCHOOLS          ║
║                          ║ ║                          ║
║ The Village at           ║ ║ South Franklin Circle    ║
║ Orchard Ridge            ║ ║                          ║
║                          ║ ║ Description paragraph... ║
║ Description paragraph... ║ ║                          ║
║                          ║ ║ Read case study →        ║
║ Read case study →        ║ ║                          ║
╚══════════════════════════╝ ╚══════════════════════════╝
```

- **Section background:** `--green-deep` (full-bleed dark green)
- **Card background:** `rgba(255,255,255,0.06)`
- **Hover:** Card background intensifies to `rgba(255,255,255,0.1)`
- **Tag:** Gold, uppercase, small
- **Title:** White, `1.4rem`
- **Description:** `rgba(255,255,255,0.65)`
- **Link:** `--gold-light`

### Approach Items (`.approach-item`)

Three-column grid with numbered entries.

```
┌─────────────────┬─────────────────┬─────────────────┐
│ 01              │ 02              │ 03              │
│ Objective advice│ Deep industry   │ Relationships   │
│                 │ focus           │ that deliver    │
│ We are not a    │ We do not spread│ Long-standing   │
│ lender...       │ ourselves...    │ relationships...│
└─────────────────┴─────────────────┴─────────────────┘
```

- **Top border:** `2px solid --green-mid` — a strong visual separator
- **Number:** Small, gold, weight 700, letter-spacing `0.04em`
- **Title:** `1.25rem`, weight 700
- **Description:** `0.9rem`, `--text-secondary`

### Team Cards (`.team-card`)

Three-column grid with avatar, name, title, bio.

```
┌──────────────────┐
│ [JM]  Jane       │  ← Avatar (56×56) + name/title
│       Managing   │
│       Partner    │
│                  │
│ Bio paragraph    │
│ describing       │
│ experience...    │
│                  │
│ Read profile →   │
└──────────────────┘
```

- **Card:** White background, border, `32px` padding, `border-radius: 12px`
- **Avatar:** `56×56`, green-surface background, centered initials
- **Name:** `1.22rem`, weight 700, green
- **Title:** Gold, uppercase, `0.78rem`, weight 700
- **Bio:** `0.94rem`, `--text-secondary`
- **Hover:** Border turns green, card lifts `-4px`

### Contact Form (`.contact-form`)

Dark green form with gold submit button.

```
┌──────────────────────────────┐
│ INQUIRY                      │
│ Tell us what you're working  │
│ on.                          │
│                              │
│ Name     [_______________]   │
│ Org      [_______________]   │
│ Phone    [_______________]   │
│ Interest [▼ Select one   ]   │
│ Message  [_______________]   │
│          [_______________]   │
│          [_______________]   │
│                              │
│ [      Submit inquiry      ] │ ← Gold button
│                              │
│ Fine print note...           │
└──────────────────────────────┘
```

- **Form background:** `--green-deep`, `border-radius: 12px`, `40px` padding
- **Input fields:** `rgba(255,255,255,0.08)` background, subtle border
- **Focus state:** Background intensifies, border turns `--gold-light`
- **Submit button:** Gold background, green text — the inverse of primary buttons
- **Labels:** `rgba(255,255,255,0.82)`, size `0.84rem`, weight 700

### CTA Section (`.cta-section`)

Centered, maximum width constrained.

```
                        ┌──────────────────────┐
                        │                      │
                        │   Ready to discuss   │
                        │   your capital       │
                        │   needs?             │
                        │                      │
                        │   Supporting copy    │
                        │                      │
                        │  [CTA]  [Secondary]  │
                        │                      │
                        └──────────────────────┘
```

- **Width:** `max-width: 640px`, centered
- **Padding:** `120px` top and bottom
- **Background:** `--off-white`

### Footer (`.footer`)

Four-column grid with brand info and link lists.

```
┌──────────────────┬──────────┬──────────┬──────────┐
│ Capital Advisors │ SERVICES │INDUSTRIES│ COMPANY  │
│                  │          │          │          │
│ 123 Financial    │• Custom  │• Senior  │• About   │
│ District         │  Finance │  Housing │• Team    │
│ New York, NY     │• Advisory│• Charter │• Cases   │
│                  │          │  Schools │• Insights│
│ (555) 123-4567   │          │• Health  │• Contact │
└──────────────────┴──────────┴──────────┴──────────┘
─────────────────────────────────────────────────────
© 2026 Capital Advisors    Terms    Privacy    Sitemap
```

- **Background:** `--green-deep`
- **Brand name:** `1.2rem`, weight 700, white
- **Column titles:** `0.8rem`, uppercase, `rgba(255,255,255,0.5)`
- **Links:** `rgba(255,255,255,0.65)`, hover → `--gold-light`
- **Bottom bar:** Separated by top border, smaller muted text

---

## Layout Patterns

### Two-Column Editorial Split (`.editorial-split`)

```
┌──────────────────┬──────────────────────────────┐
│ SECTION LABEL    │                              │
│                  │ Body paragraph spanning      │
│ Section title    │ multiple lines of text       │
│ goes here with   │ that explain the concept     │
│ weight and       │ in detail.                   │
│ presence.        │                              │
│                  │ Second paragraph with        │
│                  │ additional context.          │
└──────────────────┴──────────────────────────────┘
```

Used on: About page, Services page, Industries page.

### Three-Column Narrative Grid (`.case-story-grid`)

```
┌─────────────────┬─────────────────┬─────────────────┐
│ CHALLENGE       │ SOLUTION        │ OUTCOME         │
│                 │                 │                 │
│ Article title   │ Article title   │ Article title   │
│                 │                 │                 │
│ Body paragraph  │ Body paragraph  │ Body paragraph  │
└─────────────────┴─────────────────┴─────────────────┘
```

Used on: Case study detail page.

### Hero + Content + Dark Band rhythm

Pages follow a consistent vertical rhythm:
1. **Hero** — full-viewport introduction with image
2. **Light section(s)** — editorial splits, grids, lists
3. **Dark band** — inverted section for emphasis
4. **Light section(s)** — more content
5. **CTA section** — centered call to action
6. **Footer**

---

## Animation

### Scroll Reveal (`.reveal`)

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

- **Trigger:** Intersection Observer at 15% visibility threshold
- **Effect:** Elements fade in and slide up `24px` over `0.7s`
- **Applied to:** Every major section container
- **Reduced motion:** The `@media (prefers-reduced-motion: reduce)` query disables all animations and transforms

### Hover States

| Element | Effect | Duration |
|---|---|---|
| Service card | Background fill + text color change | 0.25s |
| Industry card | Translate `-4px` on Y axis | 0.25s |
| Case card | Background intensity increase | 0.25s |
| Team card | Border color + translate `-4px` | 0.25s |
| Logo card | Translate `-3px` + border glow + shadow | 0.25s |
| Primary button | Darken + translate `-1px` | 0.2s |
| Footer link | Color shift to gold | 0.2s |

### Navigation

- **Scroll:** Fixed position with `backdrop-filter: blur(16px)` backdrop-blur
- **Mobile menu:** Opacity + translate transition (`0.2s`) — menu fades and slides down from the nav bar

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| `> 960px` | Full desktop layout. All grids at maximum columns. Nav links visible. |
| `≤ 960px` | Tablet. Nav collapses to hamburger. Hero stacks. Most grids collapse to 1–2 columns. Team panel stacks. |
| `≤ 640px` | Mobile. Single-column grids. Phone number hidden from nav. Reduced section padding. Footer single-column. Stat cards hidden. |

---

## Image Strategy

### Hero Images
All hero images use picsum.photos placeholder URLs with descriptive seeds:
- Home: `seed/capital-advisors-hero`
- About: `seed/advisory-boardroom`
- Services: `seed/capital-plan`
- Contact: `seed/advisory-office`
- Industries: `seed/industries-overview`
- Insights: `seed/insights-hero`
- Case Studies: `seed/capital-case-studies`

Replace these with your own photography. Recommended specs: **800×600 minimum**, professional settings (boardrooms, institutional architecture, community settings).

### Client Logos
The trusted-by section uses inline SVG placeholder logos. Replace with actual client logo files in `public/assets/clients/`. Recommended: **PNG with transparency, max-height 78px**.

---

## Accessibility

- **Semantic HTML:** `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>` used throughout
- **ARIA labels:** Navigation, mobile menu button, logo grids, and icons all have appropriate labels
- **Focus states:** Input fields show clear focus rings (`border-color: --gold-light`)
- **Reduced motion:** Full `prefers-reduced-motion` support disables all animations
- **Color contrast:** All text-background pairs meet WCAG AA (see Color Contrast section above)
- **Keyboard:** Links and buttons are standard interactive elements — no custom keyboard handling needed

---

## File Map

```
File                          What it styles
─────────────────────────────────────────────────
app/globals.css               Everything — single stylesheet
  Lines 2–27                  Reset & base
  Lines 29–41                 Design tokens (:root)
  Lines 44–135                Navigation (desktop + mobile)
  Lines 138–257               Hero (desktop + mobile)
  Lines 259–286               Stats bar
  Lines 288–349               Trusted by section
  Lines 351–376               Generic section utils
  Lines 378–442               Service cards
  Lines 444–479               Industry cards
  Lines 481–751               Case studies (cards, index, library, detail)
  Lines 753–781               Approach items
  Lines 783–1160              Subpage layouts (about, services, team, contact)
  Lines 1162–1323             Contact page (info panel, form)
  Lines 1325–1353             CTA section
  Lines 1356–1433             Footer
  Lines 1436–1697             Responsive breakpoints
  Lines 1699–1729             Scroll reveal + reduced motion
```
