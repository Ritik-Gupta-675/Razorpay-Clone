/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {mullish: ["Mullish", "sans-serif"]},
      colors: {
        deepBlue:"#02042a",
        lightBlue:"#2b84ea",
        lightBlue300:"#4b94ed",
        lightBlue500:"#0b72e7",
        deepBlueHead:"#162f56"
    },},
  },
  plugins: [],
};
