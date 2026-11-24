import { BUSINESS } from "./site";

export type FaqItem = {
  question: string;
  answer: string;
};

/** Homepage FAQ — rendered visibly and mirrored in FAQPage JSON-LD */
export const homeFaqs: FaqItem[] = [
  {
    question: "Where is Fernway by Stories located?",
    answer: `Fernway by Stories is in Mayaganahalli on the Bangalore Mysore Highway (Mysore Road), between Bidadi and Ramanagara. The full address is ${BUSINESS.address.full}. It's an easy drive out of Bangalore city and a natural stop on any Bangalore–Mysore road trip.`,
  },
  {
    question: "What are Fernway by Stories timings?",
    answer: `We're open every day from ${BUSINESS.hoursDisplay}, so you can stop by for lunch, dinner, or late-night plates and drinks under the open sky.`,
  },
  {
    question: "Is Fernway a late-night cafe?",
    answer: `Yes. Fernway is open every day from ${BUSINESS.hoursDisplay} — one of the few late-night cafes on the Bangalore–Mysore Expressway. Drop in for midnight dining, late-night coffee, cocktails and food after a long drive or a night out.`,
  },
  {
    question: "Which restaurants on the Bangalore–Mysore highway are open late at night?",
    answer: `Fernway by Stories in Mayaganahalli, between Bidadi and Ramanagara, is open every day from ${BUSINESS.hoursDisplay} — so whether you want lunch, dinner or a 3am meal, there's a full garden cafe and restaurant open on the Bangalore–Mysore highway.`,
  },
  {
    question: "Is Fernway good for a date night or candlelight dinner?",
    answer:
      "Yes. Candlelit garden tables, greenery and live music make Fernway a favourite with couples for date nights and candlelight dinners — an easy drive out of Bengaluru, away from city noise.",
  },
  {
    question: "How do I book a table at Fernway by Stories?",
    answer: `Reserve online through our table booking link, call the Fernway by Stories contact number ${BUSINESS.phoneDisplay}, or message us on WhatsApp. Weekends fill fast, so we recommend booking ahead.`,
  },
  {
    question: "What food does Fernway by Stories serve?",
    answer:
      "Our menu brings together North Indian favourites like chatpata chicken tikka and paneer tikka, global comfort food, veg and non-veg starters, small plates and quick bites, desserts, coffee, cocktails, and a full beverages menu.",
  },
  {
    question: "Is Fernway good for families and groups?",
    answer:
      "Yes. Spacious garden seating makes Fernway one of the most relaxed family restaurants on the Bangalore Mysore Highway — ideal for family lunches, family dinners, group dining with friends, and team dinners. We're pet friendly too.",
  },
  {
    question: "Does Fernway by Stories have live music?",
    answer:
      "Yes. Every Friday we host a candlelight midnight jamming session from 11pm to 2am, and every Saturday a live band plays in our open-air garden. We also run DJ and lounge nights and themed evenings — follow us on Instagram or see our events page for what's coming up.",
  },
  {
    question: "Can I celebrate a birthday or anniversary at Fernway?",
    answer:
      "Absolutely. Fernway is a popular venue for birthday dinners, anniversary dinners, date nights, and private celebrations. Share your plans through our event enquiry form and our team will help with menus and seating.",
  },
];
