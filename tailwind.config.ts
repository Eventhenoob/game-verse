import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: "class",

    fontFamily: {
      retro: ["Bree Serif"],
      heading: ["Nova Square"],
    },

    extend: {
      gridTemplateRows: {
        layout: "min-content, 1fr",
      },
      colors: {
        "main-color": "#f1c40f",
        "dark-color": "#090f13",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
