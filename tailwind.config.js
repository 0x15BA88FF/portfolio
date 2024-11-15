/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            screens: {
                "xs": "374px"
            }
        },
        colors: {
            "text": {
                50 : "#cdd6f4",
                100: "#bac2de",
                200: "#a6adc8",
                300: "#9399b2",
                400: "#7f849c",
                500: "#6c7086"
            },
            "background": {
                500: "#585b70",
                600: "#45475a",
                700: "#313244",
                800: "#1e1e2e",
                900: "#181825",
                950: "#11111b"
            },
            "primary": "#74c7ec"
        }
    },
  plugins: [ require('@tailwindcss/typography') ],
};
