import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <span className="text-xs uppercase tracking-wide text-rust">404</span>
      <h1 className="font-display text-4xl md:text-5xl mt-3 mb-6 text-ink">
        This path doesn&apos;t go anywhere.
      </h1>
      <p className="text-ink/70 mb-10">
        The page you&apos;re looking for isn&apos;t here. Let&apos;s get you
        back on a route that leads somewhere.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="btn-press rounded-full bg-forest text-cream px-6 py-3 text-sm hover:bg-forest-dark transition-colors"
        >
          Back to home
        </Link>
        <Link
          href="/contact"
          className="btn-press rounded-full border border-ink/20 px-6 py-3 text-sm hover:border-forest hover:text-forest transition-colors"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
