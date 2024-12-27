import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

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
        "8.5xl": ["120px", { letterSpacing: "-2.4px", lineHeight: "120%" }],
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

        lightPewter: "#DBDBDB",
        smokeGray: "#8E8D91",
        midnightAsh: "#1C1C1C",
        darkCharcoal: "#323232",
        doveGray: "#878787",
        darkGray: "#1E1E1E",
        gunMetal: "#212121",
        ironGray: "#1B1B1B",
        eclipseGray: "#262626",
        amber: "#3F3F3F",
        hazyPearl: "rgba(255, 255, 255, 0.42)",
        mistWhite: "rgba(255, 255, 255, 0.10)",
        froastedWhite: "rgba(255, 255, 255, 0.16)",
        etherealWhite: "rgba(255, 255, 255, 0.2)",
        softWhite: "rgba(255, 255, 255, 0.5)",
        offWhite: "rgba(255, 255, 255, 0.60)",
        translucentWhite: "rgba(255, 255, 255, 0.75)",
        ghostWhite: "rgba(255, 255, 255, 0.04)",
        gentleFog: "rgba(255, 255, 255, 0.08)",
        lightGray: "rgba(217, 217, 217, 0.10)",
        semiTransparentLime: "rgba(185, 229, 103, 0.40)",
        shadowMist: "rgba(15, 15, 15, 0.24)",
        dimmedGray: "rgba(15, 15, 15, 0.50)",
      },
      backgroundImage: {
        "green-white-Color":
          "linear-gradient(137deg, rgba(255, 255, 255, 0.05) -0.05%, rgba(255, 255, 255, 0.08) 101.78%)",

        "whispering-wind-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.04) -16.48%, rgba(255, 255, 255, 0.00) 100%)",

        "vanishing-light-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.04) 100%)",

        "vanishing-gray":
          "linear-gradient(180deg, #151515 17.96%, rgba(21, 21, 21, 0.00) 100%)",

        "transparent-white-haze":
          "linear-gradient(150deg, rgba(255, 255, 255, 0.01) 0.98%, rgba(255, 255, 255, 0.02) 101.45%)",

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

        "dim-white-overlay":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.10) 100%)",

        "oblique-glow-overlay":
          "linear-gradient(275deg, rgba(255, 255, 255, 0.05) 0.01%, rgba(255, 255, 255, 0.10) 106.54%)",

        "green-fade-vertical-top":
          "linear-gradient(180deg, #013B30 17.96%, rgba(1, 59, 48, 0.90) 51.17%, rgba(1, 59, 48, 0.00) 100%)",

        "green-fade-vertical-bottom":
          "linear-gradient(to top, #013B30 -8.51%, rgba(1, 59, 48, 0.94) 44.68%, rgba(1, 59, 48, 0.00) 100%)",

        "midnight-ash-gradient":
          "linear-gradient(150deg, rgba(255, 255, 255, 0.04) 0.98%, rgba(255, 255, 255, 0.10) 101.45%)",

        "dark-dade-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.32) 54.07%, rgba(0, 0, 0, 0.64) 100%)",

        "subtle-dark-fade":
          "linear-gradient(180deg, rgba(15, 15, 15, 0.00) 0%, #0F0F0F 80.35%)",

        "linear-black-fade":
          "linear-gradient(150deg, rgba(0, 0, 0, 0.20) 0.98%, rgba(0, 0, 0, 0.40) 101.45%)",

        "deep-space-gray": "linear-gradient(0deg, #1B1B1B 0%, #1B1B1B 100%)",

        "linear-green-fade":
          "linear-gradient(279deg, #57DD4F 3.91%, #B9E567 92.3%)",

        "dynamic-green-gradient":
          "linear-gradient(90deg, #57DD4F 0%, #B9E567 100%)",

        "misty-lagoon-gradient":
          "linear-gradient(to right, rgba(10, 60, 20, 0.3), rgba(5, 50, 60, 0.3))",

        "ocean-floor-gradient":
          "linear-gradient(to right, rgba(10, 60, 20, 0.6), rgba(5, 50, 60, 0.6))",

        "spring-meadow-gradient":
          "linear-gradient(to right, rgba(20, 120, 50, 0.5),  rgba(10, 80, 100, 0.5))",

        "electric-dreamscape-gradient":
          "linear-gradient(90deg, #85D421 0%, #2FC373 17.5%, #34C2EE 36.5%, #434AE8 56.5%, #9C35EC 76.5%, #FF2983 100%)",
        "fade-dark-top": "linear-gradient(180deg, #0F0F0F 30.96%, rgba(15, 15, 15, 0.00) 100%)",
        "fade-dark-bottom": 'linear-gradient(0deg, #0F0F0F 30.96%, rgba(15, 15, 15, 0.00) 100%)'

      },
      screens: {
        "2xl": "1610px",
      },
      borderRadius: {
        "20": "20px",
      },
      boxShadow: {
        "gray-box-shadow": "0px 25px 50px 0px rgba(15, 15, 15, 0.42)",
        "faint-greenish-shadow":
          "-3.265px -3.265px 6.531px 0px rgba(185, 229, 103, 0.06)",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        slide: "slide 2s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
