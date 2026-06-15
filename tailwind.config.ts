import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        // Cores da marca (fonte: app/globals.css :root)
        brand: {
          red: "var(--color-red)",
          "red-700": "var(--color-red-700)",
          gold: "var(--color-gold)",
          "gold-700": "var(--color-gold-700)",
          navy: "var(--color-navy)",
          "navy-700": "var(--color-navy-700)",
          "navy-900": "var(--color-navy-900)",
          footer: "var(--color-footer)",
          cream: "var(--color-cream)",
          surface2: "var(--color-surface-2)",
          ink: "var(--color-ink)",
        },
        steel: {
          600: "var(--color-steel-600)",
          300: "var(--color-steel-300)",
        },
        whatsapp: "var(--color-whatsapp)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "var(--shadow-card)",
        cta: "var(--shadow-cta)",
      },
      borderRadius: {
        card: "var(--radius-card)",
      },
      maxWidth: {
        content: "var(--maxw)",
      },
    },
  },
  plugins: [],
};

export default config;
