import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// 部署到 GitHub Pages 时使用仓库名作为 base
// 本地开发和根域名部署保持 '/'
const repoName = process.env.VITE_BASE_REPO || 'jydxl'
const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages'

export default defineConfig({
  base: isGitHubPages ? `/${repoName}/` : '/',
  plugins: [
    vue(),
    // Element Plus 按需引入 - 自动导入 API
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router', 'pinia'],
      dts: false
    }),
    // Element Plus 按需引入 - 自动注册组件
    Components({
      resolvers: [ElementPlusResolver()],
      dts: false
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: false
  }
})
