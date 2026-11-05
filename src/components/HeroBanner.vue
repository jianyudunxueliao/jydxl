<script setup>
import { DataBoard, Reading, TrendCharts, Headset } from '@element-plus/icons-vue'

const stats = [
  { label: '学员总数', value: '10万+', icon: Reading, color: '#409EFF' },
  { label: '精品课程', value: '500+', icon: DataBoard, color: '#67C23A' },
  { label: '资深讲师', value: '200+', icon: Headset, color: '#E6A23C' },
  { label: '学员满意度', value: '98%', icon: TrendCharts, color: '#F56C6C' }
]
</script>

<template>
  <section class="hero-banner">
    <div class="hero-bg"></div>
    <div class="hero-content container-wide">
      <div class="hero-text">
        <h1 class="hero-title">Web前端开发学习平台</h1>
        <p class="hero-subtitle">
          从 HTML/CSS 到 Vue 3 / React / Node.js，系统化的课程体系，
          带你从零到一成为优秀的前端工程师
        </p>
        <div class="hero-actions">
          <el-button type="primary" size="large" class="btn-primary">免费开始学习</el-button>
          <el-button size="large" class="btn-outline">查看课程 →</el-button>
        </div>
      </div>

      <!-- 数据概览 -->
      <div class="hero-stats">
        <div v-for="s in stats" :key="s.label" class="stat-item">
          <div class="stat-icon" :style="{ background: s.color + '20', color: s.color }">
            <el-icon :size="22"><component :is="s.icon" /></el-icon>
          </div>
          <div class="stat-info">
            <div class="stat-value">{{ s.value }}</div>
            <div class="stat-label">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero-banner {
  position: relative;
  padding: 80px 0 60px;
  overflow: hidden;

  .hero-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #1e2b5c 0%, #3a3d98 35%, #6b46c1 70%, #805ad5 100%);
    z-index: 0;

    // 装饰光斑
    &::before {
      content: '';
      position: absolute;
      top: -120px;
      right: -100px;
      width: 400px;
      height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(129, 140, 248, 0.5), transparent 70%);
    }
    &::after {
      content: '';
      position: absolute;
      bottom: -150px;
      left: -80px;
      width: 360px;
      height: 360px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent 70%);
    }
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero-text {
  max-width: 780px;
  margin-bottom: 48px;

  .hero-title {
    font-size: 44px;
    font-weight: 800;
    color: #fff;
    margin: 0 0 20px;
    line-height: 1.25;
    letter-spacing: 1px;

    // 高亮渐变
    background: linear-gradient(120deg, #fff 40%, #c4b5fd 60%, #f9a8d4 80%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-subtitle {
    font-size: 17px;
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.7;
    margin: 0 auto 32px;
    max-width: 640px;
  }
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;

  .btn-primary {
    background: #fff !important;
    color: #4f46e5 !important;
    border: none !important;
    border-radius: 24px !important;
    padding: 14px 36px !important;
    font-size: 15px !important;
    font-weight: 600 !important;
    box-shadow: 0 8px 24px rgba(79, 70, 229, 0.4);
    transition: var(--transition-base);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 32px rgba(79, 70, 229, 0.5);
    }
  }

  .btn-outline {
    border-radius: 24px !important;
    padding: 14px 32px !important;
    font-size: 15px !important;
    font-weight: 500 !important;
    background: transparent !important;
    border: 1.5px solid rgba(255, 255, 255, 0.6) !important;
    color: #fff !important;

    &:hover {
      background: rgba(255, 255, 255, 0.12) !important;
      border-color: #fff !important;
    }
  }
}

.hero-stats {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 28px 48px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.stat-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-info {
  text-align: left;

  .stat-value {
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
  }
  .stat-label {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 2px;
  }
}

@media (max-width: 768px) {
  .hero-banner {
    padding: 56px 0 40px;
  }
  .hero-text .hero-title {
    font-size: 28px;
  }
  .hero-text .hero-subtitle {
    font-size: 14px;
  }
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  .hero-stats {
    gap: 24px;
    padding: 20px;
  }
  .stat-info .stat-value {
    font-size: 18px;
  }
}
</style>
