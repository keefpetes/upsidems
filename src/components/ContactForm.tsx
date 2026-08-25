"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        setErrorMessage(body?.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-forest/20 bg-forest/5 p-8 text-center">
        <p className="font-display text-2xl text-forest mb-2">Message sent.</p>
        <p className="text-sm text-ink/70">
          Thanks for reaching out — we usually reply within a few days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="text-left space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm text-ink/70 mb-1.5">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:border-forest transition-colors"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-ink/70 mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:border-forest transition-colors"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-ink/70 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:border-forest transition-colors resize-none"
          placeholder="How can we help?"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-rust">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-press inline-block rounded-full bg-forest text-cream px-8 py-4 text-base hover:bg-forest-dark transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
