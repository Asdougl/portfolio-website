const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      'ecru': '#D8C99B',
      'harvest-gold': '#D8973C',
      'alloy-orange': '#BD632F',
      'pewter-blue': '#7293A0',
      'hookers-green': '#52796F',
      'charcoal': '#273E47',
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      transparent: 'transparent',
    },
    fontFamily: {
      'sans': ['Inter'],
      'serif': ['Playfair'],
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
