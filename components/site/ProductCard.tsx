"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { site } from "@/lib/site-config";
import type { MenuItem } from "@/data/menu";
import { menuImageSizes } from "@/data/menu";
import { Tilt3D } from "@/components/effects/Tilt3D";
import { useI18n } from "@/lib/i18n";

type ProductCardProps = {
  item: MenuItem;
};

export function ProductCard({ item }: ProductCardProps) {
  const reduce = useReducedMotion();
  const { t } = useI18n();

  const localizedItem = (t.menu.items as Record<string, { name: string; desc: string }>)[item.id];
  const displayName = localizedItem?.name ?? item.name;
  const displayDesc = localizedItem?.desc ?? item.description;

  return (
    <Tilt3D maxTilt={8} className="h-full group">
      <motion.article
        className="flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-surface-card shadow-card border border-cream-deep/60 transition-all duration-300 hover:border-accent/35 hover:shadow-lift"
        whileHover={reduce ? undefined : { y: -3 }}
        transition={{ type: "spring", stiffness: 280, damping: 32 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="relative aspect-[4/3] w-full overflow-hidden bg-cream"
          style={{ transform: "translateZ(24px)" }}
        >
          <Image
            src={item.imageSrc}
            alt={item.imageAlt}
            fill
            sizes={menuImageSizes}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
            loading="lazy"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent opacity-80"
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute -left-1/4 top-0 h-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            aria-hidden
            initial={false}
            whileHover={reduce ? undefined : { x: ["0%", "220%"] }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />
        </div>
        <div
          className="flex flex-1 flex-col p-5 sm:p-6"
          style={{ transform: "translateZ(36px)" }}
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-primary text-xl font-bold leading-snug text-primary group-hover:text-accent transition-colors">
              {displayName}
            </h3>
            <p className="shrink-0 rounded-full bg-accent/10 border border-accent/20 px-3.5 py-1 text-sm font-bold text-accent shadow-sm">
              {item.price}
            </p>
          </div>
          <p className="mt-2.5 flex-1 text-sm leading-relaxed text-secondary">
            {displayDesc}
          </p>
        </div>
      </motion.article>
    </Tilt3D>
  );
}
