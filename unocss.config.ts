import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.2,
    }),
    presetUno({
      dark: 'class',
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
})
