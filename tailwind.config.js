/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ncvColor: {
          DEFAULT: "#088898",
          light: "#37aebd",
          dark: "#087298"
        }
      }
    },
   },
  plugins: [],
}