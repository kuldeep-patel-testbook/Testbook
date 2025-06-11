// tailwind.config.js
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a73e8",
      },
      spacing: {
        13 : '3.25rem'
      },
      fonctSize: {
        '10xl' : ['9rem', {lineHeight: '1'}],
      }
    },
  },
  plugins: [],
}