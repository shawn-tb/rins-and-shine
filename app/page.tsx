import Image from "next/image";
import { site, mailto } from "@/site.config";

import logo from "@/public/img/logo.png";
import logoWhite from "@/public/img/logo-white.png";
import bottleHero from "@/public/img/bottle-hero.webp";
import kit from "@/public/img/kit.webp";
import cloth from "@/public/img/cloth.webp";
import box from "@/public/img/box.webp";

const ORDER = mailto(`Order enquiry — ${site.name} Paddle Care Kit`);
const TRADE = mailto(`Distributor enquiry — ${site.name}`);

/* ---------------------------------------------------------------- pieces */

function Wordmark({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const src = variant === "light" ? logoWhite : logo;
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src={src}
        alt=""
        aria-hidden
        priority
        className="h-7 w-auto sm:h-8"
        style={{ width: "auto" }}
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-semibold tracking-[0.14em] sm:text-base">
          RINS &amp; SHINE
        </span>
        <span
          className={`mt-1 text-[0.5rem] tracking-[0.2em] uppercase ${
            variant === "light" ? "text-white/55" : "text-ash"
          }`}
        >
          Premium Paddle Care
        </span>
      </span>
    </span>
  );
}

function Button({
  href,
  children,
  tone = "brand",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "brand" | "outline" | "light";
}) {
  const tones = {
    brand:
      "bg-brand text-white hover:bg-brand-bright focus-visible:outline-brand",
    outline:
      "border border-ink/20 text-ink hover:border-ink/50 hover:bg-ink/[0.03] focus-visible:outline-ink",
    light:
      "border border-white/25 text-white hover:border-white/60 hover:bg-white/10 focus-visible:outline-white",
  } as const;
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${tones[tone]}`}
    >
      {children}
    </a>
  );
}

function Eyebrow({
  children,
  tone = "brand",
}: {
  children: React.ReactNode;
  tone?: "brand" | "muted";
}) {
  return (
    <p
      className={`mb-5 text-[0.68rem] font-semibold tracking-[0.22em] uppercase ${
        tone === "brand" ? "text-brand" : "text-white/50"
      }`}
    >
      {children}
    </p>
  );
}

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-4 w-4 shrink-0 text-brand"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 10.5 8 14.5 16 5.5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ page */

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      {/* header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/85 text-white backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-18 lg:px-8">
          <a href="#main" aria-label={`${site.name} home`}>
            <Wordmark variant="light" />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a className="transition-colors hover:text-white" href="#product">
              The product
            </a>
            <a className="transition-colors hover:text-white" href="#kit">
              What&rsquo;s inside
            </a>
            <a className="transition-colors hover:text-white" href="#use">
              How to use
            </a>
            <a className="transition-colors hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>
          <a
            href={ORDER}
            className="rounded-full bg-brand px-4 py-2 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-brand-bright sm:px-5 sm:text-sm"
          >
            Enquire
          </a>
        </div>
      </header>

      <main id="main">
        {/* hero */}
        <section className="relative overflow-hidden bg-ink text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-25 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--color-brand) 0%, transparent 65%)",
            }}
          />
          <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pt-16 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:px-8 lg:pt-24 lg:pb-28">
            <div>
              <Eyebrow tone="muted">{site.tagline}</Eyebrow>
              <h1 className="font-display text-[2.6rem] leading-[1.03] font-semibold tracking-tight sm:text-6xl lg:text-[4.2rem]">
                Clean surface.
                <br />
                <span className="text-brand-bright">Consistent contact.</span>
              </h1>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
                A non-abrasive care system for modern paddle faces. It removes
                dirt, sweat, oils and debris &mdash; the buildup that quietly
                changes how your paddle feels from one session to the next.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button href={ORDER}>Enquire to order</Button>
                <Button href="#product" tone="light">
                  See the product
                </Button>
              </div>

              <div className="mt-9 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-2xl font-semibold">
                  {site.price}
                </span>
                <span className="text-sm text-white/55">{site.priceNote}</span>
              </div>
            </div>

            <div className="relative flex items-end justify-center">
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[100px]"
              />
              <div
                aria-hidden
                className="absolute bottom-2 left-1/2 h-10 w-56 -translate-x-1/2 rounded-[50%] bg-white/10 blur-2xl"
              />
              <Image
                src={bottleHero}
                alt="Rins & Shine Premium Paddle Care Spray, 100 mL"
                priority
                sizes="(max-width: 1024px) 50vw, 260px"
                className="relative h-[21rem] w-auto sm:h-[26rem] lg:h-[32rem]"
              />
            </div>
          </div>

          {/* trust strip */}
          <div className="relative border-t border-white/10">
            <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 py-2 text-center text-[0.7rem] tracking-[0.14em] text-white/55 uppercase sm:text-xs lg:grid-cols-4 lg:px-8">
              {[
                "Non-abrasive",
                "Carbon fibre safe",
                "100 mL + microfibre cloth",
                "Designed in Singapore",
              ].map((t) => (
                <li key={t} className="px-2 py-4">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* the surface */}
        <section id="product" className="scroll-mt-20 bg-paper py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <div className="max-w-2xl">
              <Eyebrow>Why the face matters</Eyebrow>
              <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                A paddle does its work in the top fraction of a millimetre.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ash sm:text-lg">
                Carbon fibre weave, raw textures and grit-based finishes grip
                the ball through surface texture alone. Sweat, skin oils, court
                dust and ball residue settle into that texture over weeks of
                play. Rins &amp; Shine lifts the buildup without abrading the
                face underneath.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  h: "Non-abrasive",
                  p: "No scrubbing compounds and no micro-scratching. The formula lifts buildup rather than sanding it away, so you can use it as often as you play.",
                },
                {
                  h: "Built for modern faces",
                  p: "Safe for carbon fibre, composite, polymer and advanced textured or grit-based paddle surfaces, including engineered finishes.",
                },
                {
                  h: "Keeps feel consistent",
                  p: "Clearing the face of surface buildup keeps paddle feel and contact predictable between sessions, instead of drifting week by week.",
                },
              ].map((c) => (
                <div
                  key={c.h}
                  className="rounded-2xl border border-ink/10 bg-bone/60 p-7"
                >
                  <h3 className="font-display text-lg font-semibold">{c.h}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ash">{c.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* what's inside */}
        <section id="kit" className="scroll-mt-20 bg-bone py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <Image
              src={kit}
              alt="The Rins & Shine kit opened: 100 mL care spray beside a folded microfibre cloth in a black presentation box"
              sizes="(max-width: 1024px) 88vw, 520px"
              className="mx-auto w-full max-w-[32rem] [filter:drop-shadow(0_26px_34px_rgb(10_10_11/0.22))]"
            />
            <div>
              <Eyebrow>What&rsquo;s inside</Eyebrow>
              <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                Two pieces. Nothing else to buy.
              </h2>
              <dl className="mt-9 space-y-7">
                <div className="border-t border-ink/10 pt-7">
                  <dt className="font-display text-lg font-semibold">
                    Premium Paddle Care Spray &mdash; 100 mL
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ash">
                    A fine mist that loosens dirt, sweat, oils and debris across
                    the whole face. Light enough that one pass covers a paddle.
                  </dd>
                </div>
                <div className="border-t border-ink/10 pt-7">
                  <dt className="font-display text-lg font-semibold">
                    Microfibre cloth &mdash; 25 &times; 25 cm
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ash">
                    Branded, lint-free and sized for a paddle face. It lifts what
                    the spray has loosened instead of pushing it back into the
                    texture.
                  </dd>
                </div>
                <div className="border-t border-ink/10 pt-7">
                  <dt className="font-display text-lg font-semibold">
                    Presentation box
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ash">
                    Both pieces seated in a rigid black box &mdash; it travels in
                    a bag and gives well as a gift.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* how to use */}
        <section id="use" className="scroll-mt-20 bg-paper py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <div className="max-w-2xl">
              <Eyebrow>How to use it</Eyebrow>
              <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                Thirty seconds after play.
              </h2>
            </div>
            <ol className="mt-14 grid gap-10 md:grid-cols-3">
              {[
                {
                  n: "01",
                  h: "Spray",
                  p: "Mist lightly across the paddle face, or onto the cloth for a more controlled application.",
                },
                {
                  n: "02",
                  h: "Wipe",
                  p: "Work the microfibre cloth over the face in short, overlapping passes, edge to edge.",
                },
                {
                  n: "03",
                  h: "Dry",
                  p: "Let the surface dry before you play again. No rinsing and no residue left behind.",
                },
              ].map((s) => (
                <li key={s.n}>
                  <span className="font-display text-sm font-semibold tracking-[0.2em] text-brand">
                    {s.n}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold">
                    {s.h}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ash">{s.p}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* compatibility + specs */}
        <section className="bg-ink py-20 text-white lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <div>
              <Eyebrow tone="muted">Surface compatibility</Eyebrow>
              <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                Engineered for modern paddle surfaces.
              </h2>
              <ul className="mt-9 space-y-4">
                {[
                  "Carbon fibre faces, including raw and peel-ply textures",
                  "Composite and fibreglass faces",
                  "Polymer surfaces",
                  "Advanced textured and grit-based finishes",
                  "Engineered and coated finishes",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-white/75">
                    <Check />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-xs leading-relaxed text-white/40">
                New to a paddle? Test on a small area of the face first, as you
                would with any care product.
              </p>
            </div>

            <div>
              <Eyebrow tone="muted">Specification</Eyebrow>
              <dl className="mt-2 text-sm">
                {[
                  ["Product", "Premium Paddle Care Spray"],
                  ["Net content", "100 mL"],
                  ["Cloth", "Microfibre, 25 × 25 cm"],
                  ["Formula", "Non-abrasive"],
                  ["Origin", site.origin],
                  ["Manufacture", site.made],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between gap-6 border-b border-white/10 py-4"
                  >
                    <dt className="text-white/45">{k}</dt>
                    <dd className="text-right text-white/90">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-12 grid grid-cols-2 items-center gap-6">
                <Image
                  src={cloth}
                  alt="The branded red microfibre cloth included in the kit"
                  sizes="(max-width: 1024px) 42vw, 250px"
                  className="w-full [filter:drop-shadow(0_18px_30px_rgb(0_0_0/0.55))]"
                />
                <Image
                  src={box}
                  alt="Back of the Rins & Shine retail box listing the product details"
                  sizes="(max-width: 1024px) 42vw, 250px"
                  className="w-full [filter:drop-shadow(0_18px_30px_rgb(0_0_0/0.55))]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* buy */}
        <section id="buy" className="scroll-mt-20 bg-paper py-20 lg:py-28">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-bone">
              <div className="grid gap-10 p-9 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-16">
                <div>
                  <Eyebrow>Order</Eyebrow>
                  <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                    The complete kit, {site.price}.
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-ash">
                    Online checkout is on the way. Until then, send us a note and
                    we&rsquo;ll come straight back with availability, delivery
                    and payment.
                  </p>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-ash">
                    {site.tradeNote}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button href={ORDER}>Enquire to order</Button>
                    <Button href={TRADE} tone="outline">
                      Distributor enquiry
                    </Button>
                  </div>
                </div>
                <div className="rounded-2xl bg-ink p-8 text-white">
                  <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-white/50 uppercase">
                    Paddle Care Kit
                  </p>
                  <p className="mt-4 font-display text-4xl font-semibold">
                    {site.price}
                  </p>
                  <p className="mt-2 text-sm text-white/55">{site.priceNote}</p>
                  <ul className="mt-6 space-y-2 text-sm text-white/75">
                    <li>Care spray, 100 mL</li>
                    <li>Microfibre cloth, 25 × 25 cm</li>
                    <li>Presentation box</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* faq */}
        <section id="faq" className="scroll-mt-20 bg-bone py-20 lg:py-28">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
              Before you order.
            </h2>
            <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {[
                {
                  q: "Is it safe on a raw carbon face?",
                  a: "Yes. The formula is non-abrasive and made for carbon fibre, composite, polymer and advanced textured or grit-based surfaces, including engineered finishes.",
                },
                {
                  q: "How often should I use it?",
                  a: "Whenever the face looks dirty or starts to feel slick. Most players wipe down after a session, which takes well under a minute.",
                },
                {
                  q: "Which paddle sports is it for?",
                  a: "It is made for modern paddle faces generally — the same carbon, composite and textured surfaces used across today's paddles.",
                },
                {
                  q: "How long does one bottle last?",
                  a: "The 100 mL bottle covers months of regular wipe-downs, since each clean needs only a light mist.",
                },
                {
                  q: "Can I buy for a club or shop?",
                  a: "Yes. Send a distributor enquiry with the quantity you have in mind and we will come back with trade pricing.",
                },
              ].map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-base font-semibold">
                    {f.q}
                    <span
                      aria-hidden
                      className="text-brand transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 pr-10 text-sm leading-relaxed text-ash">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <footer className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <Wordmark variant="light" />
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
                {site.origin}. {site.made}.
              </p>
            </div>
            <div className="text-sm">
              <a
                href={ORDER}
                className="font-semibold text-white transition-colors hover:text-brand-bright"
              >
                {site.email}
              </a>
              {site.instagram ? (
                <a
                  href={site.instagram}
                  className="mt-2 block text-white/50 transition-colors hover:text-white"
                >
                  Instagram
                </a>
              ) : null}
            </div>
          </div>
          <p className="mt-12 border-t border-white/10 pt-6 text-xs text-white/35">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
            RINS &amp; SHINE&trade; is a trademark of its owner.
          </p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${site.name} Premium Paddle Care Kit`,
            description: site.description,
            brand: { "@type": "Brand", name: site.name },
            image: [`${site.url}/img/og.jpg`, `${site.url}/img/kit.webp`],
            countryOfOrigin: "SG",
            offers: {
              "@type": "Offer",
              price: site.price.replace(/[^\d.]/g, ""),
              priceCurrency: "SGD",
              availability: "https://schema.org/InStock",
              url: site.url,
            },
          }),
        }}
      />
    </>
  );
}
