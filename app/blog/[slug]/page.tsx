import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import ReserveTableLink from "../../components/ReserveTableLink";
import { createPageMetadata } from "@/lib/seo";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { getBlogPostingStructuredData } from "@/lib/json-ld";

// Static export: only the slugs listed below exist; anything else is a 404 (dynamicParams must be false)
export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  if (!post) return {};
  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image,
    imageAlt: post.imageAlt,
    keywords: post.keywords,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();

  const others = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <Nav />
      <main>
        <PageHero label="Fernway Journal" title={post.heroTitle} subtitle={post.title} />

        <article className="section-bg-cream">
          <div className="section-wrap section-pad flex flex-col gap-8" style={{ maxWidth: "46rem" }}>
            <div className="relative img-overlay" style={{ aspectRatio: "16/10" }}>
              <Image src={post.image} alt={post.imageAlt} fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 46rem" />
            </div>
            <p className="section-label">
              <time dateTime={post.datePublished}>
                {new Date(post.datePublished).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              </time>
            </p>

            {post.sections.map((section) => (
              <section key={section.heading} className="flex flex-col gap-4">
                <h2 className="heading-display" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)" }}>
                  {section.heading}
                </h2>
                {section.paragraphs.map((text) => (
                  <p key={text} className="body-text">{text}</p>
                ))}
                {section.list && (
                  <ul className="body-text list-disc pl-5 flex flex-col gap-2">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <div className="flex flex-wrap gap-4 pt-4">
              <ReserveTableLink className="btn-gold">Reserve a Table</ReserveTableLink>
            </div>

            <nav aria-label="More from the journal" className="flex flex-col gap-3 pt-8">
              <p className="section-label">More from the Journal</p>
              <ul className="flex flex-col gap-2">
                {others.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="body-text underline underline-offset-4">
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </article>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getBlogPostingStructuredData(post)) }}
        />
      </main>
      <Footer />
    </>
  );
}
