import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.2,
    }),
    presetUno({
      dark: 'class',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetAttributify(),
  ],
  theme: {
    colors: {
      primary: '#9333EA',
      secondary: '#ff7e33',
      info: '#0C63E7',
      gray: {
        50: '#FAFAFC',
        100: '#E9E9EC',
        200: '#C6C8CD',
        300: '#ACAEB6',
        400: '#92959F',
        500: '#777C87',
        600: '#5D6370',
        700: '#434959',
        800: '#293041',
        900: '#0f172a',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  shortcuts: [
    ['btn', 'px-6 py-2 rounded inline-block bg-primary text-white cursor-pointer op90 hover:op100 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary !outline-none'],
  ],
})
