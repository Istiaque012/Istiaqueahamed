import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-content px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
      <Reveal>
        <p className="eyebrow mb-6">Medical Doctor · Public Health · Builder</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl">
          A doctor who
          <br />
          <span className="italic font-normal">actually builds.</span>
        </h1>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-muted md:text-lg">
          Medicine, public health, and the systems that make care reach further — one whole
          person, between Bangladesh and Australia.
        </p>
      </Reveal>
      <Reveal delay={0.24}>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="#about" className="btn-primary">
            Read his story
          </Link>
          <Link href="#projects" className="btn-ghost">
            See the work
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
