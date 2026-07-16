/**
 * Person schema (JSON-LD) — the canonical entity story for Google + AI search.
 * Keep these facts in lockstep with raw/Discovery Answers.md.
 */
import { socialLinks } from "@/lib/navigation";

export const SITE_URL = "https://istiaqueahamed.com";
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PUBLIC_ROLE =
  "Medical doctor, public health professional, and healthcare systems builder";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Istiaque Ahamed",
  url: SITE_URL,
  jobTitle: PUBLIC_ROLE,
  description:
    `${PUBLIC_ROLE} based between Bangladesh and Australia, with interests spanning medicine, public health, healthcare systems, and technology.`,
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Sylhet North East Medical College" },
    { "@type": "CollegeOrUniversity", name: "Macquarie University" },
  ],
  knowsAbout: [
    "Medicine",
    "Public Health",
    "Healthcare Systems",
    "Digital Health Products",
    "Documentary Storytelling",
  ],
  nationality: { "@type": "Country", name: "Bangladesh" },
  sameAs: socialLinks.map((link) => link.href),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Istiaque Ahamed",
  alternateName: "istiaqueahamed.com",
  url: SITE_URL,
  inLanguage: "en",
  author: { "@id": PERSON_ID },
  publisher: { "@id": PERSON_ID },
  description:
    "The official website of Istiaque Ahamed, covering medicine, public health, healthcare systems, technology, projects, writing, and life between Bangladesh and Australia.",
};

export const identityJsonLd = [personJsonLd, websiteJsonLd];
