"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type FadeInProps = {
  children: ReactNode;
  className?: string;
  /** Trễ (giây) — dùng cho stagger */
  delay?: number;
  /** `mount`: khi vào trang (hero). `view`: khi cuộn tới */
  trigger?: "mount" | "view";
  /** Dùng thẻ `li` cho danh sách */
  as?: "div" | "li";
};

export function FadeIn({
  children,
  className,
  delay = 0,
  trigger = "view",
  as = "div",
}: FadeInProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as === "li" ? "li" : "div";
    return <Tag className={className}>{children}</Tag>;
  }

  const motionProps =
    trigger === "mount"
      ? {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, ease, delay },
        }
      : {
          initial: { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-40px", amount: 0.2 },
          transition: { duration: 0.38, ease, delay },
        };

  if (as === "li") {
    return (
      <motion.li className={className} {...motionProps}>
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
}

/** Hero: stagger nhẹ các khối con */
export function HeroStagger({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.05, delayChildren: 0.04 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function HeroStaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.38, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
