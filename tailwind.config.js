/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        mainColor: "#000A6B",
        grayColor: "#e9e9f0",
        grayText: "#7D7D7D",
        blueDark: "#00366B",
        violetColor: "#8666A3",
      },
      keyframes: {
        colorAnimationHover: {
          "0%": {
            width: "80px",
            height: "80px",
            opacity: 0.21,
          },
          "100%": {
            width: "200%",
            height: "200%",
            opacity: 1,
          },
        },
        colorAnimation: {
          "0%": {
            width: "200%",
            height: "200%",
            opacity: 1,
          },
          "100%": {
            width: "80px",
            height: "80px",
            opacity: 0.21,
          },
        },
      },
      animation: {
        colorAnimationHover: "colorAnimationHover .5s ease-in-out forwards",
        colorAnimation: "colorAnimation .5s ease-in-out forwards",
      },
      fontFamily: {
        SSTArabic: ["SST Arabic", "sans-serif"],
        Dosis: ["Dosis", "sans-serif"],
      },
      backgroundImage: {
        land: "url('/landbg.png')",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
