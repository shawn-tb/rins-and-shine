"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/site.config";
import { Tick } from "./icons";

const fieldClass =
  "field-input min-h-[52px] w-full rounded-lg border border-line bg-white px-4 py-3 text-[17px] text-ink outline-none transition-colors focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/25";
const labelClass = "mb-2 block text-[15px] font-bold text-ink";
const hintClass = "mb-2 text-[15px] text-body";

function ErrorText({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} className="error-msg mt-2 items-start gap-2 text-[15px] text-accent-deep">
      <span role="img" aria-label="Error" className="mt-0.5 shrink-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7.5v5M12 16.2v.3" />
        </svg>
      </span>
      <span>{children}</span>
    </p>
  );
}

/**
 * Keeps ARIA in step with :user-invalid, which browsers apply only after the
 * user has interacted with a field or tried to submit. Errors are announced
 * through a single polite region rather than one per field, and each error is
 * linked with aria-describedby only while it is showing.
 */
function useUserInvalidAria(formRef: React.RefObject<HTMLFormElement | null>) {
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const native =
      typeof CSS !== "undefined" &&
      typeof CSS.supports === "function" &&
      CSS.supports("selector(:user-invalid)");

    const touched = new WeakMap<Element, boolean>();
    const live = document.createElement("div");
    live.setAttribute("aria-live", "polite");
    live.className = "visually-hidden";
    document.body.append(live);
    let timer: ReturnType<typeof setTimeout> | undefined;

    type Field = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
    const all = () =>
      Array.from(form.querySelectorAll<Field>("input, textarea, select"));

    const invalid = (el: Field) =>
      native
        ? el.matches(":user-invalid")
        : touched.get(el) === true && !el.validity.valid;

    const link = (el: Field, shown: boolean) => {
      const errorId = el.dataset.error;
      if (!errorId) return;
      const base = (el.dataset.describe ?? "").split(" ").filter(Boolean);
      const ids = shown ? [...base, errorId] : base;
      if (ids.length) el.setAttribute("aria-describedby", ids.join(" "));
      else el.removeAttribute("aria-describedby");
    };

    const sync = (el: Field, announce = false) => {
      const bad = invalid(el);
      el.setAttribute("aria-invalid", bad ? "true" : "false");
      if (!native) el.classList.toggle("user-invalid-fallback", bad);
      link(el, bad);
      if (!bad || !announce) return;
      const msg = el.dataset.error
        ? document.getElementById(el.dataset.error)
        : null;
      const text = msg?.textContent?.trim();
      if (!text) return;
      clearTimeout(timer);
      // Let the screen reader finish announcing whatever just took focus.
      timer = setTimeout(() => {
        live.textContent = text;
      }, 500);
    };

    const isField = (t: EventTarget | null): t is Field =>
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement;

    const onBlur = (e: Event) => {
      if (!isField(e.target)) return;
      touched.set(e.target, true);
      sync(e.target, true);
    };
    const onInput = (e: Event) => {
      if (isField(e.target)) sync(e.target);
    };
    const onInvalid = (e: Event) => {
      if (!isField(e.target)) return;
      touched.set(e.target, true);
      sync(e.target, true);
    };
    const onReset = () => {
      setTimeout(() => {
        live.textContent = "";
        all().forEach((el) => {
          touched.delete(el);
          sync(el);
        });
      }, 0);
    };

    all().forEach((el) => el.setAttribute("aria-invalid", "false"));

    form.addEventListener("blur", onBlur, true);
    form.addEventListener("input", onInput);
    form.addEventListener("change", onInput, true);
    form.addEventListener("invalid", onInvalid, true);
    form.addEventListener("reset", onReset, true);

    return () => {
      clearTimeout(timer);
      form.removeEventListener("blur", onBlur, true);
      form.removeEventListener("input", onInput);
      form.removeEventListener("change", onInput, true);
      form.removeEventListener("invalid", onInvalid, true);
      form.removeEventListener("reset", onReset, true);
      live.remove();
    };
  }, [formRef]);
}

export default function EnquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  useUserInvalidAria(formRef);

  useEffect(() => {
    if (sent) doneRef.current?.focus();
  }, [sent]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;

    // With an endpoint configured the enquiry is posted to it. Without one it
    // opens the visitor's mail client with everything already filled in.
    if (site.formEndpoint) {
      setBusy(true);
      try {
        const res = await fetch(site.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          signal: AbortSignal.timeout(15000),
        });
        if (!res.ok) throw new Error(String(res.status));
        setSent(true);
        form.reset();
      } catch {
        setError(
          `Something went wrong. Please email us directly at ${site.email}.`,
        );
      } finally {
        setBusy(false);
      }
      return;
    }

    const body = [
      `Name: ${data.name || "-"}`,
      `Email: ${data.email || "-"}`,
      `Phone: ${data.phone || "-"}`,
      `Club or company: ${data.company || "-"}`,
      "",
      data.message || "",
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Enquiry from ${data.name || "the website"}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    form.reset();
  }

  if (sent) {
    return (
      <div
        ref={doneRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl bg-mist p-8 outline-none sm:p-10"
      >
        <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white">
          <Tick size={30} stroke="currentColor" />
        </span>
        <h3 className="text-2xl font-bold">Thanks, we&rsquo;ve got it.</h3>
        <p className="mt-3 text-[17px] leading-[1.55] text-body">
          We&rsquo;ll reply by email within {site.responseTime}.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-7 min-h-[48px] rounded-lg border border-[#cfcfd3] bg-white px-6 py-3 font-bold text-ink transition-colors hover:border-ink/40"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="rounded-2xl bg-mist p-8 sm:p-10"
    >
      <h3 className="text-2xl font-bold">
        <span className="text-accent">Reach</span> us quickly
      </h3>
      <p className="mt-2 text-[15px] text-body">
        Fields marked <span aria-hidden="true">*</span> are required.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="field">
          <label className={labelClass} htmlFor="name">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Enter name"
            data-error="name-error"
            className={fieldClass}
          />
          <ErrorText id="name-error">Enter your name.</ErrorText>
        </div>

        <div className="field">
          <label className={labelClass} htmlFor="email">
            Email <span aria-hidden="true">*</span>
          </label>
          {/* Hint sits above the input so autocomplete popovers can't cover it. */}
          <p id="email-hint" className={hintClass}>
            We&rsquo;ll reply here, e.g. you@example.com
          </p>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Enter email"
            aria-describedby="email-hint"
            data-describe="email-hint"
            data-error="email-error"
            className={fieldClass}
          />
          <ErrorText id="email-error">
            Enter an email address in the format you@example.com.
          </ErrorText>
        </div>

        <div className="field">
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Your phone"
            className={fieldClass}
          />
        </div>

        <div className="field">
          <label className={labelClass} htmlFor="company">
            Club or company
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Optional"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="How many kits, and anything else we should know"
          data-error="message-error"
          className={`${fieldClass} resize-y`}
        />
        <ErrorText id="message-error">
          Tell us how many kits you need.
        </ErrorText>
      </div>

      {error ? (
        <p role="alert" className="mt-4 text-[15px] text-accent-deep">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        aria-busy={busy}
        className="mt-7 min-h-[56px] rounded-lg bg-accent px-8 py-3.5 text-[18px] font-bold text-white transition-colors hover:bg-accent-deep"
      >
        {busy ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
