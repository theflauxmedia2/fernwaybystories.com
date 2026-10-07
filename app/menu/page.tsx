import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import MenuTabs from "./MenuTabs";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Menu – North Indian Food, Coffee & Drinks",
  description:
    "Fernway by Stories food & beverages menu: chatpata chicken tikka, North Indian, veg & non-veg dishes, starters, desserts, coffee and cocktails on Mysore Road.",
  path: "/menu",
  image: "/food/1.webp",
  imageAlt: "North Indian food and drinks from the Fernway by Stories menu",
  keywords: [
    "Fernway by Stories menu",
    "Fernway by Stories food menu",
    "Fernway by Stories beverages menu",
    "Fernway by Stories North Indian food",
    "Fernway by Stories chicken tikka",
    "North Indian restaurants on Bangalore Mysore Highway",
    "chatpata chicken tikka on Mysore Road",
    "vegetarian food on Bangalore Mysore Highway",
    "non veg food in Mayaganahalli",
    "desserts near Ramanagara",
    "coffee on Mysore Road",
  ],
});

export default function MenuPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          label="Our Menu"
          title="Menu"
          subtitle="Fernway by Stories food & beverages menu — North Indian, veg & non-veg, desserts and coffee"
        />
        <MenuTabs />
      </main>
      <Footer />
    </>
  );
}
