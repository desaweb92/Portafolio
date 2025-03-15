/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'big-shoulders': ['"Big Shoulders Stencil"', 'sans-serif'],
          'raleway-regular': ['"Raleway"', 'sans-serif'],
          'dancing-script': ['"Dancing Script"', 'sans-serif'],
          'indie-flower-regular': ['"Indie Flower"', 'sans-serif'],
          'patrick-hand-regular': ['"Patrick Hand"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  