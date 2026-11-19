import Image from "next/image";
import { site, mailto } from "@/site.config";

import logo from "@/public/img/logo.png";
import logoWhite from "@/public/img/logo-white.png";
import bottleHero from "@/public/img/bottle-hero.webp";
import kit from "@/public/img/kit.webp";
import cloth from "@/public/img/cloth.webp";
import box from "@/public/img/box.webp";
import boxBack from "@/public/img/box-back.webp";

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
                Sweat, oils, dust and airborne particles build up on a paddle
                face over time. Rins &amp; Shine lifts that residue away without
                altering the texture the paddle was made with.
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
                "Carbon fiber safe",
                "100 mL + microfiber cloth",
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
              <Eyebrow>Understanding surface buildup</Eyebrow>
              <h2 className="font-display text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
                A paddle does its work in the top fraction of a millimetre.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ash sm:text-lg">
                Over time, sweat, oils, dust and other airborne particles build
                up on paddle faces. That buildup can obscure the surface
                texture, reduce spin and alter the consistency of contact, even
                though the paddle itself is unchanged.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                {
                  h: "Non-abrasive",
                  p: "No scrubbing compounds and no micro-scratching. It removes foreign contaminants without altering the paddle's manufactured texture, so the surface stays true to its original design.",
                },
                {
                  h: "Built for modern faces",
                  p: "Made for carbon fiber, composite, polypropylene and textured or grit-based paddle surfaces, including engineered finishes.",
                },
                {
                  h: "Care that supports longevity",
                  p: "Removing debris properly and keeping the face clean supports a longer paddle service life through maintenance, not modification.",
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
              alt="The Rins & Shine kit opened: 100 mL care spray beside a folded microfiber cloth in a black presentation box"
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
                    Two or three light sprays cover a paddle face. The formula
                    loosens sweat, oils, dirt and dust so they lift away instead
                    of settling further into the texture.
                  </dd>
                </div>
                <div className="border-t border-ink/10 pt-7">
                  <dt className="font-display text-lg font-semibold">
                    Microfiber cloth &mdash; 25 &times; 25 cm
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ash">
                    Branded, lint-free and sized for a paddle face. Smooth and
                    non-abrasive, which is the only kind of cloth that should
                    touch a modern paddle.
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
                Five steps, under a minute.
              </h2>
            </div>

            <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {[
                ["01", "Shake", "Shake the spray can."],
                [
                  "02",
                  "Spray",
                  "Apply two to three light sprays onto the paddle face.",
                ],
                ["03", "Check", "Make sure the surface is damp before wiping."],
                [
                  "04",
                  "Wipe",
                  "Wipe gently with a clean microfiber cloth in a circular motion.",
                ],
                [
                  "05",
                  "Dry",
                  "Let the paddle air dry completely before play.",
                ],
              ].map(([n, h, p]) => (
                <li key={n} className="border-t border-ink/10 pt-5">
                  <span className="font-display text-sm font-semibold tracking-[0.2em] text-brand">
                    {n}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold">
                    {h}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ash">{p}</p>
                </li>
              ))}
            </ol>

            <div className="mt-16 rounded-2xl border border-ink/10 bg-bone/60 p-8 sm:p-10">
              <h3 className="font-display text-lg font-semibold">
                Best practice for paddle faces
              </h3>
              <ul className="mt-5 grid gap-x-10 gap-y-3 text-sm leading-relaxed text-ash sm:grid-cols-2">
                {[
                  "Clean after each play session.",
                  "Avoid scrubbing or any abrasive material.",
                  "Use only smooth, non-abrasive microfiber cloths.",
                  "Keep both the face and the edge clean for more consistent play.",
                  "Clean gently, to preserve the paddle's surface texture.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
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
                  "Carbon fiber paddles",
                  "Composite surface paddles",
                  "Polypropylene (PP) surface paddles",
                  "Textured and grit-based surface paddles",
                  "Engineered finishes",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-white/75">
                    <Check />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-12 font-display text-lg font-semibold">
                Safety and handling
              </h3>
              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-white/60">
                <li>Pressurised container. Do not puncture or burn.</li>
                <li>Store below 50&deg;C, away from heat and sunlight.</li>
                <li>Keep out of reach of children and pets.</li>
                <li>
                  Contains water, isopropyl alcohol (&le;15%), poly
                  dimethylsiloxane, sodium benzoate, citric acid and nitrogen as
                  propellant.
                </li>
                <li>
                  Expiry: three years from the date of production. See the spray
                  can.
                </li>
              </ul>
            </div>

            <div>
              <Eyebrow tone="muted">Specification</Eyebrow>
              <dl className="mt-2 text-sm">
                {[
                  ["Product", "Premium Paddle Care Spray"],
                  ["Net content", "100 mL"],
                  ["Cloth", "Microfiber, 25 × 25 cm"],
                  ["Formula", "Non-abrasive"],
                  ["Distributed by", site.company],
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
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-6xl px-5 lg:mt-24 lg:px-8">
            <ul className="grid grid-cols-1 items-center gap-10 sm:grid-cols-3 sm:gap-8">
              {[
                {
                  src: box,
                  alt: "Front of the Rins & Shine retail box",
                  cap: "Retail box, front",
                },
                {
                  src: boxBack,
                  alt: "Back of the Rins & Shine retail box, listing directions, surface compatibility and safety information",
                  cap: "Retail box, back",
                },
                {
                  src: cloth,
                  alt: "The branded red microfiber cloth included in the kit",
                  cap: "Microfiber cloth, 25 × 25 cm",
                },
              ].map((im) => (
                <li key={im.cap}>
                  <Image
                    src={im.src}
                    alt={im.alt}
                    sizes="(max-width: 640px) 88vw, 340px"
                    className="mx-auto w-full max-w-[22rem] [filter:drop-shadow(0_20px_34px_rgb(0_0_0/0.6))]"
                  />
                  <p className="mt-5 text-center text-xs tracking-[0.14em] text-white/40 uppercase">
                    {im.cap}
                  </p>
                </li>
              ))}
            </ul>
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
                    <li>Microfiber cloth, 25 × 25 cm</li>
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
                  a: "Yes. The formula is non-abrasive and made for carbon fiber, composite, polypropylene and textured or grit-based surfaces. It removes contaminants without altering the paddle's manufactured texture.",
                },
                {
                  q: "How often should I use it?",
                  a: "After each play session. That is what the directions call for, and it takes well under a minute.",
                },
                {
                  q: "Which paddles is it for?",
                  a: "It is made for modern pickleball paddles, across the carbon, composite and textured surfaces in use today.",
                },
                {
                  q: "How long does one bottle last?",
                  a: "Each clean needs only two or three light sprays, so a 100 mL can covers months of regular use. The can is good for three years from production.",
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
                {site.company}
                <br />
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
