/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cprimary':'#0D6EFD',
        'conea':'#127FFF',
        'coneb':'#0067FF',
        'ctwo':'#8B96A5',
        'cthree':'#505050',
        'cfour':'#1C1C1C',
      },
    },
  },
  plugins: [],
}