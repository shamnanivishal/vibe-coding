"use client";

import Link from "next/link";
import { FormEvent } from "react";

export default function SignupPage() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = "/dashboard";
  }

  return (
    <section className="mx-auto flex max-w-md flex-col px-5 py-20 sm:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">Start your 14-day trial</h1>
      <p className="mt-2 text-sm text-muted">Team plan features, no credit card. Demo signup only.</p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <label className="block text-sm">
          Full name
          <input
            required
            name="name"
            className="mt-1 w-full rounded-xl border border-line bg-card px-3 py-2.5 outline-none focus:border-accent"
          />
        </label>
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
          Password
          <input
            required
            type="password"
            name="password"
            minLength={8}
            className="mt-1 w-full rounded-xl border border-line bg-card px-3 py-2.5 outline-none focus:border-accent"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-full bg-ink py-2.5 text-sm font-medium text-card hover:bg-ink/90"
        >
          Create workspace
        </button>
      </form>
      <p className="mt-6 text-sm text-muted">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-ink">
          Sign in
        </Link>
      </p>
    </section>
  );
}
