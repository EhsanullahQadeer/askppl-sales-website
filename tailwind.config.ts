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
        "3xl": ["28px", { letterSpacing: "-0.56px", lineHeight: "112%" }],
        "4xl": ["32px", { letterSpacing: "-0.56px", lineHeight: "112%" }],
        "5xl": ["36px", { letterSpacing: "-0.72px", lineHeight: "112%" }],
        "6xl": ["48px", { letterSpacing: "-0.96px", lineHeight: "120%" }],
        "7xl": ["64px", { letterSpacing: "-1.28px", lineHeight: "120%" }],
        "8xl": ["72px", { letterSpacing: "-1.44px", lineHeight: "120%" }],
      },
      colors: {
        white: "#fff",
        black: "#000000",
        dark: "#0F0F0F",
        grey: "#303030",
        forest: "#013B30",
        lime: "#90B941",
        lightLime: "#B9E567",
        secondaryLime: "#90B941",

        etherealWhite: "#FFFFFF33",
        softWhite: "#FFFFFF80",
        ghostWhite: "#FFFFFF0A",
        lowWhite: "rgba(255, 255, 255, 0.04)",
        white50: "rgba(255, 255, 255, 0.50)",
        green: "rgba(217, 217, 217, 0.10)",
        smokeGray: "#8E8D91",
        midnightAsh: "#1C1C1C",
        darkCharcoal: "#323232",
        hazyPearl: "rgba(255, 255, 255, 0.42)",
        mistWhite: "rgba(255, 255, 255, 0.10)",
        froastedWhite: "rgba(255, 255, 255, 0.16)",
        gentleFog: "rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        "clouded-white-gradient":
          "linear-gradient(176deg, rgba(255, 255, 255, 0.10) 3.25%, rgba(255, 255, 255, 0.10) 97.22%)",

        "whisper-white-gradient":
          "linear-gradient(113deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.02) 100%)",

        "ethereal-glow-gradient":
          "linear-gradient(176deg, rgba(255, 255, 255, 0.03) 3.25%, rgba(255, 255, 255, 0.08) 97.22%)",

        "subtle-frost-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.15) 100%)",

        "glass-white-gradient":
          "linear-gradient(145deg, rgba(255, 255, 255, 0.10) 13.38%, rgba(255, 255, 255, 0.16) 93.32%)",

        "charcoal-mist-gradient":
          "linear-gradient(180deg, rgba(15, 15, 15, 0.10) 0%, rgba(15, 15, 15, 0.20) 100%)",

        "glass-frosted-stripe":
          "linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.08) 50.39%, rgba(255, 255, 255, 0.04) 100%)",

        "green-fade-vertical-top":
          "linear-gradient(180deg, #013B30 17.96%, rgba(1, 59, 48, 0.90) 51.17%, rgba(1, 59, 48, 0.00) 100%)",

        "green-fade-vertical-bottom":
          "linear-gradient(to top, #013B30 -8.51%, rgba(1, 59, 48, 0.94) 44.68%, rgba(1, 59, 48, 0.00) 100%)",
      },
      screens: {
        "2xl": "1610px",
      },
      borderRadius: {
        "20": "20px",
      },
    },
  },
  plugins: [],
} satisfies Config;
