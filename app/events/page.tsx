import type { Metadata } from "next";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import RevealOnScroll from "../components/RevealOnScroll";
import EventEnquiryForm from "./EventEnquiryForm";
import { createPageMetadata } from "@/lib/seo";
import {
  EVENTS_OVERVIEW_HEADLINE,
  EVENTS_OVERVIEW_INTRO,
  eventTypes,
  PRIVATE_DINING_INTRO,
  PRIVATE_DINING_LABEL,
} from "@/lib/events-data";

export const metadata: Metadata = createPageMetadata({
  title: "Live Music, Events & Private Dining",
  description:
    "Live bands, acoustic nights and weekend music events at Fernway by Stories on the Bangalore Mysore Highway. Book birthday, anniversary and team dinners.",
  path: "/events",
  image: "/ambience/10.webp",
  imageAlt: "Live music evening in the garden at Fernway by Stories",
  keywords: [
    "Fernway by Stories live music",
    "Fernway by Stories events",
    "Fernway by Stories birthday dinner",
    "Fernway by Stories anniversary dinner",
    "Fernway by Stories group dining",
    "restaurants with live music on Bangalore Mysore Highway",
    "live music venues on Mysore Road",
    "live band events near Ramanagara",
    "acoustic music nights in Mayaganahalli",
    "weekend music events on Bangalore Mysore Highway",
    "birthday celebration venues on Mysore Road",
    "team dinner restaurants near Ramanagara",
    "outdoor live music restaurants near Bangalore",
  ],
});

export default function EventsPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          label="Events & Private Dining"
          title="Events"
          subtitle="Live music, birthdays and group dining on the Bangalore Mysore Highway"
        />

        {/* Section 1: Events overview */}
        <section className="events-overview section-bg-cream" aria-labelledby="events-overview-heading">
          <div className="section-wrap section-pad">
            <RevealOnScroll>
              <header className="events-overview-intro">
                <div className="divider" />
                <p className="section-label">Experiences</p>
                <h2 id="events-overview-heading" className="heading-display events-overview-title">
                  {EVENTS_OVERVIEW_HEADLINE}
                </h2>
                <p className="body-text events-overview-lead">{EVENTS_OVERVIEW_INTRO}</p>
              </header>
            </RevealOnScroll>

            <div className="events-cards-grid">
              {eventTypes.map((evt, i) => (
                <RevealOnScroll key={evt.id} delay={i * 80}>
                  <article className="events-card gallery-card img-overlay">
                    <Image
                      src={evt.image}
                      alt={`${evt.title} at Fernway by Stories, Bangalore Mysore Highway`}
                      fill
                      className="object-cover events-card-img"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="events-card-caption">
                      <h3 className="events-card-title">{evt.title}</h3>
                    </div>
                  </article>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Private dining */}
        <section className="events-private section-bg-sand" aria-labelledby="events-private-heading">
          <div className="section-wrap section-pad">
            <div className="events-private-grid">
              <RevealOnScroll>
                <div className="events-private-copy">
                  <div className="divider" />
                  <p className="section-label">{PRIVATE_DINING_LABEL}</p>
                  <h2 id="events-private-heading" className="heading-display events-private-title">
                    Celebrate <em style={{ color: "var(--gold)", fontStyle: "italic" }}>With Us</em>
                  </h2>
                  <p className="body-text events-private-lead">{PRIVATE_DINING_INTRO}</p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={120}>
                <figure className="events-private-photo img-overlay">
                  <Image
                    src="/ambience/10.webp"
                    alt="Birthday and anniversary dinner celebrations at Fernway by Stories"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 img-brand-overlay" />
                </figure>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Section 3: Enquiry form */}
        <section className="events-enquiry section-bg-dark" aria-labelledby="events-enquiry-heading">
          <div className="section-wrap section-pad">
            <div className="events-enquiry-layout">
              <RevealOnScroll>
                <div className="events-enquiry-intro">
                  <p className="section-label">Enquiries</p>
                  <h2
                    id="events-enquiry-heading"
                    className="heading-display events-enquiry-title"
                  >
                    Plan your <em style={{ color: "var(--gold)", fontStyle: "italic" }}>event</em>
                  </h2>
                  <p className="events-enquiry-lead">
                    Planning a birthday celebration, anniversary dinner, team dinner, or live music evening? Share your
                    date, guest count, and vision — our team will respond within 24 hours.
                  </p>
                </div>
              </RevealOnScroll>

              <RevealOnScroll delay={100}>
                <EventEnquiryForm />
              </RevealOnScroll>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
