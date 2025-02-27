/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#7E7373",
      },
      objectPosition: {
        "center-top": "center top",
      },
      fontFamily: {
        libre_baskerville: "var(--font-libre_baskerville)",
        libre_caslon_text: "var(--font-libre_caslon_text)",
      },
    },
  },
  plugins: [],
};
