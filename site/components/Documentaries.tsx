import Link from "next/link";
import Reveal from "@/components/Reveal";
import YouTubeFacade from "@/components/YouTubeFacade";
import { documentaryAnchorId, formatEditorialDate } from "@/lib/editorial";
import type { ResolvedSanityImage } from "@/lib/sanity/image";

const YOUTUBE_CHANNEL = "https://www.youtube.com/@Istiaqamd";

export type DocumentaryView = {
  date?: string;
  description?: string;
  id: string;
  themes: string[];
  thumbnail?: ResolvedSanityImage;
  title: string;
  videoId?: string;
};

function FilmThemes({ themes }: { themes: string[] }) {
  if (!themes.length) return null;

  return (
    <ul className="documentaries-page__themes" aria-label="Film themes">
      {themes.map((theme) => <li key={theme}>{theme}</li>)}
    </ul>
  );
}

function FilmContext({ film, featured = false }: { film: DocumentaryView; featured?: boolean }) {
  return (
    <div className="documentaries-page__film-copy">
      <p className="section-label">{featured ? "Featured film" : formatEditorialDate(film.date)}</p>
      <h2>{film.title}</h2>
      {film.description ? <p>{film.description}</p> : <p className="documentaries-page__pending">Personal context has not been published yet.</p>}
      <FilmThemes themes={film.themes} />
    </div>
  );
}

export default function Documentaries({ films }: { films: DocumentaryView[] }) {
  const [featured, ...rest] = films;

  return (
    <main className="documentaries-page">
      <header className="documentaries-page__hero">
        <div className="section-shell">
          <Reveal>
            <p className="section-label">Stories on camera</p>
            <h1>Documentaries</h1>
          </Reveal>
          <Reveal className="documentaries-page__hero-copy" delay={0.08}>
            <p>Some stories need faces, voices, and the world around them.</p>
            <span>Films and social-awareness work by Istiaque Ahamed, presented with the context behind each piece.</span>
          </Reveal>
        </div>
      </header>

      {featured ? (
        <>
          <section className="documentaries-page__featured" aria-labelledby="featured-film-title">
            <div className="section-shell">
              <Reveal>
                <div id={documentaryAnchorId(featured.id)}>
                  <YouTubeFacade
                    customThumbnail={featured.thumbnail ? { alt: featured.thumbnail.alt, src: featured.thumbnail.src } : undefined}
                    title={featured.title}
                    videoId={featured.videoId}
                  />
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <FilmContext featured film={featured} />
                <span className="sr-only" id="featured-film-title">{featured.title}</span>
              </Reveal>
            </div>
          </section>

          {rest.length ? (
            <section className="documentaries-page__archive" aria-labelledby="film-archive-title">
              <div className="section-shell">
                <div className="documentaries-page__section-head">
                  <p className="section-label">Film archive</p>
                  <h2 id="film-archive-title">More stories,<br /><em>held with context.</em></h2>
                </div>
                <div className="documentaries-page__grid">
                  {rest.map((film, index) => (
                    <Reveal className="documentaries-page__film" delay={(index % 2) * 0.06} key={film.id}>
                      <article id={documentaryAnchorId(film.id)}>
                        <YouTubeFacade
                          customThumbnail={film.thumbnail ? { alt: film.thumbnail.alt, src: film.thumbnail.src } : undefined}
                          title={film.title}
                          videoId={film.videoId}
                        />
                        <FilmContext film={film} />
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          ) : null}
        </>
      ) : (
        <section className="documentaries-page__empty" aria-labelledby="film-room-title">
          <div className="section-shell">
            <Reveal className="documentaries-page__empty-frame">
              <div aria-hidden="true"><span>IA</span><small>16:9 film room</small></div>
            </Reveal>
            <Reveal className="documentaries-page__empty-copy" delay={0.08}>
              <p className="section-label">The film room</p>
              <h2 id="film-room-title">The first approved film will open this screen.</h2>
              <p>The page is ready for a featured film, its real context, and its themes. Nothing has been selected or described on Istiaque’s behalf.</p>
              <Link className="button button-outline" href={YOUTUBE_CHANNEL} rel="noreferrer" target="_blank">
                Visit the YouTube channel <span aria-hidden="true">↗</span>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <section className="documentaries-page__channel">
        <div className="section-shell">
          <p className="section-label">Continue watching</p>
          <Link href={YOUTUBE_CHANNEL} rel="noreferrer" target="_blank">
            <span>See every film on YouTube</span><b aria-hidden="true">↗</b>
          </Link>
        </div>
      </section>
    </main>
  );
}
