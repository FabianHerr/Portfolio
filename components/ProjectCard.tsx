import type { Project } from "@/content/projects";

const EXTERNAL = /^https?:\/\//;

type Variant = "lead" | "wide" | "tile";

function ProjectLinks({
  links,
  accentFirst = false,
}: {
  links: Project["links"];
  accentFirst?: boolean;
}) {
  return (
    <>
      {links.map((l, i) => (
        <a
          key={l.href}
          href={l.href}
          {...(EXTERNAL.test(l.href)
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className={`pc-link${accentFirst && i === 0 ? " pc-link--accent" : ""}`}
        >
          {l.label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </>
  );
}

/**
 * One project, as an octagon card — the same stacked-resin material as the
 * homepage frame (tinted band → dense reading face → content), minus the blur.
 * The content layer is unclipped so link focus rings aren't cut by the octagon.
 *
 *   lead   LogBait — full width, larger name, the one accent link
 *   wide   the closing card — full width, keeps the row count even
 *   tile   a half-width card in the peer row
 *
 * so a row of cards never reads as four identical tiles.
 */
export function ProjectCard({
  project,
  variant = "tile",
}: {
  project: Project;
  variant?: Variant;
}) {
  const banner = variant !== "tile";
  const spanClass =
    variant === "lead" ? " is-lead" : variant === "wide" ? " is-wide" : "";

  return (
    <li className={`project-card${spanClass}`}>
      <div className="pc-band octagon" aria-hidden="true" />
      <div className="pc-face octagon" aria-hidden="true" />

      {banner ? (
        <div className="pc-body flex flex-1 flex-col gap-4 p-6 sm:gap-5 sm:p-8">
          <div className="flex flex-col gap-x-5 gap-y-1.5 sm:flex-row sm:items-baseline">
            <h2
              className={`shrink-0 font-sans font-semibold leading-[1.1] tracking-[-0.02em] ${
                variant === "lead"
                  ? "text-[1.8rem] sm:text-[1.95rem]"
                  : "text-2xl sm:text-[1.5rem]"
              }`}
            >
              {project.name}
            </h2>
            <p
              className={`text-ink-2 ${
                variant === "lead"
                  ? "text-[1.05rem] leading-[1.45] sm:text-[1.15rem]"
                  : "text-[0.95rem] leading-[1.45]"
              }`}
            >
              {project.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.09em] text-ink-2">
              {project.stack.join("  ·  ")}
            </p>
            <p className="flex gap-x-4 font-mono text-[0.82rem]">
              <ProjectLinks
                links={project.links}
                accentFirst={variant === "lead"}
              />
            </p>
          </div>
        </div>
      ) : (
        <div className="pc-body flex flex-1 flex-col p-5 sm:p-6">
          <h2 className="font-sans text-xl font-semibold leading-tight tracking-[-0.02em] sm:text-[1.3rem]">
            {project.name}
          </h2>
          <p className="mt-2 text-[0.9rem] leading-[1.5] text-ink-2">
            {project.tagline}
          </p>
          <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.09em] text-ink-2">
            {project.stack.join("  ·  ")}
          </p>
          <p className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-5 font-mono text-[0.8rem]">
            <ProjectLinks links={project.links} />
          </p>
        </div>
      )}
    </li>
  );
}
