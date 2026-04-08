"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FaPhone } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { site } from "@/lib/site-config";

/**
 * Nút nổi gọi + Zalo — luôn hiển thị trên mobile/desktop (trừ khi in).
 */
export function StickyContact() {
  const reduce = useReducedMotion();

  return (
    <div
      className="fixed bottom-4 right-4 z-[100] flex flex-col gap-3 md:bottom-8 md:right-8 print:hidden"
      role="region"
      aria-label="Liên hệ nhanh"
    >
      <motion.a
        href={`tel:${site.phone}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:h-[52px] md:w-[52px]"
        aria-label={`Gọi ${site.phoneDisplay}`}
        whileHover={reduce ? undefined : { scale: 1.03 }}
        whileTap={reduce ? undefined : { scale: 0.97 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
  >
        <FaPhone className="h-5 w-5" aria-hidden />
      </motion.a>
      <motion.a
        href={site.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0068FF] text-white shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0068FF] md:h-[52px] md:w-[52px]"
        aria-label="Nhắn Zalo quán Coffee Tình Bạn"
        whileHover={reduce ? undefined : { scale: 1.03 }}
        whileTap={reduce ? undefined : { scale: 0.97 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
      >
        <SiZalo className="h-6 w-6" aria-hidden />
      </motion.a>
    </div>
  );
}
