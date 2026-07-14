"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { faqs } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="border-t border-hairline">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="eyebrow mb-3">Answers</p>
          <h2 className="mb-10 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Who is Istiaque Ahamed?
          </h2>
        </Reveal>

        <div className="max-w-2xl">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-hairline">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between py-4 text-left text-base"
                >
                  <span>{item.q}</span>
                  <span className="text-muted">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <p className="pb-4 text-sm font-light leading-relaxed text-muted">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
