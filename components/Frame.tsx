import type { ReactNode } from "react";

/**
 * The site's signature surface — stacked translucent planes inside one octagon:
 *
 *   chassis      real structure (offset "inner case" + construction grid)
 *   resin-thin   the see-through bezel band — the only backdrop-filter blur
 *   iris         the concentric-ring dial — homepage only, above the blur
 *   resin-read   the dial face — holds all text, dense enough for AA
 *
 * Layers are siblings, not nested: backdrop-filter blurs what's painted behind
 * the element, never its children.
 */
export function Frame({
  children,
  className = "",
  iris = false,
}: {
  children: ReactNode;
  className?: string;
  iris?: boolean;
}) {
  return (
    <div className={`frame ${iris ? "frame-dial" : ""} ${className}`}>
      <div className="chassis octagon" aria-hidden="true">
        <div className="chassis-grid" />
        <div className="chassis-case" />
      </div>
      <div className="resin-thin octagon" aria-hidden="true" />
      {iris ? <div className="iris octagon" aria-hidden="true" /> : null}
      <div className="resin-read octagon p-7 sm:p-10">{children}</div>
    </div>
  );
}
