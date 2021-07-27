module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        logoText: ["DM Serif Display", "serif"],
        bodyText: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    extend: {},
  },
  plugins: [],
};
