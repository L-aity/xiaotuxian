import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// Element Plus的自动导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    // Element Plus的自动导入
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    // 按需定制主题配置
    ElementPlus({
      useSource: true
    })
  ],
  resolve: {
    // 实际的路径转化 -- 将@路径实际转化相关路径
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //添加srerver代理配置（解决跨域）
/*  server:{
    proxy:{
      '/api':{
        target: 'https://pcapi-xiaotuxian-front-devtest.itheima.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  */
 server: {
  proxy: {
    '/api': {
      target: 'http://pcapi-xiaotuxian-front-devtest.itheima.net', // 改回 http
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
      configure: (proxy, options) => {
        proxy.on('proxyReq', (proxyReq, req, res) => {
          // 添加一些更真实浏览器请求头，绕过服务端的简单检查
          proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
          proxyReq.setHeader('Referer', 'http://localhost:5173/');
        });
      }
    }
  }
},
  css: {
    preprocessorOptions: {
      scss: {
        //  自动导入定制化样式文件进行样式覆盖且自动导入scss文件
        additionalData: `
          @use "@/styles/element/index.scss" as *;
          @use "@/styles/element/var.scss" as *;
        `
      }
    }
  }
})
