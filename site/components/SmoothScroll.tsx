"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Lenis smooth-scroll provider — the cinematic "weighted glide".
 * Disabled automatically when the user prefers reduced motion.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        window.matchMedia("(pointer: coarse)").matches)
    ) {
      return;
    }

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const target = id ? document.getElementById(id) : null;
      if (target) lenis.scrollTo(target, { immediate: true });
    };

    const hashFrame = requestAnimationFrame(scrollToHash);
    window.addEventListener("hashchange", scrollToHash);

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
      cancelAnimationFrame(hashFrame);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
