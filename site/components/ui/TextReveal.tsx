"use client";

import { motion } from "framer-motion";

export function TextReveal({ className = "", text }: { className?: string; text: string }) {
  const words = text.split(" ");

  return (
    <span className={`ui-text-reveal ${className}`.trim()} aria-label={text}>
      {words.map((word, index) => (
        <span className="ui-text-reveal__mask" aria-hidden="true" key={`${word}-${index}`}>
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.65, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}
