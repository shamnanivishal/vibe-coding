import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { company, customers, features } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-accent">
          Incident response platform
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-6xl sm:leading-[1.05]">
          {company.tagline}.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{company.description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/signup"
            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-card hover:bg-ink/90"
          >
            Start free trial
          </Link>
          <Link
            href="/product"
            className="rounded-full border border-line bg-card px-6 py-3 text-sm font-medium text-ink hover:border-ink/20"
          >
            See the product
          </Link>
        </div>
      </section>

      <section className="border-y border-line bg-card/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-3 px-5 py-6 text-sm text-muted sm:px-8">
          <span className="text-xs uppercase tracking-widest">Trusted by engineering teams at</span>
          {customers.map((name) => (
            <span key={name} className="font-medium text-ink/70">
              {name}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-ink">
            Built for on-call, SRE, and support — together.
          </h2>
          <p className="mt-4 text-muted leading-7">
            Relay replaces the noisy alert channel, the guesswork about who&apos;s on-call, and the
            postmortem doc nobody finishes. Engineers get signal instead of noise. Leaders get a
            system that proves reliability.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-card p-6 shadow-[0_20px_50px_-28px_rgba(12,14,24,0.35)]">
          <p className="text-xs uppercase tracking-widest text-muted">This week</p>
          <p className="mt-3 text-4xl font-semibold text-ink">4m 12s</p>
          <p className="text-sm text-muted">median time to acknowledge · 38% faster than last quarter</p>
          <div className="mt-6 space-y-3">
            {[
              ["API latency spike", "Resolved", "Auto-correlated 12 alerts"],
              ["Payments webhook errors", "Investigating", "Escalated to Priya"],
              ["Cascadia sync delay", "Monitoring", "Fix deployed, watching metrics"],
            ].map(([incident, status, note]) => (
              <div key={incident} className="flex items-start justify-between gap-4 border-t border-line pt-3 text-sm">
                <div>
                  <p className="font-medium text-ink">{incident}</p>
                  <p className="text-muted">{note}</p>
                </div>
                <span className="shrink-0 rounded-full bg-background px-2.5 py-1 text-xs">{status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-ink">What Relay does</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-line bg-card p-6">
              <h3 className="font-semibold text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <blockquote className="max-w-3xl text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
          “We finally stopped losing the timeline. Relay writes the postmortem while we&apos;re still
          fixing the incident.”
        </blockquote>
        <p className="mt-4 text-sm text-muted">Priya Nair, Director of Engineering · Ferrovia</p>
      </section>

      <CtaBanner />
    </>
  );
}
