import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        muted: "#667085",
        line: "#e4e7ec",
        cyan: {
          50: "#ecfeff",
          100: "#cffafe",
          500: "#06b6d4",
          700: "#0e7490"
        },
        navy: {
          900: "#111827",
          800: "#1f2937"
        },
        mint: "#16a34a"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(16, 24, 40, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
