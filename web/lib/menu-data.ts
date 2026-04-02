export type MenuItem = {
  id: string;
  name: string;
  desc: string;
  price: number;
  tags?: string[];
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "chai",
    title: "Chai",
    items: [
      { id: "masala-chai", name: "Masala Chai", desc: "Fast pickup", price: 12, tags: ["Hot"] },
      { id: "adrak-chai", name: "Adrak Chai", desc: "Ginger • Cozy", price: 12, tags: ["Hot"] },
      { id: "elaichi-chai", name: "Elaichi Chai", desc: "Cardamom • Cozy", price: 12, tags: ["Hot"] },
    ],
  },
  {
    id: "cold",
    title: "Cold & Refreshing",
    items: [
      { id: "cold-coffee", name: "Cold Coffee", desc: "Icy • Refreshing", price: 119, tags: ["Cold"] },
      { id: "lassi", name: "Lassi", desc: "Icy • Refreshing", price: 50, tags: ["Cold"] },
    ],
  },
  {
    id: "snacks",
    title: "Snacks",
    items: [
      { id: "shegao-kachori", name: "Shegao Kachori", desc: "Crisp • Spiced • Perfect pair", price: 50 },
      { id: "tikka-pav", name: "Tikka Pav", desc: "Spiced • Tangy", price: 50 },
      { id: "veg-maggi", name: "Veg Maggi", desc: "Hot • Veggie • Comfort", price: 50 },
    ],
  },
];

export const formatINR = (value: number) => `₹${value}`;
