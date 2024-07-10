/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-mobile": "url('/images/bg-intro-mobile.png')",
        "bg-desktop": "url('/images/bg-intro-desktop.png')",
      },
      boxShadow: {
        "3xl": "0px 8px 0px 0px rgba(0, 0, 0, 0.15)",
        "2xl": "0px 3px 0px 0px rgba(1, 5, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
