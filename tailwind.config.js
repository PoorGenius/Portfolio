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
        "card": "rgba(77, 77, 77, 0.10)",

      },
    },
    fontFamily: {
      "roboto": ["Roboto", "sans-serif"],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}