import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HeroBackgroundVideo from "./components/HeroBackgroundVideo";
import HeroScrollOverlay from "./components/HeroScrollOverlay";
import RevealOnScroll from "./components/RevealOnScroll";
import HomeGalleryPreview from "./components/HomeGalleryPreview";
import ReserveTableLink from "./components/ReserveTableLink";
import { fernwayGalleryItems } from "@/lib/gallery-items";
import { homeFaqs } from "@/lib/faq-data";
import { getFaqStructuredData } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { BUSINESS, SEO } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: SEO.defaultTitle,
  description: SEO.defaultDescription,
  path: "/",
  titleAbsolute: true,
  imageAlt: "Fernway by Stories open-air garden restaurant at dusk on Bangalore Mysore Highway",
  keywords: [
    "best restaurants on Bangalore Mysore Highway",
    "best restaurants in Mayaganahalli",
    "best restaurants on Mysore Road",
    "highway restaurants on Bangalore Mysore Highway",
    "garden restaurants on Mysore Road",
    "family restaurants on Bangalore Mysore Highway",
    "road trip food stops on Bangalore Mysore Highway",
    "weekend drive cafes near Bengaluru",
    "restaurants away from Bangalore city",
  ],
});

const faqJsonLd = getFaqStructuredData(homeFaqs);

const pillarAccents = ["twilight", "rust", "pine"] as const;

const pillars = [
  {
    num: "01",
    title: "Open Air",
    desc: "Open-air garden seating beneath the sky, framed by lush greenery and warm amber light. A landmark destination along the Bengaluru Mysore Highway, Fernway blends effortless charm with pet-friendly hospitality, creating a space where every member of the family feels at home. Unhurried, open, and unmistakably Fernway.",
  },
  {
    num: "02",
    title: "The Menu",
    desc: "A kitchen that borrows from everywhere. North Indian favourites like our chatpata chicken tikka, globally inspired comfort food, desserts and coffee, handcrafted cocktails, and a shisha selection made for slow evenings and good company.",
  },
  {
    num: "03",
    title: "The Mood",
    desc: "Live music, an easy pace, and a space that never rushes. From acoustic sets to weekend live bands, Fernway is built for those who linger.",
  },
];

const roadTripStops = [
  {
    num: "01",
    title: "Road Trip Food Stops",
    desc: "Driving the Bangalore–Mysore route? Break the journey with a long lunch, an early dinner, or coffee and quick bites in the garden. Open from 1pm until late, Fernway is a relaxed highway restaurant on Mysore Road for weekend drives and long drives out of Bangalore.",
  },
  {
    num: "02",
    title: "Family & Group Dining",
    desc: "Spacious outdoor seating makes Fernway a favourite for family lunches, family dinners, team dinners, and group dining with friends. Veg and non-veg North Indian food, small plates, and desserts mean there's something for everyone at the table.",
  },
  {
    num: "03",
    title: "Date Nights & Celebrations",
    desc: "Candlelit tables, greenery, and live music make Fernway a romantic, couple-friendly restaurant on the Bangalore Mysore Highway — made for date nights, birthday dinners, and anniversary dinners near Ramanagara.",
  },
];

