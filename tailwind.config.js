/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'roboto': ['Roboto', 'sans-serif'],
    },
    borderRadius: {
      'skillBox': '15px 0px 15px 0px'
    },
    extend: {
      colors: {
        'lm-background': '#D3D3D3',
        'lm-foreground': '#DFDFDF',
        'lm-text': '#101720',
        'lm-accent': '#47a1ff',
        'dm-background': '#5F5F5F',
        'dm-foreground': '#727272',
        'dm-text': '#D3D3D3',
        'dm-accent': '#57a1c6'
      },
    },
  },
  plugins: [],
}

