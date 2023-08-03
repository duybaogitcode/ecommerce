/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        148: '48rem',
      },
      screens: {
        tablet: '640px',

        laptop: '1024px',

        desktop: '1280px',
      },
    },
  },
  plugins: [],
};
