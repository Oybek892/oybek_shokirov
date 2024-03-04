/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1240px",
        },
      },
      fontFamily: {
        display: ["Roboto Mono", "sans-serif"],
        display2: ["Yellowtail", "cursive"]
      },
      backgroundImage: {
        hero: "url('./src/assets/Image3.svg')",
        hero2: "url('./src/assets/Image4.svg  ')",
        hero3: "url('./src/assets/Photo.svg  ')",
        hero4: "url('./src/assets/image (1).svg  ')",
      },
      colors: {
        darkblue: "#274C5B",
        darkgreen: "#7EB693",
        yellow: "#EFD372",
        grey: "#D4D4D4",
        desertstorm: "#F9F8F8",
        aqua: "#EFF6F1",
        davygray: "#525C60",
        mygreen:"#20C073"
      },
    },
  },
  plugins: [],
};
