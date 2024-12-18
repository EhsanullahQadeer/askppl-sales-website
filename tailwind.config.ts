import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aeonik: ["var(--font-aeonik)", ...fontFamily.sans],
        neueMontreal: ["var(--font-neue-montreal)", ...fontFamily.sans],
      },
      fontSize: {
        xs: ["12px", { letterSpacing: "-0.12px", lineHeight: "132%" }],
        sm: ["14px", { letterSpacing: "-0.14px", lineHeight: "132%" }],
        base: ["16px", { letterSpacing: "-0.16px", lineHeight: "132%" }],
        lg: ["18px", { letterSpacing: "-0.18px", lineHeight: "132%" }],
        xl: ["20px", { letterSpacing: "-0.2px", lineHeight: "132%" }],
        "2xl": ["24px", { letterSpacing: "-0.24px", lineHeight: "112%" }],
        "3xl": ["32px", { letterSpacing: "-0.56px", lineHeight: "112%" }],
        "4xl": ["36px", { letterSpacing: "-0.72px", lineHeight: "112%" }],
        "5xl": ["48px", { letterSpacing: "-0.96px", lineHeight: "120%" }],
        "6xl": ["64px", { letterSpacing: "-1.28px", lineHeight: "120%" }],
        "7xl": ["72px", { letterSpacing: "-1.44px", lineHeight: "120%" }],
      },
      colors: {
        black: "#000000",
        dark: "#0F0F0F",
        grey: "#303030",
        forest: "#013B30",
        lime: "#90B941",
        lightLime: "#B9E567",
        secondaryLime: "#90B941",
      },
    },
  },
  plugins: [],
} satisfies Config;
