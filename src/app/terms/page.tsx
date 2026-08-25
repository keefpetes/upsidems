import ScrollReveal from "@/components/ScrollReveal";

export default function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24">
      <span className="text-xs uppercase tracking-wide text-rust">Legal</span>
      <h1 className="font-display text-4xl md:text-5xl mt-3 mb-14 text-ink">
        Terms of Use
      </h1>

      <ScrollReveal>
        <div data-scroll-reveal className="space-y-10 text-ink/80 leading-relaxed">
          <p>
            By accessing and using the Upside MS website, you agree to
            comply with and be bound by the following Terms of Use. If you
            do not agree with these terms, please do not use this website.
          </p>

          <section>
            <h2 className="font-display text-2xl text-forest mb-3">
              1. Use of Website Content
            </h2>
            <p>
              All materials and content provided on this website, including
              but not limited to text, graphics, images, logos, and other
              information, are made available for informational purposes
              only. You may not copy, reproduce, modify, distribute,
              transmit, display, publish, license, create derivative works
              from, or otherwise use any part of this website for commercial
              or public purposes without prior written permission from
              Upside MS.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest mb-3">
              2. No Warranties
            </h2>
            <p>
              Upside MS makes no representations or warranties, express or
              implied, regarding the accuracy, completeness, reliability, or
              availability of the information contained on this website. All
              information is provided &ldquo;as is&rdquo; without warranty
              of any kind, including but not limited to warranties of
              merchantability, fitness for a particular purpose, or
              non-infringement.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest mb-3">
              3. Limitation of Liability
            </h2>
            <p>
              In no event shall Upside MS or its directors, officers,
              employees, agents, or volunteers be liable for any direct,
              indirect, incidental, consequential, special, or punitive
              damages, or any other damages whatsoever, arising out of or
              related to your use of this website or any linked sites,
              including but not limited to damages resulting from errors,
              omissions, interruptions, defects, delays, computer viruses,
              loss of data, or other issues, even if advised of the
              possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest mb-3">
              4. Third Party Websites
            </h2>
            <p>
              This website may contain links to external websites operated
              by third parties. These links are provided solely for your
              convenience. Upside MS does not control and is not responsible
              for the content, privacy policies, or practices of any third
              party websites. The inclusion of a link does not imply
              endorsement by Upside MS.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest mb-3">
              5. Modifications to Terms
            </h2>
            <p>
              Upside MS reserves the right to modify or update these Terms
              of Use at any time without prior notice. Any changes will take
              effect immediately upon posting. Your continued use of this
              website constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest mb-3">
              6. Governing Law
            </h2>
            <p>
              These Terms of Use shall be governed by and construed in
              accordance with the laws of the Province of British Columbia
              and the federal laws of Canada applicable therein, without
              regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-forest mb-3">
              7. Contact Information
            </h2>
            <p>
              If you have any questions regarding these Terms of Use or need
              technical support, please contact us through the channels
              provided on our website.
            </p>
          </section>
        </div>
      </ScrollReveal>
    </div>
  );
}
