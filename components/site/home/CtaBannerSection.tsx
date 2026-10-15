"use client";

import Link from "next/link";
import { FadeIn } from "@/components/site/FadeIn";
import { AmbientOrbs } from "@/components/effects/AmbientOrbs";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-config";
import { useI18n } from "@/lib/i18n";
import { Coffee, MessageCircle, MapPin } from "lucide-react";

export function CtaBannerSection() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <AmbientOrbs />
      <div className="container relative z-10">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-br from-accent/15 via-surface-card to-accent/5 p-8 shadow-card md:p-12">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-accent ring-1 ring-accent/30 mb-4">
                <Coffee className="h-6 w-6 stroke-[2.2]" />
              </span>
              <h2 className="font-primary text-2xl md:text-4xl font-bold tracking-tight text-primary">
                {t.home.bannerCtaTitle}
              </h2>
              <p className="mt-3 font-secondary text-sm md:text-base leading-relaxed text-secondary">
                {t.home.bannerCtaDesc}
              </p>

              <div className="mt-8 flex flex-col w-full gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-center">
                <Button asChild size="lg" variant="default" className="w-full sm:w-auto">
                  <a
                    href={site.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>{t.home.chatZalo}</span>
                  </a>
                </Button>

                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                  <Link href="/lien-he" className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span>{t.home.contactNow}</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
