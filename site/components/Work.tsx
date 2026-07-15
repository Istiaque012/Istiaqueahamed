import Link from "next/link";
import Reveal from "@/components/Reveal";
import SanityPortableText from "@/components/SanityPortableText";
import { EditorialImage } from "@/components/ui";
import type { ResolvedSanityImage } from "@/lib/sanity/image";
import type { WorkPage } from "@/lib/sanity/types";

const education = [
  { place: "Sylhet North East Medical College", title: "MBBS", note: "Medical training · Bangladesh" },
  { place: "BIRDEM", title: "Internship", note: "Completed medical internship" },
  { place: "Macquarie University", title: "Master of Public Health", note: "Postgraduate public health · Australia" },
  { place: "Australian medical pathway", title: "AMC preparation", note: "A continuing professional path" },
] as const;

const experience = [
  { period: "2016–2018", title: "Medical Officer", place: "Green Life Hospital & CD Path Hospital" },
  { period: "Live", title: "Founder", place: "StudyRise" },
] as const;

const defaultFocus = [
  { title: "Preventive medicine", description: "Attention to health before illness becomes the only point of action." },
  { title: "Public health", description: "Seeing care through populations, context, and the systems that shape access and outcomes." },
  { title: "Healthcare systems & operations", description: "The communication, discipline, and operational details patients may not see but always feel." },
  { title: "Healthcare technology", description: "Using practical digital tools to make complex work clearer and more structured." },
  { title: "Healthcare leadership", description: "Building responsibility, communication, and reliable systems around care." },
] as const;

export default function Work({
  cvUrl,
  image,
  page,
}: {
  cvUrl?: string;
  image?: ResolvedSanityImage;
  page?: WorkPage | null;
}) {
  const focuses = page?.areasOfFocus?.length ? page.areasOfFocus : defaultFocus;

  return (
    <main className="work-page">
      <header className="work-page__hero">
        <div className="section-shell work-page__hero-grid">
          <Reveal className="work-page__hero-copy">
            <p className="section-label">Training & focus</p>
            <h1>Work</h1>
            <p>Medicine is the foundation. Public health, systems, and technology widen the view.</p>
          </Reveal>
          <Reveal className="work-page__hero-image" delay={0.1}>
            <EditorialImage
              alt={image?.alt || "Istiaque Ahamed at work"}
              altGuidance="Istiaque Ahamed working with calm concentration in an approved professional environment"
              caption={image?.caption}
              label="Work photograph pending"
              ratio="wide"
              src={image?.src}
            />
          </Reveal>
        </div>
      </header>

      <section className="work-page__framing light-section" aria-labelledby="work-framing-title">
        <div className="section-shell work-page__split">
          <Reveal><p className="section-label dark-label">01 · Public foundation</p><h2 id="work-framing-title">Care is clinical.<br />It is also structural.</h2></Reveal>
          <Reveal className="work-page__prose" delay={0.08}>
            {page?.publicFraming?.length ? <SanityPortableText value={page.publicFraming} /> : <><p className="work-page__lead">Doctor, healthcare leader, and founder working across Bangladesh and Australia.</p><p>Good healthcare is built through clinical decisions, but also through systems, discipline, communication, leadership, and the small operational details patients may never see but always feel.</p><p>Istiaque’s public work record connects medical training, public health, selected hospital experience, and technology.</p></>}
          </Reveal>
        </div>
      </section>

      <section className="work-page__record" aria-labelledby="training-title">
        <div className="section-shell">
          <Reveal className="work-page__section-head"><p className="section-label">02 · Training</p><h2 id="training-title">A medical foundation,<br /><em>widened by public health.</em></h2></Reveal>
          <ol className="work-page__timeline">{education.map((item, index) => <li key={item.title}><span>0{index + 1}</span><div><small>{item.note}</small><h3>{item.title}</h3><p>{item.place}</p></div></li>)}</ol>
        </div>
      </section>

      <section className="work-page__experience light-section" aria-labelledby="experience-title">
        <div className="section-shell">
          <Reveal className="work-page__section-head"><p className="section-label dark-label">03 · Selected public experience</p><h2 id="experience-title">Curated, not exhaustive.</h2><p>The initial public record intentionally omits detailed current professional titles.</p></Reveal>
          <div className="work-page__experience-list">{experience.map((item) => <article key={`${item.period}-${item.title}`}><span>{item.period}</span><h3>{item.title}</h3><p>{item.place}</p></article>)}</div>
        </div>
      </section>

      <section className="work-page__focus" aria-labelledby="focus-title">
        <div className="section-shell">
          <Reveal className="work-page__section-head"><p className="section-label">04 · Areas of focus</p><h2 id="focus-title">The wider work around care.</h2></Reveal>
          <div className="work-page__focus-grid">{focuses.map((focus, index) => <Reveal className="work-page__focus-card" delay={index * 0.04} key={"_key" in focus ? focus._key : focus.title}><span>0{index + 1}</span><h3>{focus.title}</h3>{focus.description ? <p>{focus.description}</p> : null}</Reveal>)}</div>
        </div>
      </section>

      <section className="work-page__media light-section" aria-labelledby="media-title">
        <div className="section-shell work-page__split">
          <div><p className="section-label dark-label">05 · Publications & media</p><h2 id="media-title">A place for future public work.</h2></div>
          <div className="work-page__media-copy"><p>Interviews, features, talks, and publications will appear here only after they exist and are approved for the public record.</p>{cvUrl ? <Link className="button button-dark" href={cvUrl} target="_blank" rel="noreferrer">Open approved CV <span aria-hidden="true">↗</span></Link> : <button className="button button-dark" disabled type="button">CV not published <span aria-hidden="true">—</span></button>}</div>
        </div>
      </section>

      <section className="work-page__next">
        <div className="section-shell">
          <p className="section-label">Continue the story</p>
          <div><Link href="/about"><span>01</span><strong>About</strong><small>The person behind the record</small><b aria-hidden="true">↗</b></Link><Link href="/projects"><span>02</span><strong>Projects</strong><small>See what the work builds</small><b aria-hidden="true">↗</b></Link><Link href="/feed"><span>03</span><strong>Writing</strong><small>Follow the evolving record</small><b aria-hidden="true">↗</b></Link></div>
        </div>
      </section>
    </main>
  );
}
