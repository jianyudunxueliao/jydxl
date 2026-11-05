import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/assignment3',
    name: 'Assignment3',
    component: () => import('@/views/Assignment3.vue'),
    meta: { title: '在线学习平台首页' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: { title: '页面不存在' }
  }
]

// Vite 会把构建时的 base 注入为 import.meta.env.BASE_URL
// 本地开发默认 '/'，gh-pages 部署时是 '/jydxl/'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = `${to.meta.title} - Vue3 项目`
  }
})

export default router
