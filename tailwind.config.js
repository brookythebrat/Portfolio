// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #38bdf8, #3b82f6)", // Example gradient colors
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // This tells Tailwind to look inside these files for classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // rest of the config
};
