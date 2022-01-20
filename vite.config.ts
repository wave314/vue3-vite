import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/wave/',
  plugins: [vue()],
  server: {
    // 开发服务器配置
    port: 8888, // 端口默认3000
  },
})
