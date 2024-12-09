import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#242424",
        darkGray: "#626262",
        orange: "#F2B53C",
      },
    },
    fontFamily: {
      manrope: "var(--font-manrope)",
      dmsans: "var(--font-dmsans)",
    },
  },
  plugins: [],
};
export default config;
