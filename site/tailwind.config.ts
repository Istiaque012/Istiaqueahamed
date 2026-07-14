import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        text: "var(--text)",
        muted: "var(--text-muted)",
        faint: "var(--text-faint)",
        hairline: "var(--hairline)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        sm: "2px",
        md: "8px",
        lg: "10px",
      },
      maxWidth: {
        content: "1120px",
      },
      spacing: {
        "section-sm": "var(--section-space-sm)",
        section: "var(--section-space)",
        "section-lg": "var(--section-space-lg)",
      },
    },
  },
  plugins: [],
};

export default config;
