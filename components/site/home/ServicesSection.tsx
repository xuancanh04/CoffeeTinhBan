"use client";

import Link from "next/link";
import { FadeIn } from "@/components/site/FadeIn";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Tilt3D } from "@/components/effects/Tilt3D";
import { AmbientOrbs } from "@/components/effects/AmbientOrbs";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-config";
import { useI18n } from "@/lib/i18n";
import { Coffee, Package, Flame, ArrowRight, PhoneCall } from "lucide-react";

export function ServicesSection() {
  const { t } = useI18n();

  const services = [
    { 
      title: t.home.service1Title, 
      text: t.home.service1Text,
      icon: Coffee,
      badge: "In-Shop"
    },
    { 
      title: t.home.service2Title, 
      text: t.home.service2Text,
      icon: Package,
      badge: "Packaged"
    },
    { 
      title: t.home.service3Title, 
      text: t.home.service3Text,
      icon: Flame,
      badge: "Custom"
    },
  ];

  return (
    <section className="relative overflow-hidden py-12 md:py-24">
      <AmbientOrbs />
      <div className="container relative z-10">
        <FadeIn>
          <SectionTitle
            eyebrow={t.home.servicesEyebrow}
            title={t.home.servicesTitle}
            subtitle={t.home.servicesSubtitle}
          />
        </FadeIn>

        <ul className="mt-12 grid gap-7 md:grid-cols-3">
          {services.map((s, i) => {
            const IconComponent = s.icon;
            return (
              <FadeIn
                key={s.title}
                as="li"
                delay={i * 0.08}
                className="h-full"
              >
                <Tilt3D maxTilt={6} className="h-full">
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-accent/15 bg-surface-card/85 p-7 shadow-card backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:shadow-lift">
                    <div>
                      {/* Top Icon Badge & Index */}
                      <div className="flex items-center justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-sm ring-1 ring-accent/25 transition-transform duration-300 group-hover:scale-110">
                          <IconComponent className="h-6 w-6 stroke-[2]" />
                        </div>
                        <span className="font-primary text-3xl font-extrabold text-accent/25 transition-colors group-hover:text-accent/45">
                          0{i + 1}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="mt-5 font-primary text-xl font-bold text-primary transition-colors group-hover:text-accent md:text-2xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 font-secondary text-sm leading-relaxed text-secondary md:text-[0.95rem] md:leading-[1.7]">
                        {s.text}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-primary/5 flex items-center justify-between text-xs font-semibold text-accent">
                      <span>{s.badge}</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Tilt3D>
              </FadeIn>
            );
          })}
        </ul>

        <FadeIn
          delay={0.12}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button asChild variant="outline">
            <Link href="/rang-xay" className="flex items-center gap-2">
              <span>{t.home.learnRoasting}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <a
            href={`tel:${site.phone}`}
            className="flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            <PhoneCall className="h-4 w-4" />
            <span>{t.home.call} {site.phoneDisplay}</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
