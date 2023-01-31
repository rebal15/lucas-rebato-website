module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'main-blue': '#21202D',
                'main-blue-dark': '#101016',
                'primary': '#ECAA0F'
            },
            top: {
                'top-1/5': '20%',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
