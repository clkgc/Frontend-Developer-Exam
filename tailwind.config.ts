import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '40': '40px',
        '45': '45px',
        'fitContent':  'fit-content'
      },
      height: {
        '45': '45px',
        '10': '10px', 
      },
      colors: {
        customGray: '#F2F6FA',
      },
      fontFamily: {
        gotham: ['Gotham Book', 'sans-serif'], 
      },
      boxShadow: {
        custom: '0px 3px 6px #00000029',
      },
    },
  },
  plugins: [],
}
export default config
