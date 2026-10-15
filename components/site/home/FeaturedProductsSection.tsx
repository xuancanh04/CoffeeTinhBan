"use client";

import Link from "next/link";
import { FadeIn } from "@/components/site/FadeIn";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ProductCard } from "@/components/site/ProductCard";
import { AmbientOrbs } from "@/components/effects/AmbientOrbs";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/data/menu";
import { useI18n } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

export function FeaturedProductsSection() {
  const { t } = useI18n();
  const preview = menuItems.slice(0, 3);

  return (
    <section className="relative overflow-hidden border-y border-cream-deep/40 bg-surface-card/45 py-12 md:py-24">
      <AmbientOrbs />
      <div className="container relative z-10">
        <FadeIn>
          <SectionTitle
            eyebrow={t.home.todayEyebrow}
            title={t.home.todayTitle}
            subtitle={t.home.todaySubtitle}
          />
        </FadeIn>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.08} className="h-full">
              <ProductCard item={item} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15} className="mt-12 text-center">
          <div className="inline-block">
            <Button asChild size="lg" variant="primary">
              <Link href="/menu" className="flex items-center gap-2">
                <span>{t.home.viewFullMenu}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
