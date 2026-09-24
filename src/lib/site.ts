export const company = {
  name: "Relay",
  tagline: "The pager your engineers won't dread",
  description:
    "Relay unifies alerting, on-call scheduling, and incident response so engineering teams find the real problem, resolve it fast, and never lose the timeline.",
};

export const nav = [
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const customers = [
  "Cascadia Labs",
  "Ferrovia",
  "Northlight",
  "Loopwork",
  "Harborline",
  "Vantable",
];

export const features = [
  {
    title: "Alerts that don't cry wolf",
    body: "Relay correlates noisy signals from every monitoring tool into one incident, so on-call engineers see the real problem — not forty duplicate pages.",
  },
  {
    title: "Schedules people can plan around",
    body: "Fair rotations, automatic overrides, and calendar sync mean nobody finds out they're on-call from a text at 2am.",
  },
  {
    title: "Incident timelines, automatically",
    body: "Every ack, escalation, and Slack message is logged the moment it happens — no scribe, no reconstructing what happened after the fact.",
  },
  {
    title: "Status pages in one click",
    body: "Public and internal status pages update themselves from incident state, so support stops asking \"is this a known issue?\"",
  },
  {
    title: "Postmortems that get read",
    body: "Structured templates auto-filled with the timeline, plus action items that stay tracked instead of dying in a doc.",
  },
  {
    title: "Security & compliance built in",
    body: "SSO, SCIM, audit logs, and SOC 2 Type II reports for procurement teams who ask hard questions.",
  },
];

export const plans = [
  {
    name: "Free",
    price: "$0",
    period: "per month",
    blurb: "Try Relay on a side project or a two-person on-call rotation.",
    cta: "Start for free",
    href: "/signup",
    featured: false,
    items: [
      "Up to 3 responders",
      "Alert routing & escalation",
      "Mobile push + SMS",
      "7-day incident history",
      "Community support",
    ],
  },
  {
    name: "Team",
    price: "$500",
    period: "per month",
    blurb: "For teams running a real on-call rotation.",
    cta: "Start free trial",
    href: "/signup",
    featured: true,
    items: [
      "Up to 25 responders",
      "Smart alert dedup & correlation",
      "Public + internal status pages",
      "Postmortem templates",
      "Slack + PagerDuty migration",
      "Priority support",
    ],
  },
  {
    name: "Business",
    price: "$25,000",
    period: "per month",
    blurb: "For engineering orgs running on-call at scale.",
    cta: "Start free trial",
    href: "/signup",
    featured: false,
    items: [
      "Unlimited responders",
      "Advanced routing across services",
      "Custom status page domains",
      "Full incident analytics & reporting",
      "SSO",
      "Dedicated onboarding",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual contract",
    blurb: "For orgs with strict compliance and procurement needs.",
    cta: "Talk to sales",
    href: "/contact",
    featured: false,
    items: [
      "SSO, SCIM, and audit logs",
      "Custom data residency",
      "Dedicated CSM",
      "Sandbox + UAT",
      "99.99% uptime SLA",
    ],
  },
];
