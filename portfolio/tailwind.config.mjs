/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        maincolour: '#7790ED',
        darkcolour: '#1E1E1E',
        lightcolour: '#F5EDE2',
      },
      width : {
        1120: '70rem'
      },
      height : {
        1120 : "120rem"
      }
    },
  },
  plugins: [],
};
