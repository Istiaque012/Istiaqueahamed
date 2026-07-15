import ProjectIndex, { type ProjectIndexItem } from "@/components/ProjectIndex";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";
import { fetchSanity } from "@/lib/sanity/fetch";
import { resolveSanityImage, type ResolvedSanityImage } from "@/lib/sanity/image";
import { projectsQuery } from "@/lib/sanity/queries";
import { SANITY_TAGS } from "@/lib/sanity/tags";
import type { Project } from "@/lib/sanity/types";

export const metadata = createPageMetadata({ ...pageConfigs.projects });

const studyRiseCover: ResolvedSanityImage = {
  alt: "StudyRise study-planning platform showing readiness and study progress",
  height: 630,
  src: "/images/studyrise-og.png",
  width: 1200,
};

function toIndexItem(project: Project): ProjectIndexItem {
  return {
    cover: resolveSanityImage(project.coverImage, {
      fallbackAlt: `${project.name} project by Istiaque Ahamed`,
      height: 788,
      width: 1400,
    }),
    href: `/projects/${project.slug}`,
    name: project.name,
    status: project.status || "Published",
    tagline: project.tagline || "An approved project by Istiaque Ahamed.",
    techStack: project.techStack,
  };
}

export default async function ProjectsPage() {
  const projects = await fetchSanity<Project[]>({
    query: projectsQuery,
    requestTag: "projects-index",
    tags: [SANITY_TAGS.project],
  });
  const approved = (projects ?? []).map(toIndexItem);
  const studyRise = approved.find((project) => project.href === "/projects/studyrise") ?? {
    cover: studyRiseCover,
    href: "/projects/studyrise",
    name: "StudyRise",
    status: "Live",
    tagline: "A study-planning platform that turns exams and academic courses into structured daily study systems.",
    techStack: ["React", "Vite", "Supabase", "Vercel"],
  };
  const others = approved.filter((project) => project.href !== "/projects/studyrise");

  return <ProjectIndex featured={studyRise} projects={others} />;
}
