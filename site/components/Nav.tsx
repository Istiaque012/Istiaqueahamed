import Link from "next/link";
import { nav } from "@/lib/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline/80 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="font-display text-lg tracking-wide">
          Istiaque Ahamed
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {nav.map((item) => (
            <Link key={item.label} href={item.href} className="link-underline hover:text-text">
              {item.label}
            </Link>
          ))}
          <Link href="#contact" className="text-text link-underline">
            Contact →
          </Link>
        </nav>
      </div>
    </header>
  );
}
