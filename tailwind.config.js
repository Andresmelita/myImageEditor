/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      saturate: {
        20: '0.2',
        30: '0.3',
        60: '.6',
        80: '.8',
        90: '.9',
        100: '1',
        120: '1.2',
        140: '1.4',
        160: '1.6',
        170: '1.7',
        180: '1.8',
        200: '2',
      }
    },
  },
  plugins: [],
}

