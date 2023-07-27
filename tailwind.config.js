/** @type {import('tailwindcss').Config} */
module.exports = {
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
      keyframes:{
        comeFromLeft:{
           '0%':{ transform:"translateX(-10%)",opacity:"0"},
          '100%':{transform:"translateX(0)",opacity:"1"}
        },
        comeFromTop:{
          '0%':{ transform:"translateY(-100%)"},
          '100%':{transform:"translateY(0)"}
        },
        comeFromRight:{
          '0%':{ transform:"translateX(10%)",opacity:"0"},
          '100%':{transform:"translateX(0)",opacity:"1"}
        },
        comeFromBottom:{
          '0%':{ transform:"translateY(100%)"},
          '100%':{transform:"translateY(0)"}
        },
        comeFromOpacity:{
          '0%':{ opacity:"0"},
          '100%':{opacity:"1"}
        }
      },
      animation:{
        comeFromLeft:"comeFromLeft 0.7s linear",
        comeFromTop:"comeFromTop 1s linear",
        comeFromRight:"comeFromRight 0.7s linear",
        comeFromBottom:"comeFromBottom 1s linear",
        comeFromOpacity:"comeFromOpacity 1s ease-in",
      }
    },
  },
  plugins: [],
}
