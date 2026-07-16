/**
 * Home page content. Public-facing facts — keep in lockstep with
 * raw/Discovery Answers.md and the public wiki pages.
 */

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Father", href: "/father" },
  { label: "Feed", href: "#feed" },
  { label: "Projects", href: "#projects" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const institutions = [
  "Sylhet North East Medical College",
  "BIRDEM",
  "Macquarie University (MPH)",
  "AMC candidate",
];

export const facets = [
  "Clinical Medicine",
  "Public Health",
  "Healthcare Systems",
  "Product Building",
  "Documentary",
];

export const timeline = [
  { role: "MPH, Macquarie University", org: "Current focus", current: true },
  { role: "Internship", org: "BIRDEM" },
  { role: "MBBS", org: "Sylhet North East Medical College" },
];

export const projects = [
  {
    name: "StudyRise",
    blurb: "A study platform — React, Vite, Supabase, Vercel. Built and shipped.",
    href: "https://studyrise.app",
  },
];

export const faqs = [
  {
    q: "Is he a doctor or a builder?",
    a: "Both. A medical doctor with an MPH who also builds healthcare products and thinks deeply about systems of care.",
  },
  {
    q: "Where is he based?",
    a: "Between Bangladesh and Australia.",
  },
  {
    q: "What is he working toward?",
    a: "Bringing clinical insight and systems thinking together — better care delivery, and an AI-in-healthcare course for doctors.",
  },
];
