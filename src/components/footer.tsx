import Link from "next/link";
import { company, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-semibold text-ink">{company.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-6 text-muted">{company.tagline}</p>
        </div>
        <div className="text-sm">
          <p className="font-medium text-ink">Product</p>
          <div className="mt-3 flex flex-col gap-2 text-muted">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-sm">
          <p className="font-medium text-ink">Company</p>
          <div className="mt-3 flex flex-col gap-2 text-muted">
            <Link href="/login" className="hover:text-ink">
              Sign in
            </Link>
            <Link href="/signup" className="hover:text-ink">
              Start a trial
            </Link>
            <Link href="/dashboard" className="hover:text-ink">
              Product preview
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-line px-5 py-4 text-center text-xs text-muted sm:px-8">
        © {new Date().getFullYear()} {company.name}. Starter template — not a live product.
      </div>
    </footer>
  );
}
