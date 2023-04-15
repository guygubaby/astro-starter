import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      scale: 1.2,
    }),
    presetUno(),
  ],
})