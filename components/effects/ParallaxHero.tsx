"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { type ReactNode, useRef } from "react";

type ParallaxHeroProps = {
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
};

export function ParallaxHero({
  imageSrc,
  imageAlt,
  children,
}: ParallaxHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const opacityRaw = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);
  const y = useSpring(yRaw, { stiffness: 80, damping: 28 });
  const scale = useSpring(scaleRaw, { stiffness: 80, damping: 28 });
  const opacity = useSpring(opacityRaw, { stiffness: 80, damping: 28 });

  return (
    <section ref={ref} className="relative isolate overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y, scale, opacity }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-primary/55 via-primary/45 to-primary/88"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_15%,_rgba(35,25,20,0.4)_100%)]"
          aria-hidden
        />
      </motion.div>
      {children}
    </section>
  );
}
