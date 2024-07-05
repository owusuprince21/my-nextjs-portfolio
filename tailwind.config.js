/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors:{
        // "radial-brand":"radial-gradient(circle, #7F00FF, #4B0082)",
        // "linear-brand":"linear-gradient(to right, #7F00FF, #4B0082)"
      },
      backgroundImage:{
        "radial-brand": "radial-gradient(circle, #7F00FF, #4B0082)",
        "linear-brand": "linear-gradient(to right, #7F00FF, #4B0082)"

      }
    },
  },
  plugins: [],
}
