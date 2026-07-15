import Link from "next/link";
import SanityPortableText from "@/components/SanityPortableText";
import { EditorialImage } from "@/components/ui";
import type { ResolvedSanityImage } from "@/lib/sanity/image";
import type { FatherPage, FatherPiece } from "@/lib/sanity/types";

const dateFormatter = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const archivePlaceholders = [
  "Father portrait pending",
  "Family archive photograph pending",
  "A second archive photograph pending",
] as const;

function formatDate(date?: string) {
  if (!date) return "Date pending";
  const value = new Date(date);
  return Number.isNaN(value.getTime()) ? "Date pending" : dateFormatter.format(value);
}

function PieceList({ format, pieces }: { format: FatherPiece["format"]; pieces: FatherPiece[] }) {
  const selected = pieces.filter((piece) => piece.format === format);

  return (
    <section className="father-room__piece-group" aria-labelledby={`father-${format.toLowerCase()}s`}>
      <div className="father-room__piece-heading">
        <p>{format === "Essay" ? "Longer reflections" : "Shorter entries"}</p>
        <h3 id={`father-${format.toLowerCase()}s`}>{format}s</h3>
        <span>{String(selected.length).padStart(2, "0")}</span>
      </div>
      {selected.length ? (
        <ol className="father-room__piece-list">
          {selected.map((piece) => (
            <li key={piece._id}>
              <Link href={`/father/${piece.slug}`}>
                <div>
                  <time dateTime={piece.publishedAt}>{formatDate(piece.publishedAt)}</time>
                  <span>{piece.readingTime ? `${piece.readingTime} min read` : format}</span>
                </div>
                <h4>{piece.title}</h4>
                <span aria-hidden="true">Read&nbsp; ↗</span>
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <div className="father-room__empty">
          <p>No {format.toLowerCase()} has been published here yet.</p>
          <span>This space will remain quiet until Istiaque adds his own words.</span>
        </div>
      )}
    </section>
  );
}

type ArchiveImage = {
  caption?: string;
  image?: ResolvedSanityImage;
};

type FatherProps = {
  archiveImages: ArchiveImage[];
  fatherPage: FatherPage | null;
  pieces: FatherPiece[];
};

export default function Father({ archiveImages, fatherPage, pieces }: FatherProps) {
  const openingImage = archiveImages[0];
  const galleryImages = archiveImages.slice(1, 5);
  const visibleGallery: ArchiveImage[] = galleryImages.length
    ? galleryImages
    : archivePlaceholders.map(() => ({}));

  return (
    <main className="father-room register-father">
      <section className="father-room__opening" aria-labelledby="father-title">
        <div className="father-room__opening-copy">
          <p className="section-label">A quieter room · The beginning</p>
          <h1 id="father-title">My Beloved <em>Father</em></h1>
          <div className="father-room__lead">
            {fatherPage?.opening?.length ? (
              <SanityPortableText value={fatherPage.opening} />
            ) : (
              <>
                <p>
                  My journey in medicine began with my father. He was a doctor, and his example
                  gave the profession a meaning that was personal before it became my own work.
                </p>
                <p>This is a place for the words and photographs I choose to keep in his memory.</p>
              </>
            )}
          </div>
        </div>

        <div className="father-room__opening-image">
          <EditorialImage
            alt={openingImage?.image?.alt || "Approved portrait of Istiaque Ahamed's father"}
            altGuidance="One approved portrait of Istiaque Ahamed's father, presented with its original context"
            caption={openingImage?.caption || openingImage?.image?.caption}
            label="Father portrait pending"
            priority
            ratio="portrait"
            src={openingImage?.image?.src}
          />
          <p aria-hidden="true">Presence before biography.</p>
        </div>
      </section>

      <section className="father-room__words" aria-labelledby="father-words-title">
        <div className="father-room__section-intro">
          <p className="section-label">01 · Words</p>
          <h2 id="father-words-title">Only what is ready to be remembered in public.</h2>
          <p>
            Essays hold the longer reflections. Notes make room for something smaller: a line, a
            habit, or a moment—in Istiaque&apos;s own words, when he chooses to publish it.
          </p>
        </div>
        <PieceList format="Essay" pieces={pieces} />
        <PieceList format="Note" pieces={pieces} />
      </section>

      <section className="father-room__archive" aria-labelledby="father-archive-title">
        <div className="father-room__section-intro father-room__section-intro--archive">
          <p className="section-label">02 · Archive</p>
          <h2 id="father-archive-title">A few photographs. Their own context. Nothing ornamental.</h2>
          <p>
            Approved family images will appear with the captions Istiaque provides. Until then,
            the spaces remain visibly and deliberately empty.
          </p>
        </div>

        <div className="father-room__gallery">
          {visibleGallery.map((item, index) => (
            <EditorialImage
              alt={item.image?.alt || `Approved family archive photograph ${index + 1}`}
              altGuidance="A restrained family archive photograph with an accurate, supplied caption"
              caption={item.caption || item.image?.caption}
              className={`father-room__archive-image father-room__archive-image--${index + 1}`}
              key={`${item.image?.src || "placeholder"}-${index}`}
              label={archivePlaceholders[index] || "Additional archive photograph pending"}
              ratio="landscape"
              src={item.image?.src}
            />
          ))}
        </div>
      </section>

      <section className="father-room__closing" aria-labelledby="father-closing-title">
        <p className="section-label">03 · The thread continues</p>
        <h2 id="father-closing-title">His example sits at the beginning of everything that followed.</h2>
        <div>
          <p>
            The fuller story continues through the path into medicine, the work, and the life
            being built between Bangladesh and Australia.
          </p>
          <Link className="text-link" href="/about">Return to the story <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  );
}
