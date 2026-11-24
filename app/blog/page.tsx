import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/RevealOnScroll";
import { createPageMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = createPageMetadata({
  title: "Journal – Late Nights, Candlelight & Live Music",
  description:
    "Stories and guides from Fernway by Stories: late-night cafes, candlelight dinners, live music nights and road-trip stops on the Bangalore–Mysore Expressway.",
  path: "/blog",
  image: "/ambience/15.webp",
  imageAlt: "Fernway by Stories garden lit up at night on the Bangalore–Mysore Expressway",
  keywords: ["Fernway by Stories blog", "Fernway journal"],
});

export default function BlogIndexPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          label="Fernway Journal"
          title="Journal"
          subtitle="Late nights, candlelight and live music on the Bangalore–Mysore Expressway"
        />

        <section className="section-bg-cream">
          <div className="section-wrap section-pad grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogPosts.map((post, i) => (
              <RevealOnScroll key={post.slug} delay={i * 80}>
                <article className="flex flex-col gap-4">
                  <Link href={`/blog/${post.slug}`} className="relative block img-overlay" style={{ aspectRatio: "4/3" }}>
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </Link>
                  <h2 className="heading-display" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="body-text">{post.description}</p>
                  <Link href={`/blog/${post.slug}`} className="section-label underline underline-offset-4">
                    Read more
                  </Link>
                </article>
              </RevealOnScroll>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
