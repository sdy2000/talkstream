/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // / // / // Light Mode // / // / //
        // Backround
        lbp: "#FAF3F0",
        lbs: "#D4E2D4",
        lbt: "#d2d2d2",
        // Action
        lap: "#d5e2f1",
        las: "#e7f0f8",
        // Foreground
        lfp: "#232b39",
        lfs: "#697586",
        lft: "#52565c",

        // / // / // Dark Mode // / // / //
        // Backround
        dbp: "#222831",
        dbs: "#393E46",
        dbt: "#323546",
        // Action
        dap: "#d5e2f1",
        das: "#2a2a2a",
        // Foreground
        dfp: "#edf2f7",
        dfs: "#ccd6e0",
        dft: "#a0aec0",
      },
      screens: {
        // => @media (min-width: 550px) { ... }
        xs: "550px",

        // => @media (min-width: 650px) { ... }
        sm: "650px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem",
          sm: "1rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "4rem",
        },
      },
    },
  },
  plugins: [],
};
