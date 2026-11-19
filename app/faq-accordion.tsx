"use client";

import { useState } from "react";

export type Faq = { q: string; a: string };

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                className={`flex min-h-[72px] w-full items-center gap-4 bg-ink-deep px-6 py-4 text-left text-white transition-colors hover:bg-ink-soft sm:gap-[18px] ${
                  isOpen ? "rounded-t-xl" : "rounded-xl"
                }`}
              >
                <span className="font-bold text-accent-bright tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[17px] font-bold sm:text-[19px]">
                  {f.q}
                </span>
                <span
                  aria-hidden
                  className="text-2xl leading-none font-bold text-accent-bright"
                >
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h3>
            {isOpen ? (
              <div
                id={`faq-panel-${i}`}
                className="rounded-b-xl border-x border-b border-line bg-white px-6 py-6"
              >
                <p className="text-[17px] leading-[1.55] text-body">{f.a}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
