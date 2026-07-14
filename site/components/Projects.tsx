import Link from "next/link";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-hairline">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-28">
        <Reveal>
          <p className="eyebrow mb-3">Projects</p>
          <h2 className="mb-12 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Things he&rsquo;s built
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <Link
                href={p.href}
                className="group block overflow-hidden rounded-md border border-hairline bg-surface-2 transition-colors hover:border-muted"
              >
                <div className="flex h-32 items-center justify-center bg-gradient-to-b from-surface to-bg text-xs text-faint">
                  {p.name}
                </div>
                <div className="p-5">
                  <h3 className="mb-1.5 text-lg">{p.name}</h3>
                  <p className="text-sm leading-relaxed text-muted">{p.blurb}</p>
                  <span className="mt-3 inline-block text-sm text-text link-underline">
                    View case study →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
