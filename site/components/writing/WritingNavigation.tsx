"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { writingNavigation } from "@/lib/navigation";

const descriptions = {
  "/feed": "Everything published",
  "/blog": "Long-form essays",
  "/journal": "Thoughts, reads, observations",
} as const;

export default function WritingNavigation() {
  const pathname = usePathname();

  return (
    <nav className="writing-system-nav" aria-label="Writing sections">
      <p>Writing</p>
      <div>
        {writingNavigation.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link aria-current={active ? "page" : undefined} href={item.href} key={item.href}>
              <span>{item.index}</span>
              <strong>{item.label}</strong>
              <small>{descriptions[item.href]}</small>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
