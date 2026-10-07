/** Business details from brand content brief */
export const SITE_URL = "https://fernwaybystories.com";

export const BUSINESS = {
  name: "Fernway by Stories",
  shortName: "Fernway",
  tagline: "Bengaluru Mysore Highway has a new iconic landmark.",
  phone: "+918047162244",
  phoneDisplay: "080-471-62244",
  whatsappPhone: "+919606919636",
  whatsapp: "https://wa.me/919606919636",
  reserveTableUrl: "https://widget.reservego.co/reserveOutlets/69f84d68d1e0f45432ca2e77",
  address: {
    line1: "Q88J+78G, Mayaganahalli",
    city: "Bengaluru",
    region: "Karnataka",
    postalCode: "562128",
    country: "India",
    full: "Q88J+78G, Mayaganahalli, Bengaluru, Karnataka 562128",
    /** Human-readable location line used across the site */
    locality: "Mayaganahalli, Bangalore Mysore Highway, near Ramanagara",
  },
  hours: "Daily · 1pm – 6am",
  hoursLong: "Daily · 1pm – Late Night",
  hoursDisplay: "1pm – 6am",
  coordinates: {
    lat: 12.765757250040997,
    lng: 77.33076492952316,
  },
  mapsUrl: "https://maps.app.goo.gl/PeFS3Mi8kk8QcRhAA",
  mapsDirectionsUrl: "https://maps.app.goo.gl/PeFS3Mi8kk8QcRhAA",
  mapsEmbed:
    "https://maps.google.com/maps?q=12.765757250040997,77.33076492952316&z=16&output=embed",
  social: {
    instagram: "https://www.instagram.com/fernwaybystories",
    facebook: "https://www.facebook.com/",
  },
} as const;

const PLACEHOLDER_SOCIAL_HOSTS = new Set(["www.facebook.com", "facebook.com"]);

export function isActiveSocialUrl(url: string) {
  try {
    const { hostname, pathname } = new URL(url);
    if (PLACEHOLDER_SOCIAL_HOSTS.has(hostname) && (pathname === "/" || pathname === "")) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

export function getActiveSocialLinks() {
  return [
    { name: "Instagram", href: BUSINESS.social.instagram },
    { name: "Facebook", href: BUSINESS.social.facebook },
  ].filter((link) => isActiveSocialUrl(link.href));
}

export const SEO = {
  defaultTitle: "Fernway by Stories | Garden Restaurant on Bangalore Mysore Highway",
  defaultDescription:
    "Open-air garden restaurant and cafe in Mayaganahalli on the Bangalore Mysore Highway, near Ramanagara. North Indian food, live music and family dining. Book a table.",
  keywords: [
    "Fernway by Stories",
    "Fernway by Stories Bangalore",
    "Fernway by Stories Bengaluru",
    "Fernway by Stories Mayaganahalli",
    "Fernway by Stories Mysore Road",
    "Fernway by Stories Bangalore Mysore Highway",
    "Fernway by Stories near Ramanagara",
    "restaurants in Mayaganahalli",
    "restaurants on Mysore Road",
    "restaurants on Bangalore Mysore Highway",
    "restaurants near Ramanagara",
    "best highway restaurants near Bangalore",
    "best highway restaurants near Bengaluru",
    "garden dining near Bangalore",
    "outdoor dining near Bengaluru",
    "open air dining on Bangalore Mysore Highway",
    "weekend drive restaurants near Bangalore",
    "long drive restaurants near Bangalore",
    "restaurants for Bangalore Mysore road trips",
  ],
  ogImage: "/ambience/1.webp",
} as const;

/** Areas the venue serves — used in structured data and copy */
export const SERVICE_AREAS = [
  "Mayaganahalli",
  "Ramanagara",
  "Bidadi",
  "Bengaluru",
  "Mysuru",
] as const;

export function pageUrl(path = "") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
