"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/content/profile";

const LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/**
 * Mobile: a floating horizontal resin pill at the top.
 * md+: the same pill turned into a slim vertical rail pinned to the left.
 * The `.chassis` sibling gives the pill's backdrop-filter real structure to blur.
 */
export function Nav() {
  const pathname = usePathname();

  return (
    <div className="sticky top-3 z-40 px-3 sm:top-4 sm:px-4 md:top-6 md:self-start md:px-0 md:pl-4 lg:pl-6">
      <div className="nav-wrap mx-auto max-w-[46rem] md:mx-0 md:max-w-[9.5rem]">
        <div className="chassis octagon" aria-hidden="true">
          <div className="chassis-grid" />
        </div>

        <header className="resin-bar octagon flex items-center justify-between gap-3 px-4 py-3 sm:px-5 md:flex-col md:items-start md:gap-4 md:px-4 md:py-5">
          <Link
            href="/"
            className="shrink-0 font-sans text-base font-semibold leading-none tracking-[-0.02em] sm:text-lg md:text-[0.95rem] md:leading-[1.2]"
          >
            {profile.name}
          </Link>

          <nav className="flex items-center gap-1 sm:gap-1.5 md:w-full md:flex-col md:items-start md:gap-2 md:border-t md:border-hairline md:pt-3.5">
            {LINKS.map((l) => {
              const active =
                pathname === l.href || pathname.startsWith(l.href + "/");
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "inline-flex"
                      : "px-1.5 py-1 font-condensed text-[0.8125rem] uppercase tracking-[0.16em] text-ink-2 transition-colors hover:text-ink"
                  }
                >
                  {active ? (
                    <span className="lcd octagon">{l.label}</span>
                  ) : (
                    l.label
                  )}
                </Link>
              );
            })}
          </nav>
        </header>
      </div>
    </div>
  );
}
