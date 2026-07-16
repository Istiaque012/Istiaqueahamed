import Link from "next/link";
import Reveal from "@/components/Reveal";
import SanityPortableText from "@/components/SanityPortableText";
import { EditorialImage } from "@/components/ui";
import type { ResolvedSanityImage } from "@/lib/sanity/image";
import type { AboutPage } from "@/lib/sanity/types";

const credentials = [
  { marker: "01", title: "MBBS", detail: "Sylhet North East Medical College · Bangladesh" },
  { marker: "02", title: "Internship", detail: "BIRDEM · Bangladesh" },
  { marker: "03", title: "MPH", detail: "Macquarie University · Australia" },
  { marker: "04", title: "AMC pathway", detail: "Preparing for the AMC" },
] as const;

const worlds = [
  "Medicine",
  "Public health",
  "Healthcare systems",
  "StudyRise",
  "Writing",
  "Documentary storytelling",
  "Fitness",
  "Faith",
] as const;

const fallbackLifestyleSlots = [
  {
    alt: "Istiaque Ahamed writing or building at his desk",
    label: "Desk and writing portrait pending",
    ratio: "landscape" as const,
  },
  {
    alt: "Istiaque Ahamed working in a hospital environment without patient information",
    label: "Hospital environment portrait pending",
    ratio: "portrait" as const,
  },
  {
    alt: "Istiaque Ahamed in Australia as part of his Bangladesh-Australia journey",
    label: "Australia life portrait pending",
    ratio: "wide" as const,
  },
] as const;

type LifestyleImage = {
  image?: ResolvedSanityImage;
  label?: string;
};

type AboutProps = {
  aboutPage: AboutPage | null;
  lifestyleImages: LifestyleImage[];
  portrait?: ResolvedSanityImage;
};

