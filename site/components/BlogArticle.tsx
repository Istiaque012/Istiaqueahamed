import Link from "next/link";
import SanityPortableText from "@/components/SanityPortableText";
import { EditorialImage } from "@/components/ui";
import { articleJsonLd } from "@/lib/jsonld";
import { formatEditorialDate } from "@/lib/editorial";
import type { ResolvedSanityImage } from "@/lib/sanity/image";
import type { BlogPost } from "@/lib/sanity/types";

export type RelatedPost = {
  id: string;
  title: string;
  href: string;
  category: string;
  date?: string;
  readingTime?: number;
};

type BlogArticleProps = {
  cover?: ResolvedSanityImage;
  post: BlogPost;
  related: RelatedPost[];
};

export default function BlogArticle({ cover, post, related }: BlogArticleProps) {
  const jsonLd = articleJsonLd({
    title: post.title,
    description: post.seoDescription || post.excerpt,
    path: `/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    imageUrl: cover?.src,
    section: post.category,
  });

  return (
    <main className="blog-article register-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="blog-article__header">
        <Link className="blog-article__back" href="/blog">
          <span aria-hidden="true">←</span> Blog
        </Link>
        <p className="section-label">{post.category}</p>
        <h1>{post.title}</h1>
        {post.excerpt ? <p className="blog-article__lead">{post.excerpt}</p> : null}
        <div className="blog-article__meta">
          <time dateTime={post.publishedAt}>{formatEditorialDate(post.publishedAt)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime ? `${post.readingTime} min read` : "Essay"}</span>
        </div>
      </header>

      {cover ? (
        <div className="blog-article__cover">
          <EditorialImage
            alt={cover.alt}
            altGuidance="An approved cover image supplied with this essay"
            caption={cover.caption}
            priority
            ratio="wide"
            src={cover.src}
          />
        </div>
      ) : null}

      <article className="blog-article__body">
        {post.body?.length ? (
          <SanityPortableText value={post.body} />
        ) : (
          <p className="blog-article__empty">The full essay has not been published yet.</p>
        )}
      </article>

      {related.length ? (
        <aside className="blog-article__related" aria-labelledby="blog-related-title">
          <p className="section-label" id="blog-related-title">More from the Blog</p>
          <ol>
            {related.map((item) => (
              <li key={item.id}>
                <Link href={item.href}>
                  <div>
                    <span>{item.category}</span>
                    <time dateTime={item.date}>{formatEditorialDate(item.date)}</time>
                    {item.readingTime ? <span>{item.readingTime} min read</span> : null}
                  </div>
                  <h3>{item.title}</h3>
                  <span aria-hidden="true">Read&nbsp; ↗</span>
                </Link>
              </li>
            ))}
          </ol>
        </aside>
      ) : null}

      <footer className="blog-article__footer">
        <span>Istiaque Ahamed · Blog</span>
        <Link className="text-link" href="/blog">
          Return to all essays <span aria-hidden="true">→</span>
        </Link>
      </footer>
    </main>
  );
}
