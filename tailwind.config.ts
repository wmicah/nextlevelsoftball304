import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1440px",
      },
    },
    colors: {
      // Design System Colors - Dark Theme with Electric Blue Accent
      bg: "#0B0B0C", // Pitch Black - page background
      surface: "#1A1C1E", // Graphite Gray - cards & sections
      "surface-elevated": "#2D2F33", // Steel Gray - elevated surfaces
      divider: "#34363B", // Carbon Stroke - dividers, outlines
      "text-primary": "#FFFFFF", // Pure White - main text (use as text-[text-primary])
      "text-secondary": "#D9D9DF", // Soft Silver - secondary text
      accent: "#4BB8FF", // Electric Blue - primary accent, CTAs
      "accent-hover": "#7EE7FF", // Biomech Cyan - hover
      glow: "#A3F6FF", // Icy Pulse - outer glow / subtle highlights
      success: "#3BCF7A",
      warning: "#FFC94A",
      error: "#FF4D4D",
      // Aliases for easier use
      white: "#FFFFFF",
      "soft-silver": "#D9D9DF",
      // Shadcn/ui compatibility
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
      transparent: "transparent",
      current: "currentColor",
    },
    extend: {
      maxWidth: {
        "8xl": "1408px",
      },
      spacing: {
        // 4px base spacing scale
        "0.5": "4px",
        "1": "8px",
        "1.5": "12px",
        "2": "16px",
        "3": "24px",
        "4": "32px",
        "6": "48px",
        "8": "64px",
        "12": "96px",
      },
      fontSize: {
        // Typography system - Design System
        xs: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0.01em" }],
        sm: ["1rem", { lineHeight: "1.5", letterSpacing: "0" }], // Body S
        base: ["1.125rem", { lineHeight: "1.6", letterSpacing: "0" }], // Body M (default)
        lg: ["1.25rem", { lineHeight: "1.6", letterSpacing: "0" }], // Body L
        xl: ["1.8rem", { lineHeight: "1.3", letterSpacing: "0" }], // H4
        "2xl": ["2.4rem", { lineHeight: "1.2", letterSpacing: "0" }], // H3
        "3xl": ["3.2rem", { lineHeight: "1.1", letterSpacing: "0" }], // H2
        "4xl": ["4rem", { lineHeight: "1.05", letterSpacing: "0.18em" }], // H1
        "metrics": ["1.1rem", { lineHeight: "1.5", letterSpacing: "0" }], // Mono metrics
      },
      fontFamily: {
        heading: ['"Bebas Neue Pro"', '"Neue Haas Display"', "Arial", "sans-serif"],
        secondary: ['"Inter Tight"', '"Sora"', "system-ui", "sans-serif"],
        body: ['"Inter"', '"Manrope"', "system-ui", "sans-serif"],
        mono: ['"Roboto Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontWeight: {
        normal: "400",
        semibold: "600",
        bold: "700",
      },
      borderRadius: {
        lg: "20px",
        md: "16px",
        sm: "12px",
        DEFAULT: "14px", // Button default
        "card": "24px",
        "card-lg": "28px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(11, 11, 12, 0.05)",
        DEFAULT: "0 1px 3px rgba(11, 11, 12, 0.1)",
        md: "0 4px 12px rgba(11, 11, 12, 0.15)",
        dark: "0 1px 3px rgba(255, 255, 255, 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-up": "accordion-up 0.2s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        fadeIn: "fadeIn 0.3s ease-out",
        slideUp: "slideUp 0.3s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};

export default config;
