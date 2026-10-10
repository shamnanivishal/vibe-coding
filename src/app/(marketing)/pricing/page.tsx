import type { Metadata } from "next";
import Link from "next/link";
import { plans } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">Pricing</p>
      <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-ink">
        Simple seats. Serious enterprise options.
      </h1>
      <p className="mt-4 max-w-xl text-muted leading-7">
        Annual billing saves 15%. All plans include SOC 2 reports on request and a 14-day trial.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`flex flex-col rounded-2xl border p-6 ${
              plan.featured
                ? "border-ink bg-ink text-card shadow-lg"
                : "border-line bg-card"
            }`}
          >
            <h2 className="text-lg font-semibold">{plan.name}</h2>
            <p className={`mt-1 text-sm ${plan.featured ? "text-card/70" : "text-muted"}`}>
              {plan.blurb}
            </p>
            <p className="mt-6 text-4xl font-semibold tracking-tight">{plan.price}</p>
            <p className={`text-sm ${plan.featured ? "text-card/70" : "text-muted"}`}>{plan.period}</p>
            <ul className="mt-6 flex-1 space-y-2 text-sm">
              {plan.items.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
            <Link
              href={plan.href}
              className={`mt-8 rounded-full px-4 py-2.5 text-center text-sm font-medium ${
                plan.featured
                  ? "bg-accent text-white hover:bg-accent-dark"
                  : "bg-ink text-card hover:bg-ink/90"
              }`}
            >
              {plan.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
