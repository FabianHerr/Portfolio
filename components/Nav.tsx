"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { profile } from "@/content/profile";
import { Monogram } from "@/components/Monogram";

/* --- icons: custom line marks for the pages, brand glyphs for the channels --- */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const GridIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" />
    <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" />
    <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" />
    <rect x="13.5" y="13.5" width="7" height="7" rx="1.6" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
    <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
    <path d="M3 12.75h18" />
  </svg>
);

const AboutIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <circle cx="12" cy="8.5" r="3.75" />
    <path d="M5 20a7 7 0 0 1 14 0" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...stroke}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7.5 8 5.5 8-5.5" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const INTERNAL: { href: string; label: string; icon: ReactNode }[] = [
  { href: "/projects", label: "Projects", icon: <GridIcon /> },
  { href: "/work", label: "Work", icon: <BriefcaseIcon /> },
  { href: "/about", label: "About", icon: <AboutIcon /> },
  { href: "/contact", label: "Contact", icon: <MailIcon /> },
];

const EXTERNAL: { href: string; label: string; icon: ReactNode }[] = [
  { href: profile.github, label: "GitHub", icon: <GitHubIcon /> },
  { href: profile.linkedin, label: "LinkedIn", icon: <LinkedInIcon /> },
].filter((l) => Boolean(l.href));

/**
 * Mobile: a floating horizontal resin pill at the top.
 * md+: the same pill turned into a slim vertical rail pinned to the left.
 * Icon-only. The accessible name is on aria-label, and on md+ a label chip
 * flies out on hover/focus. The shell is split: `.resin-bar` is decoration
 * (clipped to the octagon), `.nav-inner` holds the content unclipped so the
 * flyout labels can extend past the bar edge.
 */
export function Nav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-3 z-40 px-3 sm:top-4 sm:px-4 md:top-6 md:self-start md:px-0 md:pl-4 lg:pl-6">
      <div className="nav-wrap mx-auto max-w-[46rem] md:mx-0 md:max-w-[7rem]">
        <div className="chassis octagon" aria-hidden="true">
          <div className="chassis-grid" />
        </div>
        <div className="resin-bar octagon" aria-hidden="true" />

        <header className="nav-inner flex items-center justify-between gap-3 px-4 py-3 sm:px-5 md:flex-col md:items-center md:gap-5 md:px-3 md:py-7">
          <Link
            href="/"
            aria-label={`${profile.name}, home`}
            className="nav-home"
          >
            <Monogram />
          </Link>

          <nav className="flex items-center gap-0.5 sm:gap-1 md:w-full md:flex-col md:items-center md:gap-2 md:border-t md:border-hairline md:pt-5">
            {INTERNAL.map((l) => {
              const active =
                pathname === l.href || pathname.startsWith(l.href + "/");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-label={l.label}
                  aria-current={active ? "page" : undefined}
                  className={`nav-ico p-1.5 sm:p-2 md:p-3 ${active ? "nav-ico--active" : ""}`}
                >
                  {l.icon}
                  <span className="nav-ico-label">{l.label}</span>
                </Link>
              );
            })}

            <span
              aria-hidden="true"
              className="mx-1 h-5 w-px shrink-0 bg-hairline md:mx-0 md:my-3 md:h-px md:w-full"
            />

            {EXTERNAL.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                className="nav-ico p-1.5 sm:p-2 md:p-3"
              >
                {l.icon}
                <span className="nav-ico-label">{l.label}</span>
              </a>
            ))}
          </nav>
        </header>
      </div>
    </div>
  );
}
