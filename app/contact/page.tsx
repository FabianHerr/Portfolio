import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { PageTitle } from "@/components/PageTitle";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Fabian Herrera by form, email, or LinkedIn.",
};

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7.5 8 5.5 8-5.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

export default function ContactPage() {
  return (
    <div className="page-shell max-w-[min(92vw,120rem)]">
      <PageTitle>Contact</PageTitle>

      <div className="contact-grid">
        <div className="contact-primary octagon">
          <p className="contact-intro">
            The form goes straight to my inbox. Whether it&rsquo;s about a
            role, the work, or something you&rsquo;d do differently,
            I&rsquo;ll write back.
          </p>
          <ContactForm />
        </div>

        <aside className="contact-aside octagon" aria-label="Other ways to reach me">
          <p className="contact-aside-label">Or, directly</p>

          <div className="contact-aside-icons">
            <a
              className="nav-ico p-2"
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.email}`}
            >
              <MailIcon />
            </a>
            <a
              className="nav-ico p-2"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
          </div>

          <a className="contact-aside-link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a
            className="contact-aside-link"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className="contact-aside-link"
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé (PDF) ↗
          </a>
        </aside>
      </div>
    </div>
  );
}
