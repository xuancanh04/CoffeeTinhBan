/**
 * Thông tin quán — chỉnh sửa trực tiếp tại đây (số điện thoại, Zalo, địa chỉ, bản đồ).
 * Không cần backend.
 */

export const site = {
  name: "Coffee Tình Bạn",
  tagline: "Coffee Tình Bạn – Cà phê rang xay nguyên chất",

  /** Dòng phụ trên banner trang chủ */
  heroEyebrow: "Quán cà phê nguyên chất",

  /** Đoạn giới thiệu ngắn dưới tiêu đề hero */
  heroIntro:
    "Thưởng thức tại quán, mang về cà phê bột hoặc hạt — và cá nhân hóa hương vị với dịch vụ rang xay riêng biệt.",

  shortDescription:
    "Quán cà phê nguyên chất phục vụ khách: uống tại quán, cà phê bột & hạt, nhận rang xay theo yêu cầu.",

  /** Số gọi trên web — cập nhật số thật của quán */
  phone: "0352808586",
  phoneDisplay: "0352 808 586",

  /** Link Zalo: lấy từ zalo.me/sdt hoặc QR Zalo OA */
  zaloUrl: "https://zalo.me/0352808586",

  /** Địa chỉ hiển thị + tìm Google Maps */
  addressLine:
    "Quán Cà phê Tình Bạn – Buôn Cư Drăm, Xã Yang Mao, Đắk Lắk",

  /**
   * Link Google Maps đúng điểm quán (nút “Chỉ đường”).
   * Rút gọn query thừa; giữ q + ftid để khớp địa điểm trên Maps.
   */
  googleMapsSearchUrl:
    "https://www.google.com/maps?q=FGQV+J87+Qu%C3%A1n+C%C3%A0+ph%C3%AA+T%C3%ACnh+B%E1%BA%A1n,+C%C6%B0+Dr%C4%83m,+Yang+Mao,+%C4%90%E1%BA%AFk+L%E1%BA%AFk&ftid=0x3171b9006304806f:0x7629546cdc8bcd7c",

  /**
   * Iframe nhúng Google Maps (địa điểm đã gắn trên Google qua ftid).
   * Nếu bản đồ lệch zoom: Google Maps → Chia sẻ → Nhúng bản đồ → thay `src` tại đây.
   */
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.319484944676!2d108.56028!3d12.45806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3171b9006304806f%3A0x7629546cdc8bcd7c!2z!5e0!3m2!1svi!2svn!4v1!5m2!1svi!2svn",

  hours: {
    weekdays: "7:00 – 22:00",
    weekend: "7:30 – 22:00",
  },
} as const;

export type SiteConfig = typeof site;

/**
 * URL gốc cho metadata (favicon, Open Graph, canonical).
 * Local: mặc định localhost. Production: tạo `.env.local` với
 * `NEXT_PUBLIC_SITE_URL=https://ten-mien-cua-ban.com`
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}
