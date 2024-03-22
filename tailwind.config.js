/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit", // Just-In-Time mode meaning that Tailwind will only generate the CSS for the classes that you actually use in your project
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#081B29",
        "secondary": "#399AC4",
        "heading2": "#0EADEE",

      },
    },
    fontFamily: {
      "roboto": ["Roboto", "sans-serif"],
    }
  },
  plugins: [],
}