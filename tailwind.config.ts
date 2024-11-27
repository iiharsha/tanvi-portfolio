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
        beige: "#FFF2D8",
        brown: "#543310",
        hovercolor: "#AF8F6F",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        zcool: ["ZCOOL XiaoWei", "serif"],
      },
      animation: {
        "bg-shine": "bg-shine 2.1s linear infinite",
      },
      keyframes: {
        "bg-shine": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
