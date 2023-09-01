/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        secondary: '#2F2105',
        primary: '#FF902B',
        hero_color: '#F6EBDA',
      },
      fontFamily: {
        poppins: ['poppins'],
      }
    },
  },
  plugins: [],
}
