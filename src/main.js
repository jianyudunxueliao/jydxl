import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// Element Plus 样式（按需引入时仍需导入基础样式）
import 'element-plus/dist/index.css'
// 自定义全局样式
import '@/assets/styles/global.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
