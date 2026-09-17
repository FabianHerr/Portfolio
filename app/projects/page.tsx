import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { PageTitle } from "@/components/PageTitle";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected projects by Fabian Herrera: a browser game, full-stack web apps, and an ML pricing model.",
};

export default function ProjectsPage() {
  return (
    <div className="page-shell max-w-[min(92vw,120rem)]">
      <PageTitle>Portfolio</PageTitle>

      <ul className="projects-grid mt-8">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </ul>
    </div>
  );
}
