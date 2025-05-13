import COLOR_PALETTES from './src/core/utils/color/color-palette';

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: { ...COLOR_PALETTES },
        },
    },
    plugins: [],
};
