import type { Metadata } from "next";
import { MenuClient } from "./MenuClient";

export const metadata: Metadata = {
  title: "Menu & sản phẩm",
  description:
    "Đồ uống, cà phê bột, cà phê hạt tại quán Coffee Tình Bạn — đặt qua Zalo hoặc gọi điện.",
};

export default function MenuPage() {
  return <MenuClient />;
}
