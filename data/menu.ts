export type MenuCategory = "do-uong" | "bot" | "hat";

export type MenuItem = {
  id: string;
  name: string;
  price: string;
  description: string;
  /** Ảnh từ Unsplash — thay bằng /assets/... khi có ảnh riêng */
  imageSrc: string;
  imageAlt: string;
  category: MenuCategory;
};

export const categoryLabels: Record<MenuCategory, string> = {
  "do-uong": "Đồ uống",
  bot: "Cà phê bột",
  hat: "Cà phê hạt",
};

/** Kích thước ảnh tối ưu cho next/image */
export const menuImageSizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";

export const menuItems: MenuItem[] = [
  {
    id: "phin-den",
    name: "Cà phê đen",
    price: "15.000đ",
    description: "Pha trực tiếp, đậm vị, hậu ngọt nhẹ — uống nóng hoặc đá.",
    imageSrc:"/assets/ca-phe-den-da.webp",
    imageAlt: "Ly cà phê phin đen",
    category: "do-uong",
  },
  {
    id: "phin-sua",
    name: "Cà phê sữa",
    price: "18.000đ",
    description: "Sữa đặc vừa phải, cân bằng đắng – ngọt.",
    imageSrc:"/assets/caphesua.webp",
    imageAlt: "Cà phê sữa đá",
    category: "do-uong",
  },
  {
    id: "bac-xiu",
    name: "Bạc xỉu",
    price: "18.000đ",
    description: "Nhiều sữa, ít cà phê — dễ uống, thơm mùi rang.",
    imageSrc:"/assets/bac-xiu.webp",
    imageAlt: "Ly bạc xỉu",
    category: "do-uong",
  },
  {
    id: "bot-phin-500",
    name: "Cà phê bột Robusta 500g",
    price: "90.000đ",
    description: "Rang vừa, xay mịn cho phin — gói hút chân không.",
    imageSrc:"/assets/anhcaphebot.png",
    imageAlt: "Cà phê bột",
    category: "bot",
  },
  {
    id: "bot-filter-250",
    name: "Cà phê bột Robusta 1kg",
    price: "180.000đ",
    description: "Rang vừa, xay mịn cho phin — gói hút chân không.",
    imageSrc:"/assets/anhcaphebot1.png",
    imageAlt: "Bột cà phê pour over",
    category: "bot",
  },
  {
    id: "hat-arabica",
    name: "Hạt cà phê Robusta 500g",
    price: "110.000đ",
    description: "Hạt sạch, rang xay theo yêu cầu hoặc mua hạt để tự rang xay.",
    imageSrc: "/assets/anhhat2.jpg",
    imageAlt: "Hạt cà phê Robusta 500g",
    category: "hat",
  },
  {
    id: "hat-blend",
    name: "Hạt cà phê Robusta 1kg",
    price: "220.000đ",
    description: "Hạt sạch, rang xay theo yêu cầu hoặc mua hạt để tự rang xay",
    imageSrc: "/assets/anhhat3.jpg",
    imageAlt: "Hạt cà phê Robusta 1kg",
    category: "hat",
  },
];
