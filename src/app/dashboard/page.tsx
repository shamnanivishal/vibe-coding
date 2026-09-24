import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dashboard",
};

const incidents = [
  { name: "API latency spike", severity: "SEV2", status: "Resolved", owner: "Priya" },
  { name: "Payments webhook errors", severity: "SEV1", status: "Investigating", owner: "Jonas" },
  { name: "Cascadia sync delay", severity: "SEV3", status: "Monitoring", owner: "Amelia" },
  { name: "Auth token expiry bug", severity: "SEV2", status: "Resolved", owner: "Chris" },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-full flex-1 bg-background">
      <aside className="hidden w-56 shrink-0 border-r border-line bg-card p-5 md:block">
        <Link href="/" className="flex items-center gap-2 font-semibold text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-sm text-card">
            R
          </span>
          Relay
        </Link>
        <nav className="mt-8 flex flex-col gap-2 text-sm">
          <span className="rounded-lg bg-background px-3 py-2 font-medium text-ink">Incidents</span>
          <span className="px-3 py-2 text-muted">Schedule</span>
          <span className="px-3 py-2 text-muted">Services</span>
          <span className="px-3 py-2 text-muted">Postmortems</span>
          <Link href="/" className="mt-6 px-3 py-2 text-muted hover:text-ink">
            ← Marketing site
          </Link>
        </nav>
      </aside>
      <div className="flex-1 px-5 py-8 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-muted">Workspace · Relay demo</p>
            <h1 className="mt-1 text-2xl font-semibold text-ink">This week&apos;s incidents</h1>
          </div>
          <Link href="/" className="text-sm text-muted md:hidden">
            Home
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["MTTA", "4m 12s"],
            ["MTTR", "38m"],
            ["Open incidents", "3"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-line bg-card p-5">
              <p className="text-xs uppercase tracking-widest text-muted">{label}</p>
              <p className="mt-2 text-2xl font-semibold text-ink">{value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-card">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-line text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Incident</th>
                <th className="px-4 py-3 font-medium">Severity</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="hidden px-4 py-3 font-medium sm:table-cell">Owner</th>
              </tr>
            </thead>
            <tbody>
              {incidents.map((incident) => (
                <tr key={incident.name} className="border-b border-line last:border-0">
                  <td className="px-4 py-3 text-ink">{incident.name}</td>
                  <td className="px-4 py-3">{incident.severity}</td>
                  <td className="px-4 py-3">{incident.status}</td>
                  <td className="hidden px-4 py-3 sm:table-cell">{incident.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
