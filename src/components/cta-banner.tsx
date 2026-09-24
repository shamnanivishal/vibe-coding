import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="rounded-3xl bg-ink px-8 py-12 text-card sm:px-12">
        <h2 className="max-w-lg text-3xl font-semibold tracking-tight">
          Ready to make on-call less miserable?
        </h2>
        <p className="mt-3 max-w-md text-sm leading-6 text-card/70">
          14-day trial. No credit card. Bring your existing monitoring stack.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/signup"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-dark"
          >
            Start free trial
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium hover:bg-white/10"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </section>
  );
}
