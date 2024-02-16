import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      smd: '993px',
      lg: '1025px',
      xl: '1440px'
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "intro": "url('/home-hero-gradient.jpg')",
          "white-grade": "linear-gradient( rgb(255, 255, 255), rgb(255, 255, 255))",
          "lightning": 'image-set(url("https://www.blockchain.com/static/img/home/homepage-exchange-shapes-bg.png") 1x, url("https://www.blockchain.com/static/img/home/homepage-exchange-shapes-bg@2x.png") 2x)',
          "dna": 'image-set(url("https://www.blockchain.com/static/img/home/homepage-explorer-shapes-bg.png") 1x, url("https://www.blockchain.com/static/img/home/homepage-explorer-shapes-bg@2x.png") 2x)',
          "banner": 'url("https://www.blockchain.com/static/img/banner/banner-bg.svg")',
          "user": 'url("https://login.blockchain.com/img/bg-pattern.svg")'

      },
    },
  },
  plugins: [],
};
export default config;
