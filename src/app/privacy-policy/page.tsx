import ScrollReveal from "@/components/ScrollReveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Upside MS Foundation collects, uses, and protects your information.",
  path: "/privacy-policy",
});

const h2 = "font-display text-2xl text-forest mb-3";
const link = "text-forest underline underline-offset-4";

function Email() {
  return (
    <a href="mailto:hello@upsidems.org" className={link}>
      hello@upsidems.org
    </a>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <span className="text-xs uppercase tracking-wide text-rust">Legal</span>
      <h1 className="font-display text-4xl md:text-5xl mt-3 mb-3 text-ink">
        Privacy Policy
      </h1>
      <p className="text-sm text-ink/50 mb-14">Effective November 14, 2026</p>

      <ScrollReveal>
        <div data-scroll-reveal className="space-y-10 text-ink/80 leading-relaxed">
          <p>
            Upside MS Foundation (&ldquo;Upside MS,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates{" "}
            <a href="https://www.upsidems.org" className={link}>
              upsidems.org
            </a>{" "}
            (the &ldquo;Site&rdquo;). This policy explains what personal
            information we collect through the Site, why, who handles it on
            our behalf, and the choices you have. We are based in British
            Columbia and follow B.C.&rsquo;s <em>Personal Information
            Protection Act</em> (PIPA).
          </p>

          <section>
            <h2 className={h2}>The short version</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>We only collect what you choose to send us through the contact form or by email.</li>
              <li>The Site has no analytics, no tracking, no advertising, and sets no cookies.</li>
              <li>We use your information to reply to you and nothing else. We never sell it.</li>
              <li>Some of the services we use store data in the United States (details below).</li>
              <li>You can ask to see, correct, or delete your information at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>Information we collect</h2>
            <h3 className="font-semibold text-ink mb-2">What you send us</h3>
            <p className="mb-2">When you use our contact form, we receive:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Your name</li>
              <li>Your email address</li>
              <li>The topic you choose</li>
              <li>Your message, and anything you choose to include in it</li>
            </ul>
            <p className="mb-6">
              The same applies if you email us directly. Some people choose to
              tell us about their health, including their MS. You never have to
              share health information to contact us. If you do, we treat it as
              sensitive, use it only to respond to you, and do not share it
              beyond the people at Upside MS who need it to reply.
            </p>

            <h3 className="font-semibold text-ink mb-2">Technical information</h3>
            <p>
              Like every website, our hosting provider automatically handles
              basic technical details when you visit, such as your IP address,
              browser type, the page requested, and the time. These are kept in
              short-lived server logs used only to run and secure the Site. We
              do not use them to identify or profile visitors.
            </p>
          </section>

          <section>
            <h2 className={h2}>Cookies and analytics</h2>
            <p>
              The Site does not set cookies and does not use analytics,
              tracking pixels, or advertising tools. If that ever changes, we
              will update this policy before it does.
            </p>
          </section>

          <section>
            <h2 className={h2}>How we use your information</h2>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>To read and reply to your message</li>
              <li>To follow up on something you asked us to do, such as volunteering or partnering</li>
              <li>To keep a basic record of our correspondence</li>
            </ul>
            <p>
              We will not add you to a mailing list unless you ask us to. We do
              not sell, rent, or trade personal information.
            </p>
          </section>

          <section>
            <h2 className={h2}>Service providers and storage outside Canada</h2>
            <p className="mb-4">
              We rely on a small number of service providers to run the Site and
              our email. They process information only on our behalf and only as
              needed to provide their service:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                <strong>Vercel</strong> hosts the Site and processes contact-form
                submissions.
              </li>
              <li>
                <strong>Resend</strong> delivers contact-form messages to our
                inbox.
              </li>
              <li>
                <strong>Mailgun</strong> routes email sent to our upsidems.org
                addresses.
              </li>
              <li>
                <strong>Google Workspace</strong> hosts our email inbox, where
                your message is stored.
              </li>
            </ul>
            <p>
              These providers may store and process information in the United
              States or other countries. While it is there, it may be subject to
              the laws of those countries, including lawful access by their
              courts or authorities. By contacting us through the Site, you
              understand that your information may be handled this way. If you
              have questions about this, contact our Privacy Officer.
            </p>
          </section>

          <section>
            <h2 className={h2}>How long we keep it</h2>
            <p>
              We keep correspondence only as long as we need it to respond to
              you and keep reasonable records, and generally no longer than two
              years after our last contact with you. You can ask us to delete
              it sooner.
            </p>
          </section>

          <section>
            <h2 className={h2}>Your rights</h2>
            <p>
              You can ask us to show you the personal information we hold about
              you, correct it, or delete it. Email <Email /> and we will respond
              within 30 days, as PIPA requires. If you are not satisfied with
              our response, you can contact the{" "}
              <a href="https://www.oipc.bc.ca" className={link}>
                Office of the Information and Privacy Commissioner for British
                Columbia
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className={h2}>Security</h2>
            <p>
              The Site is served only over encrypted connections (HTTPS), and
              access to our accounts and inbox is limited to the people who need
              it. No system is perfectly secure, but we take reasonable steps to
              protect your information.
            </p>
          </section>

          <section>
            <h2 className={h2}>When we may have to disclose information</h2>
            <p>
              We will only share your information beyond our service providers
              if the law requires it, such as in response to a valid court order.
            </p>
          </section>

          <section>
            <h2 className={h2}>Children</h2>
            <p>
              The Site is not directed at children under 13, and we do not
              knowingly collect their personal information. If we learn that we
              have, we will delete it.
            </p>
          </section>

          <section>
            <h2 className={h2}>Links to other websites</h2>
            <p>
              The Site links to other websites. Their privacy practices are their
              own, and we encourage you to read their policies.
            </p>
          </section>

          <section>
            <h2 className={h2}>Changes to this policy</h2>
            <p>
              If we change how we handle personal information, we will update
              this page and the date at the top before the change takes effect.
            </p>
          </section>

          <section>
            <h2 className={h2}>Contact our Privacy Officer</h2>
            <p>
              Our Executive Director serves as Privacy Officer. For any question
              or request about your personal information, email <Email />.
            </p>
          </section>
        </div>
      </ScrollReveal>
    </div>
  );
}
