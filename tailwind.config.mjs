import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      phone: '320px', // Custom screen size for phones
      tablet: '768px', // Custom screen size for tablets
      'tablet-vertical': '1024px', // Custom screen size for vertical tablets
      laptop: '1280px', // Custom screen size for laptops
    },
    extend: {
      spacing: {
        'header-height': '70px', // Custom spacing for header height
      },
    },
  },
  plugins: [],
};
