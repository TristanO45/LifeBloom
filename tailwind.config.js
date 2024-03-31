/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        moulFont: ["Moul"],
        serifFont: ["Noto Serif Kannada"],
        poppins: ["Poppins"],
        tinos: ["Tinos"],
        licorice: ["Licorice"]
      },
    },
    plugins: [],
  },
};

// infinite alternate both <-- try for the typing text animation
