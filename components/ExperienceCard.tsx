"use client";

import { useId, useState } from "react";
import type { Experience } from "@/content/experience";

/**
 * One job on /work. Collapsed it shows the company + a one-line role/period;
 * click to expand the detail. The expand is a grid-rows transition (globals.css).
 */
export function ExperienceCard({
  entry,
  open: initialOpen = false,
}: {
  entry: Experience;
  open?: boolean;
}) {
  const [open, setOpen] = useState(initialOpen);
  const bodyId = useId();

  return (
    <div className="xpc octagon" data-open={open ? "true" : undefined}>
      <button
        type="button"
        className="xpc-head"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="xpc-company">{entry.company}</span>
        <span className="xpc-line">
          {entry.role} &middot; {entry.period} &middot; {entry.location}
        </span>
        <span className="xpc-toggle" aria-hidden="true">
          +
        </span>
      </button>

      <div
        className="xpc-body"
        id={bodyId}
        role="region"
        aria-label={entry.company}
        inert={!open}
      >
        <div className="xpc-body-inner">
          <div className="xpc-body-pad">
            <p className="xpc-summary">{entry.summary}</p>
            <ul className="xpc-points">
              {entry.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <ul className="xpc-stack">
              {entry.stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
