/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#fef2f2",
          500: "#ef4444",
          600: "#dc2626",
        },
      },
      borderRadius: {
        figma: "0.375rem",
      },
      maxWidth: {
        "figma-container": "77.75rem",
      },
    },
  },
  plugins: [],
};
