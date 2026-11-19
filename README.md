# Rins & Shine — product landing page

One-page site for the Rins & Shine Premium Paddle Care System. Next.js 15 (App
Router) + Tailwind CSS v4, deployed on Vercel.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Changing the content you'll actually want to change

Everything commercial lives in `site.config.ts`:

| Field          | What it does                                                |
| -------------- | ----------------------------------------------------------- |
| `email`        | Address every "Enquire" button writes to                      |
| `price`        | Price shown in the hero, the order block and the price card   |
| `priceNote`    | Small print under the price                                   |
| `tradeNote`    | Distributor / bulk line in the order block                    |
| `url`          | Canonical domain, used for SEO and social previews            |
| `instagram`    | Set a URL to show an Instagram link in the footer             |

All page copy is in `app/page.tsx`, in plain JSX, section by section.

## Images

`public/img/` holds everything:

- `logo.png`, `logo-white.png` — the logo with the white background removed.
  Pixel-for-pixel the supplied artwork, just with transparency.
- `bottle-hero.webp`, `kit.webp`, `box.webp`, `box-back.webp`, `cloth.webp` —
  the studio photography, lifted off its white background. The cut keeps the
  clear cap intact and drops the contact shadow, so each shot sits on any
  section colour and its shadow comes from CSS rather than the file.
- `og.jpg` — 1200×630 social sharing card.
- `icon-512.png`, `apple-icon.png` — favicons.

To swap in new photography, drop the files in under the same names. Keep the
transparency if you want the cut-out look; a plain photo on a white square
will read as a photo.

## Deploying

The repo is wired for Vercel's zero-config Next.js build. Push to GitHub, import
the repo at vercel.com/new, and deploy. No environment variables are needed.
