import Reveal from "@/components/Reveal";
import { facets, timeline } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
      <Reveal>
        <p className="eyebrow mb-3">About</p>
        <h2 className="mb-12 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          One person, the whole picture
        </h2>
      </Reveal>

      <div className="grid gap-10 md:grid-cols-[200px_1fr]">
        <Reveal>
          {/* Replace with the professional headshot once shot (monochrome grade). */}
          <div className="flex aspect-[4/5] items-center justify-center rounded-md border border-hairline bg-gradient-to-b from-surface to-surface-2 text-xs text-faint">
            headshot
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="max-w-xl text-base font-light leading-relaxed text-muted md:text-lg">
            A physician (MBBS) and public-health professional (MPH) who builds healthcare tools
            and leads hospital operations — and tells stories on camera.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {facets.map((f) => (
              <span
                key={f}
                className="rounded-full border border-hairline px-3 py-1.5 text-xs text-muted"
              >
                {f}
              </span>
            ))}
          </div>

          <ul className="mt-8 border-l border-hairline pl-5">
            {timeline.map((t) => (
              <li key={t.role} className="mb-4 last:mb-0">
                <p className="text-sm">
                  {t.role}
                  {t.current && <span className="text-faint"> — {t.org}</span>}
                </p>
                {!t.current && <p className="text-xs text-faint">{t.org}</p>}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
