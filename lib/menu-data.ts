export type Diet = "v" | "non-v" | "both";

export type MenuItem = {
  name: string;
  desc: string;
  diet: Diet;
};

export type MenuCategory = {
  id: string;
  label: string;
  /** Short category description shown above the items */
  intro: string;
  items: MenuItem[];
};

export const MENU_INTRO =
  "A curated selection of North Indian favourites, global comfort dishes, and crafted beverages — designed to be shared, savoured, and enjoyed at your own pace. From veg and non-veg starters to desserts and coffee, it's food worth the drive down Mysore Road.";

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    label: "Small Plates & Starters",
    intro:
      "Starters, small plates, and quick bites made for sharing in the garden — led by our chatpata chicken tikka, a favourite on the Bangalore Mysore Highway.",
    items: [
      { name: "Chatpata Chicken Tikka", desc: "Tangy spice marinade, charred in the tandoor, mint chutney", diet: "non-v" },
      { name: "Crispy Lotus Stem", desc: "Chilli caramel, sesame, spring onion", diet: "v" },
      { name: "Prawn Skewers", desc: "Lemongrass marinade, citrus dip", diet: "non-v" },
      { name: "Truffle Fries", desc: "Parmesan, herbs, house aioli", diet: "v" },
      { name: "Chicken Satay", desc: "Peanut glaze, pickled cucumber", diet: "non-v" },
    ],
  },
  {
    id: "mains",
    label: "Main Dishes",
    intro:
      "Hearty North Indian and global mains for a proper family lunch or dinner stop on your Bangalore–Mysore road trip.",
    items: [
      { name: "Butter Chicken Bowl", desc: "Basmati rice, naan crumble, pickled onion", diet: "non-v" },
      { name: "Grilled Fish", desc: "Herb butter, seasonal greens", diet: "non-v" },
      { name: "Mushroom Risotto", desc: "Aged parmesan, truffle oil", diet: "v" },
    ],
  },
  {
    id: "vegetarian",
    label: "Vegetarian Selection",
    intro: "A dedicated selection of vegetarian food, from smoky paneer tikka to fresh, colourful bowls.",
    items: [
      { name: "Paneer Tikka", desc: "Smoked yogurt, mint chutney", diet: "v" },
      { name: "Buddha Bowl", desc: "Quinoa, roasted vegetables, tahini", diet: "v" },
      { name: "Avocado Toast", desc: "Sourdough, chilli oil, micro greens", diet: "v" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    intro: "Desserts to end the meal — best enjoyed with a coffee under the open sky.",
    items: [
      { name: "Chocolate Fondant", desc: "Vanilla bean ice cream", diet: "v" },
      { name: "Seasonal Fruit Tart", desc: "Pastry cream, berry coulis", diet: "v" },
    ],
  },
  {
    id: "cocktails",
    label: "Coffee, Cocktails & Beverages",
    intro: "Our beverages menu: freshly brewed coffee, handcrafted cocktails, and zero-proof drinks.",
    items: [
      { name: "Freshly Brewed Coffee", desc: "Hot or iced, made to order", diet: "both" },
      { name: "Fernway Signature", desc: "House blend, citrus, botanicals", diet: "both" },
      { name: "Smoked Old Fashioned", desc: "Whisky, bitters, orange zest", diet: "both" },
      { name: "Zero Proof Spritz", desc: "Botanicals, soda, fresh herbs", diet: "both" },
    ],
  },
  {
    id: "shisha",
    label: "Shisha Selection",
    intro: "Classic and seasonal shisha blends for slow evenings with good company.",
    items: [
      { name: "Classic Mint", desc: "Cool, refreshing finish", diet: "both" },
      { name: "Double Apple", desc: "Traditional blend", diet: "both" },
      { name: "Seasonal Fusion", desc: "Ask your server for today's pairing", diet: "both" },
    ],
  },
];
