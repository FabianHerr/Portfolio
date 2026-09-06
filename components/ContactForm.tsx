"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { profile } from "@/content/profile";

const KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "submitting" | "success" | "error";
type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMPTY: Fields = { name: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [sentTo, setSentTo] = useState("");

  const set =
    (k: keyof Fields) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((f) => ({ ...f, [k]: e.target.value }));

  function validate(): Errors {
    const err: Errors = {};
    if (!fields.name.trim()) err.name = "What's your name?";
    if (!fields.email.trim()) err.email = "I'll need an email to write back.";
    else if (!EMAIL_RE.test(fields.email.trim()))
      err.email = "That doesn't look like an email address.";
    if (!fields.subject.trim()) err.subject = "Give it a subject.";
    if (fields.message.trim().length < 10) err.message = "Add a bit more.";
    return err;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) return;

    const botcheck = (
      form.elements.namedItem("botcheck") as HTMLInputElement | null
    )?.checked;
    if (botcheck) return; // honeypot, silently drop

    if (!KEY) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: KEY,
          from_name: "Portfolio contact",
          subject: `[Portfolio] ${fields.subject.trim()}`,
          name: fields.name.trim(),
          email: fields.email.trim(),
          message: fields.message.trim(),
        }),
      });
      const data: { success?: boolean } = await res.json();
      if (data.success) {
        setSentTo(fields.email.trim());
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="cform-success">
        <p>
          <strong>Got it.</strong> I&rsquo;ll write back to {sentTo} soon.
        </p>
        <button
          type="button"
          className="chip-btn"
          onClick={() => {
            setFields(EMPTY);
            setErrors({});
            setStatus("idle");
          }}
        >
          <span className="chip-face octagon">Send another</span>
        </button>
      </div>
    );
  }

  return (
    <form className="cform" onSubmit={onSubmit} noValidate>
      <Field
        id="cf-name"
        label="Name"
        value={fields.name}
        onChange={set("name")}
        error={errors.name}
        autoComplete="name"
      />
      <Field
        id="cf-email"
        label="Email"
        type="email"
        value={fields.email}
        onChange={set("email")}
        error={errors.email}
        autoComplete="email"
      />
      <Field
        id="cf-subject"
        label="Subject"
        value={fields.subject}
        onChange={set("subject")}
        error={errors.subject}
      />

      <div className="cform-row">
        <label className="cform-label" htmlFor="cf-message">
          Message
        </label>
        <textarea
          id="cf-message"
          className="cform-textarea"
          value={fields.message}
          onChange={set("message")}
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
        />
        {errors.message && (
          <span className="cform-err" id="cf-message-err">
            {errors.message}
          </span>
        )}
      </div>

      {/* honeypot, off-screen, not tab-reachable */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="cform-hp"
        aria-hidden="true"
      />

      {status === "error" && (
        <p className="cform-banner" role="alert">
          That didn&rsquo;t send. You can reach me at{" "}
          <a href={`mailto:${profile.email}`}>{profile.email}</a> instead.
        </p>
      )}

      <div className="cform-submitrow">
        <button
          type="submit"
          className="chip-btn"
          disabled={status === "submitting"}
        >
          <span className="chip-face octagon">
            {status === "submitting" ? "Sending…" : "Send"}
          </span>
        </button>
      </div>

      <span className="sr-only" role="status">
        {status === "submitting" ? "Sending your message" : ""}
      </span>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div className="cform-row">
      <label className="cform-label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="cform-input"
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
      />
      {error && (
        <span className="cform-err" id={`${id}-err`}>
          {error}
        </span>
      )}
    </div>
  );
}
