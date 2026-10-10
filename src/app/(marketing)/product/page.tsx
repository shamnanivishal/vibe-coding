import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { features } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product",
};

const modules = [
  {
    name: "Alert correlation",
    detail: "Groups duplicate and related signals into a single incident within seconds, using service ownership and topology.",
  },
  {
    name: "On-call engine",
    detail: "Rotations, overrides, and escalation policies that sync to every calendar and never double-page the same engineer.",
  },
  {
    name: "Incident command",
    detail: "One channel for status updates, timeline, and stakeholder comms while the incident is still live.",
  },
];

export default function ProductPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:px-8">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">Product</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          The layer above your monitoring stack — not another dashboard.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          Relay sits on top of Datadog, Prometheus, or whatever throws alerts at you, and turns
          noise into an incident your team can actually act on.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-5 sm:px-8 md:grid-cols-3">
        {modules.map((item) => (
          <article key={item.name} className="rounded-2xl border border-line bg-card p-6">
            <h2 className="font-semibold text-ink">{item.name}</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="text-2xl font-semibold text-ink">Capabilities</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <li key={feature.title} className="border-t border-line pt-5">
              <h3 className="font-medium text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{feature.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <CtaBanner />
    </>
  );
}
