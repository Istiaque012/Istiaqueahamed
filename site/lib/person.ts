/**
 * Person schema (JSON-LD) — the canonical entity story for Google + AI search.
 * Keep these facts in lockstep with raw/Discovery Answers.md.
 */
export const SITE_URL = "https://istiaqueahamed.com";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Istiaque Ahamed",
  url: SITE_URL,
  jobTitle: "Doctor, Healthcare Leader, and Founder",
  description:
    "Doctor, healthcare leader, and founder working across Bangladesh and Australia, with interests spanning medicine, public health, healthcare systems, and technology.",
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
  nationality: "Bangladeshi",
  sameAs: [
    "https://instagram.com/istiaqueahmd",
    "https://www.youtube.com/@Istiaqamd",
    "https://www.facebook.com/istiaqueamd",
    "https://x.com/istiaqueahmd",
    "https://www.linkedin.com/in/istiaque-amd/",
    "https://github.com/Istiaque012",
  ],
};
