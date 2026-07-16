export const feedNavigation = [
  { index: "01", label: "All", href: "/feed" },
  { index: "02", label: "Blog", href: "/blog" },
  { index: "03", label: "Journal", href: "/journal" },
] as const;

export const topNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Father", href: "/father" },
  { label: "Feed", href: "/feed" },
  { label: "Projects", href: "/projects" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
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
    label: "Feed",
    items: [
      { label: "All posts", href: "/feed" },
      ...feedNavigation.slice(1),
      { label: "RSS", href: "/feed.xml" },
    ],
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