export default function About({ aboutPage, lifestyleImages, portrait }: AboutProps) {
  return (
    <main
      className="about-page"
      itemScope
      itemType="https://schema.org/Person"
    >
      <section className="about-opening light-section" aria-labelledby="about-title">
        <div className="about-opening__rule" aria-hidden="true" />
        <div className="section-shell about-opening__grid">
          <div className="about-opening__content">
            <Reveal>
              <p className="section-label dark-label">About · One whole person</p>
              <h1 id="about-title">
                More than a title. <em>A life in motion.</em>
              </h1>
            </Reveal>
            <Reveal className="about-opening__intro" delay={0.12}>
              <meta content="Istiaque Ahamed" itemProp="name" />
              {aboutPage?.hook?.length ? (
                <SanityPortableText value={aboutPage.hook} />
              ) : (
                <p itemProp="description">
                  I have never seen medicine as only a profession. It is the starting point of a
                  life that now crosses healthcare, public health, leadership, technology, and
                  two countries.
                </p>
              )}
            </Reveal>
            <Reveal className="about-opening__identity" delay={0.2}>
              <p>
                Istiaque Ahamed is a medical doctor, public health professional, and healthcare
                systems builder based between Bangladesh and Australia.
              </p>
              <span>Dhaka · Comilla · Australia</span>
            </Reveal>
          </div>

          <Reveal className="about-opening__portrait" delay={0.08}>
            <EditorialImage
              alt={portrait?.alt || "Portrait of Dr. Istiaque Ahamed"}
              altGuidance="Square professional portrait of Istiaque in soft natural light, direct but relaxed, with a quiet neutral background"
              caption={portrait?.caption}
              label="Professional portrait pending"
              priority
              ratio="square"
              src={portrait?.src}
            />
            <p aria-hidden="true">Medicine · Systems · Building</p>
          </Reveal>
        </div>
      </section>

      <section className="about-foundation dark-section" aria-labelledby="about-foundation-title">
        <div className="section-shell">
          <Reveal className="about-foundation__heading">
            <p className="section-label">01 · Foundation</p>
            <h2 id="about-foundation-title">Training gave me a profession. Two countries widened the view.</h2>
            <div className="about-prose about-foundation__copy">
              {aboutPage?.credentials?.length ? (
                <SanityPortableText value={aboutPage.credentials} />
              ) : (
                <p>
                  I studied medicine in Bangladesh, completed my clinical internship at BIRDEM,
                  and later earned a Master of Public Health in Australia. I continue preparing
                  for the Australian medical pathway while working across clinical medicine,
                  healthcare leadership, and technology.
                </p>
              )}
            </div>
          </Reveal>

          <div className="about-foundation__credentials">
            {credentials.map((credential, index) => (
              <Reveal className="about-foundation__credential" delay={index * 0.06} key={credential.marker}>
                <span>{credential.marker}</span>
                <h3>{credential.title}</h3>
                <p>{credential.detail}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="about-arc">
            <div>
              <span>Bangladesh</span>
              <p>Medical training, clinical work, and the daily reality of healthcare systems.</p>
            </div>
            <div className="about-arc__line" aria-hidden="true"><span>↗</span></div>
            <div>
              <span>Australia</span>
              <p>Public health, a continuing medical pathway, and a wider perspective on care.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="about-father" aria-labelledby="about-father-title">
        <div className="section-shell about-father__grid">
          <Reveal>
            <p className="section-label">02 · The beginning</p>
            <h2 id="about-father-title">Before medicine became my work, it was his example.</h2>
          </Reveal>
          <Reveal className="about-father__copy" delay={0.12}>
            <div className="about-prose">
              {aboutPage?.whyMedicine?.length ? (
                <SanityPortableText value={aboutPage.whyMedicine} />
              ) : (
                <>
                  <p>
                    The reason I became a doctor begins with my father. He was a doctor, and his
                    example gave medicine a meaning that was personal long before it became
                    professional.
                  </p>
                  <p>The path became my own over time, but he remains at its beginning.</p>
                </>
              )}
            </div>
            <Link className="text-link" href="/father">
              Enter My Beloved Father <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="about-human light-section" aria-labelledby="about-human-title">
        <div className="section-shell">
          <Reveal className="about-human__heading">
            <p className="section-label dark-label">03 · The human side</p>
            <h2 id="about-human-title">Several worlds. One way of moving through them.</h2>
            <div className="about-prose about-human__copy">
              {aboutPage?.humanSide?.length ? (
                <SanityPortableText value={aboutPage.humanSide} />
              ) : (
                <>
                  <p>
                    Medicine taught me to notice systems, responsibility, and the details that
                    shape an outcome. That instinct led into healthcare leadership and into
                    building StudyRise, a study-planning platform for demanding courses and exams.
                  </p>
                  <p>
                    Outside work, I return to writing, documentary storytelling, fitness, faith,
                    books, and the discipline of becoming. These interests are not separate from
                    the work. They continually shape how I see it.
                  </p>
                </>
              )}
            </div>
          </Reveal>

          <Reveal className="about-human__worlds">
            {worlds.map((world, index) => (
              <span key={world}><small>{String(index + 1).padStart(2, "0")}</small>{world}</span>
            ))}
          </Reveal>

          <div className="about-human__gallery">
            {fallbackLifestyleSlots.map((slot, index) => {
              const item = lifestyleImages[index];
              return (
                <Reveal className={`about-human__image about-human__image--${index + 1}`} delay={index * 0.08} key={slot.label}>
                  <EditorialImage
                    alt={item?.image?.alt || slot.alt}
                    altGuidance={slot.alt}
                    caption={item?.image?.caption}
                    label={item?.label?.trim() || slot.label}
                    ratio={slot.ratio}
                    src={item?.image?.src}
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-purpose dark-section" aria-labelledby="about-purpose-title">
        <div className="section-shell about-purpose__grid">
          <Reveal>
            <p className="section-label">04 · Why this place exists</p>
            <h2 id="about-purpose-title">A record of the person I am — and the person I am still becoming.</h2>
          </Reveal>
          <Reveal className="about-purpose__copy" delay={0.12}>
            <div className="about-prose">
              {aboutPage?.whatThisSiteIs?.length ? (
                <SanityPortableText value={aboutPage.whatThisSiteIs} />
              ) : (
                <p>
                  I built this site as a place for the whole story: what I am learning, what I am
                  building, what I believe about healthcare, and what it feels like to build a
                  life between Bangladesh and Australia.
                </p>
              )}
            </div>
            <div className="about-purpose__routes">
              <Link href="/feed"><span>01</span>Open the Feed <b aria-hidden="true">↗</b></Link>
              <Link href="/projects"><span>02</span>See what I am building <b aria-hidden="true">↗</b></Link>
              <Link href="/timeline"><span>03</span>Follow the life arc <b aria-hidden="true">↗</b></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="about-closing light-section" aria-labelledby="about-closing-title">
        <div className="section-shell about-closing__grid">
          <Reveal>
            <p className="section-label dark-label">05 · The open door</p>
            <h2 id="about-closing-title">The story continues in public.</h2>
          </Reveal>
          <Reveal className="about-closing__copy" delay={0.12}>
            <div className="about-prose">
              {aboutPage?.cta?.length ? (
                <SanityPortableText value={aboutPage.cta} />
              ) : (
                <p>
                  Follow the work as it develops, or start a thoughtful conversation about
                  medicine, healthcare systems, technology, and building.
                </p>
              )}
            </div>
            <div className="about-closing__actions">
              <Link className="button button-dark" href="/feed">Read the Feed <span aria-hidden="true">↗</span></Link>
              <Link className="text-link dark-link" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
