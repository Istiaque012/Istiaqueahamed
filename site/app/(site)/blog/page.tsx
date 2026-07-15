import BlogIndex, { type BlogListItem } from "@/components/writing/BlogIndex";
import { createPageMetadata } from "@/lib/metadata";
import { pageConfigs } from "@/lib/page-config";
import { fetchSanity } from "@/lib/sanity/fetch";
import { resolveSanityImage } from "@/lib/sanity/image";
import { blogPostsQuery } from "@/lib/sanity/queries";
import { SANITY_TAGS } from "@/lib/sanity/tags";
import type { BlogPost } from "@/lib/sanity/types";

export const metadata = createPageMetadata({ ...pageConfigs.blog });

export default async function BlogPage() {
  const posts = await fetchSanity<BlogPost[]>({
    query: blogPostsQuery,
    requestTag: "blog-posts",
    tags: [SANITY_TAGS.blogPost],
  });

  const items: BlogListItem[] = (posts ?? []).map((post) => ({
    id: post._id,
    kind: "Blog",
    tag: post.category,
    category: post.category,
    title: post.title,
    href: `/blog/${post.slug}`,
    excerpt: post.excerpt,
    date: post.publishedAt,
    readingTime: post.readingTime,
    featured: post.featured,
    image: resolveSanityImage(post.coverImage, {
      fallbackAlt: `Cover image for ${post.title}`,
      width: 1400,
      height: 875,
    }),
  }));

  const featured = items.find((item) => item.featured) ?? items[0];

  return <BlogIndex config={pageConfigs.blog} featuredId={featured?.id} posts={items} />;
}
