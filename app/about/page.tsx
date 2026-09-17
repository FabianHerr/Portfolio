import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { PageTitle } from "@/components/PageTitle";
import { StackMap } from "@/components/StackMap";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fabian Herrera, a software engineering student at McGill and data engineering intern.",
};

export default function AboutPage() {
  return (
    <div className="page-shell max-w-[min(92vw,120rem)]">
      <PageTitle>About</PageTitle>

      <div className="about-grid">
        <div className="about-primary">
          <div className="about-head">
            <div className="about-photo octagon" role="img" aria-label="Fabian Herrera" />
            <div>
              <p className="about-name">{profile.name}</p>
              <p className="about-role">{profile.role}</p>
            </div>
          </div>

          <div className="about-prose">
            {profile.about.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>

        <StackMap />
      </div>
    </div>
  );
}
