# Rins & Shine — product landing page

One-page site for the Rins & Shine Premium Paddle Care System, built to the
supplied design. Next.js 15 (App Router) + Tailwind CSS v4, deployed on Vercel.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Changing the content you'll actually want to change

Everything commercial lives in `site.config.ts`:

| Field | What it does |
| --- | --- |
| `email` | Address the contact block shows and the form writes to |
| `whatsapp` | Shown in the contact block; leave empty and the row disappears |
| `responseTime` | Used in the "Thanks, we've got it" confirmation |
| `formEndpoint` | See **The enquiry form** below |
| `url` | Canonical domain, used for SEO and social previews |

All page copy is in `app/page.tsx`, in plain JSX, section by section. The FAQ
entries and the accordion behaviour are in `app/faq-accordion.tsx`, the contact
form in `app/enquiry-form.tsx`, and the icon set in `app/icons.tsx`.

## The enquiry form

With `formEndpoint` empty, submitting opens the visitor's mail client with every
field already filled in and shows the confirmation state. That works with no
accounts and no server.

Set `formEndpoint` to a URL that accepts a JSON POST and the form submits there
instead, with the same confirmation state and an error message if the request
fails.

## Images

`public/img/` holds everything:

- `logo.png`, `logo-white.png` — the supplied logo artwork with the white
  background removed. The header and footer use an inline SVG flame from the
  design; these files back the favicons and the social card.
- `bottle-hero.webp`, `kit.webp`, `box.webp`, `box-back.webp`, `cloth.webp` —
  the studio photography, lifted off its white background. The cut keeps the
  clear cap intact and drops the contact shadow, so each shot sits on any
  section colour. The current design uses the bottle; the kit, box and cloth
  shots are kept for when they're needed.
- `og.jpg` — 1200×630 social sharing card.
- `icon-512.png`, `apple-icon.png` — favicons.

## Platform notes

The page follows Google Chrome's modern-web-guidance where it applies:

- The hero bottle carries `fetchpriority="high"`. Next's `priority` prop only
  emitted a preload link, not the attribute, so it is set explicitly. The three
  decorative bottles stay `loading="lazy"` with no `fetchpriority`.
- Fluid type uses `clamp()` with font-relative minimums and maximums and a
  `rem` term in the middle, so browser zoom and OS text scaling both work. No
  maximum is more than 2.5x its minimum, and nothing sets a font size on
  `html` or `:root`.
- `<meta name="text-scale" content="scale">` opts in to OS text scaling. It was
  only added after checking that the page reflows at 390px and 320px wide with
  text at 200% and never scrolls sideways.
- The FAQ is native `<details name="faq">`. It is an exclusive accordion, works
  with the keyboard and screen readers without any script, and works with
  JavaScript turned off.
- Form errors follow `:user-invalid`, so nothing goes red while the visitor is
  still typing. Each error has visible text and an icon with an "Error" text
  alternative rather than relying on colour, `aria-invalid` is kept in step,
  the error is added to `aria-describedby` only while it shows, and messages
  are announced through one polite live region. Browsers without
  `:user-invalid` get the same behaviour through a fallback class.
- Headings use `text-wrap: balance`, body copy `text-wrap: pretty`, and
  `overflow-wrap: anywhere` keeps long words from forcing a horizontal scroll
  at large text sizes.

Deliberately not applied: `content-visibility` (the page is ~400 DOM nodes, far
short of the large off-screen blocks it is meant for), `font-size-adjust`
(measured as a no-op here, because next/font already ships a metric-adjusted
fallback face), and the web-vitals library (it would add script to a page that
is trying to carry less).

Known trade-off: if the web font is slow, the hero heading reflows by one line
when it swaps in. Switching the font to `display: "optional"` in `app/layout.tsx`
removes that shift, at the cost of some visits rendering in the fallback face.

## Deploying

The repo is wired for Vercel's zero-config Next.js build. Push to GitHub, import
the repo at vercel.com/new, and deploy. No environment variables are needed.
