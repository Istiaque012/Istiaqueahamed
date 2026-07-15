import Link from "next/link";
import Reveal from "@/components/Reveal";
import { EditorialImage } from "@/components/ui";
import type { ResolvedSanityImage } from "@/lib/sanity/image";

export type ProjectIndexItem = {
  cover?: ResolvedSanityImage;
  href: string;
  name: string;
  status: string;
  tagline: string;
  techStack?: string[];
};

function ProjectCard({ project }: { project: ProjectIndexItem }) {
  return (
    <article className="projects-index__card">
      <Link href={project.href}>
        <EditorialImage
          alt={project.cover?.alt || `${project.name} project by Istiaque Ahamed`}
          altGuidance={`Approved product view for ${project.name}`}
          label={`${project.name} visual pending`}
          ratio="wide"
          src={project.cover?.src}
        />
        <div className="projects-index__card-copy">
          <div><span>{project.status}</span><span>Project</span></div>
          <h3>{project.name}</h3>
          <p>{project.tagline}</p>
          {project.techStack?.length ? <small>{project.techStack.join(" · ")}</small> : null}
          <strong aria-hidden="true">Open the build story ↗</strong>
        </div>
      </Link>
    </article>
  );
}

export default function ProjectIndex({
  featured,
  projects,
}: {
  featured: ProjectIndexItem;
  projects: ProjectIndexItem[];
}) {
  return (
    <main className="projects-index">
      <header className="projects-index__hero">
        <div className="section-shell">
          <Reveal>
            <p className="section-label">The doctor who builds</p>
            <h1>Projects</h1>
          </Reveal>
          <Reveal className="projects-index__hero-copy" delay={0.1}>
            <p>Useful products, explained through the problem, the response, and the real work behind them.</p>
            <span>Medicine supplies one way of seeing a problem. Software supplies another way to structure a response.</span>
          </Reveal>
        </div>
      </header>

      <section className="projects-index__featured" aria-labelledby="featured-project-title">
        <div className="section-shell">
          <Reveal className="projects-index__section-head">
            <p className="section-label dark-label">01 · Featured build</p>
            <h2 id="featured-project-title">One product,<br /><em>built deeply.</em></h2>
          </Reveal>
          <Reveal delay={0.08}><ProjectCard project={featured} /></Reveal>
        </div>
      </section>

      {projects.length ? (
        <section className="projects-index__more" aria-labelledby="more-projects-title">
          <div className="section-shell">
            <h2 className="section-label" id="more-projects-title">More approved projects</h2>
            <div>{projects.map((project) => <ProjectCard key={project.href} project={project} />)}</div>
          </div>
        </section>
      ) : (
        <section className="projects-index__future">
          <div className="section-shell">
            <p className="section-label">02 · What comes next</p>
            <h2>The public record grows only when the work is ready.</h2>
            <p>Future projects will be named here after their purpose, status, and story are ready to be public.</p>
          </div>
        </section>
      )}
    </main>
  );
}
