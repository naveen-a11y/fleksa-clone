module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                main: "#ffee32",
                secondary: "#333333",
            },
            boxShadow: {
                btn: "-10px 10px 0px 0px rgba(0,0,0,1)",
            },
            fontFamily: {
                oswald: "'Oswald', sans-serif",
            },
        },
    },
    plugins: [],
};
