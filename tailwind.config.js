module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#A78BFA",
          "secondary": "#A3E635",
          "accent": "#7C3AED",
          "neutral": "#F3F4F6",
          "base-100": "#ffffff",
          "info": "#A78BFA",
          "success": "#A3E635",
          "warning": "#fef3c7",
          "error": "#ef4444",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

