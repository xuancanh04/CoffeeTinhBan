"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { site } from "@/lib/site-config";
import type { MenuItem } from "@/data/menu";
import { menuImageSizes } from "@/data/menu";

type ProductCardProps = {
  item: MenuItem;
};

export function ProductCard({ item }: ProductCardProps) {
  const tel = `tel:${site.phone}`;
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="group flex flex-col overflow-hidden rounded-2xl border border-cream-deep/60 bg-surface-card shadow-card transition-shadow duration-300 hover:shadow-soft"
      whileHover={reduce ? undefined : { y: -2 }}
      transition={{ type: "spring", stiffness: 280, damping: 32 }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          sizes={menuImageSizes}
          className="object-cover transition-transform duration-300 group-hover:scale-[1.015]"
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-primary text-xl font-semibold text-primary leading-snug">
            {item.name}
          </h3>
          <p className="shrink-0 text-lg font-semibold text-accent">
            {item.price}
          </p>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-secondary">
          {item.description}
        </p>
        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
          <a
            href={site.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Đặt qua Zalo
          </a>
          <a
            href={tel}
            className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-xl border-2 border-primary/15 bg-surface px-4 py-3 text-center text-sm font-semibold text-primary transition-colors hover:border-accent/40 hover:bg-cream/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Gọi ngay
          </a>
        </div>
      </div>
    </motion.article>
  );
}
