/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {

      'minm': '360px',

      'sm': '640px',

      'md': '768px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: {
        'Rubik': ['Rubik', 'Sans-serif'],
      },
      colors: {
        'Yashil': '#70C05B',
        'qorag': '#414141',
        'olov': '#f63',
        'pinkx': '#FCD5BA',
        'background': 'linear-gradient(180deg, rgba(112, 192, 91, 0.00) 0%, #70C05B 82.81%);'
      },
      borderRadius: {
        'nor': '4px',
      },
      width: {
        'besh': '375px'
      },
      backgroundImage: {
        'herobg': "url('/public/assets/herobg.png')",
        'footerbg': "url('/public/assets/footer-bg.png')",
        'molokoSir': "url('/public/assets/moloko,sir.png')",
         'non': "url('/public/assets/xleb.png')",
        'fruit': "url('/public/assets/fruits.png')",
        'muzlatilgan': "url('/public/assets/muzlatilgan.png')",
        'ichimlik': "url('/public/assets/ichimliklar.png')",
         'izdeliya': "url('/public/assets/izdeliya.png')",
         'teaandcofe': "url('/public/assets/teaandcofee.png')",
        'bakaleya': "url('/public/assets/bakaleya.png')",
        'pitanie': "url('/public/assets/pitanie.png')",
        'zatovariy': "url('/public/assets/zatovariy.png')",
        'baby': "url('/public/assets/baby.png')",
        'Kolbasakatalog': "url('/public/assets/kolbasaforkatalog.png\')",
        'xost': "url('/public/assets/xostavariy.png')",
        'pcardimg': "url('/public/assets/Karta.png')",
        'pcardimg2': "url('/public/assets/bgimgx.png')",
      },
      boxShadow: {
        'katalogshadow': '10px 10px 10px 10px rgb(112, 192, 91)'
      },
      
    },
  },
  plugins: [],
}