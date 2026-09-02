/**
 * Selected work — a minimal index. Version-controlled, no CMS (CLAUDE.md §0).
 * Order: game first (Fabian's call).
 */
export type ProjectLink = { label: string; href: string };

export type Project = {
  name: string;
  /** one plain sentence */
  tagline: string;
  stack: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    name: "LogBait",
    tagline: "A browser-playable 2.5D action-roguelike.",
    stack: ["Game", "HTML5"],
    links: [{ label: "Play", href: "https://fabianherr.itch.io/yamaz" }],
  },
  {
    name: "Parche",
    tagline: "A local event-discovery app for Montréal.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    links: [{ label: "Source", href: "https://github.com/FabianHerr/Parche" }],
  },
  {
    name: "Swap",
    tagline:
      "A peer-to-peer app for swapping foreign cash locally — in progress, with a teammate.",
    stack: ["React", "Node / Express", "MongoDB", "Firebase"],
    links: [
      { label: "Source", href: "https://github.com/FabianHerr/Swap/tree/Fabian" },
    ],
  },
  {
    name: "Allô",
    tagline: "A bilingual marketing site for a Montréal agency.",
    stack: ["React", "vanilla CSS"],
    links: [
      { label: "Live", href: "https://alloagency.ca" },
      { label: "Source", href: "https://github.com/FabianHerr/allo_website" },
    ],
  },
];
