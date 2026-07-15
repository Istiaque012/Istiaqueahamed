import About from "@/components/About";
import { createPageMetadata } from "@/lib/metadata";
import { resolveSanityImage } from "@/lib/sanity/image";
import { fetchSanity } from "@/lib/sanity/fetch";
import { aboutPageQuery } from "@/lib/sanity/queries";
import { SANITY_TAGS } from "@/lib/sanity/tags";
import type { AboutPage as AboutPageContent } from "@/lib/sanity/types";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Istiaque Ahamed is a medical doctor, public health professional, and healthcare systems builder based between Bangladesh and Australia.",
  path: "/about",
});

export default async function AboutPage() {
  const aboutPage = await fetchSanity<AboutPageContent | null>({
    query: aboutPageQuery,
    requestTag: "about-page",
    tags: [SANITY_TAGS.aboutPage],
  });
  const portrait = resolveSanityImage(aboutPage?.portrait, {
    fallbackAlt: "Portrait of Istiaque Ahamed",
    width: 1400,
    height: 1400,
  });
  const lifestyleImages = (aboutPage?.lifestyleImages ?? []).slice(0, 3).map((item) => ({
    image: resolveSanityImage(item.image, {
      fallbackAlt: "Istiaque Ahamed in daily life",
      width: 1800,
      height: 1200,
    }),
    label: item.label,
  }));

  return <About aboutPage={aboutPage} lifestyleImages={lifestyleImages} portrait={portrait} />;
}
