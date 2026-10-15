"use client";

import { FadeIn } from "@/components/site/FadeIn";
import { useI18n } from "@/lib/i18n";

export function StatsSection() {
  const { t } = useI18n();

  const stats = [
    { number: t.home.stat1Number, label: t.home.stat1Label },
    { number: t.home.stat2Number, label: t.home.stat2Label },
    { number: t.home.stat3Number, label: t.home.stat3Label },
  ];

  return (
    <section className="relative z-20 -mt-8 mx-auto max-w-5xl px-4 md:-mt-10">
      <FadeIn delay={0.05}>
        <div className="grid grid-cols-3 divide-x divide-primary/10 rounded-2xl border border-accent/20 bg-surface-card/95 p-4 shadow-card backdrop-blur-xl sm:p-7">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center px-1 sm:px-4">
              <span className="font-primary text-xl font-extrabold text-accent sm:text-2xl md:text-3xl">
                {s.number}
              </span>
              <span className="mt-1 font-secondary text-[10px] font-medium leading-tight text-secondary sm:text-sm">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
