export const writingNavigation = [
  { index: "01", label: "Feed", href: "/feed" },
  { index: "02", label: "Blog", href: "/blog" },
  { index: "03", label: "Journal", href: "/journal" },
] as const;

export const topNavigation = [
  { kind: "link", label: "Home", href: "/" },
  { kind: "link", label: "About", href: "/about" },
  { kind: "link", label: "Father", href: "/father" },
  { kind: "writing", label: "Writing", href: "/feed" },
  { kind: "link", label: "Projects", href: "/projects" },
  { kind: "link", label: "Work", href: "/work" },
  { kind: "link", label: "Contact", href: "/contact" },
] as const;

export const footerNavigation = [
  {
    label: "Story",
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Father", href: "/father" },
      { label: "Timeline", href: "/timeline" },
    ],
  },
  {
    label: "Writing",
    items: writingNavigation,
  },
  {
    label: "Practice",
    items: [
      { label: "Projects", href: "/projects" },
      { label: "Work", href: "/work" },
      { label: "Documentaries", href: "/documentaries" },
      { label: "Course", href: "/course" },
    ],
  },
  {
    label: "Elsewhere",
    items: [
      { label: "Bookshelf", href: "/bookshelf" },
      { label: "Contact", href: "/contact" },
    ],
  },
] as const;

export const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/istiaqueahmd" },
  { label: "YouTube", href: "https://www.youtube.com/@Istiaqamd" },
  { label: "Facebook", href: "https://www.facebook.com/istiaqueamd" },
  { label: "X", href: "https://x.com/istiaqueahmd" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/istiaque-amd/" },
  { label: "GitHub", href: "https://github.com/Istiaque012" },
] as const;
