<script setup>
defineProps({
  course: {
    type: Object,
    required: true
  }
})

const levelColorMap = {
  入门: 'success',
  中级: 'primary',
  进阶: 'warning',
  高级: 'danger'
}
</script>

<template>
  <el-card class="course-card" shadow="hover" :body-style="{ padding: 0 }">
    <!-- 封面 -->
    <div class="cover" :style="{ background: course.coverBg }">
      <div class="cover-icon">
        <el-icon :size="40" color="#fff"><component :is="course.icon" /></el-icon>
      </div>
      <el-tag
        class="level-tag"
        :type="levelColorMap[course.level] || 'primary'"
        size="small"
        effect="dark"
        round
      >
        {{ course.level }}
      </el-tag>
      <div class="play-overlay">
        <div class="play-btn">
          <el-icon :size="28" color="#fff"><VideoPlay /></el-icon>
        </div>
      </div>
    </div>

    <!-- 内容 -->
    <div class="content">
      <h3 class="title" :title="course.title">{{ course.title }}</h3>
      <p class="desc">{{ course.desc }}</p>

      <!-- 标签 -->
      <div class="tags">
        <el-tag
          v-for="tag in course.tags"
          :key="tag"
          size="small"
          effect="plain"
          class="tag-item"
        >
          {{ tag }}
        </el-tag>
      </div>

      <!-- 讲师 + 学习人数 -->
      <div class="meta">
        <div class="teacher">
          <el-avatar :size="22" :src="course.teacherAvatar" />
          <span>{{ course.teacher }}</span>
        </div>
        <div class="students">
          <el-icon><User /></el-icon>
          <span>{{ course.students }}</span>
        </div>
      </div>

      <!-- 价格 -->
      <div class="price-row">
        <div class="price">
          <span class="currency">¥</span>
          <span class="amount">{{ course.price }}</span>
          <span v-if="course.originalPrice" class="original">¥{{ course.originalPrice }}</span>
        </div>
        <el-button type="primary" size="small" round class="enroll-btn">立即学习</el-button>
      </div>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.course-card {
  height: 100%;
  border-radius: var(--radius-lg) !important;
  overflow: hidden;
  transition: var(--transition-base);

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-lg) !important;

    .play-overlay {
      opacity: 1;
    }
  }
}

.cover {
  position: relative;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .cover-icon {
    opacity: 0.85;
  }

  .level-tag {
    position: absolute;
    top: 12px;
    left: 12px;
  }
}

.play-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s;

  .play-btn {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid rgba(255, 255, 255, 0.6);
  }
}

.content {
  padding: 18px 20px 20px;
}

.title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 6px;
  line-height: 1.4;
  // 两行省略
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 42px;
}

.desc {
  font-size: 13px;
  color: var(--text-secondary);
  margin: 0 0 12px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 38px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;

  .tag-item {
    font-size: 12px !important;
    border-radius: 4px !important;
  }
}

.meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: var(--text-secondary);
  margin-bottom: 14px;

  .teacher {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .students {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  border-top: 1px dashed #f0f0f0;

  .price {
    display: flex;
    align-items: baseline;
    color: #f56c6c;

    .currency {
      font-size: 13px;
      font-weight: 600;
    }
    .amount {
      font-size: 22px;
      font-weight: 700;
      margin-left: 1px;
    }
    .original {
      font-size: 12px;
      color: var(--text-placeholder);
      text-decoration: line-through;
      margin-left: 6px;
    }
  }

  .enroll-btn {
    border-radius: 18px !important;
  }
}
</style>
