/**
 * Selected work, a minimal index. Version-controlled, no CMS (CLAUDE.md §0).
 * Order: game first (Fabian's call).
 */
export type ProjectLink = { label: string; href: string };

export type Project = {
  name: string;
  /** one plain sentence */
  tagline: string;
  stack: string[];
  links: ProjectLink[];
  /** full-bleed card background in /public/projects; omit to get the CSS blueprint field */
  image?: string;
};

export const projects: Project[] = [
  {
    name: "Yamaz",
    tagline: "A browser-playable 2.5D action-roguelike.",
    stack: ["Game", "HTML5"],
    links: [{ label: "Play", href: "https://fabianherr.itch.io/yamaz" }],
    image: "/projects/yamaz.jpg",
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
      "A peer-to-peer app for swapping foreign cash locally. In progress, with a teammate.",
    stack: ["React", "Node / Express", "MongoDB", "Firebase"],
    links: [{ label: "Source", href: "https://github.com/FabianHerr/Swap" }],
    image: "/projects/swap.svg",
  },
  {
    name: "Allô",
    tagline: "A bilingual marketing site for a Montréal agency.",
    stack: ["React", "vanilla CSS"],
    links: [
      { label: "Live", href: "https://alloagency.ca" },
      { label: "Source", href: "https://github.com/FabianHerr/allo_website" },
    ],
    image: "/projects/allo.jpg",
  },
];
