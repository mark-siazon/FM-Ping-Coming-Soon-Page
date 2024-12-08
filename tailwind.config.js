/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT: 'hsl(223, 87%, 63%)', // Blue
          hover: 'hsl(223, 87%, 72%)',
        },
        secondary:{
          paleBlue: 'hsl(223, 100%, 70%)',
          lightRed: 'hsl(354, 100%, 66%)', 
          lightGreen: 'hsl(124, 40%, 46%)',
        },
        neutral:{
          gray: 'hsl(0, 0%, 59%)',
          veryDarkBlue: 'hsl(209, 33%, 12%)',
        },
      },
      fontFamily: {
        libre: ['"Libre Franklin"', 'sans-serif'], // Set Libre Franklin as the font family
      },
      fontSize: {
        body: '20px', // Body font size
      },
      boxShadow: {
        custom: '0px 6px 12px 1px #C2D3FF',
      },
    },
  },
  plugins: [],
};
