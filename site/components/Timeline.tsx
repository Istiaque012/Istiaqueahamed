import Link from "next/link";
import Reveal from "@/components/Reveal";

const categories = ["Medicine", "Tech", "Personal", "Australia"] as const;

export type TimelineView = {
  category: (typeof categories)[number] | "Uncategorised";
  description?: string;
  id: string;
  link?: { href: string; label: string };
  period: string;
  title: string;
};

const continuations = [
  { href: "/about", label: "About", note: "The complete story" },
  { href: "/father", label: "Father", note: "Where medicine began" },
  { href: "/projects", label: "Projects", note: "What the journey builds" },
  { href: "/work", label: "Work", note: "Training and public focus" },
] as const;

export default function Timeline({ events, usesConfirmedFallback }: { events: TimelineView[]; usesConfirmedFallback: boolean }) {
  return (
    <main className="timeline-page">
      <header className="timeline-page__hero">
        <div className="section-shell">
          <Reveal>
            <p className="section-label">Bangladesh → Australia</p>
            <h1>Timeline</h1>
          </Reveal>
          <Reveal className="timeline-page__intro" delay={0.08}>
            <p>A life does not move in one straight line. Medicine, family, public health, technology, and two countries keep meeting along the way.</p>
            <span>{usesConfirmedFallback ? "This opening chronology uses only dates already confirmed by Istiaque." : "This chronology is authored and ordered in Sanity."}</span>
          </Reveal>
        </div>
      </header>

      <section className="timeline-page__legend" aria-label="Timeline categories">
        <div className="section-shell">
          <p className="section-label">Four threads</p>
          <ul>{categories.map((category) => <li className={`timeline-category timeline-category--${category.toLowerCase()}`} key={category}><span aria-hidden="true" />{category}</li>)}</ul>
        </div>
      </section>

      <section className="timeline-page__story" aria-labelledby="timeline-story-title">
        <div className="section-shell">
          <h2 className="sr-only" id="timeline-story-title">Life chronology</h2>
          <ol>
            {events.map((event, index) => (
              <li id={`event-${event.id.replace(/[^A-Za-z0-9_-]/g, "-")}`} key={event.id}>
                <Reveal className="timeline-page__event" delay={(index % 3) * 0.035}>
                  <div className="timeline-page__rail" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
                  <div className="timeline-page__date"><span>{event.period}</span></div>
                  <article>
                    <p className={`timeline-category timeline-category--${event.category.toLowerCase()}`}>{event.category}</p>
                    <h3>{event.title}</h3>
                    {event.description ? <p>{event.description}</p> : null}
                    {event.link ? <Link href={event.link.href}>{event.link.label} <span aria-hidden="true">↗</span></Link> : null}
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="timeline-page__continue" aria-labelledby="timeline-continue-title">
        <div className="section-shell">
          <p className="section-label">Continue through the archive</p>
          <h2 id="timeline-continue-title">Every date opens into a fuller story.</h2>
          <div>{continuations.map((item, index) => <Link href={item.href} key={item.href}><span>0{index + 1}</span><strong>{item.label}</strong><small>{item.note}</small><b aria-hidden="true">↗</b></Link>)}</div>
        </div>
      </section>
    </main>
  );
}
