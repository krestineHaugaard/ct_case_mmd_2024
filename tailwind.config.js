/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "brand-beige": {
        zero: "#fefefb",
        10: "#f7f6e8",
      },
      "brand-turquoise": {
        zero: "#e6fafe",
        20: "#b4f1fd",
        50: "#69e3fc",
      },
      "brand-yellow": {
        40: "#ffea80",
        100: "#e5c000",
      },
      "brand-orange": "#ff7733",
      grey: {
        zero: "#ffffff",
        20: "#cccccc",
        40: "#999999",
        60: "#666666",
        80: "#333333",
        100: "#000000",
      },
    },
    extend: {
      fontFamily: {
        popp: ["var(--font-poppins)"],
        libre: ["var(--font-libre-baskerville)"],
      },
    },
  },
  plugins: [],
};
