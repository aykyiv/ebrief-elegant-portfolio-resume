import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        white: "var(--white)",
        background: "var(--background)",
        fonts: "var(--fonts)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      borderRadius: {
        sm: "var(--border-sm)",
        md: "var(--border-md)",
      },
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        carousel: "carousel 10s linear infinite",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
