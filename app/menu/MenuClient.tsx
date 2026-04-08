"use client";

import { useMemo, useState } from "react";
import type { MenuCategory } from "@/data/menu";
import { categoryLabels, menuItems } from "@/data/menu";
import { FadeIn } from "@/components/site/FadeIn";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionTitle } from "@/components/site/SectionTitle";

const categories: MenuCategory[] = ["do-uong", "bot", "hat"];

export function MenuClient() {
  const [active, setActive] = useState<MenuCategory | "tat-ca">("tat-ca");

  const filtered = useMemo(() => {
    if (active === "tat-ca") return menuItems;
    return menuItems.filter((i) => i.category === active);
  }, [active]);

  return (
    <div className="bg-surface pb-20 pt-10 md:pt-14">
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
            className={`min-h-[44px] rounded-full px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              active === "tat-ca"
                ? "bg-primary text-white"
                : "bg-white text-secondary shadow-card border border-cream-deep/60 hover:bg-cream"
            }`}
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
              className={`min-h-[44px] rounded-full px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                active === c
                  ? "bg-primary text-white"
                  : "bg-white text-secondary shadow-card border border-cream-deep/60 hover:bg-cream"
              }`}
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
