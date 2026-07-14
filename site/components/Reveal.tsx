"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Entrance reveal: gentle fade + slide-up as the element enters the viewport.
 * Framer Motion respects prefers-reduced-motion globally via MotionConfig in layout.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
