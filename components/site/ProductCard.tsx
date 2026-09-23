"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { site } from "@/lib/site-config";
import type { MenuItem } from "@/data/menu";
import { menuImageSizes } from "@/data/menu";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  item: MenuItem;
};

export function ProductCard({ item }: ProductCardProps) {
  const tel = `tel:${site.phone}`;
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-surface-card shadow-card ring-1 ring-primary/[0.04] transition-shadow duration-300 hover:shadow-lift"
      whileHover={reduce ? undefined : { y: -3 }}
      transition={{ type: "spring", stiffness: 280, damping: 32 }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt}
          fill
          sizes={menuImageSizes}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-60"
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-primary text-xl font-semibold leading-snug text-primary">
            {item.name}
          </h3>
          <p className="shrink-0 rounded-full bg-cream/80 px-3 py-1 text-sm font-semibold text-accent">
            {item.price}
          </p>
        </div>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-secondary">
          {item.description}
        </p>
        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
          <Button asChild className="flex-1" variant="default">
            <a href={site.zaloUrl} target="_blank" rel="noopener noreferrer">
              Đặt qua Zalo
            </a>
          </Button>
          <Button asChild className="flex-1" variant="outline">
            <a href={tel}>Gọi ngay</a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
