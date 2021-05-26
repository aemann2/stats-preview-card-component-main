module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      background: 'hsl(233, 47%, 7%)',
      cardBackground: 'hsl(244, 38%, 16%)',
      accent: 'hsl(277, 64%, 61%)',
      textWhite: 'hsl(0, 0%, 100%)',
      transWhite1: 'hsla(0, 0%, 100%, 0.75)',
      transWhite2: 'hsla(0, 0%, 100%, 0.6)',
    },
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lexendDeca: ['"Lexend Deca"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
