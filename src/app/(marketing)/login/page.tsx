"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "");
    if (!email.includes("@")) {
      setError("Enter a work email.");
      return;
    }
    window.location.href = "/dashboard";
  }

  return (
    <section className="mx-auto flex max-w-md flex-col px-5 py-20 sm:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-ink">Sign in to Relay</h1>
      <p className="mt-2 text-sm text-muted">Use your work email. This starter skips real auth.</p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <label className="block text-sm">
          Email
          <input
            required
            type="email"
            name="email"
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
        {error ? <p className="text-sm text-red-700">{error}</p> : null}
        <button
          type="submit"
          className="w-full rounded-full bg-ink py-2.5 text-sm font-medium text-card hover:bg-ink/90"
        >
          Continue
        </button>
      </form>
      <p className="mt-6 text-sm text-muted">
        No account?{" "}
        <Link href="/signup" className="font-medium text-ink">
          Start a trial
        </Link>
      </p>
    </section>
  );
}
