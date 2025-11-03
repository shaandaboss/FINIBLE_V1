/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'finible': {
          'teal': '#06cad6',
          'orange': '#ff7e26',
          'white': '#ffffff',
          'black': '#000000',
        }
      }
    },
  },
  plugins: [],
}