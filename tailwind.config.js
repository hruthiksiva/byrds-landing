/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    extend: {
      fontFamily: {
        'rethink': ['Rethink Sans', 'sans-serif'],
        'rethink-sans': ['Rethink Sans', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          bg: '#eef6f0',
          text: '#202424',
          border: '#cdd7cf',
        },
        eco: {
          green: '#39da1f',
          lightGreen: '#b3ffac',
          greenBg: '#effff6',
          blue: '#23a5ed',
          lightBlue: '#c2edff',
          blueBg: '#e1fdff',
          darkGreen: '#356e48',
          darkBlue: '#386e6e',
        },
        accent: {
          yellow: '#fff84f',
          red: '#ff4f4f',
          orange: '#ffcca6',
          mint: '#91ffd1',
          cyan: '#91ffff',
          lime: '#84ff65',
          brightGreen: '#56ff7b',
          lightMint: '#91ff75',
          mostPlanted: '#a3ffba',
          text: '#929C9B'
        },
        custom: {
          'sustainability': '#A8E0E2',
        }
      },
      boxShadow: {
        'custom': '0px 0px 50px -25px rgba(0,0,0,0.1)',
        'card': '0px 4px 20px -5px rgba(0,0,0,0.15)',
      },
      backgroundImage: {
        'gradient-fade': 'linear-gradient(to top, #eef6f0, transparent)',
      },
      keyframes: {
        chartBarGrow: {
          from: {
            height: '0',
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        }
      },
      animation: {
        chartBarGrow: 'chartBarGrow 0.6s ease-out'
      },
      mixBlendMode: {
        'plus-darker': 'plus-darker',
      },
      fontSize: {
        '6xl-custom': '60px',
      }
    },
  },
  plugins: [],
}
