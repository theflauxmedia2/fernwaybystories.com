import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/RevealOnScroll";
import ReserveTableLink from "../components/ReserveTableLink";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Garden Restaurant in Mayaganahalli",
  description:
    "Fernway by Stories is a garden restaurant with greenery and good ambience on the Bangalore Mysore Highway near Ramanagara — relaxed dining away from the city.",
  path: "/about",
  image: "/ambience/2.webp",
  imageAlt: "Garden ambience and greenery at Fernway by Stories, Mayaganahalli",
  keywords: [
    "garden restaurants in Mayaganahalli",
    "garden restaurants on Bangalore Mysore Highway",
    "restaurants with greenery on Mysore Road",
    "restaurants with good ambience on Bangalore Mysore Highway",
    "scenic restaurants near Ramanagara",
    "relaxed dining places on Mysore Road",
    "romantic restaurants on Bangalore Mysore Highway",
    "green ambience restaurants near Bengaluru",
    "Fernway by Stories garden dining",
  ],
});

const philosophy = [
  "Nature-inspired open-air garden ambience",
  "North Indian favourites and a comfort-driven global menu",
  "Live music that enhances, never overwhelms",
  "Service that feels warm and personal, for families, couples, and groups",
];

const momentAccents = ["twilight", "rust", "pine"] as const;

const dayFlow = [
  { label: "Afternoon", desc: "Soft light, quiet corners, and a relaxed lunch along Bengaluru Mysore Highway." },
  { label: "Evening", desc: "Fernway comes alive — live music, dinner plates, and the first toast." },
  { label: "Late Night", desc: "Unhurried hours under the open sky until the evening winds down." },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          label="The Fernway Experience"
          title="About"
          subtitle="A garden restaurant in Mayaganahalli, on the Bangalore Mysore Highway"
        />

        <section className="section-bg-cream">
          <div className="section-wrap section-pad grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <RevealOnScroll>
              <div className="relative img-overlay" style={{ aspectRatio: "3/4", border: "1px solid var(--border-light)" }}>
                <Image
                  src="/ambience/2.webp"
                  alt="Open-air garden dining with greenery and warm lights at Fernway by Stories"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 img-brand-overlay" />
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
              <div className="flex flex-col gap-6">
                <div className="divider" />
                <p className="section-label">Our Story</p>
                <h2 className="heading-display" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                  A garden restaurant shaped by{" "}
                  <em style={{ color: "var(--gold)", fontStyle: "italic" }}>stories</em>
                </h2>
                <p className="body-text">
                  Fernway was envisioned as a modern open-air retreat in Mayaganahalli, on the Bengaluru Mysore Highway
                  near Ramanagara — inspired by nature, designed for connection, and rooted in the Stories hospitality
                  ethos. A scenic place away from Bangalore city where guests can step away from the pace of everyday
                  life and enjoy meaningful moments over food, drinks, and conversation.
                </p>
                <p className="body-text">
                  Every detail — from the greenery and warm light to the menu and live music — is designed so you can
                  arrive, unwind, and leave with moments that linger — the kind of good ambience that turns a quick
                  stop on Mysore Road into a whole afternoon.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section className="section-bg-sand">
          <div className="section-wrap section-pad">
            <RevealOnScroll>
              <div className="about-philosophy">
                <header className="about-philosophy-intro">
                  <div className="divider" />
                  <p className="section-label">Philosophy</p>
                  <h2 className="heading-display about-philosophy-title">
                    Thoughtfully <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Crafted</em>
                  </h2>
                  <p className="body-text about-philosophy-lead">
                    Our kitchen and bar share one approach: global comfort food and drinks that feel familiar yet
                    considered — nothing fussy, everything intentional.
                  </p>
                </header>
                <ul className="about-philosophy-list">
                  {philosophy.map((item) => (
                    <li key={item}>
                      <span className="about-philosophy-marker" aria-hidden="true">
                        ◈
                      </span>
                      <span className="body-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        <section className="about-space-section section-bg-cream">
          <div className="section-wrap section-pad">
            <div className="about-space">
              <RevealOnScroll>
                <header className="about-space-intro">
                  <div className="divider" />
                  <p className="section-label">The Space</p>
                  <h2 className="heading-display about-space-title">
                    Designed for <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Every Mood</em>
                  </h2>
                  <p className="body-text about-space-lead">
                    Fernway evolves with the hours — calm afternoons, golden sunsets, and softly energized nights.
                    Intimate corners for date nights, long garden tables for family dining and friends, open views,
                    and warm lighting create a romantic, relaxed setting that adapts effortlessly to every mood.
                  </p>
                </header>
              </RevealOnScroll>

              <RevealOnScroll delay={80}>
                <div className="about-space-timeline" role="list" aria-label="How the space changes through the day">
                  {dayFlow.map(({ label, desc }, i) => (
                    <article
                      key={label}
                      className={`about-space-moment about-space-moment--${momentAccents[i]}`}
                      role="listitem"
                    >
                      <span className="about-space-moment-time">{label}</span>
                      <p className="about-space-moment-desc">{desc}</p>
                    </article>
                  ))}
                </div>
              </RevealOnScroll>

              {/* <div className="about-space-bento">
                {spacePhotos.map(({ label, src, featured }, i) => (
                  <RevealOnScroll key={label} delay={120 + i * 90}>
                    <figure
                      className={`about-space-figure img-overlay ${featured ? "about-space-figure--featured" : ""}`}
                    >
                      <Image
                        src={src}
                        alt={`Fernway — ${label}`}
                        fill
                        className="object-cover about-space-figure-img"
                        sizes={
                          featured
                            ? "(max-width: 899px) 100vw, 58vw"
                            : "(max-width: 899px) 100vw, 42vw"
                        }
                      />
                      <figcaption className="about-space-figure-caption">
                        <span className="about-space-figure-label">{label}</span>
                      </figcaption>
                    </figure>
                  </RevealOnScroll>
                ))}
              </div> */}
            </div>
          </div>
        </section>

        <section className="section-bg-dark">
          <div className="section-wrap section-pad flex flex-col items-center text-center gap-8">
            <RevealOnScroll>
              <h2 className="heading-display" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "var(--text-dark)" }}>
                Come see it for <em style={{ color: "var(--gold)", fontStyle: "italic" }}>yourself</em>
              </h2>
              <div className="flex gap-5 flex-wrap justify-center">
                <ReserveTableLink className="btn-gold">
                  Reserve a Table
                </ReserveTableLink>
                <Link href="/menu" className="btn-ghost">
                  View Menu
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
