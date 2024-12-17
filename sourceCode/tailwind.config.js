/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        prompt: ['Prompt', 'sans-serif'],
      },
      animation: {
        rise: 'rise 10s linear infinite',
        zoomPingPong: 'zoomPingPong 25s ease-in-out infinite',
        randomZoom: 'randomZoom 25s ease-in-out infinite',
      },
      keyframes: {
        rise: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100vh)', opacity: '0' },
        },
        zoomPingPong: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        randomZoom: {
          '0%, 100%': {
            transform: 'scale(1) translate(0, 0)', // Normal scale and position
          },
          '25%': {
            transform: 'scale(1.1) translate(-10px, 5px)', // Slightly zoom and move left/down
          },
          '50%': {
            transform: 'scale(1.2) translate(15px, -10px)', // More zoom and move right/up
          },
          '75%': {
            transform: 'scale(1.1) translate(-5px, 10px)', // Zoom out slightly and move left/down
          },
        },
      }
    },
  },
  plugins: [],
};