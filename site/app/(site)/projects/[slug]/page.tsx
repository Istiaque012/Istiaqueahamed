import { cache } from "react";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { createPageMetadata } from "@/lib/metadata";
import { fetchSanity } from "@/lib/sanity/fetch";
import { resolveSanityImage, type ResolvedSanityImage } from "@/lib/sanity/image";
import { projectBySlugQuery } from "@/lib/sanity/queries";
import { SANITY_TAGS } from "@/lib/sanity/tags";
import type { Project } from "@/lib/sanity/types";

type Props = { params: Promise<{ slug: string }> };

const getProject = cache((slug: string) => fetchSanity<Project | null>({
  query: projectBySlugQuery,
  params: { slug },
  requestTag: `project-${slug}`,
  tags: [SANITY_TAGS.project],
}));

const studyRiseCover: ResolvedSanityImage = {
  alt: "StudyRise study-planning platform showing readiness and study progress",
  height: 630,
  src: "/images/studyrise-og.png",
  width: 1200,
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project && slug !== "studyrise") {
    return createPageMetadata({
      title: "Project not found",
      description: "This project page is not available.",
      path: `/projects/${slug}`,
      noIndex: true,
    });
  }

  const name = project?.name || "StudyRise";
  return createPageMetadata({
    title: `${name} · Project`,
    description: project?.tagline || "How StudyRise turns demanding exams and academic courses into structured daily study systems.",
    path: `/projects/${slug}`,
    imageAlt: project?.coverImage?.alt || "StudyRise study-planning platform by Istiaque Ahamed",
    imageUrl: project?.coverImage?.asset && "url" in project.coverImage.asset
      ? project.coverImage.asset.url
      : slug === "studyrise" ? "/images/studyrise-og.png" : undefined,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project && slug !== "studyrise") notFound();

  const cover = resolveSanityImage(project?.coverImage, {
    fallbackAlt: `${project?.name || "StudyRise"} project by Istiaque Ahamed`,
    height: 875,
    width: 1400,
  }) || (slug === "studyrise" ? studyRiseCover : undefined);
  const screenshots = (project?.screenshots ?? []).slice(0, 5).map((image, index) => resolveSanityImage(image, {
    fallbackAlt: `${project?.name || "StudyRise"} product view ${index + 1}`,
    height: 900,
    width: 1440,
  }));

  return <ProjectCaseStudy cover={cover} project={project} screenshots={screenshots} slug={slug} />;
}
