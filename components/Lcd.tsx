import type { ReactNode } from "react";

/** Dark LCD chip, used for page labels and metadata. */
export function Lcd({
  children,
  as: Tag = "span",
  className = "",
}: {
  children: ReactNode;
  as?: "span" | "h1" | "h2" | "p";
  className?: string;
}) {
  return <Tag className={`lcd octagon ${className}`}>{children}</Tag>;
}
