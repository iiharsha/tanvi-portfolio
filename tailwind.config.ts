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
        beige: "#FFF2D7",
        brown: "#543310",
        hovercolor: "#AF8F6F",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        zcool: ["ZCOOL XiaoWei", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
