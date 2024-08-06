import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#080808",
        "primary-light": "#121418",
        "primary-lighter": "#24262a",
        secondary: "#886cff",
        "secondary-light": "#a08aff",
        "secondary-lighter": "#b8a8ff",
      },
    },
  },
  plugins: [],
};
export default config;
