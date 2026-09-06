/**
 * "FH" in a machined octagon, the site mark. Stroke weight matches the nav
 * icons; `currentColor` throughout so it takes the link's ink.
 * Used in the nav rail and mirrored in `app/icon.tsx` (favicon).
 */
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      width="38"
      height="38"
      aria-hidden="true"
      focusable="false"
    >
      <polygon
        points="9,1.6 31,1.6 38.4,9 38.4,31 31,38.4 9,38.4 1.6,31 1.6,9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="miter"
      />
      <text
        x="20"
        y="20.5"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-condensed)",
          fontWeight: 600,
          fontSize: "13.5px",
          letterSpacing: "0.5px",
        }}
      >
        FH
      </text>
    </svg>
  );
}
