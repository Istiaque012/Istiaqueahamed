"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SanityPortableText from "@/components/SanityPortableText";
import { EditorialImage } from "@/components/ui";
import { socialLinks } from "@/lib/navigation";
import type { ResolvedSanityImage } from "@/lib/sanity/image";
import type { FeedItem, HomePage, HomeWriting } from "@/lib/sanity/types";

const milestones = [
  { year: "MBBS", title: "Medical training", detail: "Sylhet North East Medical College, Bangladesh" },
  { year: "Internship", title: "Clinical foundation", detail: "BIRDEM, Bangladesh" },
  { year: "MPH", title: "Public health", detail: "Macquarie University, Australia" },
  { year: "Now", title: "The Australian pathway", detail: "Preparing for the AMC" },
] as const;

const fallbackLifeSlots = [
  {
    alt: "A candid portrait showing Istiaque's life between Bangladesh and Australia",
    label: "Between two countries",
    ratio: "portrait" as const,
  },
  {
    alt: "Istiaque at work in a healthcare or hospital setting without patient information",
    label: "Medicine in practice",
    ratio: "landscape" as const,
  },
  {
    alt: "Istiaque writing or building StudyRise at his desk",
    label: "Building after hours",
    ratio: "portrait" as const,
  },
] as const;

type LifeImage = {
  image?: ResolvedSanityImage;
  label?: string;
};

type LandingPageProps = {
  fatherImage?: ResolvedSanityImage;
  feed: FeedItem[];
  homePage: HomePage | null;
  homeWriting: HomeWriting;
  lifeImages: LifeImage[];
  portrait?: ResolvedSanityImage;
};

const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

function formatDate(date?: string) {
  if (!date) return "Undated";
  const value = new Date(date);
  return Number.isNaN(value.getTime()) ? "Undated" : dateFormatter.format(value);
}

function itemHref(item: FeedItem) {
  if (item._type === "documentary") return "/documentaries";
  if (item._type === "project") return item.slug ? `/projects/${item.slug}` : "/projects";
  if (item._type === "fatherPiece") return item.slug ? `/father/${item.slug}` : "/father";
  if (item._type === "journalEntry") return item.slug ? `/journal/${item.slug}` : "/journal";
  return item.slug ? `/blog/${item.slug}` : "/blog";
}

function itemType(item: FeedItem) {
  const labels: Record<FeedItem["_type"], string> = {
    blogPost: "Blog",
    documentary: "Film",
    fatherPiece: "Father",
    journalEntry: "Journal",
    project: "Project",
  };
  return labels[item._type];
}

