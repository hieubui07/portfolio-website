/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({addUtilities}) {
      const extendUnderline = {
          '.underline-offset-8': {
              'textDecoration': 'underline',
              'text-decoration-color': '#16F529',
              'textDecorationThickness': '2px',
          },
      }
      addUtilities(extendUnderline)
  }
  ]
}
