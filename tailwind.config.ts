import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "2.5xl": "1.75rem",
        "5.5xl": "3.25rem",
        "7.5xl": "5rem",
      },
      height: {
        825: "825px",
        638: "638px",
      },
      lineHeight: {
        "47": "2.9375rem",
        "90": "5.625rem",
      },
      opacity: {
        "18": "0.18",
      },
    },
    colors: {
      "bright-red": "#FF0000",
      white: "#ffffff",
      "black-gray": "#111010",
    },
  },
  plugins: [],
};
export default config;
