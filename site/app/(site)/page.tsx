import LandingPage from "@/components/LandingPage";
import { resolveSanityImage } from "@/lib/sanity/image";
import { fetchSanity } from "@/lib/sanity/fetch";
import { feedTeaserQuery, homePageQuery, homeWritingQuery } from "@/lib/sanity/queries";
import type { FeedItem, HomePage, HomeWriting } from "@/lib/sanity/types";

export default async function Home() {
  const [homePage, homeWriting, feed] = await Promise.all([
    fetchSanity<HomePage | null>({
      query: homePageQuery,
      requestTag: "home-page",
      tags: ["sanity:homePage"],
    }),
    fetchSanity<HomeWriting>({
      query: homeWritingQuery,
      requestTag: "home-writing",
      tags: ["sanity:homePage", "sanity:blogPost", "sanity:journalEntry"],
    }),
    fetchSanity<FeedItem[]>({
      query: feedTeaserQuery,
      params: { limit: 3 },
      requestTag: "home-feed",
      tags: ["sanity:feed"],
    }),
  ]);

  const portrait = resolveSanityImage(homePage?.presence?.portrait, {
    fallbackAlt: "Portrait of Istiaque Ahamed",
    height: 1800,
    width: 1440,
  });
  const fatherImage = resolveSanityImage(homePage?.fatherDoorway?.archiveImage, {
    fallbackAlt: "An image from Istiaque Ahamed's family archive",
    height: 1500,
    width: 1200,
  });
  const lifeImages = (homePage?.lifeInMotion ?? []).slice(0, 3).map((item, index) => ({
    image: resolveSanityImage(item.image, {
      fallbackAlt: item.label?.trim() || `Life in motion photograph ${index + 1}`,
      height: index === 1 ? 1200 : 1500,
      width: index === 1 ? 1800 : 1200,
    }),
    label: item.label,
  }));

  return (
    <LandingPage
      fatherImage={fatherImage}
      feed={feed ?? []}
      homePage={homePage}
      homeWriting={homeWriting ?? { featured: null, latest: [] }}
      lifeImages={lifeImages}
      portrait={portrait}
    />
  );
}
