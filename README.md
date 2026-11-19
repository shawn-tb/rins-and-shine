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

## Deploying

The repo is wired for Vercel's zero-config Next.js build. Push to GitHub, import
the repo at vercel.com/new, and deploy. No environment variables are needed.
