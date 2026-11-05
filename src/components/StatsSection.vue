<script setup>
import { User, Reading, UserFilled, Star } from '@element-plus/icons-vue'

const stats = [
  {
    label: '注册学员',
    value: '128,560',
    suffix: '人',
    desc: '同比增长 32%',
    icon: UserFilled,
    color: '#409EFF',
    bg: 'linear-gradient(135deg, #409EFF, #66b1ff)'
  },
  {
    label: '精品课程',
    value: '526',
    suffix: '门',
    desc: '覆盖前端全栈',
    icon: Reading,
    color: '#67C23A',
    bg: 'linear-gradient(135deg, #67C23A, #85ce61)'
  },
  {
    label: '入驻讲师',
    value: '218',
    suffix: '位',
    desc: '大厂资深工程师',
    icon: User,
    color: '#E6A23C',
    bg: 'linear-gradient(135deg, #E6A23C, #ebb563)'
  },
  {
    label: '学员好评率',
    value: '98.6',
    suffix: '%',
    desc: '累计 48,000+ 评价',
    icon: Star,
    color: '#F56C6C',
    bg: 'linear-gradient(135deg, #F56C6C, #f78989)'
  }
]
</script>

<template>
  <section class="stats-section page-section">
    <div class="container-wide">
      <div class="stats-grid">
        <div v-for="s in stats" :key="s.label" class="stat-card">
          <div class="stat-icon-bg" :style="{ background: s.bg }">
            <el-icon :size="24" color="#fff"><component :is="s.icon" /></el-icon>
          </div>
          <div class="stat-body">
            <div class="stat-label">{{ s.label }}</div>
            <div class="stat-numbers">
              <span class="stat-value">{{ s.value }}</span>
              <span class="stat-suffix">{{ s.suffix }}</span>
            </div>
            <div class="stat-desc">{{ s.desc }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.stats-section {
  padding-top: 48px;
  padding-bottom: 48px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.stat-card {
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 24px 28px;
  display: flex;
  align-items: center;
  gap: 20px;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-base);
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }
}

.stat-icon-bg {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-body {
  flex: 1;
  min-width: 0;
}

.stat-label {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 6px;
}

.stat-numbers {
  display: flex;
  align-items: baseline;
  gap: 2px;
  margin-bottom: 4px;

  .stat-value {
    font-size: 28px;
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1;
  }
  .stat-suffix {
    font-size: 14px;
    font-weight: 500;
    color: var(--text-secondary);
    margin-left: 2px;
  }
}

.stat-desc {
  font-size: 12px;
  color: var(--text-placeholder);
}

@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
