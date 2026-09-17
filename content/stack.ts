/**
 * Fabian's toolkit, shown on /about as a skills map: a bubble per technology,
 * sized by how long he's used it. This is tenure (a fact), not a self-rated
 * proficiency score (CLAUDE.md §1 bans those). Curated, not a logo wall.
 *
 * TODO(fabian): confirm every `since` (month it became a real working tool).
 */
export type ToolGroup =
  | "Languages"
  | "Frameworks"
  | "Data & ML"
  | "Ship & run";

export type Tool = {
  name: string;
  group: ToolGroup;
  /** "YYYY-MM" */
  since: string;
  /** where it's been used */
  where: string[];
};

export const GROUPS: ToolGroup[] = [
  "Languages",
  "Frameworks",
  "Data & ML",
  "Ship & run",
];

export const stack: Tool[] = [
  // Languages
  { name: "Python", group: "Languages", since: "2023-08", where: ["Dawson price model", "work"] },
  { name: "JavaScript", group: "Languages", since: "2024-06", where: ["Swap", "Allô", "this site"] },
  { name: "TypeScript", group: "Languages", since: "2025-06", where: ["Parche", "this site"] },
  { name: "Java", group: "Languages", since: "2024-09", where: ["McGill coursework"] },
  { name: "SQL", group: "Languages", since: "2026-01", where: ["work"] },
  { name: "C#", group: "Languages", since: "2026-01", where: ["Yamaz"] },

  // Frameworks
  { name: "React", group: "Frameworks", since: "2025-07", where: ["Swap", "Allô", "Parche"] },
  { name: "Next.js", group: "Frameworks", since: "2025-08", where: ["Parche", "this site"] },
  { name: "Node · Express", group: "Frameworks", since: "2025-07", where: ["Swap"] },
  { name: "MongoDB", group: "Frameworks", since: "2025-07", where: ["Swap"] },
  { name: "Tailwind", group: "Frameworks", since: "2025-08", where: ["Swap", "Parche", "this site"] },
  { name: "Unity", group: "Frameworks", since: "2026-01", where: ["Yamaz"] },

  // Data & ML
  { name: "Pandas · NumPy", group: "Data & ML", since: "2023-08", where: ["Dawson price model", "work"] },
  { name: "scikit-learn", group: "Data & ML", since: "2023-08", where: ["Dawson price model"] },
  { name: "ETL", group: "Data & ML", since: "2026-01", where: ["work"] },

  // Ship & run
  { name: "Git", group: "Ship & run", since: "2024-01", where: ["everything"] },
  { name: "Vercel", group: "Ship & run", since: "2025-07", where: ["Parche", "Allô", "this site", "work"] },
  { name: "Supabase", group: "Ship & run", since: "2025-08", where: ["Parche", "work"] },
  { name: "Power BI", group: "Ship & run", since: "2026-01", where: ["work"] },
  { name: "Azure DevOps", group: "Ship & run", since: "2026-01", where: ["work"] },
];
