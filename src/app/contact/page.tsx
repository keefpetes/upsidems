import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { contactEmail, location } from "@/lib/site";

export default function Contact() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <span className="text-xs uppercase tracking-wide text-rust">
        Contact
      </span>
      <ScrollReveal>
        <div data-scroll-reveal>
          <h1 className="font-display text-4xl md:text-5xl mt-3 mb-6 text-ink">
            Reach out to connect, collaborate, or support the movement.
          </h1>
          <p className="text-ink/70 mb-10">
            Based in {location}. We usually reply within a few days, or email
            us directly at{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-forest underline underline-offset-4"
            >
              {contactEmail}
            </a>
            .
          </p>
          <ContactForm />
        </div>
      </ScrollReveal>
    </div>
  );
}
