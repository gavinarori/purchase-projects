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
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'wallapaper-3':"top-3-best-ever-tech-ads.jpg"
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(20rem,1fr))",
      },
      colors: {
        'dark-accent-1': '#111111',
        'dark-accent-2': '#333333',
        'dark-accent-3': '#444444',
        'dark-accent-5': '#888888',
        glass: "rgba(255,255,255,0.25)",
        brown: "rgb(30, 30, 17);"
      },
      boxShadow: {
        highlight: 'inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
      },
      screens: {
        narrow: { raw: '(max-aspect-ratio: 3 / 2)' },
        wide: { raw: '(min-aspect-ratio: 3 / 2)' },
        'taller-than-854': { raw: '(min-height: 854px)' },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}