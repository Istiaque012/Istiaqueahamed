"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { topNavigation, writingNavigation } from "@/lib/navigation";

function routeIsActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const writingDetailsRef = useRef<HTMLDetailsElement>(null);
  const { scrollYProgress } = useScroll();
  const writingActive = writingNavigation.some((item) => routeIsActive(pathname, item.href));

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstMobileLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key === "Tab") {
        const focusable = [
          menuButtonRef.current,
          ...Array.from(
            mobileNavRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [],
          ),
        ].filter((element): element is HTMLElement => Boolean(element?.getClientRects().length));
        const first = focusable[0];
        const last = focusable.at(-1);

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.div className="global-scroll-progress" style={{ scaleX: scrollYProgress }} />
      <header className="global-header">
        <div className="global-header__inner">
          <Link className="global-brand" href="/" aria-label="Istiaque Ahamed home">
            <span>IA</span>
            <span>Istiaque Ahamed</span>
          </Link>

          <nav className="global-nav" aria-label="Primary navigation">
            {topNavigation.map((item) =>
              item.kind === "writing" ? (
                <details
                  className="writing-menu"
                  data-active={writingActive || undefined}
                  key={item.label}
                  ref={writingDetailsRef}
                >
                  <summary>Writing</summary>
                  <div className="writing-menu__panel">
                    <p>Writing</p>
                    {writingNavigation.map((writingItem) => (
                      <Link
                        aria-current={routeIsActive(pathname, writingItem.href) ? "page" : undefined}
                        href={writingItem.href}
                        key={writingItem.href}
                        onClick={() => {
                          if (writingDetailsRef.current) writingDetailsRef.current.open = false;
                        }}
                      >
                        <span>{writingItem.index}</span>
                        {writingItem.label}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  aria-current={routeIsActive(pathname, item.href) ? "page" : undefined}
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            className="global-menu-button"
            onClick={() => setMenuOpen((open) => !open)}
            ref={menuButtonRef}
            type="button"
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span aria-hidden="true">{menuOpen ? "×" : "="}</span>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.nav
              animate={{ opacity: 1, y: 0 }}
              aria-label="Mobile navigation"
              className="global-mobile-nav"
              exit={{ opacity: 0, y: -14 }}
              id="mobile-navigation"
              initial={{ opacity: 0, y: -14 }}
              ref={mobileNavRef}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              {topNavigation.map((item, index) =>
                item.kind === "writing" ? (
                  <div
                    className="global-mobile-nav__writing"
                    data-active={writingActive || undefined}
                    key={item.label}
                  >
                    <Link href="/feed" onClick={closeMenu}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      Writing
                    </Link>
                    <div>
                      {writingNavigation.map((writingItem) => (
                        <Link
                          aria-current={routeIsActive(pathname, writingItem.href) ? "page" : undefined}
                          href={writingItem.href}
                          key={writingItem.href}
                          onClick={closeMenu}
                        >
                          {writingItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    aria-current={routeIsActive(pathname, item.href) ? "page" : undefined}
                    href={item.href}
                    key={item.href}
                    onClick={closeMenu}
                    ref={index === 0 ? firstMobileLinkRef : undefined}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {item.label}
                  </Link>
                ),
              )}
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}
