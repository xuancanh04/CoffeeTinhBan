import type { Metadata } from "next";
import { RangXayClient } from "./RangXayClient";

export const metadata: Metadata = {
  title: "Dịch vụ rang xay",
  description:
    "Rang xay cà phê theo yêu cầu tại quán Coffee Tình Bạn — nhạt, vừa, đậm với mô phỏng 3D tương tác. Liên hệ để được tư vấn.",
};

export default function RangXayPage() {
  return <RangXayClient />;
}
