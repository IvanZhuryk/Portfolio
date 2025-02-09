/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes:{
        slideDown:{
          '0%': { transform: 'translateY(-100%)' },
          '20%': { transform: 'translateY(-80%)' },
          '40%': { transform: 'translateY(-60%)' },
          '60%': { transform: 'translateY(-40%)' },
          '80%': { transform: 'translateY(-20%)' },
          '100%': { transform: 'translateY(0)'},
        },
        slideUp:{
          '0%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(-20%)' },
          '40%': { transform: 'translateY(-40%)' },
          '60%': { transform: 'translateY(-60%)' },
          '80%': { transform: 'translateY(-80%)' },
          '100%': { transform: 'translateY(-100%)'},
        },
        "slide-left-to-right": {
          "0%": {
            transform: "translateX(-150%)",
          },
          "100%": {
            transform: "translateX(150%)",
          },
        }
      },
      animation:{
        slideDown:'slideDown 0.5s linear',
        slideUp:'slideUp 0.5s linear',
        "slide-left-to-right": "slide-left-to-right 1.5s linear forwards",
      }
    },
    colors: {
      bgBlack: "#101010",
      white: "#ffffff",
      red: "#c70039",
      purple: "#481380",
      skyBlue: "#00909e",
      green: "#04A777",
      blue: "#035aa6",
      orange: "#dd7631",
    }
  },
  plugins: [],
}

