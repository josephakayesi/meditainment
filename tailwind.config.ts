import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-bricolage-grotesque)"],
        mono: ["var(--font-uncut-sans)"],
      },
      backgroundImage: {
        harmony: "url('/src/assets/images/bg-harmony.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;