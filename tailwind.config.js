/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                darkBg: "#303133",
            },
        },
    },
    plugins: [],
    darkMode: "media",
};
