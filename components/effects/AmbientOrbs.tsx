"use client";

import { useReducedMotion } from "framer-motion";

const orbs = [
  { size: 220, x: "8%", y: "18%", duration: "10s", delay: "0s", color: "rgba(143,99,64,0.16)" },
  { size: 160, x: "78%", y: "12%", duration: "12s", delay: "0.6s", color: "rgba(111,125,92,0.14)" },
  { size: 280, x: "62%", y: "58%", duration: "14s", delay: "1.2s", color: "rgba(143,99,64,0.1)" },
  { size: 140, x: "18%", y: "68%", duration: "11s", delay: "0.3s", color: "rgba(196,165,116,0.14)" },
];

/** Khối ánh sáng / hơi nước nền siêu nhẹ sử dụng CSS GPU transform, không kích hoạt JS re-render loop */
export function AmbientOrbs() {
  const reduce = useReducedMotion();

  if (reduce) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden transform-gpu"
      aria-hidden
    >
      {orbs.map((o, i) => (
        <span
          key={i}
          className="ambient-orb absolute rounded-full blur-3xl will-change-transform pointer-events-none"
          style={{
            width: o.size,
            height: o.size,
            left: o.x,
            top: o.y,
            background: o.color,
            animationDuration: o.duration,
            animationDelay: o.delay,
          }}
        />
      ))}
    </div>
  );
}
