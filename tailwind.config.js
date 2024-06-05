/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {},
    fontFamily: {
      main: ['IBM Plex Sans', 'sans-serif'],
    },
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1440px',
    },
  },
  plugins: [],
};
