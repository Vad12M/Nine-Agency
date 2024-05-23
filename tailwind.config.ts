import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    './ui/*.{js,ts,jsx,tsx}',
    "./ui/**/*.{js,jsx,ts,tsx,css}",
    "./ui/**/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#fdffff',
        red: '#EE2F36',
        black: '#1F1F1F',
        background: '#1E1E1E',
        naturalBlack: '#000000',
        redLight: '#F62424',
        redDark: '#F6242433',
        grayLight: '#92989F',
        gray: '#404040',
      },
      padding: {
        layout: '1.25rem',
      },
    },
  },
  plugins: [],
}
export default config
