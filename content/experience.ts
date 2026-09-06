/**
 * Professional experience, shown on /work as expandable cards.
 * DRAFT copy from the CV (CV_SWE_Fabian_Herrera.pdf), for Fabian to voice.
 * Version-controlled, no CMS (CLAUDE.md §0). Newest first.
 */
export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  /** one line, first person, shown when the card is expanded */
  summary: string;
  /** 3 to 4 tight bullets: what, how, measurable result */
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Transport Laberge",
    role: "Data Engineering & Analytics Intern",
    period: "Jan–Jun 2026",
    location: "Montréal, QC",
    summary:
      "I worked on the data platform Transport Laberge's operations and ML teams relied on.",
    points: [
      "Built ETL pipelines in Python and SQL that pull 20M+ records from separate operational systems into one warehouse, replacing manual imports with scheduled jobs.",
      "Built an AI voice agent (OpenAI, Vapi) for dispatchers that answered operational questions and triggered workflows, aiming for a 25% cut in manual dispatch work.",
      "Shipped Power BI dashboards for the KPIs operations runs on: first-time fix rate, MTBF, total cost of ownership.",
      "Deployed a Vercel API (Vapi, Supabase) that automates post-call email follow-ups, delivered in weekly sprints tracked in Azure DevOps.",
    ],
    stack: [
      "Python",
      "SQL",
      "OpenAI",
      "Vapi",
      "Supabase",
      "Power BI",
      "Azure DevOps",
      "Vercel",
    ],
  },
];
