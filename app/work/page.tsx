import type { Metadata } from "next";
import { experience } from "@/content/experience";
import { PageTitle } from "@/components/PageTitle";
import { ExperienceCard } from "@/components/ExperienceCard";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Fabian Herrera's work experience: a data engineering internship at Transport Laberge.",
};

export default function WorkPage() {
  return (
    <div className="page-shell max-w-[min(92vw,120rem)]">
      <PageTitle>Work</PageTitle>
      <div className="mt-8">
        {experience.map((e) => (
          <ExperienceCard key={e.company} entry={e} />
        ))}
      </div>
    </div>
  );
}
