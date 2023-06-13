/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  height: {
    "128": '32rem',
  },
  width: {
    "128": "32rem",
  },
  theme: {
    colors: {
      "logo-blue": '#6392CA',
      "white": '#ffffff',
      "green": 'green',
    }
  },
  plugins: [],
}
