"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useState, type ReactNode } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Father", href: "/father" },
  { label: "Writing", href: "#writing" },
  { label: "Projects", href: "#projects" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com/istiaqueahmd" },
  { label: "YouTube", href: "https://www.youtube.com/@Istiaqamd" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/istiaque-amd/" },
  { label: "GitHub", href: "https://github.com/Istiaque012" },
];

const milestones = [
  { year: "2010–15", title: "Medical training", detail: "MBBS · Sylhet North East Medical College" },
  { year: "2015", title: "Clinical foundation", detail: "Internship · BIRDEM" },
  { year: "2019", title: "Public health", detail: "MPH · Macquarie University" },
  { year: "2026", title: "Building for learners", detail: "StudyRise founded" },
];

const strands = [
  {
    number: "01",
    title: "Medicine",
    text: "Clinical training remains the foundation of how I understand people, responsibility, and care.",
  },
  {
    number: "02",
    title: "Systems",
    text: "Good healthcare is shaped by communication, discipline, leadership, and the details patients always feel.",
  },
  {
    number: "03",
    title: "Technology",
    text: "I build practical tools that turn complicated goals into clearer, more useful daily action.",
  },
];

const writing = [
  { type: "Medicine", title: "Good healthcare is built beyond the consultation room" },
  { type: "Life in medicine", title: "Notes from the Australian medical pathway" },
  { type: "Technology", title: "Why I build software as a doctor" },
];

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <main className="landing-page">
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

      <header className="site-header">
        <div className="header-inner">
          <Link href="#home" className="brand-mark" aria-label="Istiaque Ahamed home">
            <span>IA</span>
            <span className="brand-name">Istiaque Ahamed</span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navigation.map((item, index) => (
              <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </header>

      <section id="home" className="hero-section">
        <motion.div
          className="hero-image"
          initial={{ scale: 1.04, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/hero-architecture.png"
            alt="Monochrome architectural study of light, glass, and structure"
            fill
            priority
            sizes="100vw"
          />
        </motion.div>

        <div className="hero-content">
          <motion.p
            className="section-label hero-label"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Doctor · Healthcare leader · Founder
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            Istiaque
            <br />
            <em>Ahamed</em>
          </motion.h1>

          <motion.div
            className="hero-bottom"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <div>
              <p className="hero-tagline">Medicine, technology, and the life in between.</p>
              <p className="hero-role">
                Working across Bangladesh and Australia.
              </p>
            </div>
            <div className="hero-actions">
              <Link href="#about" className="button button-light">
                Explore my story <span aria-hidden="true">↓</span>
              </Link>
              <Link href="#projects" className="button button-line">
                See what I build <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>Bangladesh</span>
          <span>23.8° N</span>
          <span>Australia</span>
        </div>
      </section>

      <section id="about" className="light-section intro-section">
        <div className="section-shell intro-grid">
          <Reveal className="section-heading-block">
            <p className="section-label dark-label">01 · About</p>
            <h2>A life built across more than one discipline.</h2>
          </Reveal>

          <Reveal className="intro-copy" delay={0.1}>
            <p className="intro-lead">
              I am a medical doctor with a deep interest in public health, healthcare systems,
              and the tools that can make care work better.
            </p>
            <p>
              My life moves between clinical practice, leadership, technology, and the long
              process of building a future across two countries. This is where those parts come
              together.
            </p>
            <Link href="#work" className="text-link dark-link">
              Follow the journey <span aria-hidden="true">↓</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="dark-section strands-section" aria-labelledby="strands-title">
        <div className="section-shell">
          <Reveal className="strands-header">
            <p className="section-label">02 · The work</p>
            <h2 id="strands-title">Three worlds.<br />One way of thinking.</h2>
          </Reveal>

          <div className="strands-list">
            {strands.map((strand, index) => (
              <Reveal key={strand.title} className="strand-row" delay={index * 0.08}>
                <span className="strand-number">{strand.number}</span>
                <h3>{strand.title}</h3>
                <p>{strand.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="section-shell">
          <Reveal className="work-intro">
            <p className="section-label">03 · Journey</p>
            <h2>Medicine is the foundation. Systems are the wider view.</h2>
            <p>
              Doctor, healthcare leader, and founder working across Bangladesh and Australia.
            </p>
          </Reveal>

          <div className="milestone-list">
            {milestones.map((milestone, index) => (
              <Reveal key={milestone.year} className="milestone-row" delay={index * 0.06}>
                <span>{milestone.year}</span>
                <h3>{milestone.title}</h3>
                <p>{milestone.detail}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="light-section project-section">
        <div className="section-shell">
          <Reveal className="project-title-row">
            <div>
              <p className="section-label dark-label">04 · Featured project</p>
              <h2>StudyRise</h2>
            </div>
            <p>Live on the web · Founded 2026</p>
          </Reveal>

          <div className="project-grid">
            <Reveal className="project-visual">
              <Image
                src="/images/studyrise-og.png"
                alt="StudyRise study-planning platform showing readiness and study progress"
                width={1200}
                height={630}
                sizes="(max-width: 900px) 100vw, 62vw"
              />
            </Reveal>

            <Reveal className="project-copy" delay={0.12}>
              <p className="project-kicker">A study plan that becomes a daily system.</p>
              <p>
                StudyRise helps students turn large exams and academic courses into structured
                daily work. Planning, focused study, revision, question practice, and progress
                live in one clear workspace.
              </p>
              <ul>
                <li>Exam and academic planning</li>
                <li>Spaced repetition and question tracking</li>
                <li>Daily focus and progress analytics</li>
              </ul>
              <div className="project-links">
                <Link href="https://studyrise.app" target="_blank" rel="noreferrer" className="button button-dark">
                  Visit StudyRise <span aria-hidden="true">↗</span>
                </Link>
                <Link href="https://github.com/Istiaque012" target="_blank" rel="noreferrer me" className="text-link dark-link">
                  GitHub profile <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="writing" className="dark-section writing-section">
        <div className="section-shell writing-grid">
          <Reveal className="writing-heading">
            <p className="section-label">05 · Writing</p>
            <h2>Notes from the life in between.</h2>
            <p>
              Medicine, systems, books, discipline, and the experience of building across two
              countries.
            </p>
          </Reveal>

          <div className="writing-list">
            {writing.map((item, index) => (
              <Reveal key={item.title} className="writing-row" delay={index * 0.08}>
                <div>
                  <span>{item.type}</span>
                  <span>0{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <span className="writing-arrow" aria-hidden="true">↗</span>
              </Reveal>
            ))}
            <Reveal>
              <p className="writing-note">First essays are being prepared for publication.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="father-section" aria-labelledby="father-title">
        <div className="father-inner">
          <Reveal>
            <p className="section-label">06 · My beloved father</p>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote id="father-title">
              “My journey in medicine began with my father. He was a doctor, and the life he
              lived shaped the path I chose.”
            </blockquote>
          </Reveal>
          <Reveal delay={0.18}>
            <Link href="/father" className="text-link">
              Enter this space <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="light-section contact-section">
        <div className="section-shell contact-grid">
          <Reveal>
            <p className="section-label dark-label">07 · Contact</p>
            <h2>For thoughtful conversations.</h2>
          </Reveal>
          <Reveal className="contact-copy" delay={0.1}>
            <p>
              I welcome thoughtful messages about medicine, healthcare, technology, building,
              speaking, or a meaningful collaboration.
            </p>
            <div className="social-list">
              {socials.map((social) => (
                <Link key={social.label} href={social.href} target="_blank" rel="noreferrer me">
                  {social.label}<span aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <p>Istiaque Ahamed</p>
          <p>Medicine, technology, and the life in between.</p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  );
}
