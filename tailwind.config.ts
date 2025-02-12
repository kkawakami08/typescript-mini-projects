import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monomaniac: ["Monomaniac One", "sans-serif"],
      },
      colors: {
        "expense-tracker": {
          purple: "#542344",
          "medium-purple": "#C270A4",
          "light-purple": "#F9F1F6",
          neon: "#F0F757",
        },
        "ctrl-start": {
          green: {
            "50": "#f5f8f7",
            "100": "#dfe8e5",
            "200": "#bed1ca",
            "300": "#96b2aa",
            "400": "#6f9287",
            "500": "#55776e",
            "600": "#435e58",
            "700": "#384d48",
            "800": "#303f3c",
            "900": "#2a3734",
            "950": "#151e1d",
          },

          sage: "#ACAD94",
          white: "#E2E2E2",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
