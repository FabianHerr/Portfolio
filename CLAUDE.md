# CLAUDE.md — Software Engineer Portfolio

## 0. Project context

- **Owner:** Fabian Herrera
- **Role the site must communicate:** Software engineer. The site is evidence of
  engineering judgment, not a design showcase. If a visitor can't tell what I build and
  how well I build it within fifteen seconds of landing, the site has failed.
- **Primary goal:** Get hired. Every decision serves a hiring manager deciding whether to
  reply to my application.
- **Audience, in priority order:** engineering managers and senior engineers who will
  actually read the project write-ups; technical recruiters skimming for stack keywords;
  peers who found the link on GitHub or LinkedIn.
- **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS. Static where possible.
  Deployed on Vercel via GitHub. No CMS, no database — project content lives in typed
  data files in the repo so it's version-controlled and diffable.
- **Aesthetic direction: technical editorial.** Committed to, not blended. Concretely:
  generous whitespace, a strong type hierarchy, a mostly monochrome palette with exactly
  one accent colour, monospace used deliberately for metadata and code (not for body
  copy), content-forward layouts that read like well-set documentation rather than a
  marketing page. Restrained, precise, confident.

---

## 1. Design rules (non-negotiable)

- **Always invoke the `frontend-design` skill before writing or editing any front-end code.
  Every session, no exceptions.**
- Hold the technical-editorial direction above. Do not drift toward SaaS-landing-page
  conventions partway through.
- **Banned** — these are the tells of both AI-generated sites and junior dev portfolios:
  - Purple/blue gradient heroes, glowing orbs, animated starfields
  - Everything centre-aligned down a single column
  - Uniform `rounded-xl` on every surface
  - Inter as the only typeface
  - **Skill bars or percentage ratings** ("React ████░ 80%") — meaningless, and engineers
    who hire will read them as a red flag
  - **A wall of every technology logo I've ever touched** — a curated list of what I'm
    actually strong in is more credible
  - Three identical feature cards, generic stock iconography, typewriter-effect taglines
- Typography does the work. One display face and one text face, plus a monospace for
  metadata. Real type scale. Body copy at a 65–75 character measure.
- One signature element for the whole site — an unusual grid, a type treatment, a single
  motion detail. Not one per section.
- Motion is subtle and fast. Nothing that delays reading. Respect
  `prefers-reduced-motion`.
- Dark mode is optional. If implemented, both themes must be fully designed — no
  auto-inverted afterthought.

## 2. Brand assets

`/brand_assets` is source of truth: headshot, colour tokens, typefaces, project
screenshots and diagrams, resume PDF, favicon. Read it before styling anything. If a
colour or font is defined there, use it — do not invent a palette.

If an asset I reference is missing, say so rather than silently substituting a placeholder.

## 3. Content structure

Order: **hero → selected work → about → contact.** The work is the point and it sits high
on the page. No long preamble before the first project.

**Hero.** Name, what I build, and the one-line reason someone should keep reading. Links to
GitHub, LinkedIn, and resume PDF visible without scrolling. No "Hi 👋 I'm a passionate
developer."

**Selected work — 3 to 5 projects, not everything I've written.** Each project needs:
- What it does, in one plain sentence a non-specialist understands
- The stack, as honest metadata (not logos)
- **The hard part** — the actual technical problem, the tradeoff I weighed, why I chose
  what I chose. This is the section that gets me interviews; give it real room.
- The outcome — users, latency, scale, test coverage, whatever is true and measurable
- Live demo link and source link, both working. A dead demo link is worse than no link.

Depth beats quantity. Three projects with genuine write-ups outperform ten with one line each.

**About.** Short. What I'm strong at, what I'm currently learning, what kind of team I want
to join. First person, no third-person bio.

**Contact.** One click. Working mailto or a form that actually submits and confirms.
Test that it submits before I ever push.

**Every page:** real `<title>`, meta description, and an OG image — portfolio links get
pasted into Slack and DMs, and a broken preview looks careless.

## 4. Quality bar

- Semantic HTML. Headings in order. Every image has alt text.
- Fully keyboard navigable with visible focus states.
- Contrast checked against WCAG AA — flag anything that fails rather than shipping it.
- Images optimised and correctly sized. Lighthouse performance above 90 on mobile.
- Any code snippets shown must be real, compiling code from the actual project.

## 5. Screenshot loop

Use Playwright to screenshot your own work and iterate against it.

- Save to `/temp_screenshots`.
- **Naming:** `NN-section-viewport.png` — e.g. `03-work-mobile.png`. Never `screenshot1.png`.
- Capture at **375px, 768px, and 1440px**. Hiring managers open links on their phone
  between meetings; mobile is not an afterthought.
- Two comparison rounds maximum per change, then stop and show me. Do not loop indefinitely.
- **Skip the screenshot loop for animated, canvas, or WebGL elements** — a static capture
  can't represent them and you'll over-engineer trying to fix what only looks broken.
  Write the code and let me judge it live.
- Delete old screenshots before a new major build.

## 6. Working from inspiration

- Given a reference site, take **layout structure, spacing rhythm, and interaction
  patterns**. Never its copy, imagery, or brand identity. A cloned portfolio defeats the
  purpose of having one.
- Components pasted from 21st.dev or similar get integrated into my existing tokens — my
  colours, type, spacing. Nothing left looking bolted on.
- After integrating anything external, tell me what you adapted and why.

## 7. Local vs. deployed

- **Everything is tested on localhost. Never commit or push unless I say so explicitly in
  that message.** "Looks good" is not permission to push.
- On push: descriptive commit message; confirm `.gitignore` covers `node_modules`, `.env*`,
  `/temp_screenshots`, and `.next`.
- GitHub auto-deploys to Vercel. A push is a publish. Treat it that way.
- Never commit API keys, form endpoint secrets, or contact details I haven't approved.
  This repo will be public and hiring managers will read the commit history.

## 8. How to work with me

- Anything larger than a small tweak: plan first, show me the plan, wait.
- Small tweaks: make the change and show me the result on localhost.
- Ambiguous request: ask one question rather than building the wrong thing well.
- Keep responses short. Show me the site, not a summary of the site.
