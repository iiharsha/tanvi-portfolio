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
        beige: "#0f0f0f",
        brown: "#E90074",
        lightblack: "##ffffff",
        hovercolor: "#ffcce6",
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
