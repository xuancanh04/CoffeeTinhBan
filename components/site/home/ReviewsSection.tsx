"use client";

import { FadeIn } from "@/components/site/FadeIn";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Tilt3D } from "@/components/effects/Tilt3D";
import { AmbientOrbs } from "@/components/effects/AmbientOrbs";
import { useI18n } from "@/lib/i18n";
import { Star, Quote } from "lucide-react";

export function ReviewsSection() {
  const { t } = useI18n();

  const reviews = [
    {
      author: t.home.review1Author,
      role: t.home.review1Role,
      text: t.home.review1Text,
      tag: t.home.review1Tag,
      rating: 5,
    },
    {
      author: t.home.review2Author,
      role: t.home.review2Role,
      text: t.home.review2Text,
      tag: t.home.review2Tag,
      rating: 5,
    },
    {
      author: t.home.review3Author,
      role: t.home.review3Role,
      text: t.home.review3Text,
      tag: t.home.review3Tag,
      rating: 5,
    },
    {
      author: t.home.review4Author,
      role: t.home.review4Role,
      text: t.home.review4Text,
      tag: t.home.review4Tag,
      rating: 5,
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-surface-subtle/40 border-y border-border-default/60">
      <AmbientOrbs />
      <div className="container relative z-10">
        <SectionTitle
          eyebrow={t.home.reviewsEyebrow}
          title={t.home.reviewsTitle}
          subtitle={t.home.reviewsSubtitle}
          className="mb-14 md:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <FadeIn key={idx} delay={idx * 0.08} className="h-full">
              <Tilt3D
                maxTilt={6}
                className="flex h-full flex-col justify-between rounded-2xl border border-accent/20 bg-surface-card/90 p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:shadow-gold"
              >
                <div>
                  {/* Stars & Quote */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          className="h-4 w-4 fill-accent text-accent"
                        />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-accent/30 stroke-[1.8]" />
                  </div>

                  {/* Tag badge */}
                  <span className="inline-block rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent mb-3">
                    {review.tag}
                  </span>

                  {/* Review text */}
                  <p className="font-secondary text-sm leading-relaxed text-secondary italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Customer author info */}
                <div className="mt-6 pt-4 border-t border-border-default/60 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 font-primary text-sm font-bold text-accent ring-1 ring-accent/30">
                    {review.author.slice(0, 1)}
                  </div>
                  <div>
                    <h4 className="font-primary text-sm font-semibold text-primary">
                      {review.author}
                    </h4>
                    <p className="font-secondary text-xs text-muted">
                      {review.role}
                    </p>
                  </div>
                </div>
              </Tilt3D>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
