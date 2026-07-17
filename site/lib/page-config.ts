export type PageConfig = {
  description: string;
  eyebrow: string;
  image?: { altGuidance: string; label: string; ratio?: "portrait" | "landscape" | "wide" };
  intro: string;
  path: string;
  session: string;
  title: string;
  tone?: "dark" | "father" | "light";
};

export const pageConfigs = {
  about: {
    title: "About",
    eyebrow: "The complete story",
    description: "The story, identity, and Bangladesh–Australia arc of Istiaque Ahamed.",
    intro: "A story-led portrait of the person behind the training, projects, writing, and two-country journey.",
    path: "/about",
    session: "08",
    tone: "light",
    image: { label: "Natural portrait", altGuidance: "A relaxed portrait of Istiaque in natural light" },
  },
  feed: {
    title: "Feed",
    eyebrow: "Blog & Journal",
    description: "Blog posts and Journal entries from Istiaque Ahamed, ordered by publication date.",
    intro: "A chronological stream of longer Blog posts and shorter Journal entries.",
    path: "/feed",
    session: "13",
  },
  blog: {
    title: "Blog",
    eyebrow: "Long-form writing",
    description: "Essays by Istiaque Ahamed on medicine, public health, systems, and technology.",
    intro: "Crafted essays for ideas that need room, evidence, and a considered point of view.",
    path: "/blog",
    session: "11",
    tone: "light",
  },
  journal: {
    title: "Journal",
    eyebrow: "Thoughts · Reads · Observations",
    description: "Short Journal notes from Istiaque Ahamed.",
    intro: "A lighter, more immediate record of what I am noticing, reading, learning, and carrying forward.",
    path: "/journal",
    session: "12",
  },
  father: {
    title: "My Beloved Father",
    eyebrow: "The beginning",
    description: "A quiet space for the man who shaped Istiaque Ahamed's path into medicine.",
    intro: "My journey in medicine began with my father. This room will hold memories, photographs, and words in my own voice.",
    path: "/father",
    session: "09",
    tone: "father",
    image: { label: "Father archive photograph", altGuidance: "An approved family archive photograph with its original context", ratio: "landscape" },
  },
  projects: {
    title: "Projects",
    eyebrow: "The doctor who builds",
    description: "A record of product and project work, beginning with StudyRise.",
    intro: "Useful products explained through the problem, the response, and the real work behind them.",
    path: "/projects",
    session: "14",
  },
  work: {
    title: "Work",
    eyebrow: "Training & focus",
    description: "The public professional foundation and areas of focus of Istiaque Ahamed.",
    intro: "A curated account of medical training, public health, selected experience, and the systems around care.",
    path: "/work",
    session: "15",
    image: { label: "Work portrait", altGuidance: "Istiaque working with calm concentration rather than posing", ratio: "wide" },
  },
  documentaries: {
    title: "Documentaries",
    eyebrow: "Stories on camera",
    description: "Documentary films and visual stories by Istiaque Ahamed.",
    intro: "Films will be presented with their context, themes, and a deliberate low-impact playback experience.",
    path: "/documentaries",
    session: "16",
  },
  course: {
    title: "AI in Healthcare",
    eyebrow: "Course · Coming later",
    description: "The future AI in Healthcare course by Istiaque Ahamed.",
    intro: "An intentional place for a future course, with no registration or promise before the offer is ready.",
    path: "/course",
    session: "19",
  },
  timeline: {
    title: "Timeline",
    eyebrow: "Bangladesh → Australia",
    description: "The life arc of Istiaque Ahamed across medicine, technology, and countries.",
    intro: "A visual chronology connecting the confirmed moments that shaped the work, the person, and what comes next.",
    path: "/timeline",
    session: "17",
  },
  bookshelf: {
    title: "Bookshelf",
    eyebrow: "Reading life",
    description: "Books Istiaque Ahamed is reading, has read, or wants to read.",
    intro: "A personal library built around real reading notes, never generated opinions or assumed taste.",
    path: "/bookshelf",
    session: "18",
    tone: "light",
  },
  contact: {
    title: "Contact",
    eyebrow: "An open door",
    description: "A private contact form and confirmed social links for Istiaque Ahamed.",
    intro: "A quiet route for thoughtful messages about medicine, systems, building, speaking, or meaningful collaboration.",
    path: "/contact",
    session: "20",
  },
} as const satisfies Record<string, PageConfig>;
