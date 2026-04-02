/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fffcf1',
          100: '#fff8e1',
          200: '#ffeec4',
          300: '#ffe09b',
          400: '#ffcb64',
          500: '#ffb336',
          600: '#f59616',
          700: '#cc740e',
          800: '#a15814',
          900: '#824915',
          DEFAULT: '#ffb336', // custom saffron
        },
        lightgold: {
          DEFAULT: '#F9EBAE',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
