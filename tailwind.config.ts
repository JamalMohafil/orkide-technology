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
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    fontFamily: {
      arabic: "var(--font-noto-kufi-arabic)",
      din_next_arabic: "din-next-arabic",
    },
    backgroundImage: {
      hero: "url(/assets/img/hero/bg.jpg)",
      membership: "url(/assets/img/membership/bg.jpg)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#333",
          100: "#484848",
          200: "#151515",
          300: "#111",
        },
        accent: "#00ADEA",
        accentHover: "#2563eb",
      },
    },
  },
  plugins: [],
};
export default config;
