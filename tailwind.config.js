/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        gradientColor1:"",
        gradientColor2:"blue-900",
        gradientColor3:"",
        primary:"#2027E8",
        secondary:"",
        textPrimary:"",
        textSecondary:"#FFFFFF",
        textThird:"#CBC0C0"
      }
    },
  },
  plugins: [],
};
