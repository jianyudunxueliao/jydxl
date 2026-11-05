<script setup>
import { ref } from 'vue'

// ======= Mock 数据 =======
const banners = [
  { id: 1, title: '前端全栈工程师养成计划', desc: '从 Vue 3 到 Node.js，系统化学习路径助你成为全栈高手', bg: 'linear-gradient(120deg, #667eea, #764ba2)', tag: '热门' },
  { id: 2, title: 'AI 时代的产品思维', desc: '掌握 Prompt Engineering，用 AI 放大你的产品创造力', bg: 'linear-gradient(120deg, #f093fb, #f5576c)', tag: '新课' },
  { id: 3, title: '数据结构与算法精讲', desc: '大厂面试必备，100+ 经典题目深度解析', bg: 'linear-gradient(120deg, #4facfe, #00f2fe)', tag: '推荐' }
]

const categories = [
  { icon: '💻', name: '编程开发', count: 128 },
  { icon: '🎨', name: '设计创意', count: 86 },
  { icon: '📊', name: '商业数据', count: 54 },
  { icon: '📱', name: '移动开发', count: 42 },
  { icon: '🔐', name: '网络安全', count: 31 },
  { icon: '🤖', name: '人工智能', count: 67 }
]

const courses = [
  { id: 1, title: 'Vue 3 企业级实战开发', teacher: '张老师', price: 299, originalPrice: 599, students: 12453, rating: 4.9, cover: '🎬', category: '编程开发', level: '进阶' },
  { id: 2, title: 'React 18 + TypeScript 从入门到精通', teacher: '李老师', price: 359, originalPrice: 699, students: 9821, rating: 4.8, cover: '⚛️', category: '编程开发', level: '入门' },
  { id: 3, title: 'Figma UI/UX 设计系统搭建', teacher: '王老师', price: 199, originalPrice: 399, students: 6734, rating: 4.7, cover: '🎨', category: '设计创意', level: '中级' },
  { id: 4, title: 'Python 数据分析实战', teacher: '赵老师', price: 259, originalPrice: 499, students: 8902, rating: 4.8, cover: '🐍', category: '编程开发', level: '入门' },
  { id: 5, title: '大模型应用开发 LangChain', teacher: '陈老师', price: 399, originalPrice: 799, students: 5621, rating: 4.9, cover: '🤖', category: '人工智能', level: '进阶' },
  { id: 6, title: 'Flutter 跨平台应用开发', teacher: '刘老师', price: 229, originalPrice: 459, students: 4310, rating: 4.6, cover: '📱', category: '移动开发', level: '中级' },
  { id: 7, title: 'MySQL 高性能优化实战', teacher: '孙老师', price: 189, originalPrice: 369, students: 7845, rating: 4.7, cover: '🗄️', category: '编程开发', level: '进阶' },
  { id: 8, title: '黑客攻防技术入门', teacher: '周老师', price: 319, originalPrice: 619, students: 3987, rating: 4.8, cover: '🔒', category: '网络安全', level: '入门' }
]

const hotTeachers = [
  { name: '张明', title: '前阿里 P7 前端专家', courses: 8, students: '5.2万', avatar: '👨‍🏫' },
  { name: '李雪', title: '字节跳动资深架构师', courses: 6, students: '3.8万', avatar: '👩‍🏫' },
  { name: '王强', title: '腾讯高级产品经理', courses: 5, students: '2.6万', avatar: '🧑‍🏫' },
  { name: '刘洋', title: '百度 AI 实验室研究员', courses: 4, students: '1.9万', avatar: '👨‍🎓' }
]

const announcements = [
  { id: 1, type: '活动', content: '双11学习狂欢节，全站课程限时 5 折起', time: '2小时前' },
  { id: 2, type: '更新', content: '《Vue 3 企业级实战》第 12 章已更新', time: '1天前' },
  { id: 3, type: '公告', content: '平台新增 AI 学习助手，支持课程内容智能问答', time: '3天前' }
]

// ======= 交互 =======
const searchKeyword = ref('')
const activeCategory = ref('全部')
const displayedCourses = ref(courses)

const categoryTabs = computed(() => ['全部', ...new Set(courses.map(c => c.category))])

