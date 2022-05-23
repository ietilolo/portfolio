module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        kaushan: ["Kaushan Script", "sans-serif"],
      },
      colors: {
        darkblue: "#4C868D",
      },
      backgroundImage: {
        "project-1": "url('../img/img_for_portfolio.jpg')",
        "project-2": "url('../img/project_blog.jpg')",
        "project-3": "url('../img/project_mitz.jpg')",
      },
    },
  },
  plugins: [],
};
