<script setup>
import { ref, computed } from 'vue'
import {
  Monitor,
  MagicStick,
  Pointer,
  Box,
  Cpu,
  Reading
} from '@element-plus/icons-vue'
import CourseCard from './CourseCard.vue'

const all = { icon: Reading, label: '全部' }

const courseTabs = [
  { key: 'all', label: '全部', icon: Reading },
  { key: 'vue', label: 'Vue 3', icon: MagicStick },
  { key: 'react', label: 'React', icon: Pointer },
  { key: 'node', label: 'Node.js', icon: Box },
  { key: 'ts', label: 'TypeScript', icon: Monitor },
  { key: 'wasm', label: 'WebAssembly', icon: Cpu }
]

const allCourses = [
  {
    id: 1,
    title: 'Vue 3 企业级实战：从组件库到低代码平台',
    desc: '带你深入理解 Vue 3 Composition API、Pinia、Vite，从零搭建一个企业级 UI 组件库',
    tags: ['Vue 3', 'Pinia', 'Vite'],
    coverBg: 'linear-gradient(135deg, #42b883 0%, #35495e 100%)',
    icon: MagicStick,
    teacher: '李伟',
    teacherAvatar: 'https://i.pravatar.cc/80?img=12',
    students: '12,453',
    price: 299,
    originalPrice: 599,
    level: '进阶',
    category: 'vue'
  },
  {
    id: 2,
    title: 'React 18 + TypeScript 并发渲染实战',
    desc: '深入 Fiber 架构，掌握 useTransition、Suspense、Server Components 等核心特性',
    tags: ['React', 'TypeScript', '并发'],
    coverBg: 'linear-gradient(135deg, #61dafb 0%, #1a365d 100%)',
    icon: Pointer,
    teacher: '王芳',
    teacherAvatar: 'https://i.pravatar.cc/80?img=47',
    students: '9,821',
    price: 359,
    originalPrice: 699,
    level: '进阶',
    category: 'react'
  },
  {
    id: 3,
    title: 'TypeScript 类型体操：从入门到精通',
    desc: '20+ 经典类型挑战，深入条件类型、映射类型、模板字面量等高级技巧',
    tags: ['TypeScript', '类型系统'],
    coverBg: 'linear-gradient(135deg, #3178c6 0%, #1e3a8a 100%)',
    icon: Monitor,
    teacher: '陈静',
    teacherAvatar: 'https://i.pravatar.cc/80?img=5',
    students: '8,902',
    price: 249,
    originalPrice: 499,
    level: '进阶',
    category: 'ts'
  },
  {
    id: 4,
    title: 'Node.js 微服务架构：Koa2 + Docker + 云原生',
    desc: '构建可扩展的 Node.js 微服务系统，涵盖设计模式、容器化、CI/CD 全流程',
    tags: ['Node.js', 'Docker', '微服务'],
    coverBg: 'linear-gradient(135deg, #6cc24a 0%, #1a3a0f 100%)',
    icon: Box,
    teacher: '张磊',
    teacherAvatar: 'https://i.pravatar.cc/80?img=33',
    students: '7,534',
    price: 399,
    originalPrice: 799,
    level: '高级',
    category: 'node'
  },
  {
    id: 5,
    title: 'Vite 构建工具深度剖析与插件开发',
    desc: '深入 Rollup、ESBuild、预构建原理，手把手开发属于自己的 Vite 插件',
    tags: ['Vite', '工程化', '插件'],
    coverBg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: Monitor,
    teacher: '刘洋',
    teacherAvatar: 'https://i.pravatar.cc/80?img=60',
    students: '6,210',
    price: 159,
    originalPrice: 319,
    level: '中级',
    category: 'vue'
  },
  {
    id: 6,
    title: 'WebAssembly 高性能前端实战',
    desc: '从 Rust 到 WASM，打造高性能图像处理、音视频编解码等真实业务场景',
    tags: ['WebAssembly', 'Rust', '性能'],
    coverBg: 'linear-gradient(135deg, #9333ea 0%, #4c1d95 100%)',
    icon: Cpu,
    teacher: '赵强',
    teacherAvatar: 'https://i.pravatar.cc/80?img=8',
    students: '3,451',
    price: 459,
    originalPrice: 899,
    level: '高级',
    category: 'wasm'
  }
]

const activeTab = ref('all')

const filteredCourses = computed(() => {
  if (activeTab.value === 'all') return allCourses
  return allCourses.filter((c) => c.category === activeTab.value)
})
</script>

<template>
  <section class="course-section page-section">
    <div class="container-wide">
      <div class="section-header">
        <div>
          <h2 class="section-title">热门课程</h2>
          <p class="section-subtitle">跟随行业一线工程师学习，掌握最新前端技术</p>
        </div>
        <el-link type="primary" :underline="false" class="view-all">
          查看全部 →
        </el-link>
      </div>

      <!-- Tabs -->
      <div class="tabs">
        <button
          v-for="t in courseTabs"
          :key="t.key"
          class="tab-btn"
          :class="{ active: activeTab === t.key }"
          @click="activeTab = t.key"
        >
          <el-icon><component :is="t.icon" /></el-icon>
          <span>{{ t.label }}</span>
        </button>
      </div>

      <!-- 课程网格 -->
      <transition-group name="list" tag="div" class="course-grid">
        <CourseCard v-for="c in filteredCourses" :key="c.id" :course="c" />
      </transition-group>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.course-section {
  background: #fafbfc;
}

.tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border: 1px solid #e4e7ed;
  border-radius: 20px;
  background: #fff;
  color: var(--text-regular);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition-base);

  &:hover {
    color: var(--el-color-primary);
    border-color: var(--el-color-primary-light-5);
  }

  &.active {
    background: var(--el-color-primary);
    border-color: var(--el-color-primary);
    color: #fff;
    box-shadow: 0 4px 12px rgba(64, 158, 255, 0.35);
  }
}

.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

// 列表切换动画
.list-enter-active,
.list-leave-active {
  transition: all 0.35s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(16px);
}

@media (max-width: 768px) {
  .tabs {
    gap: 6px;
  }
  .tab-btn {
    padding: 6px 14px;
    font-size: 12px;
  }
  .course-grid {
    grid-template-columns: 1fr;
  }
}
</style>
