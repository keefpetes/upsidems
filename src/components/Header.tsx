import Image from "next/image";
import Link from "next/link";
import { nav } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Upside MS Foundation" width={44} height={44} className="rounded-sm" />
          <span className="font-display text-lg text-forest hidden sm:inline">
            Upside MS
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink/80 hover:text-forest transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-forest text-cream text-sm px-5 py-2.5 hover:bg-forest-dark transition-colors"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
