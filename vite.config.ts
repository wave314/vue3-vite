import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { resolve } = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  base: '/wave/',
  build: {
    outDir: 'dist/wave'
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    // 开发服务器配置
    port: 8888 // 端口默认3000
  }
})