export default function LandingPage({
  fatherImage,
  feed,
  homePage,
  homeWriting,
  lifeImages,
  portrait,
}: LandingPageProps) {
  const headline = homePage?.presence?.headline?.trim() || "Istiaque Ahamed";
  const roleLine =
    homePage?.presence?.roleLine?.trim() ||
    "Medical doctor, public health professional, and healthcare systems builder.";
  const latestWriting = homeWriting.latest
    .filter((item) => item._id !== homeWriting.featured?._id)
    .slice(0, homeWriting.featured ? 3 : 4);

  return (
    <main className="landing-page">
      <section id="home" className="home-presence" aria-labelledby="home-title">
        <div className="home-presence__grain" aria-hidden="true" />
        <div className="home-presence__portrait">
          <EditorialImage
            alt={portrait?.alt || "Portrait of Istiaque Ahamed"}
            altGuidance="Waist-up editorial portrait of Istiaque, direct gaze, directional window light, dark neutral setting"
            label="Hero portrait pending"
            priority
            ratio="portrait"
            src={portrait?.src}
          />
        </div>

        <div className="home-presence__content">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Presence · Bangladesh ↔ Australia
          </motion.p>
          <motion.h1
            id="home-title"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {headline}
          </motion.h1>
          <motion.div
            className="home-presence__bottom"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <p className="home-presence__tagline">Medicine, technology, and the life in between.</p>
              <p className="home-presence__role">{roleLine}</p>
            </div>
            <div className="home-presence__actions">
              <Link href="/about" className="button button-light">
                Explore the story <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/projects" className="button button-line">
                See what I build <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </motion.div>
        </div>

        <p className="home-presence__index" aria-hidden="true">01 / 08 · One whole person</p>
      </section>

      <section className="home-conviction light-section" aria-labelledby="conviction-title">
        <div className="section-shell home-conviction__grid">
          <Reveal>
            <p className="section-label dark-label">02 · Point of view</p>
            <h2 id="conviction-title">Care is built long before the consultation begins.</h2>
          </Reveal>
          <Reveal className="home-prose home-conviction__copy" delay={0.1}>
            {homePage?.pointOfView?.length ? (
              <SanityPortableText value={homePage.pointOfView} />
            ) : (
              <>
                <p className="home-prose__lead">
                  Good healthcare is not only built inside consultation rooms.
                </p>
                <p>
                  It is built through systems, discipline, communication, leadership, and the
                  small operational details patients never see but always feel.
                </p>
              </>
            )}
            <Link href="/work" className="text-link dark-link">
              See the wider work <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="home-father" aria-labelledby="father-doorway-title">
        <div className="section-shell home-father__grid">
          <Reveal className="home-father__image">
            <EditorialImage
              alt={fatherImage?.alt || "Family archive image connected to Istiaque's father"}
              altGuidance="One approved family archive photograph of Istiaque's father, preserved with its natural texture and context"
              label="Father archive image pending"
              ratio="portrait"
              src={fatherImage?.src}
            />
          </Reveal>
          <div className="home-father__copy">
            <Reveal>
              <p className="section-label">03 · Inheritance</p>
              <p className="home-father__eyebrow">Before the credentials, there was an example.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <blockquote id="father-doorway-title">
                {homePage?.fatherDoorway?.copy?.length ? (
                  <SanityPortableText value={homePage.fatherDoorway.copy} />
                ) : (
                  <p>
                    My journey in medicine began with my father. He was a doctor, and the life he
                    lived shaped the path I chose.
                  </p>
                )}
              </blockquote>
            </Reveal>
            <Reveal delay={0.18}>
              <Link href="/father" className="text-link">
                Enter My Beloved Father <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="home-foundation dark-section" aria-labelledby="foundation-title">
        <div className="section-shell">
          <Reveal className="home-foundation__intro">
            <p className="section-label">04 · Foundation</p>
            <h2 id="foundation-title">Medicine is the foundation. Systems are the wider view.</h2>
            <div className="home-prose home-foundation__copy">
              {homePage?.foundation?.length ? (
                <SanityPortableText value={homePage.foundation} />
              ) : (
                <p>
                  Training in Bangladesh, public health in Australia, and a continuing path
                  through medicine connect the two countries that shape this life.
                </p>
              )}
            </div>
          </Reveal>
          <div className="home-foundation__timeline">
            {milestones.map((milestone, index) => (
              <Reveal key={milestone.year} className="home-foundation__row" delay={index * 0.06}>
                <span>0{index + 1}</span>
                <strong>{milestone.year}</strong>
                <h3>{milestone.title}</h3>
                <p>{milestone.detail}</p>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link href="/timeline" className="text-link home-foundation__link">
              Follow the complete timeline <span aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="home-build light-section" aria-labelledby="build-title">
        <div className="section-shell">
          <Reveal className="home-build__heading">
            <div>
              <p className="section-label dark-label">05 · Proof of building</p>
              <h2 id="build-title">StudyRise</h2>
            </div>
            <p>Live at studyrise.app</p>
          </Reveal>
          <div className="home-build__grid">
            <Reveal className="home-build__visual">
              <Image
                src="/images/studyrise-og.png"
                alt="StudyRise study-planning platform showing readiness and study progress"
                width={1200}
                height={630}
                sizes="(max-width: 900px) 100vw, 62vw"
              />
            </Reveal>
            <Reveal className="home-build__copy" delay={0.12}>
              <p className="home-build__kicker">A study plan that becomes a daily system.</p>
              <div className="home-prose">
                {homePage?.studyRise?.length ? (
                  <SanityPortableText value={homePage.studyRise} />
                ) : (
                  <p>
                    StudyRise turns exams and academic courses into structured daily work — from
                    planning and focus to revision, question practice, and progress.
                  </p>
                )}
              </div>
              <p className="home-build__aside">
                Built with React, Vite, Supabase, and Vercel. A doctor using software to make the
                next useful step clearer.
              </p>
              <div className="home-build__links">
                <Link href="https://studyrise.app" target="_blank" rel="noreferrer" className="button button-dark">
                  Visit StudyRise <span aria-hidden="true">↗</span>
                </Link>
                <Link href="/projects" className="text-link dark-link">
                  See the build story <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="writing" className="home-publishing dark-section" aria-labelledby="writing-title">
        <div className="section-shell">
          <Reveal className="home-publishing__heading">
            <div>
              <p className="section-label">06 · Published</p>
              <h2 id="writing-title">Notes from the life in between.</h2>
            </div>
            <p>Blog, journal, projects, films, and the Father archive — one living record.</p>
          </Reveal>

          <div className="home-writing">
            {homeWriting.featured ? (
              <Reveal className="home-writing__featured">
                <Link href={itemHref(homeWriting.featured)}>
                  <div className="home-writing__meta">
                    <span>Featured on Home</span>
                    <span>{itemType(homeWriting.featured)} · {formatDate(homeWriting.featured.date)}</span>
                  </div>
                  <h3>{homeWriting.featured.title}</h3>
                  {homeWriting.featured.excerpt ? <p>{homeWriting.featured.excerpt}</p> : null}
                  <span className="home-writing__arrow" aria-hidden="true">↗</span>
                </Link>
              </Reveal>
            ) : null}

            <div className="home-writing__latest">
              {latestWriting.length ? (
                latestWriting.map((item, index) => (
                  <Reveal key={item._id} className="home-writing__row" delay={index * 0.06}>
                    <Link href={itemHref(item)}>
                      <div className="home-writing__meta">
                        <span>{itemType(item)}{item.tag ? ` · ${item.tag}` : ""}</span>
                        <span>{formatDate(item.date)}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <span className="home-writing__arrow" aria-hidden="true">↗</span>
                    </Link>
                  </Reveal>
                ))
              ) : (
                <Reveal className="home-empty-state">
                  <p className="section-label">Latest writing</p>
                  <h3>The first pieces are being prepared.</h3>
                  <p>Published Blog and Journal entries will appear here automatically.</p>
                  <Link href="/feed" className="text-link">Visit Writing <span aria-hidden="true">↗</span></Link>
                </Reveal>
              )}
            </div>
          </div>

          <div className="home-feed">
            <Reveal className="home-feed__intro">
              <p className="section-label">Latest from the complete Feed</p>
              <Link href="/feed" className="text-link">Open the Feed <span aria-hidden="true">↗</span></Link>
            </Reveal>
            {feed.length ? (
              <div className="home-feed__list">
                {feed.map((item, index) => (
                  <Reveal key={item._id} className="home-feed__item" delay={index * 0.05}>
                    <Link href={itemHref(item)}>
                      <span>0{index + 1}</span>
                      <span>{itemType(item)}</span>
                      <strong>{item.title}</strong>
                      <span>{formatDate(item.date)}</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            ) : (
              <Reveal className="home-feed__empty">
                <p>The Feed is quiet for now. New public work will arrive here without a site update.</p>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="home-life light-section" aria-labelledby="life-title">
        <div className="section-shell">
          <Reveal className="home-life__heading">
            <p className="section-label dark-label">07 · Life in motion</p>
            <h2 id="life-title">Not separate identities. One evolving life.</h2>
          </Reveal>
          <div className="home-life__gallery">
            {fallbackLifeSlots.map((slot, index) => {
              const item = lifeImages[index];
              return (
                <Reveal className={`home-life__image home-life__image--${index + 1}`} delay={index * 0.08} key={slot.label}>
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

      <section id="contact" className="home-contact" aria-labelledby="contact-title">
        <div className="section-shell home-contact__grid">
          <Reveal>
            <p className="section-label">08 · Open door</p>
            <h2 id="contact-title">For thoughtful conversations.</h2>
          </Reveal>
          <Reveal className="home-contact__copy" delay={0.1}>
            <div className="home-prose">
              {homePage?.contactInvitation?.length ? (
                <SanityPortableText value={homePage.contactInvitation} />
              ) : (
                <p>Medicine, healthcare systems, technology, building, and the ideas between them.</p>
              )}
            </div>
            <Link href="/contact" className="button button-light">
              Send a message <span aria-hidden="true">↗</span>
            </Link>
            <div className="home-contact__socials">
              {socialLinks.map((social) => (
                <Link key={social.label} href={social.href} target="_blank" rel="me noreferrer">
                  {social.label}<span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
