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
      boxShadow: { box_shadow_1: 'inset 0 0 0  9px rgb(192 192 187)' },
      backgroundImage: {
        color_1: 'linear-gradient(to right, #22221fbd, #1a1f23)'
      },
      backgroundColor: {
        color_2: '#f1f1f1ba'
      },
      borderColor: {
        color_1: '#888888b8'
      }
    }
  },
  plugins: []
}
