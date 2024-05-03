import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '2rem',
          lg: '4rem',
        },
        screens: {
          xs: '100%',
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          xxl: '1420px',
          xxxl: '1640px'
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "red": "#C8102E",
        "black": "rgba(2,0,36,1)",
        "post": "rgb(247 194 156)",
        "id": "rgb(247 194 156)",
      },
      backgroundColor: {
        "postMainBG": "rgb(46 16 14)",
        "comment": "#852121",
        "dark": "#000",
      },
      padding: {
        "50": "50px",
        "30": "30px",
        "20": "20px",
        "12": "12px",
      },
      margin: {
        "18": "18px",
        "30": "30px",
        "40": "40px",
        "45": "45px",
        "60": "60px",
        "80": "80px",
      },
      borderRadius: {
        "5": "5px",
        "10" : "10px",
        "half": "50%",
      },
      width: {
        "19" : "19%",
        "60": "60px",
        "30": "30px",
      },
      height: {
        "30": "30px",
        "48": "48px",
        "60": "60px",
        "140": "140px",
        "150": "150px",
        "fullPage": "100vh",
      },
      fontSize: {
        "40": "40px",
        "26": "26px",
        "20": "20px",
        "14": "14px",
      },
      lineHeight: {
        
      },
      minWidth: {
        
      },
      maxWidth: {
        "70": "70%"
      },
    },
  },
  plugins: [
  ],
};
export default config;
