import type { ReactNode } from "react";

/**
 * The octagon panel used by /about, /contact and 404. Stacked translucent
 * planes, siblings not nested (backdrop-filter blurs what's painted behind the
 * element, never its children):
 *
 *   chassis      real structure (offset "inner case" + construction grid)
 *   resin-thin   the see-through bezel band, the only backdrop-filter blur
 *   resin-read   the panel face, holds all text, dense enough for AA
 */
export function Frame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`frame ${className}`}>
      <div className="chassis octagon" aria-hidden="true">
        <div className="chassis-grid" />
        <div className="chassis-case" />
      </div>
      <div className="resin-thin octagon" aria-hidden="true" />
      <div className="resin-read octagon p-7 sm:p-10">{children}</div>
    </div>
  );
}
