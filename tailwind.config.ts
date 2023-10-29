import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "Desaturated-Dark-Cyan": "var(--Desaturated-Dark-Cyan)",
        "Light-GrayishCyanBackground": "var(--Light-GrayishCyanBackground)",
        "LightGrayishCyanFilterTablets": "var(--LightGrayishCyanFilterTablets)",
        "DarkGrayishCyan": "var(--DarkGrayishCyan)",
        "VeryDarkGrayishCyan": "var(--VeryDarkGrayishCyan)",
        "Desaturated-Dark-Cyanbg": "var(--Desaturated-Dark-Cyanbg)",
      },
    },
  },
  plugins: [],
}
export default config
