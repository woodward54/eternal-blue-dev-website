/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],

  theme: {
    screens: {
      large: { max: '1400px' },
      middle: { max: '1040px' },
      small: { max: '768px' },
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif'],
      mulish: ['Mulish', 'sans-serif'],
    },
    extend: {
      colors: {
        'main-color': 'var(--main-color)',
        'pink-color': 'var(--pink-color)',
        'white-color': 'var(--white-color)',
      },
    },
  },
  plugins: [],
}
