"use client";

import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import { FadeIn } from "@/components/site/FadeIn";
import { SectionTitle } from "@/components/site/SectionTitle";
import { AmbientOrbs } from "@/components/effects/AmbientOrbs";
import { useI18n } from "@/lib/i18n";
import { Sparkles } from "lucide-react";

// Tải CoffeeCup3D theo dạng Dynamic Import và chỉ mount khi người dùng cuộn tới gần khu vực này
const CoffeeCup3D = dynamic(
  () =>
    import("@/components/effects/CoffeeCup3D").then((m) => m.CoffeeCup3D),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[380px] w-full items-center justify-center rounded-2xl bg-primary/5">
        <div className="flex items-center gap-3 text-sm text-secondary">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-accent border-t-transparent" />
          <span>Đang tải mô hình 3D...</span>
        </div>
      </div>
    ),
  }
);

export function InteractiveCupSection() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldRender3D, setShouldRender3D] = useState(false);

  useEffect(() => {
    // Sử dụng IntersectionObserver để chỉ load & khởi tạo WebGL khi người dùng scroll tới gần
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldRender3D(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px" } // Kích hoạt nạp trước 250px trước khi scroll vào viewport
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-surface-card/30 via-background to-surface-card/40"
    >
      <AmbientOrbs />
      <div className="container relative z-10">
        <FadeIn>
          <SectionTitle
            eyebrow={t.home.interactive3dEyebrow}
            title={t.home.interactive3dTitle}
            subtitle={t.home.interactive3dSubtitle}
            className="mb-12"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-accent/20 bg-surface-card/85 p-4 shadow-card backdrop-blur-md md:p-8 min-h-[420px]">
            {shouldRender3D ? (
              <CoffeeCup3D />
            ) : (
              <div className="flex min-h-[380px] w-full flex-col items-center justify-center gap-3 text-center">
                <Sparkles className="h-8 w-8 text-accent animate-pulse" />
                <p className="font-primary text-base font-medium text-primary">
                  Khu vực trải nghiệm 3D sẵn sàng khi cuộn tới
                </p>
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
