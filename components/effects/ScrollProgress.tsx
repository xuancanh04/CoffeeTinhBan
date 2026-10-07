"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Thanh tiến độ cuộn trang */
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[120] h-[3px] origin-left bg-gradient-to-r from-accent via-[#C4A574] to-leaf"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
