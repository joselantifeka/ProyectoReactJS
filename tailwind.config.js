module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '38rem',
      },
      colors: {
        'card-shadow': '0px 2px 7px #dfdfdf',
        'card-background': '#fafafa',
      },
      margin: {
        'card': '50px auto',
      },
      fontSize:{
        '13px': ['13px'],
        '12px': ['12px']
      },
      padding:{
        // 'card-pagind-x': ['3px'],
        // 'card-pagind-y': ['10px']
      }
    },
  },
  plugins: [],
}