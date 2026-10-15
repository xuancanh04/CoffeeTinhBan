"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "@/components/site/home/HeroSection";
import { StatsSection } from "@/components/site/home/StatsSection";
import { StorySection } from "@/components/site/home/StorySection";
import { ServicesSection } from "@/components/site/home/ServicesSection";
import { FeaturedProductsSection } from "@/components/site/home/FeaturedProductsSection";
import { InteractiveCupSection } from "@/components/site/home/InteractiveCupSection";
import { ReviewsSection } from "@/components/site/home/ReviewsSection";
import { CtaBannerSection } from "@/components/site/home/CtaBannerSection";

export function HomeClient() {
  const [is3DReady, setIs3DReady] = useState(false);

  // Trì hoãn việc khởi động 3D Canvas ở Hero một chút (sau khi DOM và font chữ hiển thị xong)
  // để người dùng mở trang lên thấy ngay nội dung, hoàn toàn không bị đơ giật
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        // @ts-ignore
        const id = window.requestIdleCallback(() => setIs3DReady(true), { timeout: 1200 });
        // @ts-ignore
        return () => window.cancelIdleCallback(id);
      } else {
        const timer = setTimeout(() => setIs3DReady(true), 300);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <>
      {/* 1. Hero Section với hạt cà phê 3D tải mượt mà không block */}
      <HeroSection is3DReady={is3DReady} />

      {/* 2. Thống kê ấn tượng */}
      <StatsSection />

      {/* 3. Câu chuyện thương hiệu */}
      <StorySection />

      {/* 4. Dịch vụ & trải nghiệm quán */}
      <ServicesSection />

      {/* 5. Thực đơn nổi bật */}
      <FeaturedProductsSection />

      {/* 6. Mô hình ly cà phê 3D tương tác (chỉ nạp khi cuộn tới gần) */}
      <InteractiveCupSection />

      {/* 7. Đánh giá từ khách hàng */}
      <ReviewsSection />

      {/* 8. Kêu gọi hành động & liên hệ */}
      <CtaBannerSection />
    </>
  );
}
