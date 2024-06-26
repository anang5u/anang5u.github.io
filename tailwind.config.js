/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    containter: {
      center: 'true',
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#134e4a',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

