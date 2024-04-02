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
        color_1: 'linear-gradient(to right, #22221fbd, #1a1f23)',
          navigation1: 'linear-gradient(to bottom, rgb(82 157 200 / 43%), rgb(24 102 148 / 59%))'
      },
      backgroundColor: {
        color_2: '#f1f1f1ba',
           navigation1: '#FFFFFF4D',
        navigation2: 'rgba(73, 67, 50, 0.89)'
      },
      borderColor: {
        color_1: '#888888b8'
},
    
      colors: {
        yellow_1: 'rgb(249 234 0);'
      },
      backgroundImage: {
      
      },
      boxShadow: {
        box_shadow_1: 'inset 0 0 0  9px rgb(192 192 187)',
        box_shadow_2:
          '0px 3px 7px rgb(67 67 67 / 56%), inset 0px 0px 0 0 rgba(255, 255, 255, 0.2), inset 0px 0px 0 0 rgba(0, 0, 0, 0.3), inset -4px -2px 0 0 rgba(255, 255, 255, 0.05)'

      }
    }
  },
  plugins: []
}
