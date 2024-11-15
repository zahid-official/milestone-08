/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        errorImg: "url('/app-react/src/assets/banner.jpg')"
      }
    },
  },
  plugins: [daisyui],
}