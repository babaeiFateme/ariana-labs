/** @type {import('tailwindcss').Config} */
import COLOR_PALETTES from './src/config/colors/color-palette' 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { ...COLOR_PALETTES },
    },
  },
  plugins: [],
}