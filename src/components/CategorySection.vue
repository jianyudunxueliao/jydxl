<script setup>
import { ref } from 'vue'
import {
  Monitor,
  Pointer,
  Lightning,
  Box,
  Connection,
  Tools,
  MagicStick,
  Cpu
} from '@element-plus/icons-vue'

const categories = [
  { name: 'HTML/CSS', icon: Monitor, count: 28, color: '#667eea' },
  { name: 'JavaScript', icon: Lightning, count: 76, color: '#f59e0b' },
  { name: 'Vue 3', icon: MagicStick, count: 42, color: '#42b883' },
  { name: 'React', icon: Pointer, count: 38, color: '#61dafb' },
  { name: 'Node.js', icon: Box, count: 24, color: '#6cc24a' },
  { name: '工程化', icon: Tools, count: 18, color: '#ef4444' },
  { name: 'TypeScript', icon: Connection, count: 32, color: '#3178c6' },
  { name: 'WebAssembly', icon: Cpu, count: 8, color: '#9333ea' }
]

const activeIndex = ref(-1)
const onHover = (i) => (activeIndex.value = i)
const onLeave = () => (activeIndex.value = -1)
</script>

<template>
  <section class="category-section page-section">
    <div class="container-wide">
      <div class="section-header">
        <div>
          <h2 class="section-title">学习分类</h2>
          <p class="section-subtitle">覆盖前端开发全栈技术栈，选择你感兴趣的方向开始学习</p>
        </div>
        <el-link type="primary" :underline="false" class="view-all">
          查看全部 →
        </el-link>
      </div>

      <div class="cat-grid">
        <div
          v-for="(c, i) in categories"
          :key="c.name"
          class="cat-card"
          :class="{ active: activeIndex === i }"
          @mouseenter="onHover(i)"
          @mouseleave="onLeave"
        >
          <div class="cat-icon" :style="{ background: c.color + '15', color: c.color }">
            <el-icon :size="28"><component :is="c.icon" /></el-icon>
          </div>
          <div class="cat-name">{{ c.name }}</div>
          <div class="cat-count">{{ c.count }} 门课程</div>
          <div class="cat-arrow">
            <el-icon><ArrowRight /></el-icon>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.category-section {
  background: #fff;
}

.cat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.cat-card {
  position: relative;
  padding: 28px 24px;
  border-radius: var(--radius-lg);
  background: #fff;
  border: 1px solid #f0f2f5;
  transition: var(--transition-base);
  cursor: pointer;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent 0%, #f5f7fa 100%);
    opacity: 0;
    transition: opacity 0.25s;
  }

  &:hover,
  &.active {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
    border-color: transparent;

    &::before {
      opacity: 1;
    }

    .cat-arrow {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

.cat-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
}

.cat-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
  position: relative;
  z-index: 1;
}

.cat-count {
  font-size: 13px;
  color: var(--text-secondary);
  position: relative;
  z-index: 1;
}

.cat-arrow {
  position: absolute;
  right: 16px;
  bottom: 16px;
  opacity: 0;
  transform: translateX(-6px);
  transition: var(--transition-base);
  color: var(--el-color-primary);
  z-index: 1;
}

@media (max-width: 560px) {
  .cat-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .cat-card {
    padding: 20px 16px;
  }
}
</style>
