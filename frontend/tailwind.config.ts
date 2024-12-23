import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const themePlugin = plugin(({ addUtilities }) => {
  addUtilities({
    ".text-h4-lg": {
      // fontFamily: "Noto Sans",
      "font-size": "23px",
      "font-weight": "600",
      "line-height": "28px",
      "letter-spacing": "-0.20000000298023224px",
      "text-align": "left",
      "text-underline-position": "from-font",
      "text-decoration-skip-ink": "none",
    },
    ".color-neutral": {
      color: "#2C2D2E",
    },
    ".content-visible": {
      "content-visibility": "visible",
    },
    ".btn": {
      height: "Hug (40px)px",
      padding:
        "var(--Spacings-gapsmag-spacings-8) var(--Spacings-gapsmag-spacings-16) var(--Spacings-gapsmag-spacings-8) var(--Spacings-gapsmag-spacings-16)",
      gap: "var(--Spacings-gapsmag-spacings-8)",
      borderRadius: "var(--Borderradiusmag-radii-md)",
      border: "1px 0px 0px 0px",
      opacity: "0px",
    },
  });
});

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {}, //TODO add font
      colors: {
        neutral: {
          700: "#555A61",
        },
      },
      backgroundColor: {
        neutral: {
          100: "var(--Colors-testing-neutral---mag-color-neutral-100, #F5F7FA)",
        },
      },
    },
  },
  plugins: [themePlugin],
  corePlugins: { preflight: false }, // This is a config for ONE/magenta
};
export default config;
