/** @type {import('tailwindcss').Config} */
const daisyui = require('daisyui');

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      8: '8px',
    },
    extend: {
      fontFamily: {
        robotoSlab: ['Roboto Slab', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },

  plugins: [
    daisyui,
  ],
};
