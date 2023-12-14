/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'scursive'],
        inter: ['Inter', 'sans-serif'],
        mina: ['Mina', 'sans-serif'],
        ubutun: ['Ubuntu', 'sans-serif']
      },
      boxShadow: { box_shadow_1: 'inset 0 0 0  9px rgb(192 192 187)' }
    }
  },
  plugins: []
}
