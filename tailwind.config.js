/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        man: ["Manrope", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
