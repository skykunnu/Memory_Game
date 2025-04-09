/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "game-bg": "#073c08",
        "start-btn": "#fff",
        "body-bg": "#86ada0",
        "card-front": "#bbb",
      },
      boxShadow: {
        "start-btn":
          "1px 3px 1px 3px rgba(0, 0, 0, 0.4), 1px 3px 2px 3px rgb(0, 0, 0, 0.4)",
      },
      colors: {
        "timer-bg": "#000",
        "score-bg": "#b41e1e",
      },
    },
  },
  plugins: [],
};
