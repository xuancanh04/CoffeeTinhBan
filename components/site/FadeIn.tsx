"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  trigger?: "mount" | "view";
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
          initial: { opacity: 0, y: 18, rotateX: 8, scale: 0.98 },
          animate: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
          transition: { duration: 0.55, ease, delay },
        }
      : {
          initial: { opacity: 0, y: 28, rotateX: 10, scale: 0.97 },
          whileInView: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
          viewport: { once: true, amount: 0.05 },
          transition: { duration: 0.55, ease, delay },
        };

  const style = { transformPerspective: 900 };

  if (as === "li") {
    return (
      <motion.li className={className} style={style} {...motionProps}>
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div className={className} style={style} {...motionProps}>
      {children}
    </motion.div>
  );
}

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
          transition: { staggerChildren: 0.08, delayChildren: 0.08 },
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
        hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.55, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