function IconInstagram() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconLocation() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
function IconWhatsApp() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.979-1.407A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 0 1-4.079-1.117l-.291-.173-3.017.852.853-3.017-.19-.308A8 8 0 1 1 12 20z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>

        {/* ═══════════════════════════════════════
            HERO  ·  dark full-viewport
        ═══════════════════════════════════════ */}
        <section className="hero-section">
          {/* Background video */}
          <div className="hero-bg absolute inset-0">
            <HeroBackgroundVideo />
            <HeroScrollOverlay />
          </div>

          {/* Content */}
          <div className="hero-section-inner">
            {/* Headline block */}
            <div className="flex flex-col gap-5 max-w-3xl">
              <div className="hero-fade-up hero-fade-up--1">
                <h1
                  style={{
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontWeight: 300,
                    fontSize: "clamp(4.2rem, 11.5vw, 12rem)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.025em",
                    color: "#F2EDE4",
                  }}
                >
                  FERNWAY
                  <span className="sr-only"> by Stories</span>
                </h1>
              </div>

              <div className="hero-fade-up hero-fade-up--2 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div style={{ width: "2rem", height: "1px", background: "var(--gold)", opacity: 0.6 }} />
                  <span
                    style={{
                      fontFamily: "var(--font-body, Helvetica, sans-serif)",
                      fontSize: "clamp(1rem, 2vw, 1.4rem)",
                      letterSpacing: "0.28em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                    }}
                  >
                    by Stories
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(1rem, 2vw, 1.65rem)",
                    color: "rgba(242,237,228,0.78)",
                    lineHeight: 1.4,
                  }}
                >
                  {BUSINESS.tagline}
                </p>
              </div>

              {/* CTAs */}
              <div className="hero-fade-up hero-fade-up--3 hero-cta-row pt-2">
                <Link href="/menu" className="hero-btn-outline">View Menu</Link>
                <div
                  className="hero-social-row flex items-center gap-4"
                  style={{ marginLeft: "0.5rem", borderLeft: "1px solid rgba(255,255,255,0.12)", paddingLeft: "1.25rem" }}
                >
                  {[
                    { href: BUSINESS.mapsDirectionsUrl, Icon: IconLocation, label: "Get directions" },
                    { href: BUSINESS.social.instagram, Icon: IconInstagram, label: "Instagram" },
                    { href: BUSINESS.whatsapp, Icon: IconWhatsApp, label: "WhatsApp" },
                  ].map(({ href, Icon, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="hero-social-icon">
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            MARQUEE
        ═══════════════════════════════════════ */}
        <div className="marquee-band overflow-hidden py-4" aria-hidden="true">
          <div className="flex animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
            {Array(14).fill(null).map((_, i) => (
              <span key={i} className="marquee-track flex items-center">
                <span className="marquee-track-accent">Open Air</span>
                <span style={{ margin: "0 1rem", opacity: 0.5 }}>·</span>
                Cocktails
                <span style={{ margin: "0 1rem", opacity: 0.5 }}>·</span>
                Kitchen
                <span style={{ margin: "0 1rem", opacity: 0.5 }}>·</span>
                Shisha
                <span style={{ margin: "0 1rem", opacity: 0.5 }}>·</span>
                <span className="marquee-track-accent">Bengaluru</span>
                <span style={{ margin: "0 1rem", opacity: 0.5 }}>·</span>
                Open Daily
                <span style={{ margin: "0 1rem", opacity: 0.5 }}>·</span>
                Stories
              </span>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════
            INTRO  ·  cream
        ═══════════════════════════════════════ */}
        <section className="section-bg-cream">
          <div className="section-wrap section-pad">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
                gap: "clamp(2.5rem, 6vw, 6rem)",
                alignItems: "center",
              }}
            >
              {/* Text */}
              <RevealOnScroll>
                <div className="flex flex-col" style={{ gap: "clamp(1.2rem, 2.5vw, 2rem)" }}>
                  <div className="divider" />
                  <p className="section-label">Welcome</p>
                  <h2
                    style={{
                      fontFamily: "var(--font-display, Georgia, serif)",
                      fontWeight: 400,
                      fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                      lineHeight: 1.08,
                      color: "var(--text-light)",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    An Open-Air Garden Restaurant on{" "}
                    <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Bangalore Mysore Highway</em>
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-body, Helvetica, sans-serif)",
                      fontSize: "clamp(0.85rem, 1.2vw, 0.97rem)",
                      lineHeight: 1.9,
                      color: "var(--text-muted)",
                      maxWidth: "44ch",
                      fontWeight: 300,
                    }}
                  >
                    Fernway by Stories is a new iconic landmark in Mayaganahalli, on the Bengaluru Mysore Highway
                    near Ramanagara — garden dining and open-air seating for afternoons and evenings that deserve
                    more than ordinary. Candlelit tables, North Indian and globally inspired food, and cocktails
                    poured for conversations that run late. Pull up. Stay as long as you like.
                  </p>

                  {/* <div className="flex flex-wrap gap-3" style={{ paddingTop: "0.5rem" }}>
                    {["Open-Air Seating", "Craft Cocktails", "Nightly 6PM – 6AM"].map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div> */}

                  <div style={{ paddingTop: "0.5rem" }}>
                    <Link href="/about" className="btn-dark">Our Story</Link>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Image */}
              <RevealOnScroll delay={160}>
                <div
                  className="relative img-overlay img-overlay--zoom-in"
                  style={{
                    aspectRatio: "4/5",
                    border: "1px solid rgba(var(--gold-rgb),0.12)",
                  }}
                >
                  <Image
                    src="/ambience/14.webp"
                    alt="Open-air garden seating surrounded by greenery at Fernway by Stories, Mayaganahalli"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    // style={{ filter: "saturate(0.85) brightness(0.9)" }}
                  />
                  <div className="absolute inset-0 img-brand-overlay" />
                  <div
                    className="absolute bottom-0 left-0 right-0 flex justify-between items-end"
                    style={{ padding: "clamp(1rem, 2.5vw, 1.75rem)" }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-body, Helvetica, sans-serif)",
                        fontSize: "0.56rem",
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        color: "rgba(242,237,228,0.5)",
                      }}
                    >
                      Open Air
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-display, Georgia, serif)",
                        fontStyle: "italic",
                        fontSize: "0.85rem",
                        color: "rgba(var(--gold-rgb),0.7)",
                      }}
                    >
                      Bengaluru
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            PILLARS  ·  cream cards on cream bg
        ═══════════════════════════════════════ */}
        <section className="section-bg-sand">
          <div className="section-wrap section-pad">
            <RevealOnScroll>
              <div className="flex flex-col" style={{ gap: "1.25rem", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
                <div className="divider" />
                <p className="section-label">The Experience</p>
                <h2
                  style={{
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontWeight: 400,
                    fontSize: "clamp(2rem, 3.8vw, 3.4rem)",
                    color: "var(--text-light)",
                    letterSpacing: "-0.015em",
                    lineHeight: 1.1,
                  }}
                >
                  Three pillars of{" "}
                  <em style={{ color: "var(--gold)", fontStyle: "italic" }}>the Fernway</em>
                </h2>
              </div>
            </RevealOnScroll>

            <div className="pillar-grid">
              {pillars.map((p, i) => (
                <RevealOnScroll key={p.title} delay={i * 90} className="h-full">
                  <div className={`pillar-card pillar-card--${pillarAccents[i]}`}>
                    <span className="pillar-num">{p.num}</span>
                    <h3 className="pillar-card-title">{p.title}</h3>
                    <div className="pillar-card-rule" aria-hidden="true" />
                    <p className="pillar-card-desc">{p.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            ROAD TRIP STOP  ·  cream
        ═══════════════════════════════════════ */}
        <section className="section-bg-cream" aria-labelledby="home-roadtrip-heading">
          <div className="section-wrap section-pad">
            <RevealOnScroll>
              <div className="flex flex-col" style={{ gap: "1.25rem", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
                <div className="divider" />
                <p className="section-label">Bangalore – Mysore Road Trips</p>
                <h2
                  id="home-roadtrip-heading"
                  style={{
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontWeight: 400,
                    fontSize: "clamp(2rem, 3.8vw, 3.4rem)",
                    color: "var(--text-light)",
                    letterSpacing: "-0.015em",
                    lineHeight: 1.1,
                  }}
                >
                  Your stop on the{" "}
                  <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Mysore Road</em>
                </h2>
                <p className="body-text" style={{ maxWidth: "60ch" }}>
                  Just an easy drive away from Bangalore city, Fernway is one of the most scenic highway
                  restaurants near Bengaluru — a green, relaxed escape for lunch and dinner stops on the
                  Bangalore Mysore route, whether you&apos;re heading out for the weekend or coming home.
                </p>
              </div>
            </RevealOnScroll>

            <div className="pillar-grid">
              {roadTripStops.map((p, i) => (
                <RevealOnScroll key={p.title} delay={i * 90} className="h-full">
                  <div className={`pillar-card pillar-card--${pillarAccents[i]}`}>
                    <span className="pillar-num">{p.num}</span>
                    <h3 className="pillar-card-title">{p.title}</h3>
                    <div className="pillar-card-rule" aria-hidden="true" />
                    <p className="pillar-card-desc">{p.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        <HomeGalleryPreview
          imageItems={fernwayGalleryItems}
          label="Gallery"
          title="Moments That Linger"
          description="A glimpse of evenings at Fernway — garden ambience, plates from the kitchen, and the mood that stays with you."
          ctaHref="/gallery"
          ctaLabel="View Full Gallery"
        />

        {/* ═══════════════════════════════════════
            RESERVE CTA  ·  dark
        ═══════════════════════════════════════ */}
        <section className="relative overflow-hidden section-bg-pine">
          {/* Large watermark text */}
          <div
            className="absolute select-none pointer-events-none"
            aria-hidden="true"
            style={{
              fontFamily: "var(--font-display, Georgia, serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(7rem, 22vw, 26rem)",
              lineHeight: 1,
              color: "rgba(var(--gold-rgb),0.03)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              whiteSpace: "nowrap",
              letterSpacing: "-0.04em",
            }}
          >
            Stories
          </div>

          <div className="section-wrap section-pad">
            <RevealOnScroll>
              <div
                className="flex flex-col items-center text-center"
                style={{ gap: "clamp(1.2rem, 2.5vw, 2rem)" }}
              >
                <div className="divider-dark" style={{ margin: "0 auto" }} />
                <p className="section-label">Reservations</p>
                <h2
                  style={{
                    fontFamily: "var(--font-display, Georgia, serif)",
                    fontWeight: 400,
                    fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)",
                    lineHeight: 1.02,
                    color: "#F2EDE4",
                    letterSpacing: "-0.025em",
                    maxWidth: "22ch",
                  }}
                >
                  Your table awaits you at{" "}
                  <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Bengaluru Mysore Highway</em>
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body, Helvetica, sans-serif)",
                    fontSize: "clamp(0.84rem, 1.1vw, 0.95rem)",
                    lineHeight: 2,
                    color: "rgba(242,237,228,0.45)",
                    maxWidth: "42ch",
                    fontWeight: 300,
                  }}
                >
                  Tables fill fast, especially on weekends. Book your table and give the evening the space
                  it deserves — along Bengaluru Mysore Highway, under open sky. For birthdays, anniversaries,
                  and private celebrations, our team handles every detail.
                </p>
                <div className="cta-stack" style={{ paddingTop: "0.5rem" }}>
                  <ReserveTableLink className="btn-gold">Reserve Now</ReserveTableLink>
                  <Link href="/events" className="btn-ghost">Events &amp; Private Dining</Link>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body, Helvetica, sans-serif)",
                    fontSize: "0.56rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "rgba(242,237,228,0.2)",
                    paddingTop: "0.75rem",
                  }}
                >
                  {BUSINESS.hours} · {BUSINESS.phoneDisplay}
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FAQ  ·  sand
        ═══════════════════════════════════════ */}
        <section className="section-bg-sand" aria-labelledby="home-faq-heading">
          <div className="section-wrap section-pad home-faq">
            <RevealOnScroll>
              <div className="flex flex-col" style={{ gap: "1.25rem" }}>
                <div className="divider" />
                <p className="section-label">Good to Know</p>
                <h2 id="home-faq-heading" className="heading-display home-faq-title">
                  Fernway by Stories{" "}
                  <em style={{ color: "var(--gold)", fontStyle: "italic" }}>FAQs</em>
                </h2>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
              <div className="home-faq-list">
                {homeFaqs.map(({ question, answer }) => (
                  <details key={question} className="home-faq-item">
                    <summary className="home-faq-question">{question}</summary>
                    <p className="body-text home-faq-answer">{answer}</p>
                  </details>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </main>
      <Footer />
    </>
  );
}
