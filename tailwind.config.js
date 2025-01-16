/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        custom:"#f6bb47",
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

