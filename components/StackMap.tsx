"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { stack, GROUPS, type Tool } from "@/content/stack";

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function parse(since: string): [number, number] {
  const [y, m] = since.split("-").map(Number);
  return [y, m];
}
function monthsBetween(since: string, now: Date): number {
  const [y, m] = parse(since);
  return (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m);
}
function shortDur(months: number): string {
  return months >= 12 ? `${Math.round(months / 12)}y` : `${Math.max(1, months)}mo`;
}
function longDur(months: number): string {
  if (months >= 12) {
    const y = Math.round(months / 12);
    return `${y} year${y === 1 ? "" : "s"}`;
  }
  const mo = Math.max(1, months);
  return `${mo} month${mo === 1 ? "" : "s"}`;
}
function fmtSince(since: string): string {
  const [y, m] = parse(since);
  return `${MONTHS[m - 1]} ${y}`;
}

// ink-2 (#53585f) -> accent (#0369a1, keep in sync with --accent in globals.css):
// mixed in JS rather than a CSS color-mix() inside a box-shadow, which is
// fragile across engines. Newer tools sit near ink-2, the ones Fabian's held
// longest shade toward the accent.
const INK_2: [number, number, number] = [83, 88, 95];
const ACCENT: [number, number, number] = [3, 105, 161];
function mixRing(t: number): string {
  const [r, g, b] = INK_2.map((c, i) => Math.round(c + (ACCENT[i] - c) * t));
  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * The toolkit as a skills map: a bubble per technology, its diameter set by how
 * long Fabian's used it. Hover / focus / tap for the since-date and where.
 * Monochrome; tenure, not a self-rating (CLAUDE.md §1).
 */
export function StackMap() {
  const now = useMemo(() => new Date(), []);
  const [active, setActive] = useState<string | null>(null);
  const clear = (name: string) =>
    setActive((a) => (a === name ? null : a));

  const withMonths = stack.map((t) => ({ t, months: monthsBetween(t.since, now) }));
  const maxMonths = Math.max(...withMonths.map((x) => x.months));

  // bubble diameter, in rem: the longest-held tool hits MAX, newest sits near MIN.
  // pow(<1) opens up the low end so 8 months still reads as a real bubble.
  const MIN_D = 2.6;
  const MAX_D = 5.6;

  const activeTool: Tool | undefined = active
    ? stack.find((t) => t.name === active)
    : undefined;

  let i = 0;

  return (
    <section
      className="stackmap"
      aria-label="Technologies I use, sized by how long I've used each"
      data-hovering={active ? "true" : undefined}
    >
      <p className="sk-intro">What I build with, sized by how long I&rsquo;ve used it</p>

      {GROUPS.map((group) => (
        <div className="sk-group" key={group}>
          <p className="sk-label">{group}</p>
          <div className="sk-cluster">
            {withMonths
              .filter((x) => x.t.group === group)
              .map(({ t, months }) => {
                const frac = Math.pow(months / maxMonths, 0.72);
                const d = MIN_D + frac * (MAX_D - MIN_D);
                const delay = i++ * 40;
                return (
                  <button
                    key={t.name}
                    type="button"
                    className="sk-bub-wrap"
                    data-active={active === t.name ? "true" : undefined}
                    style={
                      {
                        "--d": `${d.toFixed(2)}rem`,
                        "--ring": mixRing(frac),
                        "--sk-delay": `${delay}ms`,
                      } as CSSProperties
                    }
                    onMouseEnter={() => setActive(t.name)}
                    onMouseLeave={() => clear(t.name)}
                    onFocus={() => setActive(t.name)}
                    onBlur={() => clear(t.name)}
                    onClick={() => setActive(t.name)}
                    aria-label={`${t.name}, ${longDur(months)} of experience, since ${fmtSince(
                      t.since,
                    )}, used in ${t.where.join(", ")}`}
                  >
                    <span className="sk-bub">
                      <span className="sk-dur">{shortDur(months)}</span>
                    </span>
                    <span className="sk-name">{t.name}</span>
                  </button>
                );
              })}
          </div>
        </div>
      ))}

      <p className="sk-detail" aria-live="polite">
        {activeTool ? (
          <>
            <strong>{activeTool.name}</strong> &middot; since{" "}
            {fmtSince(activeTool.since)} &middot; {activeTool.where.join(", ")}
          </>
        ) : (
          "Hover, focus or tap a bubble for the details."
        )}
      </p>
    </section>
  );
}
