import Timeline, { type TimelineView } from "@/components/Timeline";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";
import { fetchSanity } from "@/lib/sanity/fetch";
import { timelineQuery } from "@/lib/sanity/queries";
import { SANITY_TAGS } from "@/lib/sanity/tags";
import type { TimelineEvent } from "@/lib/sanity/types";

export const metadata = createPageMetadata({ ...pageConfigs.timeline });

const confirmedTimeline: TimelineView[] = [
  {
    id: "father-foundation",
    period: "Foundation",
    title: "A path shaped by his father",
    description: "Istiaque’s late father was a doctor, and his example is why Istiaque chose medicine.",
    category: "Personal",
    link: { href: "/father", label: "Enter the Father archive" },
  },
  {
    id: "mbbs",
    period: "2010–2015",
    title: "Medical training",
    description: "MBBS at Sylhet North East Medical College in Bangladesh.",
    category: "Medicine",
    link: { href: "/work", label: "See the public work record" },
  },
  {
    id: "internship",
    period: "2015",
    title: "Clinical internship",
    description: "Completed medical internship at BIRDEM.",
    category: "Medicine",
    link: { href: "/work", label: "See training and focus" },
  },
  {
    id: "medical-officer",
    period: "2016–2018",
    title: "Medical Officer",
    description: "Worked at Green Life Hospital and CD Path Hospital.",
    category: "Medicine",
    link: { href: "/work", label: "Read the curated record" },
  },
  {
    id: "mph",
    period: "2019",
    title: "Public health in Australia",
    description: "Completed a Master of Public Health at Macquarie University.",
    category: "Australia",
    link: { href: "/about", label: "Read the two-country story" },
  },
  {
    id: "studyrise",
    period: "2026",
    title: "StudyRise launched",
    description: "A study-planning platform that turns demanding courses and exams into structured daily work.",
    category: "Tech",
    link: { href: "/projects/studyrise", label: "Open the StudyRise case study" },
  },
  {
    id: "amc-pathway",
    period: "In progress",
    title: "Australian medical pathway",
    description: "Preparing for the AMC pathway while continuing a life between Bangladesh and Australia.",
    category: "Australia",
    link: { href: "/about", label: "Continue to About" },
  },
];

export default async function TimelinePage() {
  const documents = await fetchSanity<TimelineEvent[]>({
    query: timelineQuery,
    requestTag: "timeline-index",
    tags: [SANITY_TAGS.timelineEvent],
  });

  const authored: TimelineView[] = (documents ?? []).map((event) => ({
    category: event.category || "Uncategorised",
    description: event.description,
    id: event._id,
    link: event.relatedLink?.href && event.relatedLink.label
      ? { href: event.relatedLink.href, label: event.relatedLink.label }
      : undefined,
    period: event.year || "Undated",
    title: event.title,
  }));
  const usesConfirmedFallback = authored.length === 0;

  return <Timeline events={usesConfirmedFallback ? confirmedTimeline : authored} usesConfirmedFallback={usesConfirmedFallback} />;
}
