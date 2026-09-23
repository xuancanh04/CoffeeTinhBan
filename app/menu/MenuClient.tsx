"use client";

import { useMemo, useState } from "react";
import type { MenuCategory } from "@/data/menu";
import { categoryLabels, menuItems } from "@/data/menu";
import { FadeIn } from "@/components/site/FadeIn";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionTitle } from "@/components/site/SectionTitle";
import { cn } from "@/lib/utils";

const categories: MenuCategory[] = ["do-uong", "bot", "hat"];

export function MenuClient() {
  const [active, setActive] = useState<MenuCategory | "tat-ca">("tat-ca");

  const filtered = useMemo(() => {
    if (active === "tat-ca") return menuItems;
    return menuItems.filter((i) => i.category === active);
  }, [active]);

  return (
    <div className="pb-20 pt-10 md:pt-14">
      <div className="container">
        <FadeIn>
          <SectionTitle
            eyebrow="Menu"
            title="Đồ uống & sản phẩm"
            subtitle="Chọn danh mục để lọc. Mỗi món đều có nút Zalo và gọi điện để đặt nhanh."
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <div
            className="mb-10 flex flex-wrap gap-2 md:gap-3"
            role="tablist"
            aria-label="Lọc theo danh mục"
          >
            <button
              type="button"
              role="tab"
              aria-selected={active === "tat-ca"}
              onClick={() => setActive("tat-ca")}
              className={cn(
                "min-h-[44px] rounded-full px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                active === "tat-ca"
                  ? "bg-primary text-white shadow-soft"
                  : "bg-surface-card text-secondary shadow-card ring-1 ring-primary/[0.05] hover:bg-cream/80"
              )}
            >
              Tất cả
            </button>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={cn(
                  "min-h-[44px] rounded-full px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  active === c
                    ? "bg-primary text-white shadow-soft"
                    : "bg-surface-card text-secondary shadow-card ring-1 ring-primary/[0.05] hover:bg-cream/80"
                )}
              >
                {categoryLabels[c]}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.06}>
              <ProductCard item={item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
