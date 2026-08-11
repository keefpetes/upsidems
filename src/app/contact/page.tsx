import { contactEmail, location } from "@/lib/site";

export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <span className="text-xs uppercase tracking-wide text-rust">
        Contact
      </span>
      <h1 className="font-display text-4xl md:text-5xl mt-3 mb-6 text-ink">
        Reach out to connect, collaborate, or support the movement.
      </h1>
      <p className="text-ink/70 mb-10">
        Based in {location}. We usually reply within a few days.
      </p>
      <a
        href={`mailto:${contactEmail}`}
        className="inline-block rounded-full bg-forest text-cream px-8 py-4 text-base hover:bg-forest-dark transition-colors"
      >
        {contactEmail}
      </a>
      <div className="mt-14 rounded-2xl border border-dashed border-rust/40 bg-rust/5 p-6 text-left">
        <p className="text-xs uppercase tracking-wide text-rust mb-2">
          Placeholder
        </p>
        <p className="text-sm text-ink/70 leading-relaxed">
          Swap this mailto link for an embedded form (e.g. Formspree, Basin,
          or a Next.js API route) once you've picked a form handler — a
          direct mailto is the simplest thing that reliably works on day one.
        </p>
      </div>
    </div>
  );
}
