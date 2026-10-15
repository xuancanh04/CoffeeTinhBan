"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/site/FadeIn";
import { Tilt3D } from "@/components/effects/Tilt3D";
import { AmbientOrbs } from "@/components/effects/AmbientOrbs";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-config";
import { useI18n } from "@/lib/i18n";
import { Coffee, ArrowRight, MessageCircle, HeartHandshake } from "lucide-react";

export function StorySection() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden py-12 md:py-24">
      <AmbientOrbs />
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Story Text */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
                <Coffee className="h-4 w-4" />
                <span>{t.home.storyEyebrow}</span>
              </div>
              <h2 className="mt-3 font-primary text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl lg:text-[2.6rem] leading-tight">
                {t.home.storyTitle}
              </h2>
              <div className="mt-6 space-y-4 font-secondary text-base leading-relaxed text-secondary md:text-[1.05rem] md:leading-[1.8]">
                <p>{t.home.storyDesc1}</p>
                <p>{t.home.storyDesc2}</p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4">
                <Button asChild variant="outline" className="group w-full sm:w-auto">
                  <Link href="/gioi-thieu" className="flex items-center justify-center gap-2">
                    <span>{t.home.storyReadMore}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>

                <a
                  href={site.zaloUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Zalo: {site.phoneDisplay}</span>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Photo Collage with 3D tilt */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.1}>
              <Tilt3D maxTilt={6} glare={true}>
                <div className="group relative aspect-[4/3] sm:aspect-[5/4] overflow-hidden rounded-3xl shadow-card ring-1 ring-primary/[0.08]">
                  <Image
                    src="/assets/about/photo-1.jpg"
                    alt="Cà phê mộc nguyên bản Coffee Tình Bạn"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-85" />

                  {/* Floating micro-badge inside image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-black/40 p-3 backdrop-blur-md ring-1 ring-white/10">
                    <div className="flex items-center gap-2.5 text-white">
                      <HeartHandshake className="h-5 w-5 text-accent" />
                      <span className="text-xs sm:text-sm font-medium">Đối đãi mỗi vị khách như tri âm</span>
                    </div>
                    <span className="text-xs text-accent font-semibold">Đắk Lắk</span>
                  </div>
                </div>
              </Tilt3D>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
