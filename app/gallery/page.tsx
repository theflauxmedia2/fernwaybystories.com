import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/RevealOnScroll";
import ReserveTableLink from "../components/ReserveTableLink";
import InteractiveImageBentoGallery from "@/components/ui/bento-gallery";
import {
  fernwayGalleryPageItems,
  withGalleryPageSpans,
} from "@/lib/gallery-items";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Gallery – Garden & Outdoor Dining Photos",
  description:
    "Photos of garden dining, greenery and outdoor seating at Fernway by Stories, a scenic open-air restaurant on the Bangalore Mysore Highway in Mayaganahalli.",
  path: "/gallery",
  image: "/ambience/3.webp",
  imageAlt: "Outdoor garden seating and greenery at Fernway by Stories",
  keywords: [
    "Fernway by Stories outdoor dining",
    "outdoor restaurants on Bangalore Mysore Highway",
    "restaurants with greenery in Mayaganahalli",
    "scenic restaurants on Mysore Road",
    "cafes with outdoor seating near Ramanagara",
    "open air dining in Mayaganahalli",
  ],
});

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-hidden">
        <PageHero
          label="Moments That Linger"
          title="Gallery"
          subtitle="Garden dining, greenery and outdoor seating on the Bangalore Mysore Highway"
        />

        <section className="gallery-page-intro">
          <RevealOnScroll>
            <div className="section-wrap gallery-page-intro-inner">
              <div className="divider mx-auto" />
              <p className="section-label">The Experience</p>
              <h2 className="heading-display gallery-page-intro-title">
                Outdoor dining at <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Fernway</em>
              </h2>
              <p className="gallery-page-intro-lead">
                Lush greenery, open-air garden seating, and plates from the kitchen — a look at one of the most
                scenic outdoor restaurants in Mayaganahalli. Explore the full collection below.
              </p>
            </div>
          </RevealOnScroll>
        </section>

        <InteractiveImageBentoGallery
          imageItems={withGalleryPageSpans(fernwayGalleryPageItems)}
          variant="cream"
          eagerCount={4}
        />

        <section className="gallery-page-cta">
          <div className="section-wrap">
            <RevealOnScroll className="gallery-page-cta-inner w-full">
              <div className="gallery-page-cta-divider" aria-hidden />
              <h2 className="heading-display gallery-page-cta-title">
                See it for <em style={{ color: "var(--gold)", fontStyle: "italic" }}>yourself</em>
              </h2>
              <p className="gallery-page-cta-lead">
                Bengaluru Mysore Highway has a new iconic landmark.
              </p>
              <div className="gallery-page-cta-actions">
                <ReserveTableLink className="btn-gold">
                  Reserve a Table
                </ReserveTableLink>
                <Link href="/about" className="btn-ghost">
                  The Fernway Experience
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
