import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
// https://vitejs.dev/config/
export default defineConfig({
  base: '/web-loan-record/',
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),

    quasar()
  ]
})
