/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#F54900',
          50: '#FFE8DD',
          100: '#FFD4C3',
          200: '#FFAC8F',
          300: '#FF845B',
          400: '#FF5C27',
          500: '#F54900',
          600: '#C13A00',
          700: '#8D2B00',
          800: '#591C00',
          900: '#250C00',
        },
      },
    },
  },
  plugins: [],
}
