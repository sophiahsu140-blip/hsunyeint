/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { colors: { ink:'#29283d', muted:'#6f6a7d', lavender:'#9176b1', lilac:'#e9e1f0', ivory:'#fcfaf6', plum:'#55436d' }, fontFamily: { sans:['Inter','sans-serif'], serif:['Cormorant Garamond','Georgia','serif'] } } },
  plugins: []
};
