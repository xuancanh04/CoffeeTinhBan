"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ParallaxHero } from "@/components/effects/ParallaxHero";
import { HeroStagger, HeroStaggerItem } from "@/components/site/FadeIn";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-config";
import { useI18n } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

const CoffeeBeansScene = dynamic(
  () =>
    import("@/components/effects/CoffeeBeansScene").then(
      (m) => m.CoffeeBeansScene
    ),
  {
    ssr: false,
    loading: () => null,
  }
);

const heroImage =
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1600&q=80&auto=format&fit=crop";

export function HeroSection({ is3DReady }: { is3DReady: boolean }) {
  const reduce = useReducedMotion();
  const { t } = useI18n();

  return (
    <ParallaxHero imageSrc={heroImage} imageAlt="Không gian và ly cà phê ấm áp">
      {/* 3D Scene chỉ nạp khi browser hoàn tất idle render ban đầu để tránh đơ giao diện */}
      {is3DReady && (
        <div className="absolute inset-0 z-[5] opacity-60 md:opacity-90 transition-opacity duration-1000">
          <CoffeeBeansScene className="h-full w-full" />
        </div>
      )}

      {/* Glow orb light background */}
      <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[130px] pointer-events-none" />

      <div className="container relative z-10 flex min-h-[75vh] md:min-h-[min(92vh,920px)] flex-col justify-end pb-12 pt-24 md:pb-24 md:pt-40">
        <HeroStagger>
          {/* Pill Badge */}
          <HeroStaggerItem>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/40 px-4 py-1.5 backdrop-blur-md shadow-soft">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-white/90">
                {t.home.badgeCrafted}
              </span>
            </div>
          </HeroStaggerItem>

          {/* Brand Title */}
          <HeroStaggerItem className="mt-5">
            <h1
              className="max-w-4xl font-primary text-[2.5rem] font-bold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5rem]"
              style={{
                textShadow: "0 12px 40px rgba(0,0,0,0.45)",
              }}
            >
              {site.name}
            </h1>
          </HeroStaggerItem>

          {/* Subtitle with gold accent accentuation */}
          <HeroStaggerItem className="mt-4">
            <p className="max-w-2xl text-lg font-medium leading-snug text-white/95 sm:text-xl md:text-2xl">
              {t.home.heroSubtitle}
            </p>
          </HeroStaggerItem>

          <HeroStaggerItem className="mt-3">
            <p className="max-w-xl text-balance text-base font-normal leading-relaxed text-white/80 md:text-lg">
              {t.home.heroIntro}
            </p>
          </HeroStaggerItem>

          {/* Action Buttons */}
          <HeroStaggerItem className="mt-8 sm:mt-9">
            <div className="flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row sm:items-center">
              <div className="w-full sm:w-auto">
                <Button asChild size="lg" variant="default" className="w-full shadow-gold text-base">
                  <Link href="/menu" className="flex items-center justify-center gap-2">
                    <span>{t.home.viewMenu}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="w-full sm:w-auto">
                <Button asChild size="lg" variant="soft" className="w-full text-base">
                  <Link href="/gioi-thieu" className="flex items-center justify-center">
                    {t.nav.about}
                  </Link>
                </Button>
              </div>
            </div>
          </HeroStaggerItem>
        </HeroStagger>
      </div>

      {/* Scroll Indicator */}
      {!reduce && (
        <div
          className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
          aria-hidden
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
            {t.home.scrollDown}
          </span>
          <span className="h-7 w-px bg-gradient-to-b from-accent/90 to-transparent animate-pulse" />
        </div>
      )}
    </ParallaxHero>
  );
}
