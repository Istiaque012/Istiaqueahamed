import { cache } from "react";
import { notFound } from "next/navigation";
import BlogArticle, { type RelatedPost } from "@/components/BlogArticle";
import { createPageMetadata } from "@/lib/metadata";
import { fetchSanity } from "@/lib/sanity/fetch";
import { buildImageUrl, resolveSanityImage } from "@/lib/sanity/image";
import { blogPostBySlugQuery, blogPostsQuery } from "@/lib/sanity/queries";
import { SANITY_TAGS } from "@/lib/sanity/tags";
import type { BlogPost } from "@/lib/sanity/types";

type Props = { params: Promise<{ slug: string }> };

const getBlogPost = cache((slug: string) =>
  fetchSanity<BlogPost | null>({
    query: blogPostBySlugQuery,
    params: { slug },
    requestTag: `blog-post-${slug}`,
    tags: [SANITY_TAGS.blogPost],
  }),
);

const getBlogPostMetadata = cache((slug: string) =>
  fetchSanity<BlogPost | null>({
    query: blogPostBySlugQuery,
    params: { slug },
    requestTag: `blog-post-metadata-${slug}`,
    stega: false,
    tags: [SANITY_TAGS.blogPost],
  }),
);

const getBlogPosts = cache(() =>
  fetchSanity<BlogPost[]>({
    query: blogPostsQuery,
    requestTag: "blog-posts",
    tags: [SANITY_TAGS.blogPost],
  }),
);

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostMetadata(slug);

  if (!post) {
    return createPageMetadata({
      title: "Essay not found",
      description: "The requested Blog essay could not be found.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  const socialImage = buildImageUrl(post.coverImage, (image) =>
    image.width(1200).height(630).fit("crop").quality(82),
  );

  return createPageMetadata({
    title: `${post.seoTitle || post.title} · Blog`,
    description:
      post.seoDescription || post.excerpt || `An essay by Istiaque Ahamed on ${post.category.toLowerCase()}.`,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post._updatedAt,
    section: post.category,
    imageUrl: socialImage,
    imageAlt: post.coverImage?.alt || `${post.title} · Istiaque Ahamed`,
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const [post, all] = await Promise.all([getBlogPost(slug), getBlogPosts()]);

  if (!post) {
    notFound();
  }

  const cover = resolveSanityImage(post.coverImage, {
    fallbackAlt: `Cover image for ${post.title}`,
    width: 1800,
    height: 1013,
  });

  const related: RelatedPost[] = (all ?? [])
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => {
      const sameA = a.category === post.category ? 0 : 1;
      const sameB = b.category === post.category ? 0 : 1;
      return sameA - sameB;
    })
    .slice(0, 3)
    .map((item) => ({
      id: item._id,
      title: item.title,
      href: `/blog/${item.slug}`,
      category: item.category,
      date: item.publishedAt,
      readingTime: item.readingTime,
    }));

  return <BlogArticle cover={cover} post={post} related={related} />;
}
