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
  distance = 24,
  duration = 0.7,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  distance?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
