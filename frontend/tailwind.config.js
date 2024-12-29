/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT:"#0079FF",
          10:"#0B0FD0"
        },
        secondary:"#000262"
      }
    },
  },
  plugins: [],
}

