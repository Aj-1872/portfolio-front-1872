/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  options: {
    safelist: [
      'text-orange-600', 
      'text-blue-600',
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [],
  
}

