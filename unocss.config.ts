import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  presets: [
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
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
  shortcuts: [
    ['btn', 'px-6 py-1 rounded-full text-base font-semibold transition duration-300 inline-block cursor-pointer hover:scale-105 active:duration-75 active:scale-95 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['btn-primary', 'btn bg-primary text-white'],
    ['btn-secondary', 'btn bg-primary/10 bg-gradient-to-b border border-transparent text-primary dark:text-white dark:border-gray-700 dark:bg-gray-800'],
    ['icon-btn', 'text-[0.9em] text-white inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary !outline-none'],
  ],
})
