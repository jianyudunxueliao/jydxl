<script setup>
// 在线学习平台首页 - 整合所有独立组件
import HeroBanner from '@/components/HeroBanner.vue'
import StatsSection from '@/components/StatsSection.vue'
import CourseList from '@/components/CourseList.vue'
import CategorySection from '@/components/CategorySection.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <div class="assignment3-page">
    <HeroBanner />
    <StatsSection />
    <CourseList />
    <CategorySection />
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
.assignment3-page {
  width: 100%;
}
</style>
