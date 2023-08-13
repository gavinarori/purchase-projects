/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wallapaper-1':"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXJ8mOub7y7HzDYt-hwoujlUSllH5b5Tjrg&usqp=CAU')",
          'dark-blue':"url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700326851.jpg')",
          'wallapaper-3':"top-3-best-ever-tech-ads.jpg"
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(20rem,1fr))",
      },
      colors: {
        'dark-accent-1': '#111111',
        'dark-accent-2': '#333333',
        'dark-accent-3': '#444444',
        'dark-accent-5': '#888888'
      }
    },
  },
  plugins: [],
}
