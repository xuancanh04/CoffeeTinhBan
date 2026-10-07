"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import type { MenuCategory } from "@/data/menu";
import { categoryLabels, menuItems } from "@/data/menu";
import { FadeIn } from "@/components/site/FadeIn";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionTitle } from "@/components/site/SectionTitle";
import { AmbientOrbs } from "@/components/effects/AmbientOrbs";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const CoffeeCup3D = dynamic(
  () =>
    import("@/components/effects/CoffeeCup3D").then(
      (m) => m.CoffeeCup3D
    ),
  { ssr: false }
);

const categories: MenuCategory[] = ["do-uong", "bot", "hat"];
type TabKey = MenuCategory | "tat-ca";

export function MenuClient() {
  const [active, setActive] = useState<TabKey>("tat-ca");
  const reduce = useReducedMotion();
  const { t } = useI18n();

  const tabs: { key: TabKey; label: string }[] = [
    { key: "tat-ca", label: t.menu.tabAll },
    { key: "do-uong", label: t.menu.tabDrinks },
    { key: "bot", label: t.menu.tabGround },
    { key: "hat", label: t.menu.tabBeans },
  ];

  const filtered = useMemo(() => {
    if (active === "tat-ca") return menuItems;
    return menuItems.filter((i) => i.category === active);
  }, [active]);

  return (
    <div className="relative overflow-hidden pb-20 pt-10 md:pt-14">
      <AmbientOrbs />
      <div className="container relative z-10 space-y-16">
        <div>
          <FadeIn>
            <SectionTitle
              eyebrow={t.menu.eyebrow}
              title={t.menu.title}
              subtitle={t.menu.subtitle}
            />
          </FadeIn>

          <FadeIn delay={0.05}>
            <LayoutGroup>
              <div
                className="mb-10 flex flex-wrap gap-2 md:gap-3"
                role="tablist"
                aria-label="Lọc theo danh mục"
              >
                {tabs.map((tab) => {
                  const selected = active === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActive(tab.key)}
                      className={cn(
                        "relative min-h-[44px] rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                        selected ? "text-white" : "text-secondary hover:text-primary"
                      )}
                    >
                      {selected && !reduce ? (
                        <motion.span
                          layoutId="menu-tab-pill"
                          className="absolute inset-0 rounded-full bg-[#1F1510] dark:bg-accent shadow-soft"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      ) : null}
                      {selected && reduce ? (
                        <span className="absolute inset-0 rounded-full bg-[#1F1510] dark:bg-accent shadow-soft" />
                      ) : null}
                      {!selected ? (
                        <span className="absolute inset-0 rounded-full bg-surface-card shadow-card ring-1 ring-primary/[0.05]" />
                      ) : null}
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </LayoutGroup>
          </FadeIn>

          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout={!reduce}
                  initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: reduce ? 0 : i * 0.05, duration: 0.35 }}
                >
                  <ProductCard item={item} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3D Drink Showcase Section */}
        <FadeIn delay={0.1}>
          <CoffeeCup3D />
        </FadeIn>
      </div>
    </div>
  );
}
