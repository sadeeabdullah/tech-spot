/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        'main-color': '#31FFA1',
        "secondary-color":"#ff3131",
      }
    },
  },
  plugins: [require("daisyui")],
}

