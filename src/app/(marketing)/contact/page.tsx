"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">Contact</p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-ink">
        Book a demo with Relay.
      </h1>
      <p className="mt-4 max-w-xl text-muted leading-7">
        Tell us about your stack and team size. This starter captures the request locally — wire it
        to your CRM or form backend when you are ready.
      </p>

      {sent ? (
        <p className="mt-10 max-w-md rounded-2xl border border-line bg-card p-6 text-ink">
          Thanks — we will reach out within one business day. (Demo only: nothing was emailed.)
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-10 max-w-md space-y-4">
          <label className="block text-sm">
            Work email
            <input
              required
              type="email"
              name="email"
              className="mt-1 w-full rounded-xl border border-line bg-card px-3 py-2.5 outline-none focus:border-accent"
            />
          </label>
          <label className="block text-sm">
            Company
            <input
              required
              name="company"
              className="mt-1 w-full rounded-xl border border-line bg-card px-3 py-2.5 outline-none focus:border-accent"
            />
          </label>
          <label className="block text-sm">
            What should we cover?
            <textarea
              name="notes"
              rows={4}
              className="mt-1 w-full rounded-xl border border-line bg-card px-3 py-2.5 outline-none focus:border-accent"
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-card hover:bg-ink/90"
          >
            Request demo
          </button>
        </form>
      )}
    </section>
  );
}
