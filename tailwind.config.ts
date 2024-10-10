import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config"; // Import types for addUtilities

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d1d1d",
        tik: "#FE2C55",
        tok: "#25F4EE",
        tak: "#F1AFDD",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        ".custom-outline": {
          "@apply outline outline-1 outline-offset-0": {},
        },
        // Navigation
      };

      addUtilities(newUtilities);
    },
  ],
};

export default config;
