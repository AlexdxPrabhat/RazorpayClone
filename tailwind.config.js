import { fromJSON } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
       fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
      animation: {
        marquee: "moveLeft 20s linear forwards infinite",
        moveUp: "moveup 5s linear forwards infinite",
      },
      keyframes: {
        moveLeft: {
          to: {transform: "translateX(-50%)"}
        },
        moveup: {
          to:{transform:"translateY(-100%)"}
        }
      },
       backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #f4f8ff, #fff0)',
      },
    },
  },
  plugins: [],
}

