import Link from "next/link";
import Reveal from "@/components/Reveal";
import SanityPortableText from "@/components/SanityPortableText";
import { EditorialImage } from "@/components/ui";
import type { ResolvedSanityImage } from "@/lib/sanity/image";
import type { Project } from "@/lib/sanity/types";

const capabilities = [
  ["Plan", "Turn an exam or course into subjects, tasks, and a structured study plan."],
  ["Act", "Bring today's work, focused sessions, and day planning into one clear view."],
  ["Revise", "Use spaced repetition, question logging, and a mistakes loop to return to what matters."],
  ["Measure", "Connect mock readiness and analytics to the work already completed."],
] as const;

const viewSlots = [
  { label: "Today dashboard", alt: "StudyRise Today dashboard showing the next study actions" },
  { label: "Study plan", alt: "StudyRise structured study plan for an exam or academic course" },
  { label: "Progress & analytics", alt: "StudyRise progress and readiness analytics" },
] as const;

export default function ProjectCaseStudy({
  cover,
  project,
  screenshots,
  slug,
}: {
  cover?: ResolvedSanityImage;
  project?: Project | null;
  screenshots: Array<ResolvedSanityImage | undefined>;
  slug: string;
}) {
  const isStudyRise = slug === "studyrise";
  const name = project?.name || "StudyRise";
  const tagline = project?.tagline || "A study plan that becomes a daily system.";
  const stack = project?.techStack?.length ? project.techStack : ["React", "Vite", "Supabase", "Vercel"];
  const liveUrl = project?.liveUrl || (isStudyRise ? "https://studyrise.app" : undefined);
  const githubUrl = project?.githubUrl || (isStudyRise ? "https://github.com/Istiaque012" : undefined);

  return (
    <main className="project-case-study">
      <header className="project-case-study__hero">
        <div className="section-shell">
          <Link className="project-case-study__back" href="/projects">← All Projects</Link>
          <Reveal>
            <p className="section-label">{project?.status || (isStudyRise ? "Live" : "Project")} · Featured project</p>
            <h1>{name}</h1>
            <p className="project-case-study__tagline">{tagline}</p>
          </Reveal>
          <Reveal className="project-case-study__actions" delay={0.1}>
            {liveUrl ? <Link className="button button-light" href={liveUrl} target="_blank" rel="noreferrer">Visit {name} <span aria-hidden="true">↗</span></Link> : null}
            {githubUrl ? <Link className="button button-line" href={githubUrl} target="_blank" rel="me noreferrer">View GitHub <span aria-hidden="true">↗</span></Link> : null}
          </Reveal>
        </div>
      </header>

      <section className="project-case-study__cover">
        <div className="section-shell">
          <EditorialImage
            alt={cover?.alt || `${name} project view`}
            altGuidance={`Approved primary product view for ${name}`}
            label={`${name} primary visual pending`}
            priority
            ratio="wide"
            src={cover?.src}
          />
        </div>
      </section>

      {isStudyRise ? (
        <>
          <section className="project-case-study__problem light-section" aria-labelledby="project-problem-title">
            <div className="section-shell project-case-study__split">
              <Reveal><p className="section-label dark-label">01 · The problem</p><h2 id="project-problem-title">A large goal is not yet a useful day.</h2></Reveal>
              <Reveal className="project-case-study__prose" delay={0.08}>
                <p>Demanding exams and academic courses create a planning problem as well as a knowledge problem: what to study now, what to revise next, which mistakes to revisit, and whether the work is adding up.</p>
                <p>StudyRise turns that volume into a structured daily system, so the long-term goal stays connected to the next useful action.</p>
              </Reveal>
            </div>
          </section>

          <section className="project-case-study__system" aria-labelledby="project-system-title">
            <div className="section-shell">
              <Reveal className="project-case-study__section-head"><p className="section-label">02 · The response</p><h2 id="project-system-title">Plan. Act. Revise. Measure.</h2></Reveal>
              <div className="project-case-study__capabilities">{capabilities.map(([title, description], index) => <Reveal className="project-case-study__capability" delay={index * 0.05} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></Reveal>)}</div>
            </div>
          </section>
        </>
      ) : null}

      {project?.description?.length ? (
        <section className="project-case-study__story light-section" aria-labelledby="project-story-title">
          <div className="section-shell project-case-study__split">
            <div><p className="section-label dark-label">{isStudyRise ? "03" : "01"} · Build story</p><h2 id="project-story-title">Why this project exists.</h2></div>
            <div className="project-case-study__prose portable-project-copy"><SanityPortableText value={project.description} /></div>
          </div>
        </section>
      ) : isStudyRise ? (
        <section className="project-case-study__story light-section" aria-labelledby="project-story-title">
          <div className="section-shell project-case-study__split">
            <Reveal><p className="section-label dark-label">03 · Build story</p><h2 id="project-story-title">Medicine meets software in a practical system.</h2></Reveal>
            <Reveal className="project-case-study__prose" delay={0.08}>
              <p>StudyRise brings together two established interests: medicine and software. The medical perspective keeps the pressure and complexity of demanding study visible; the product turns that complexity into structure.</p>
              <p>MBBS Bangladesh Mode is production-ready. Exam Mode is built and being refined for pathways including AMC MCQ, PLAB 1, USMLE Step 1, and custom exams.</p>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="project-case-study__views" aria-labelledby="project-views-title">
        <div className="section-shell">
          <Reveal className="project-case-study__section-head"><p className="section-label">{isStudyRise ? "04" : "02"} · Product views</p><h2 id="project-views-title">The system, made visible.</h2></Reveal>
          <div className="project-case-study__gallery">
            {(isStudyRise ? viewSlots : screenshots.map((_, index) => ({ label: `Product view ${index + 1}`, alt: `${name} approved product view ${index + 1}` }))).map((slot, index) => {
              const image = screenshots[index];
              return <Reveal className={`project-case-study__view project-case-study__view--${index + 1}`} delay={index * 0.06} key={slot.label}><EditorialImage alt={image?.alt || slot.alt} altGuidance={slot.alt} caption={image?.caption} label={`${slot.label} screenshot pending`} ratio="wide" src={image?.src} /><p>{slot.label}</p></Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="project-case-study__close light-section">
        <div className="section-shell project-case-study__split">
          <div><p className="section-label dark-label">{isStudyRise ? "05" : "03"} · Built with</p><h2>{stack.join(" · ")}</h2></div>
          <div className="project-case-study__close-copy"><p>{isStudyRise ? "A web product built to connect long-range preparation with the work in front of the student today." : `${name} is presented here using only its approved public project record.`}</p><div>{liveUrl ? <Link className="button button-dark" href={liveUrl} target="_blank" rel="noreferrer">Visit {name} <span aria-hidden="true">↗</span></Link> : null}<Link className="text-link dark-link" href="/work">See the wider work <span aria-hidden="true">↗</span></Link></div></div>
        </div>
      </section>
    </main>
  );
}
