"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const frame = window.requestAnimationFrame(() => {
      if (window.location.hash) {
        const id = decodeURIComponent(window.location.hash.slice(1));
        document.getElementById(id)?.scrollIntoView();
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    });

    return () => {
      window.cancelAnimationFrame(frame);
      window.history.scrollRestoration = previous;
    };
  }, [pathname]);

  return null;
}
