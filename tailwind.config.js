/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./content.js",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0F",       // near-black background
        red: "#E50914",       // the homage
        rose: "#FF5C8A",      // warmth — the love story underneath
        cream: "#F5F3EE",     // off-white text
        smoke: "#B3B3B3",     // muted UI text
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      keyframes: {
        shake: {
          "0%,100%": { transform: "translateX(0)" },
          "20%,60%": { transform: "translateX(-8px)" },
          "40%,80%": { transform: "translateX(8px)" },
        },
        floatUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        shake: "shake 0.4s ease-in-out",
        floatUp: "floatUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
