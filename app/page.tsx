import Image from "next/image";
import { site } from "@/site.config";
import EnquiryForm from "./enquiry-form";
import {
  Flame,
  Shield,
  Grid,
  Timer,
  Droplet,
  Refresh,
  Target,
  Tick,
  Weave,
  Layers,
  Hex,
  GridLarge,
  Pin,
} from "./icons";

import bottle from "@/public/img/bottle-hero.webp";

const WRAP = "mx-auto w-full max-w-[1240px] px-6";
const PAD = "py-20 sm:py-24 lg:py-28";
const H2 = "text-[clamp(2.25rem,1.35rem+2.5vw,3.375rem)] font-extrabold leading-[1.1]";
const LEAD = "text-[17px] leading-[1.55] text-body";

const NAV = [
  ["Home", "#home"],
  ["Benefits", "#benefits"],
  ["How to use", "#how"],
  ["Compatibility", "#compat"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
] as const;

const BENEFITS = [
  {
    Icon: Shield,
    h: "Non-Abrasive",
    p: "Cleans without scrubbing or changing the manufactured texture.",
  },
  {
    Icon: Droplet,
    h: "Lifts Buildup",
    p: "Removes sweat, skin oils, dust and airborne particles.",
  },
  {
    Icon: Refresh,
    h: "Keeps Your Spin",
    p: "A clear face grips the ball the way it did on day one.",
  },
  {
    Icon: Target,
    h: "Consistent Contact",
    p: "No patchy residue, so the same swing gives the same result.",
  },
];

const CHECKLIST = [
  "Clean after each play session",
  "Never scrub or use abrasive materials",
  "Use only smooth microfiber cloths",
  "Keep both the face and the edge clean",
  "Clean gently to preserve the surface texture",
];

const STATS = [
  {
    big: "100",
    unit: "mL",
    h: "Paddle Care Spray",
    p: "Shake, mist 2 to 3 light sprays and wipe.",
  },
  {
    big: "25×25",
    unit: "cm",
    h: "Microfiber Cloth",
    p: "Smooth, non-abrasive microfiber with stitched edges.",
  },
  {
    big: "3",
    unit: "years",
    h: "Shelf Life",
    p: "From the date of production, printed on the can.",
  },
];

const STEPS = [
  { h: "Shake", p: "Shake the spray can." },
  { h: "Spray", p: "2 to 3 light sprays onto the paddle face." },
  { h: "Check", p: "Make sure the surface is damp." },
  { h: "Wipe", p: "Gentle circles with a clean microfiber cloth." },
  { h: "Air Dry", p: "Let it dry completely before play." },
];

const COMPAT_LEFT = [
  { Icon: Weave, h: "Carbon Fiber", p: "Safe on carbon fiber paddle faces." },
  { Icon: Layers, h: "Composite", p: "Safe on composite surface paddles." },
  {
    Icon: Hex,
    h: "Polypropylene (PP)",
    p: "Safe on polypropylene surface paddles.",
  },
];

const COMPAT_RIGHT = [
  {
    Icon: GridLarge,
    h: "Textured & Grit",
    p: "Advanced textured and grit-based faces keep their bite.",
  },
  {
    Icon: Shield,
    h: "Maintenance Only",
    p: "Removes foreign contaminants. It never modifies the surface.",
  },
  {
    Icon: Pin,
    h: "Formulated in Singapore",
    p: "Formulated and designed in Singapore.",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "Will it change my paddle’s texture or grit?",
    a: "No. The formula is non-abrasive. It removes foreign contaminants sitting on the surface without altering the texture the paddle was made with.",
  },
  {
    q: "Which paddles can I use it on?",
    a: "Carbon fiber, composite, polypropylene (PP) and textured or grit-based faces, including engineered finishes.",
  },
  {
    q: "How often should I clean my paddle?",
    a: "After each play session. A quick clean stops buildup from settling into the texture.",
  },
  {
    q: "What’s in the spray?",
    a: "Water, isopropyl alcohol (15% or less), polydimethylsiloxane, sodium benzoate, citric acid and nitrogen as the propellant.",
  },
  {
    q: "How should I store it?",
    a: "It is a pressurised container. Store below 50°C, out of direct sun, away from children and pets, and never puncture or burn it. Shelf life is 3 years from production.",
  },
];

/* ------------------------------------------------------------------ page */

export default function Page() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink-deep focus:px-5 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      {/* ---------------------------------------------------------- hero */}
      <section id="home" className="relative overflow-hidden bg-ink-deep">
        <div
          aria-hidden
          className="hero-wash pointer-events-none absolute inset-0"
        />

        <header className={`relative ${WRAP} flex flex-wrap items-center justify-between gap-5 py-7`}>
          <a
            href="#home"
            className="flex items-center gap-2.5 text-white"
            aria-label={`${site.name} home`}
          >
            <Flame size={34} className="text-accent" />
            <span className="text-[19px] font-extrabold tracking-[0.02em]">
              RINS &amp; SHINE
            </span>
          </a>
          <nav aria-label="Main" className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {NAV.map(([t, href]) => (
              <a
                key={t}
                href={href}
                className="text-[17px] text-white/85 transition-colors hover:text-white"
              >
                {t}
              </a>
            ))}
          </nav>
        </header>

        <div
          className={`relative ${WRAP} grid items-center gap-12 pt-10 pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:pt-12 lg:pb-28`}
        >
          <div className="min-w-0">
            <h1 className="text-[clamp(2.75rem,1.55rem+3.4vw,4.5rem)] leading-[1.08] font-extrabold text-white">
              <span className="text-accent-bright">Clean</span> Surface,
              Consistent Contact
            </h1>
            <p className="mt-6 max-w-[560px] text-[19px] leading-[1.55] text-white/75">
              A non-abrasive paddle care spray that lifts sweat, oils and dust
              off your paddle face, without touching the texture it was made
              with.
            </p>

            <ul className="mt-9 flex flex-wrap gap-y-8 gap-x-[72px]">
              {[
                { Icon: Shield, t: "Non-abrasive" },
                { Icon: Grid, t: "Grit-safe" },
                { Icon: Timer, t: "Quick clean" },
              ].map(({ Icon, t }) => (
                <li key={t} className="flex flex-col items-center gap-3">
                  <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-accent-bright/45 bg-accent/15 text-accent-bright">
                    <Icon size={32} stroke="currentColor" />
                  </span>
                  <span className="text-[16px] font-semibold text-white">{t}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-9 inline-flex min-h-[52px] items-center rounded-lg bg-accent px-[30px] py-3.5 text-[18px] font-bold text-white transition-colors hover:bg-accent-deep"
            >
              Enquire now
            </a>
          </div>

          <div className="flex justify-center">
            <Image
              src={bottle}
              alt="Rins & Shine Premium Paddle Care Spray, 100 mL"
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 60vw, 340px"
              className="h-[22rem] w-auto sm:h-[30rem] lg:h-[37rem]"
            />
          </div>
        </div>
      </section>

      <main>
        {/* ----------------------------------------------------- benefits */}
        <section id="benefits" className={`scroll-mt-4 bg-white ${PAD}`}>
          <div className={WRAP}>
            <div className="mx-auto max-w-[760px] text-center">
              <h2 className={H2}>
                Paddle care for <span className="text-accent">serious</span>{" "}
                players
              </h2>
              <p className={`mt-5 ${LEAD}`}>
                Sweat, oils and court dust build up on the paddle face over
                time. Rins &amp; Shine removes that layer so the surface plays
                the way it was designed to.
              </p>
            </div>

            <ul className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map(({ Icon, h, p }) => (
                <li
                  key={h}
                  className="card-item rounded-2xl bg-white px-7 py-11 text-center shadow-[0_18px_40px_rgb(20_20_22/0.09)]"
                >
                  <span className="mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-accent text-white">
                    <Icon size={34} stroke="currentColor" />
                  </span>
                  <h3 className="text-2xl font-bold">{h}</h3>
                  <p className={`mt-3 ${LEAD}`}>{p}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------------------------------------------- checklist */}
        <section className={`bg-mist ${PAD}`}>
          <div className={`${WRAP} grid items-center gap-14 lg:grid-cols-2`}>
            <div>
              <h2 className={H2}>
                Play <span className="text-accent">hard...</span> and keep your
                paddle like new
              </h2>
              <p className={`mt-5 max-w-[560px] ${LEAD}`}>
                The paddle itself doesn&rsquo;t wear out after a few weeks. The
                surface just gets covered. A quick clean after each session
                keeps it playing true.
              </p>
              <ul className="mt-9 flex flex-col gap-4">
                {CHECKLIST.map((t) => (
                  <li key={t} className="flex items-center gap-4">
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-md bg-accent text-white">
                      <Tick size={18} stroke="currentColor" />
                    </span>
                    <span className="text-[17px] text-ink">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src={bottle}
                alt=""
                aria-hidden
                sizes="(max-width: 1024px) 55vw, 320px"
                className="h-[20rem] w-auto rotate-[-12deg] sm:h-[26rem] lg:h-[30rem]"
              />
            </div>
          </div>
        </section>

        {/* -------------------------------------------------- big numbers */}
        <section className={`bg-white ${PAD}`}>
          <div className={WRAP}>
            <div className="mx-auto max-w-[760px] text-center">
              <h2 className={H2}>
                Everything You Need in{" "}
                <span className="text-accent">One Kit</span>
              </h2>
              <p className={`mt-4 ${LEAD}`}>
                Spray and cloth, packed in a black gift box
              </p>
            </div>
            <ul className="mt-14 grid gap-12 text-center sm:grid-cols-3 sm:gap-8">
              {STATS.map((s) => (
                <li key={s.h} className="min-w-0">
                  <p className="flex min-w-0 flex-wrap items-baseline justify-center gap-2 [overflow-wrap:anywhere] text-accent">
                    <span className="text-[clamp(3.5rem,1.9rem+4.4vw,6.5rem)] leading-none font-extrabold">
                      {s.big}
                    </span>
                    <span className="text-[clamp(1.25rem,0.8rem+1.5vw,2.25rem)] font-bold">
                      {s.unit}
                    </span>
                  </p>
                  <h3 className="mt-5 text-2xl font-bold">{s.h}</h3>
                  <p className={`mx-auto mt-3 max-w-[320px] ${LEAD}`}>{s.p}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ------------------------------------------------------- how to */}
        <section id="how" className={`scroll-mt-4 bg-mist ${PAD}`}>
          <div className={WRAP}>
            <h2 className={`${H2} text-center`}>
              How to <span className="text-accent">Use</span>
            </h2>
            <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {STEPS.map((s, i) => (
                <li
                  key={s.h}
                  className="card-item rounded-2xl bg-white px-6 py-9 text-center"
                >
                  <span className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-[17px] font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-bold">{s.h}</h3>
                  <p className={`mt-2 ${LEAD}`}>{s.p}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ------------------------------------------------ compatibility */}
        <section id="compat" className={`scroll-mt-4 bg-white ${PAD}`}>
          <div className={WRAP}>
            <div className="mx-auto max-w-[820px] text-center">
              <h2 className={H2}>
                <span className="text-accent">Surface</span> Compatibility
              </h2>
              <p className={`mt-4 ${LEAD}`}>
                Engineered for modern paddle surfaces, including engineered
                finishes.
              </p>
            </div>

            <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-10">
              <ul className="flex flex-col gap-12 lg:text-end">
                {COMPAT_LEFT.map(({ Icon, h, p }) => (
                  <li key={h}>
                    <span className="inline-flex text-accent lg:justify-end">
                      <Icon size={44} stroke="currentColor" />
                    </span>
                    <h3 className="mt-3 text-2xl font-bold">{h}</h3>
                    <p className={`mt-2 ${LEAD}`}>{p}</p>
                  </li>
                ))}
              </ul>

              <div className="flex justify-center">
                <Image
                  src={bottle}
                  alt=""
                  aria-hidden
                  sizes="(max-width: 1024px) 50vw, 300px"
                  className="h-[22rem] w-auto sm:h-[28rem] lg:h-[32rem]"
                />
              </div>

              <ul className="flex flex-col gap-12">
                {COMPAT_RIGHT.map(({ Icon, h, p }) => (
                  <li key={h}>
                    <span className="inline-flex text-accent">
                      <Icon size={44} stroke="currentColor" />
                    </span>
                    <h3 className="mt-3 text-2xl font-bold">{h}</h3>
                    <p className={`mt-2 ${LEAD}`}>{p}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- faq */}
        <section id="faq" className={`scroll-mt-4 bg-mist ${PAD}`}>
          <div className={`${WRAP} grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]`}>
            <div className="order-2 flex justify-center lg:order-1">
              <Image
                src={bottle}
                alt=""
                aria-hidden
                sizes="(max-width: 1024px) 50vw, 280px"
                className="h-[18rem] w-auto rotate-[-18deg] sm:h-[24rem] lg:h-[28rem]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className={H2}>
                Frequently Asked{" "}
                <span className="text-accent">Questions</span>
              </h2>
              <div className="mt-9 flex flex-col gap-3">
                {FAQS.map((f, i) => (
                  <details key={f.q} name="faq" open={i === 0} className="faq">
                    <summary className="flex min-h-[72px] items-center gap-4 rounded-xl bg-ink-deep px-6 py-4 text-white transition-colors hover:bg-ink-soft sm:gap-[18px]">
                      <span className="font-bold text-accent-bright tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="flex-1 text-[17px] font-bold sm:text-[19px]">
                        {f.q}
                      </h3>
                      <span
                        aria-hidden
                        className="text-2xl leading-none font-bold text-accent-bright"
                      >
                        <span className="sign-closed">+</span>
                        <span className="sign-open">&ndash;</span>
                      </span>
                    </summary>
                    <div className="rounded-b-xl border-x border-b border-line bg-white px-6 py-6">
                      <p className="text-[17px] leading-[1.55] text-body">
                        {f.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ contact */}
        <section id="contact" className={`scroll-mt-4 bg-white ${PAD}`}>
          <div className={`${WRAP} grid gap-14 lg:grid-cols-2 lg:gap-16`}>
            <div>
              <h2 className={H2}>
                <span className="text-accent">Enquire</span> With Us
              </h2>
              <p className={`mt-5 max-w-[560px] ${LEAD}`}>
                Buying for yourself, your club or your store? Send us a note and
                we&rsquo;ll come back with pricing and availability.
              </p>

              <dl className="mt-10 flex flex-col gap-5 text-[17px]">
                <div>
                  <dt className="font-bold text-accent">Company</dt>
                  <dd className="mt-1 text-ink">
                    Rins &amp; Shine Pte. Ltd., Singapore
                  </dd>
                </div>
                {site.whatsapp ? (
                  <div className="flex flex-wrap gap-x-2">
                    <dt className="font-bold text-accent">WhatsApp</dt>
                    <dd className="text-ink">{site.whatsapp}</dd>
                  </div>
                ) : null}
                <div className="flex flex-wrap gap-x-2">
                  <dt className="font-bold text-accent">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-ink underline-offset-4 hover:underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="font-bold text-accent">Web</dt>
                  <dd className="text-ink">www.rinsnshine.com</dd>
                </div>
              </dl>
            </div>

            <EnquiryForm />
          </div>
        </section>
      </main>

      {/* -------------------------------------------------------- footer */}
      <footer className="bg-ink-deep">
        <div
          className={`${WRAP} flex flex-wrap items-center justify-between gap-5 py-9`}
        >
          <span className="flex items-center gap-2.5 text-white">
            <Flame size={26} className="text-accent" />
            <span className="text-[17px] font-extrabold">RINS &amp; SHINE</span>
          </span>
          <p className="text-[15px] text-white/55">
            &copy; {new Date().getFullYear()} Rins &amp; Shine Pte. Ltd. |
            Formulated and designed in Singapore | Made in China
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
          }),
        }}
      />
    </>
  );
}
