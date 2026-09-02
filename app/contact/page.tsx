import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { Frame } from "@/components/Frame";
import { Lcd } from "@/components/Lcd";

export const metadata: Metadata = { title: "Contact" };

const EXTERNAL = /^https?:\/\//;

export default function ContactPage() {
  const links = [
    { label: "GitHub", href: profile.github },
    ...(profile.linkedin
      ? [{ label: "LinkedIn", href: profile.linkedin }]
      : []),
    { label: "Résumé (PDF)", href: profile.resume },
  ];

  return (
    <Frame className="max-w-[40rem]">
      <Lcd as="h1">Contact</Lcd>

      <a
        href={`mailto:${profile.email}`}
        className="mt-6 block font-display text-[clamp(1.35rem,4vw,2.15rem)] leading-tight transition-colors hover:text-accent"
      >
        {profile.email}
      </a>

      <ul className="mt-7 space-y-1 font-mono text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              {...(EXTERNAL.test(l.href)
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="text-accent transition-colors hover:text-ink"
            >
              {l.label} <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </Frame>
  );
}
