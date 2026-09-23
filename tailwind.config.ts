import type { Config } from "tailwindcss";

const config: Config = {
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
          DEFAULT: "#2C211C",
        },
        secondary: {
          DEFAULT: "#6B5E54",
        },
        muted: {
          DEFAULT: "#8F857A",
        },
        accent: {
          DEFAULT: "#8F6340",
          hover: "#7A5234",
        },
        leaf: {
          DEFAULT: "#6F7D5C",
        },
        surface: {
          DEFAULT: "#F2F0EB",
          card: "#FFFCF8",
          dark: "#231914",
        },
        cream: {
          DEFAULT: "#EBE6DC",
          deep: "#DDD5C8",
        },
      },
      boxShadow: {
        soft: "0 18px 40px -18px rgba(44, 33, 28, 0.28)",
        card: "0 10px 28px -14px rgba(44, 33, 28, 0.16)",
        lift: "0 22px 50px -20px rgba(44, 33, 28, 0.22)",
      },
      backgroundImage: {
        atmosphere:
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(143, 99, 64, 0.12), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 20%, rgba(111, 125, 92, 0.08), transparent 50%)",
        hero_overlay: "url('/assets/hero/hero-overlay.png')",
        opening_hours: "url('/assets/opening-hours/bg.png')",
        footer: "url('/assets/footer/bg.png')",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
