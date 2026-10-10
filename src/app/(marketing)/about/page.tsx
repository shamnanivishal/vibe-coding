import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">About Relay</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          We build software for the 3am page nobody wants.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          Relay started after one too many incidents where the alert was right and the tooling
          wasn&apos;t. We are a small product team in Berlin and Toronto, shipping weekly for
          engineering orgs who take reliability seriously.
        </p>

        <div className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
          {[
            ["2025", "Founded"],
            ["260+", "Engineering teams onboard"],
            ["4m", "Median time to acknowledge, across customers"],
          ].map(([stat, label]) => (
            <div key={label}>
              <p className="text-3xl font-semibold text-ink">{stat}</p>
              <p className="mt-1 text-sm text-muted">{label}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
