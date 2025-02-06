import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "expense-tracker": {
          purple: "#542344",
          "medium-purple": "#C270A4",
          "light-purple": "#F9F1F6",
          neon: "#F0F757",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
