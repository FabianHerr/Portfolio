/**
 * Site owner. DRAFT copy, for Fabian to put in his own voice.
 * GitHub and résumé links live on the Contact page only.
 */
export const profile = {
  name: "Fabian Herrera",
  role: "Software engineer",

  // Landing page, one sentence.
  tagline:
    "I build full-stack web apps and the infrastructure underneath them.",

  // Landing page, the caption under the signature.
  homeIntro: "Hi! I'm Fabian, a software engineer.",
  homeCredential: "BSc Software Engineering @ McGill University",

  // About page. Two short first-person paragraphs. DRAFT, for Fabian to voice.
  about: [
    "I study software engineering at McGill, graduating in 2028. I recently completed a data engineering internship.",
    "The work I care about sits between the app and its infrastructure: pipelines, APIs, auth, the parts that decide whether something holds up in production. I want to work somewhere that reviews code and ships often. I think in French, English and Spanish.",
  ],

  email: "fabianherrerap73@gmail.com",
  github: "https://github.com/FabianHerr",
  linkedin: "https://www.linkedin.com/in/fabian-herrera-pena/",
  resume: "/fabian-herrera-cv.pdf",
} as const;
