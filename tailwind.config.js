// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  variants: {
    extend: {
      // Remove min-* and max-* variants
      width: ["responsive", "hover", "focus"],
      height: ["responsive", "hover", "focus"],
    },
  },
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")],
});
