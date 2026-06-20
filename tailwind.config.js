/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}"
];
export const theme = {
  container: {
    center: true,
    padding: {
      DEFAULT: "1rem",
      sm: "1rem",
      lg: "1.5rem",
      "2xl": "2rem",
    },
  },
  extend: {
    screens: {
      xs: "420px",
      "3xl": "1800px",
    },
  },
};
export const plugins = [];
