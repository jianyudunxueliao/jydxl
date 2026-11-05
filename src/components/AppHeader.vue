<script setup>
import { useAppStore } from '@/stores'

const store = useAppStore()
const activePath = computed(() => useRoute().path)
</script>

<template>
  <header class="app-header">
    <div class="header-inner">
      <router-link to="/" class="logo">
        <el-icon size="24" color="#409EFF"><HomeFilled /></el-icon>
        <span>{{ store.siteName }}</span>
      </router-link>
      <nav class="nav">
        <router-link
          v-for="item in store.navMenus"
          :key="item.path"
          :to="item.path"
          class="nav-item"
          :class="{ active: activePath === item.path }"
        >
          {{ item.title }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}

.header-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 32px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
  color: #303133;
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 4px;
}

.nav-item {
  padding: 8px 16px;
  border-radius: 6px;
  color: #606266;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.2s;

  &:hover {
    color: #409EFF;
    background: #ecf5ff;
  }

  &.active {
    color: #409EFF;
    background: #ecf5ff;
    font-weight: 500;
  }
}
</style>
