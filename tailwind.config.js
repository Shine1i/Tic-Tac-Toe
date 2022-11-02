/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
        Cyberway: ["Cyberway"],
      },
    },
  },
  plugins: [require("daisyui")],
};
