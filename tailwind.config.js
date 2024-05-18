/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
content: [],
content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
      }
    },
  },
  plugins: [],
}

