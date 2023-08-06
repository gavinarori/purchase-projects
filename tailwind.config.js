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
        'wallapaper-2':
          '/desktop-wallpaper-10-developer-front-end-developer.jpg',
          'dark-blue':"url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700326851.jpg')",
          'Youtube':"url('https://youtu.be/wAmbDCJocJM')"
      },
    },
  },
  plugins: [],
}
