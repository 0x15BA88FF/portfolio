/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '374px',
            }
        },
        colors: {
            'text': {
                50: '#ffffff',
                100: '#d6d2f9',
                200: '#ada5f3',
            },
            'background': {
                "base": '#121212',
                "overlay": '#000000',
            },
            'primary': '#0f8a65'
        }
    },
    plugins: [],
};
