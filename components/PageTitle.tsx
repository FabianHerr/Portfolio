import type { ReactNode } from "react";

/**
 * The one heading style shared by every content page (/projects /work /about
 * /contact): same font, size, weight, colour, no background chip. Consistency
 * was the whole point (Fabian: the old `Lcd` eyebrow looked different on every
 * page — boxed on some, not on others, three different positions).
 */
export function PageTitle({ children }: { children: ReactNode }) {
  return <h1 className="page-title">{children}</h1>;
}
