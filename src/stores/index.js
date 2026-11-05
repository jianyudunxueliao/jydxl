import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    siteName: 'Vue3 Vite 项目',
    version: '0.1.0',
    // 导航菜单
    navMenus: [
      { path: '/', title: '首页' },
      { path: '/assignment3', title: '在线学习平台' }
    ]
  }),
  getters: {
    currentYear: () => new Date().getFullYear()
  }
})
