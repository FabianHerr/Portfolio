import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  const last = projects.length - 1;
  // LogBait leads; if the remaining count is odd, the last card goes full-width
  // so the tile rows never leave an orphan.
  const closeWide = last % 2 === 1;

  return (
    <div className="w-full max-w-[64rem]">
      <header className="mb-6 flex items-baseline justify-between gap-4">
        <h1 className="font-condensed text-[0.9rem] font-medium uppercase tracking-[0.22em] text-ink-2">
          Selected work
        </h1>
        <span className="lcd-num text-[1.3rem] leading-none text-ink-2" aria-hidden="true">
          {String(projects.length).padStart(2, "0")}
        </span>
      </header>

      <ul className="work-grid">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.name}
            project={p}
            variant={
              i === 0 ? "lead" : i === last && closeWide ? "wide" : "tile"
            }
          />
        ))}
      </ul>
    </div>
  );
}
