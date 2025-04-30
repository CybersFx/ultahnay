/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#FF98CE',
        brown: '#D4A373',
        cream: '#FAEDCD',
        creamwhite: '#FEFAE0',
        white2 : '#F7F5F8',
      },
      screens: {
        '2xl' : '1320px',
      },
      animation: {
        'bounce-slow' : 'bounce 2s infinite',
      },
    },
  },
  plugins: []
};