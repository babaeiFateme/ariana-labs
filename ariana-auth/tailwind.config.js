/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0F172A",
                'secondary-foreground': "##0F172A",
                secondary: "#F1F5F9",
                destructive: "#DC2626",
            },
        },
    },
    plugins: [],
};
