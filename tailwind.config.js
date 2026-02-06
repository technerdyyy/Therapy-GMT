/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gopher: ["var(--font-gopher)"],
      },
      colors: {
        "primary-bg": "#EBF5EE",
        "secondary-bg": "#BFA89E",
        "accent-1": "#8B786D",
        "accent-2": "#78A1BB",
        "primary-text": "#283044",
        "secondary-text": "#EBF5EE",
      },
    },
  },
  plugins: [],
};
