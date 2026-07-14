"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import SmoothScroll from "@/components/SmoothScroll";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      {children}
    </MotionConfig>
  );
}
