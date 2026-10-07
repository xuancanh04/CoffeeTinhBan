"use client";

import { motion, useReducedMotion } from "framer-motion";

const orbs = [
  { size: 220, x: "8%", y: "18%", delay: 0, color: "rgba(143,99,64,0.16)" },
  { size: 160, x: "78%", y: "12%", delay: 0.6, color: "rgba(111,125,92,0.14)" },
  { size: 280, x: "62%", y: "58%", delay: 1.2, color: "rgba(143,99,64,0.1)" },
  { size: 140, x: "18%", y: "68%", delay: 0.3, color: "rgba(196,165,116,0.14)" },
];

/** Khối ánh sáng / hơi nước nền — tạo chiều sâu nhẹ */
export function AmbientOrbs() {
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {orbs.map((o, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: o.size,
            height: o.size,
            left: o.x,
            top: o.y,
            background: o.color,
          }}
          animate={{
            y: [0, -24, 0],
            x: [0, 12, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9 + i * 1.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: o.delay,
          }}
        />
      ))}
    </div>
  );
}
