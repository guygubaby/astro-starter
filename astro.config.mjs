import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import node from '@astrojs/node'
import vercel from '@astrojs/vercel/edge'
import AutoImport from 'unplugin-auto-import/astro'

const isDev = process.env.NODE_ENV === 'development'

const base = isDev ? '/' : '/'

function getAdapter() {
  if (process.env.OUTPUT === 'vercel')
    return vercel()

  return node({
    mode: 'standalone',
  })
}

// https://astro.build/config
export default defineConfig({
  base,
  output: 'server',
  adapter: getAdapter(),
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    AutoImport({
      imports: [
        'vue/macros',
        {
          '@vueuse/core': ['useDark', 'useToggle'],
          'vue': [
            'h',
            'ref',
            'reactive',
            'computed',
            'watch',
            'watchEffect',
            'getCurrentInstance',
            'getCurrentScope',
            'provide',
            'inject',
            'nextTick',
            'onBeforeMount',
            'onBeforeUnmount',
            'onMounted',
            'onUnmounted',
            'readonly',
            'toRefs',
            'triggerRef',
          ],
        },
      ],
    }),
  ],
})
