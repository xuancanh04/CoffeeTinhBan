import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
    fontFamily: {
      primary: ["var(--font-fraunces)", "Georgia", "serif"],
      secondary: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--rgb-primary) / <alpha-value>)",
          light: "rgb(var(--rgb-primary) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--rgb-secondary) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--rgb-muted) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "#C88647", // Rich warm amber caramel gold
          hover: "#B37237",
          light: "#E8A86B",
        },
        leaf: {
          DEFAULT: "#6B7B59",
        },
        surface: {
          DEFAULT: "rgb(var(--rgb-surface) / <alpha-value>)",
          card: "rgb(var(--rgb-surface-card) / <alpha-value>)",
          dark: "rgb(var(--rgb-surface-dark) / <alpha-value>)",
        },
        cream: {
          DEFAULT: "rgb(var(--rgb-cream) / <alpha-value>)",
          deep: "rgb(var(--rgb-cream-deep) / <alpha-value>)",
        },
      },
      boxShadow: {
        soft: "0 18px 42px -16px rgba(31, 21, 16, 0.24)",
        card: "0 10px 30px -12px rgba(31, 21, 16, 0.12), 0 0 0 1px rgba(200, 134, 71, 0.08)",
        lift: "0 24px 56px -18px rgba(31, 21, 16, 0.22), 0 0 20px 2px rgba(200, 134, 71, 0.15)",
        gold: "0 8px 28px -6px rgba(200, 134, 71, 0.45)",
      },
      backgroundImage: {
        atmosphere:
          "radial-gradient(ellipse 85% 55% at 50% -12%, rgba(200, 134, 71, 0.18), transparent 60%), radial-gradient(ellipse 65% 45% at 100% 25%, rgba(232, 168, 107, 0.12), transparent 55%), radial-gradient(ellipse 60% 40% at 0% 75%, rgba(31, 21, 16, 0.06), transparent 50%)",
        hero_overlay: "url('/assets/hero/hero-overlay.png')",
        opening_hours: "url('/assets/opening-hours/bg.png')",
        footer: "url('/assets/footer/bg.png')",
        gold_gradient: "linear-gradient(135deg, #E8A86B 0%, #C88647 50%, #A36429 100%)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse_gold: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease forwards",
        "pulse-gold": "pulse_gold 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
