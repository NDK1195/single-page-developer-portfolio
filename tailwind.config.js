/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "black-15": "#151515",
        green: "#4EE1A0",
        "dark-grey": "#242424",
        grey: "#D9D9D9",
      },
      backgroundImage: {
        "profile-mobile": "url('../images/image-profile-mobile.webp')",
        "profile-tablet": "url('../images/image-profile-tablet.webp')",
        "profile-desktop": "url('../images/image-profile-desktop.webp')",
      },
    },
  },
  plugins: [],
};
