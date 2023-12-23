/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        theme:'#E63946',
        primary:'#A8DADC',
        shade1:'#457B9D',
        shade2:'#1D3557',
        light:'#F1FAEE'
      },
      fontFamily:{
        alata:[ 'Alata', 'sans-serif'],
        comf:['Comfortaa', 'sans-serif'],
        inter:['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
