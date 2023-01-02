/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poiret One'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
