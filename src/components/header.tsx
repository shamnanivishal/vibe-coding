"use client";

import Link from "next/link";
import { useState } from "react";
import { company, nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-sm text-card">
            R
          </span>
          {company.name}
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="text-sm font-medium text-ink hover:opacity-70">
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-card hover:bg-ink/90"
          >
            Start trial
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md border border-line px-3 py-1.5 text-sm md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-card px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <Link href="/login" onClick={() => setOpen(false)}>
              Sign in
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-ink px-4 py-2 text-center text-card"
              onClick={() => setOpen(false)}
            >
              Start trial
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
