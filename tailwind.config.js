module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./public/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "disabled", "checked"],
    opacity: ["responsive", "hover", "focus", "disabled"],
    cursor: ["responsive", "disabled"],
  },
  plugins: [],
}
