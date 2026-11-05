<script setup>
// 默认首页 - 展示项目概览与技术栈
const techStack = [
  { name: 'Vue 3', desc: '组合式 API、setup 语法糖、响应式系统', icon: 'Vue.js' },
  { name: 'Vite', desc: '极速冷启动、ESBuild 预构建、HMR', icon: '⚡' },
  { name: 'Vue Router 4', desc: 'History 模式、路由守卫、懒加载', icon: '🛣️' },
  { name: 'Pinia', desc: '新一代状态管理、TypeScript 友好', icon: '📦' },
  { name: 'Element Plus', desc: 'Vue3 组件库、按需引入', icon: '🧩' },
  { name: 'Sass', desc: 'CSS 预处理器、变量与嵌套', icon: '🎨' }
]

const features = [
  { title: '按需引入', desc: 'Element Plus 组件与 API 自动按需导入，无冗余代码', tag: '开箱即用' },
  { title: '路径别名', desc: '@ 指向 src 目录，导入路径简洁清晰', tag: '开发体验' },
  { title: 'Mock 数据', desc: '纯前端静态假数据，无需后端即可完整演示', tag: '独立运行' },
  { title: '路由动画', desc: '页面切换平滑过渡，细节更精致', tag: '视觉体验' }
]
</script>

<template>
  <div class="home-page">
    <!-- Hero 区域 -->
    <section class="hero">
      <div class="hero-content">
        <h1>Vue 3 + Vite 前端项目模板</h1>
        <p class="hero-desc">集成 Vue Router、Pinia、Element Plus 的轻量级起步项目，专注开发体验</p>
        <div class="hero-actions">
          <el-button type="primary" size="large" @click="$router.push('/assignment3')">
            查看在线学习平台
          </el-button>
          <el-button size="large">了解更多</el-button>
        </div>
      </div>
    </section>

    <!-- 技术栈 -->
    <section class="page-section">
      <h2 class="page-title">技术栈</h2>
      <p class="page-subtitle">构建项目所用到的核心依赖与工具链</p>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="item in techStack" :key="item.name">
          <el-card class="tech-card" shadow="hover">
            <div class="tech-icon">{{ item.icon }}</div>
            <div class="tech-name">{{ item.name }}</div>
            <div class="tech-desc">{{ item.desc }}</div>
          </el-card>
        </el-col>
      </el-row>
    </section>

    <!-- 特性 -->
    <section class="page-section">
      <h2 class="page-title">项目特性</h2>
      <p class="page-subtitle">聚焦在开发效率与运行性能上的优化</p>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="6" v-for="f in features" :key="f.title">
          <el-card class="feature-card" shadow="never">
            <el-tag type="info" size="small">{{ f.tag }}</el-tag>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </el-card>
        </el-col>
      </el-row>
    </section>

    <!-- 快速开始 -->
    <section class="page-section">
      <h2 class="page-title">快速开始</h2>
      <el-card shadow="never" class="start-card">
        <el-steps :active="3" simple finish-status="success">
          <el-step title="npm install" description="安装依赖" />
          <el-step title="npm run dev" description="启动开发服务器" />
          <el-step title="访问 http://localhost:5173" description="查看效果" />
        </el-steps>
      </el-card>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  .hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    padding: 64px 40px;
    color: #fff;
    margin-bottom: 32px;

    h1 {
      font-size: 36px;
      margin: 0 0 16px;
      font-weight: 700;
    }

    .hero-desc {
      font-size: 16px;
      margin: 0 0 28px;
      opacity: 0.9;
      max-width: 600px;
    }

    .hero-actions {
      display: flex;
      gap: 12px;
    }
  }

  .tech-card {
    margin-bottom: 20px;
    text-align: center;
    border-radius: 10px;
    border: none;

    .tech-icon {
      font-size: 28px;
      margin-bottom: 8px;
    }

    .tech-name {
      font-weight: 600;
      font-size: 15px;
      margin-bottom: 4px;
    }

    .tech-desc {
      font-size: 12px;
      color: #909399;
      line-height: 1.5;
    }
  }

  .feature-card {
    margin-bottom: 20px;
    border-radius: 10px;
    background: #fff;

    h3 {
      margin: 12px 0 8px;
      font-size: 16px;
    }

    p {
      margin: 0;
      font-size: 13px;
      color: #606266;
      line-height: 1.6;
    }
  }

  .start-card {
    border-radius: 10px;
  }
}
</style>
