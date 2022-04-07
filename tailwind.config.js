module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "lobster": 'Lobster'
      },
      colors:{
        normalBlue:"#0f6fab",
        lightBlue:"#1d86b3"
      },
      fontSize:{
        "11px":"11px",
        "13px":"13px",
        "14px":"14px",
        "15px":"15px"
      },
      backgroundColor:{
        normalBlue:"#0f6fab",
        lightBlue:"#1d86b3"
      },
      height:{
        "content-size":"100%"
      }
    },
  },
  plugins: [],
}