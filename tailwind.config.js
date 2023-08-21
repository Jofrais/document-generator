/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./apps/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
