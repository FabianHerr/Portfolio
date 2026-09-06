import type { Project } from "@/content/projects";

/**
 * One project as a rounded resin-framed button. The whole card is a single <a>:
 * click anywhere and it opens the project's primary destination. Stacked layers:
 *
 *   pc-image   the project image, full-bleed, the whole card
 *              (pc-image--motif = a plain black card for Parche, which has no asset)
 *   pc-scrim   a dark wash so the text is legible directly on the image
 *   pc-body    name + tagline + stack
 *   pc-shine   the glass-shine sweep on hover
 *
 * Hover lifts the whole card; focus draws an ink outline on the <a>.
 * See .project-card in globals.css.
 */
export function ProjectCard({ project }: { project: Project }) {
  const href = project.links[0].href;

  return (
    <li>
      <a
        className="project-card"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.name}. ${project.tagline}`}
      >
        <span
          className={`pc-image${project.image ? "" : " pc-image--motif"}${
            project.image?.endsWith(".svg") ? " pc-image--contain" : ""
          }`}
          aria-hidden="true"
        >
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.image} alt="" loading="lazy" decoding="async" />
          ) : null}
        </span>

        <span className="pc-scrim" aria-hidden="true" />

        <span className="pc-body">
          <h2 className="font-sans text-[1.3rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[1.5rem]">
            {project.name}
          </h2>
          <p className="pc-tagline mt-2 text-[0.95rem] leading-[1.5]">{project.tagline}</p>
          <p className="pc-stack mt-2.5 font-mono text-[0.68rem] uppercase tracking-[0.09em]">
            {project.stack.join("  ·  ")}
          </p>
        </span>

        <span className="pc-shine" aria-hidden="true" />
      </a>
    </li>
  );
}
