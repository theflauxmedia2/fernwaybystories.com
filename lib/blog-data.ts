import { BUSINESS } from "./site";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  /** Full title — rendered in the <h1> and used for <title> */
  title: string;
  /** Short display word(s) for the big hero heading */
  heroTitle: string;
  description: string;
  /** ISO date (YYYY-MM-DD) */
  datePublished: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  sections: BlogSection[];
};

// Facts used here must stay true: hours, Friday candlelight jam 11pm–2am, Saturday live band, candlelight nightly.
const FRIDAY_JAM = "every Friday, a candlelight midnight jamming session runs from 11pm to 2am";
const SATURDAY_BAND = "every Saturday night a live band plays in the garden";

export const blogPosts: BlogPost[] = [
  {
    slug: "late-night-cafe-bangalore-mysore-expressway",
    title: "A Late-Night Cafe on the Bangalore–Mysore Expressway, Open Till 6am",
    heroTitle: "Open Till 6am",
    description:
      "Looking for cafes open till late night near Bangalore? Fernway by Stories in Mayaganahalli is open every day till 6am — midnight dining, coffee and cocktails on the expressway.",
    datePublished: "2026-11-24",
    image: "/ambience/15.webp",
    imageAlt: "Fernway by Stories garden lit up at night, a late-night cafe on the Bangalore–Mysore Expressway",
    keywords: [
      "late night cafes in Bangalore",
      "cafes open till late night",
      "cafes open till 6am",
      "midnight dining places",
      "late night food near Bangalore",
      "cafes on Bangalore Mysore Expressway",
    ],
    sections: [
      {
        heading: "When the city closes, Fernway is just getting started",
        paragraphs: [
          `Plenty of cafes wind down around midnight. Fernway by Stories stays open every day from ${BUSINESS.hoursDisplay}, which makes it one of the few places on the Bangalore–Mysore Expressway where you can sit down for a proper meal, a coffee or a drink long after the city has gone quiet.`,
          "We call ourselves a cafe because that is how most people search for a late-night spot — but Fernway is a full garden restaurant, with a kitchen that keeps cooking through the night.",
        ],
      },
      {
        heading: "What midnight dining looks like here",
        paragraphs: [
          "Open-air garden tables, warm lights, candlelit tables every night and a menu built for long conversations.",
        ],
        list: [
          "North Indian favourites like chatpata chicken tikka and paneer tikka",
          "Global comfort food, small plates and quick bites",
          "Desserts, coffee and a full cocktail and beverages menu",
          "Pet-friendly garden seating with space for groups",
        ],
      },
      {
        heading: "Where we are",
        paragraphs: [
          `Fernway is in Mayaganahalli, between Bidadi and Ramanagara, right on the Bangalore–Mysore Expressway (Mysore Road). Address: ${BUSINESS.address.full}. It's an easy late-night drive out of Bengaluru, and an easy stop if you're driving back from Mysuru.`,
          `Planning a late night with friends? Book a table online or call ${BUSINESS.phoneDisplay} — weekends fill fast.`,
        ],
      },
    ],
  },
  {
    slug: "candlelight-dinner-near-bangalore",
    title: "Candlelight Dinner Near Bangalore: Date Nights Under the Open Sky",
    heroTitle: "Candlelight",
    description:
      "Planning a candlelight dinner near Bangalore? Fernway by Stories sets candlelit garden tables every night — a date night spot for couples on the Bangalore–Mysore Expressway.",
    datePublished: "2026-11-24",
    image: "/ambience/14.webp",
    imageAlt: "Garden lights coming on at dusk at Fernway by Stories, a date night spot near Bangalore",
    keywords: [
      "candle light dinner near Bangalore",
      "candle light dinner in Bangalore",
      "date night places near Bangalore",
      "best cafe for couples",
      "romantic places near Bangalore for couples",
    ],
    sections: [
      {
        heading: "Candlelight every night — no special booking needed",
        paragraphs: [
          "At Fernway by Stories, candlelit tables aren't a package you have to pre-book. Every night, the garden is set with candles, warm lights and greenery, so any dinner here can be a candlelight dinner.",
          "It's why couples drive out from Bengaluru for date nights, anniversaries and birthdays: open sky above, no city noise, and nobody rushing you out — we're open till 6am.",
        ],
      },
      {
        heading: "The best night for couples: Friday candlelight jamming",
        paragraphs: [
          `If you can only pick one night, pick Friday — ${FRIDAY_JAM}. Soft live music, candles on every table and a late dinner make it our most romantic evening of the week.`,
        ],
      },
      {
        heading: "Make it a date",
        paragraphs: ["A few ideas from our team:"],
        list: [
          "Arrive around sunset and stay for dinner under the stars",
          "Share North Indian starters, then a slow main course and dessert",
          "Celebrating something? Mention it when you book and we'll help with seating",
        ],
      },
      {
        heading: "Getting here",
        paragraphs: [
          `Fernway is in Mayaganahalli on the Bangalore–Mysore Expressway, between Bidadi and Ramanagara — an easy drive out of the city. Reserve a table online or call ${BUSINESS.phoneDisplay}.`,
        ],
      },
    ],
  },
  {
    slug: "live-music-dinner-near-bangalore",
    title: "Dinner With Live Music Near Bangalore: Friday Jams & Saturday Bands",
    heroTitle: "Live Music",
    description:
      "Want live bands while having dinner? Fernway by Stories hosts a candlelight jam every Friday (11pm–2am) and a live band every Saturday, in an open-air garden near Bangalore.",
    datePublished: "2026-11-24",
    image: "/ambience/13.webp",
    imageAlt: "Open-air shell and garden tables at Fernway by Stories, where music nights happen",
    keywords: [
      "live music restaurants near Bangalore",
      "live band restaurants near me",
      "live bands while having dinner",
      "live music dinner Bangalore Mysore highway",
    ],
    sections: [
      {
        heading: "Our weekly music nights",
        paragraphs: ["Music at Fernway is built around dinner — loud enough to feel, soft enough to talk over."],
        list: [
          "Friday — candlelight midnight jamming, 11pm to 2am",
          "Saturday — live band night",
          "Plus DJ and lounge nights, themed evenings and seasonal events through the year",
        ],
      },
      {
        heading: "Why it's different from a city music venue",
        paragraphs: [
          `Many live-music spots in the city are indoors and crowded. At Fernway, ${SATURDAY_BAND}, under the open sky, with tables spread across greenery — so you get the band and still get a proper dinner.`,
          "Our kitchen serves North Indian favourites, global comfort food, desserts, coffee and cocktails, and we stay open till 6am, so the night doesn't have to end when the music does.",
        ],
      },
      {
        heading: "Plan your night",
        paragraphs: [
          `Music nights are our busiest, so book ahead online or call ${BUSINESS.phoneDisplay}. For the latest line-up, check our events page or Instagram.`,
        ],
      },
    ],
  },
  {
    slug: "bangalore-mysore-road-trip-stop-mayaganahalli",
    title: "Bangalore to Mysore Road Trip: A Stop Worth Making in Mayaganahalli",
    heroTitle: "Road Trip Stop",
    description:
      "Driving the Bangalore–Mysore Expressway? Fernway by Stories in Mayaganahalli is an open-air cafe and restaurant stop, open daily 1pm–6am, between Bidadi and Ramanagara.",
    datePublished: "2026-11-24",
    image: "/ambience/12.webp",
    imageAlt: "Fernway by Stories sign in the garden at Mayaganahalli on the Bangalore–Mysore Expressway",
    keywords: [
      "cafes on Bangalore Mysore Expressway",
      "restaurants on Bangalore Mysore highway",
      "cafes in Mayaganahalli",
      "Bangalore Mysore road trip food stop",
      "restaurants near Ramanagara",
    ],
    sections: [
      {
        heading: "A real meal, not just a quick break",
        paragraphs: [
          "The Bangalore–Mysore Expressway made the drive faster — and made good places to stop harder to notice. Fernway by Stories, in Mayaganahalli between Bidadi and Ramanagara, is worth slowing down for: an open-air garden cafe and restaurant with space to stretch out.",
        ],
      },
      {
        heading: "What you'll find",
        paragraphs: [],
        list: [
          `Open every day, ${BUSINESS.hoursDisplay} — lunch, dinner or a late-night stop`,
          "North Indian food, global comfort plates, coffee and cocktails",
          "Spacious garden seating for families and groups — pet friendly too",
          "Live music on Friday and Saturday nights",
        ],
      },
      {
        heading: "Find us",
        paragraphs: [
          `Address: ${BUSINESS.address.full}. Use the map on our contact page for directions, or call ${BUSINESS.phoneDisplay}.`,
        ],
      },
    ],
  },
  {
    // WHY: targets "best restaurant/cafe on Bangalore Mysore highway" without claiming to be "the best"
    slug: "best-restaurant-cafe-bangalore-mysore-highway",
    title: "Looking for the Best Restaurant or Cafe on the Bangalore–Mysore Highway? Lunch, Dinner or 3am",
    heroTitle: "Lunch to 3am",
    description:
      "What makes a good restaurant or cafe stop on the Bangalore–Mysore highway? Fernway by Stories in Mayaganahalli serves lunch, dinner and late-night food, open daily 1pm–6am.",
    datePublished: "2026-11-25",
    image: "/ambience/11.webp",
    imageAlt: "Fernway by Stories garden path and open-air dining area on the Bangalore–Mysore highway",
    keywords: [
      "best restaurant on Bangalore Mysore highway",
      "best cafe on Bangalore Mysore highway",
      "restaurants on Bangalore Mysore highway",
      "cafes on Bangalore Mysore highway",
      "where to eat on Mysore Road",
    ],
    sections: [
      {
        heading: "What makes the best highway stop?",
        paragraphs: [
          "The best restaurant or cafe on the Bangalore–Mysore highway is the one that fits your drive: open when you're passing, easy to pull into, with room to sit and food worth stopping for. Fernway by Stories, in Mayaganahalli between Bidadi and Ramanagara, is built around exactly that.",
        ],
        list: [
          `Open every day, ${BUSINESS.hoursDisplay} — one of the few highway stops serving full meals through the night`,
          "Open-air garden seating with space for families, groups and pets",
          "A full kitchen, not just snacks: North Indian favourites, global comfort food, coffee and cocktails",
        ],
      },
      {
        heading: "Lunch on the way to Mysuru",
        paragraphs: [
          "We open at 1pm, so a late lunch here breaks up the drive nicely. Try North Indian favourites like chatpata chicken tikka and paneer tikka, or keep it light with small plates, quick bites and coffee in the garden.",
        ],
      },
      {
        heading: "Dinner under the open sky",
        paragraphs: [
          `Evenings bring candlelit garden tables every night. On weekends there's more: ${FRIDAY_JAM}, and ${SATURDAY_BAND}. It's a popular choice for date nights, family dinners and group celebrations.`,
        ],
      },
      {
        heading: "Late night, when everything else is closed",
        paragraphs: [
          "Driving back to Bengaluru after midnight, or heading out late? Our kitchen keeps cooking till 6am, so you can sit down for a proper meal, dessert or a drink long after most highway stops have shut.",
        ],
      },
      {
        heading: "Find us",
        paragraphs: [
          `Address: ${BUSINESS.address.full}. Book a table online or call ${BUSINESS.phoneDisplay} — weekend evenings fill fast.`,
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
