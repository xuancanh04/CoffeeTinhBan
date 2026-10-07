"use client";

import dynamic from "next/dynamic";
import { FadeIn } from "@/components/site/FadeIn";
import { SectionTitle } from "@/components/site/SectionTitle";
import { site } from "@/lib/site-config";
import { useI18n } from "@/lib/i18n";

const BeanRoasting3D = dynamic(
  () =>
    import("@/components/effects/BeanRoasting3D").then(
      (m) => m.BeanRoasting3D
    ),
  { ssr: false }
);

export function RangXayClient() {
  const { t } = useI18n();

  const levels = [
    { 
      name: t.roasting.level1Name, 
      desc: t.roasting.level1Desc,
      color: "bg-[#B87333]", 
      shadow: "shadow-[#B87333]/30",
    },
    { 
      name: t.roasting.level2Name, 
      desc: t.roasting.level2Desc,
      color: "bg-[#7c4324]", 
      shadow: "shadow-[#7c4324]/30",
    },
    { 
      name: t.roasting.level3Name, 
      desc: t.roasting.level3Desc,
      color: "bg-[#2A1508]", 
      shadow: "shadow-[#2A1508]/30",
    },
  ];

  return (
    <div className="pb-20 pt-10 md:pt-14">
      <div className="container max-w-5xl">
        <FadeIn>
          <SectionTitle
            eyebrow={t.roasting.eyebrow}
            title={t.roasting.title}
            titleClassName="whitespace-normal sm:whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem]"
            className="!max-w-4xl"
            subtitle={t.roasting.subtitle}
          />
        </FadeIn>

        {t.roasting.intro ? (
          <FadeIn delay={0.05}>
            <p className="text-base leading-relaxed text-secondary text-center max-w-2xl mx-auto mb-10">
              {t.roasting.intro}
            </p>
          </FadeIn>
        ) : null}

        {/* 3D Roaster Simulator Component */}
        <FadeIn delay={0.08} className="my-10">
          <BeanRoasting3D />
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {levels.map((l, i) => (
            <FadeIn key={l.name} delay={i * 0.1} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-surface-card p-8 shadow-card ring-1 ring-primary/[0.05] transition-all hover:-translate-y-1.5 hover:shadow-xl hover:ring-primary/10 dark:ring-white/5 dark:hover:ring-white/15">
                {/* Decorative colored glow */}
                <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-30 ${l.color}`} />
                
                <div className="mb-6 flex items-start justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${l.color} shadow-lg ${l.shadow} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <svg className="h-5 w-5 text-white/95" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                  </div>
                  <span
                    className="font-primary text-5xl font-black text-primary/5 transition-colors duration-500 group-hover:text-primary/10 dark:text-white/5 dark:group-hover:text-white/10"
                    aria-hidden
                  >
                    0{i + 1}
                  </span>
                </div>
                
                <h2 className="mb-3 font-primary text-xl font-bold text-primary">
                  {l.name}
                </h2>
                
                <p className="text-sm leading-relaxed text-secondary flex-1">
                  {l.desc}
                </p>
                
                {/* Visual Roast Level Indicator */}
                <div className="mt-8 pt-2">
                  <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-primary/5 dark:bg-white/5">
                    <div 
                      className={`h-full ${l.color} transition-all duration-1000 ease-out`} 
                      style={{ width: `${(i + 1) * 33.33}%` }}
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
