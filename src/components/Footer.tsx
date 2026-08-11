import Link from "next/link";
import { contactEmail, location, nav } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/90">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl mb-3">Upside MS</div>
          <p className="text-sm text-cream/70 max-w-xs">
            Forging pathways towards a barrier-free Canada.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-cream/50 mb-3">
            Site
          </div>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wide text-cream/50 mb-3">
            Contact
          </div>
          <p className="text-sm">{location}</p>
          <a href={`mailto:${contactEmail}`} className="text-sm hover:text-white">
            {contactEmail}
          </a>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-cream/50">
          <span>© {new Date().getFullYear()} Upside MS Foundation</span>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