const filterCourses = () => {
  displayedCourses.value = courses.filter(c => {
    const matchCat = activeCategory.value === '全部' || c.category === activeCategory.value
    const matchKey = !searchKeyword.value || c.title.includes(searchKeyword.value) || c.teacher.includes(searchKeyword.value)
    return matchCat && matchKey
  })
}
watch([activeCategory, searchKeyword], filterCourses, { immediate: true })
</script>

<template>
  <div class="learning-page">
    <!-- 搜索条 -->
    <section class="search-bar">
      <div class="search-inner">
        <h1>开启你的学习之旅</h1>
        <p>优质课程 · 实战项目 · 名师指导</p>
        <div class="search-box">
          <el-input
            v-model="searchKeyword"
            placeholder="搜索课程、老师或技能..."
            size="large"
            clearable
            @keyup.enter="filterCourses"
          >
            <template #prefix><el-icon><Search /></el-icon></template>
          </el-input>
          <el-button type="primary" size="large" @click="filterCourses">搜索</el-button>
        </div>
      </div>
    </section>

    <!-- 轮播 + 公告 -->
    <section class="layout-row">
      <el-carousel height="280px" class="banner-carousel" indicator-position="outside">
        <el-carousel-item v-for="b in banners" :key="b.id">
          <div class="banner-item" :style="{ background: b.bg }">
            <div class="banner-tag">{{ b.tag }}</div>
            <h2>{{ b.title }}</h2>
            <p>{{ b.desc }}</p>
            <el-button type="primary" size="small" round>立即查看 →</el-button>
          </div>
        </el-carousel-item>
      </el-carousel>

      <el-card class="notice-card" shadow="hover">
        <template #header>
          <div class="card-header">
            <span>📢 平台动态</span>
            <el-link type="primary" :underline="false">更多</el-link>
          </div>
        </template>
        <div class="notice-list">
          <div v-for="n in announcements" :key="n.id" class="notice-item">
            <el-tag size="small" :type="n.type === '活动' ? 'danger' : n.type === '更新' ? 'success' : 'info'">{{ n.type }}</el-tag>
            <span class="notice-content">{{ n.content }}</span>
            <span class="notice-time">{{ n.time }}</span>
          </div>
        </div>
      </el-card>
    </section>

    <!-- 课程分类 -->
    <section class="page-section">
      <h2 class="page-title">课程分类</h2>
      <div class="category-grid">
        <div v-for="c in categories" :key="c.name" class="category-card">
          <div class="cat-icon">{{ c.icon }}</div>
          <div class="cat-info">
            <div class="cat-name">{{ c.name }}</div>
            <div class="cat-count">{{ c.count }} 门课程</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 热门课程 -->
    <section class="page-section">
      <div class="section-header">
        <h2 class="page-title">热门课程</h2>
        <el-link type="primary" :underline="false">查看全部 →</el-link>
      </div>

      <!-- 分类筛选 -->
      <div class="filter-tabs">
        <el-radio-group v-model="activeCategory" size="default">
          <el-radio-button v-for="tab in categoryTabs" :key="tab" :label="tab">{{ tab }}</el-radio-button>
        </el-radio-group>
      </div>

      <el-row :gutter="20">
        <el-col
          v-for="course in displayedCourses"
          :key="course.id"
          :xs="24" :sm="12" :md="8" :lg="6"
        >
          <el-card class="course-card" shadow="hover">
            <div class="course-cover">
              <span class="cover-emoji">{{ course.cover }}</span>
              <el-tag v-if="course.level === '进阶'" type="warning" size="small" class="level-tag">{{ course.level }}</el-tag>
              <el-tag v-else-if="course.level === '入门'" type="success" size="small" class="level-tag">{{ course.level }}</el-tag>
              <el-tag v-else type="primary" size="small" class="level-tag">{{ course.level }}</el-tag>
            </div>
            <div class="course-info">
              <h3 class="course-title">{{ course.title }}</h3>
              <div class="course-meta">
                <span class="teacher">{{ course.teacher }}</span>
                <span class="rating">⭐ {{ course.rating }}</span>
              </div>
              <div class="course-footer">
                <span class="price">
                  <span class="current">¥{{ course.price }}</span>
                  <span class="original">¥{{ course.originalPrice }}</span>
                </span>
                <span class="students">{{ course.students.toLocaleString() }} 人学习</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-empty v-if="displayedCourses.length === 0" description="没有找到匹配的课程" />
    </section>

    <!-- 名师推荐 -->
    <section class="page-section">
      <h2 class="page-title">名师推荐</h2>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="6" v-for="t in hotTeachers" :key="t.name">
          <el-card class="teacher-card" shadow="hover">
            <div class="avatar">{{ t.avatar }}</div>
            <div class="t-name">{{ t.name }}</div>
            <div class="t-title">{{ t.title }}</div>
            <div class="t-stats">
              <span>🎓 {{ t.courses }} 门课</span>
              <span>👥 {{ t.students }} 学员</span>
            </div>
            <el-button type="primary" plain size="small" round>关注老师</el-button>
          </el-card>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.learning-page {
  // 搜索条
  .search-bar {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    border-radius: 12px;
    padding: 56px 40px;
    color: #fff;
    margin-bottom: 28px;

    h1 { margin: 0 0 8px; font-size: 32px; }
    p { margin: 0 0 24px; opacity: 0.85; font-size: 15px; }

    .search-box {
      display: flex;
      gap: 12px;
      max-width: 640px;

      :deep(.el-input__wrapper) {
        border-radius: 24px;
        background: rgba(255, 255, 255, 0.95);
      }
      .el-button {
        border-radius: 24px;
        padding: 0 28px;
      }
    }
  }

  // 轮播 + 公告
  .layout-row {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    margin-bottom: 32px;

    @media (max-width: 900px) { grid-template-columns: 1fr; }
  }

  .banner-carousel {
    border-radius: 12px;
    overflow: hidden;

    .banner-item {
      height: 100%;
      padding: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .banner-tag {
        align-self: flex-start;
        background: rgba(255, 255, 255, 0.25);
        padding: 4px 12px;
        border-radius: 14px;
        font-size: 12px;
        margin-bottom: 12px;
      }
      h2 { margin: 0 0 8px; font-size: 24px; }
      p { margin: 0 0 16px; opacity: 0.9; font-size: 14px; max-width: 420px; }
      .el-button { align-self: flex-start; }
    }
  }

  .notice-card {
    border-radius: 12px;

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
    }
    .notice-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .notice-item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;

      .notice-content {
        flex: 1;
        color: #606266;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .notice-time { color: #c0c4cc; font-size: 12px; }
    }
  }

  // 分类网格
  .category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 16px;
  }

  .category-card {
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    }

    .cat-icon { font-size: 36px; }
    .cat-name { font-weight: 600; color: #303133; }
    .cat-count { font-size: 12px; color: #909399; margin-top: 2px; }
  }

  // 课程卡片
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .filter-tabs {
    margin-bottom: 20px;
  }

  .course-card {
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
    border: none;

    .course-cover {
      height: 140px;
      background: linear-gradient(135deg, #f5f7fa 0%, #e4e7ed 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      .cover-emoji { font-size: 56px; }
      .level-tag {
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }

    .course-info {
      padding: 14px 16px 16px;

      .course-title {
        margin: 0 0 8px;
        font-size: 15px;
        font-weight: 600;
        line-height: 1.4;
        color: #303133;
        // 两行省略
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        min-height: 42px;
      }

      .course-meta {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #909399;
        margin-bottom: 10px;
      }

      .course-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .price {
          .current { color: #f56c6c; font-size: 16px; font-weight: 700; }
          .original { color: #c0c4cc; font-size: 12px; text-decoration: line-through; margin-left: 4px; }
        }
        .students { font-size: 11px; color: #c0c4cc; }
      }
    }
  }

  // 老师卡片
  .teacher-card {
    margin-bottom: 20px;
    text-align: center;
    border-radius: 10px;
    border: none;

    .avatar {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: linear-gradient(135deg, #e0e7ff, #c7d2fe);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 36px;
      margin: 0 auto 12px;
    }

    .t-name { font-size: 16px; font-weight: 600; }
    .t-title { font-size: 12px; color: #909399; margin: 4px 0 12px; }

    .t-stats {
      display: flex;
      justify-content: center;
      gap: 16px;
      font-size: 12px;
      color: #606266;
      margin-bottom: 12px;
    }
  }
}
</style>
