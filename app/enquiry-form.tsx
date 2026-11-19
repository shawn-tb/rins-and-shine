"use client";

import { useState } from "react";
import { site } from "@/site.config";
import { Tick } from "./icons";

const field =
  "min-h-[52px] w-full rounded-lg border border-line bg-white px-4 py-3 text-[17px] text-ink outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20";
const label = "mb-2 block text-[15px] font-bold text-ink";

export default function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

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
      <div className="rounded-2xl bg-mist p-8 sm:p-10">
        <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white">
          <Tick size={30} stroke="#FFFFFF" />
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
    <form onSubmit={onSubmit} className="rounded-2xl bg-mist p-8 sm:p-10">
      <h3 className="text-2xl font-bold">
        <span className="text-accent">Reach</span> us quickly
      </h3>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            placeholder="Enter name"
            className={field}
          />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Enter email"
            className={field}
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            autoComplete="tel"
            placeholder="Your phone"
            className={field}
          />
        </div>
        <div>
          <label className={label} htmlFor="company">
            Club or company
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            placeholder="Optional"
            className={field}
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={label} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="How many kits, and anything else we should know"
          className={`${field} resize-y`}
        />
      </div>

      {error ? (
        <p role="alert" className="mt-4 text-[15px] text-accent-deep">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={busy}
        className="mt-7 min-h-[56px] rounded-lg bg-accent px-8 py-3.5 text-[18px] font-bold text-white transition-colors hover:bg-accent-deep disabled:opacity-60"
      >
        {busy ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
