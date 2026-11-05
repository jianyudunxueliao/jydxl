<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Search, Menu, Close } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()

const activeMenu = computed(() => route.path)
const searchValue = ref('')
const mobileMenuOpen = ref(false)

const navMenus = [
  { index: '/', title: '首页' },
  { index: '/assignment3', title: '课程' },
  { index: '/assignment3', title: '实战' },
  { index: '/assignment3', title: '社区' }
]

const onMenuSelect = (index) => {
  router.push(index)
  mobileMenuOpen.value = false
}

const onSearch = () => {
  if (searchValue.value.trim()) {
    // 搜索行为 mock
    router.push('/assignment3')
  }
}
</script>

<template>
  <header class="app-header">
    <div class="header-inner container-wide">
      <!-- Logo -->
      <router-link to="/" class="logo" @click="mobileMenuOpen = false">
        <div class="logo-icon">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#409EFF"/>
            <path d="M2 17l10 5 10-5" stroke="#409EFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12l10 5 10-5" stroke="#409EFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <span class="logo-text">在线学习平台</span>
      </router-link>

      <!-- 桌面端导航 -->
      <el-menu
        :default-active="activeMenu"
        mode="horizontal"
        class="nav-menu"
        @select="onMenuSelect"
        :ellipsis="false"
      >
        <el-menu-item v-for="m in navMenus" :key="m.title" :index="m.index">
          {{ m.title }}
        </el-menu-item>
      </el-menu>

      <!-- 右侧：搜索 + 登录注册 -->
      <div class="header-right">
        <el-input
          v-model="searchValue"
          class="search-input"
          placeholder="搜索课程、讲师..."
          clearable
          size="default"
          @keyup.enter="onSearch"
        >
          <template #prefix>
            <el-icon style="color: var(--text-secondary)"><Search /></el-icon>
          </template>
        </el-input>
        <div class="auth-buttons">
          <el-button class="btn-login" :underline="false">登录</el-button>
          <el-button type="primary" class="btn-register">注册</el-button>
        </div>
        <!-- 移动端菜单按钮 -->
        <el-button class="mobile-toggle" text @click="mobileMenuOpen = !mobileMenuOpen">
          <el-icon :size="22">
            <Menu v-if="!mobileMenuOpen" />
            <Close v-else />
          </el-icon>
        </el-button>
      </div>
    </div>

    <!-- 移动端下拉菜单 -->
    <transition name="slide">
      <div v-if="mobileMenuOpen" class="mobile-menu container-wide">
        <el-menu :default-active="activeMenu" mode="vertical" @select="onMenuSelect">
          <el-menu-item v-for="m in navMenus" :key="m.title" :index="m.index">
            {{ m.title }}
          </el-menu-item>
        </el-menu>
        <div class="mobile-search">
          <el-input
            v-model="searchValue"
            placeholder="搜索课程、讲师..."
            size="default"
            @keyup.enter="onSearch"
          >
            <template #prefix>
              <el-icon><Search /></el-icon>
            </template>
          </el-input>
        </div>
        <div class="mobile-auth">
          <el-button style="width: 48%" plain>登录</el-button>
          <el-button style="width: 48%" type="primary">注册</el-button>
        </div>
      </div>
    </transition>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  box-shadow: var(--shadow-sm);
}

.header-inner {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;

  .logo-icon {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo-text {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: 0.5px;
  }
}

// 导航菜单覆写
.nav-menu {
  flex: 1;
  max-width: 420px;
  border-bottom: none !important;
  background: transparent !important;

  :deep(.el-menu-item) {
    border-bottom: none !important;
    height: 64px;
    line-height: 64px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-regular);
    border-radius: 0;
    padding: 0 20px;
    transition: var(--transition-base);

    &:hover {
      color: var(--el-color-primary);
      background: transparent;
    }

    &.is-active {
      color: var(--el-color-primary);
      font-weight: 600;
      border-bottom: 2px solid var(--el-color-primary) !important;
    }
  }
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.search-input {
  width: 220px;

  :deep(.el-input__wrapper) {
    border-radius: 20px;
    background: #f5f7fa;
    box-shadow: none;
    padding: 2px 12px;

    &:hover,
    &.is-focus {
      box-shadow: 0 0 0 1px var(--el-color-primary) inset;
      background: #fff;
    }
  }
}

.auth-buttons {
  display: flex;
  gap: 8px;

  .btn-login {
    font-weight: 500;
    color: var(--text-regular);
  }
  .btn-register {
    border-radius: 20px;
    padding: 0 20px;
  }
}

.mobile-toggle {
  display: none;
}

.mobile-menu {
  background: #fff;
  padding: 16px 24px 24px;
  border-top: 1px solid #f0f0f0;

  :deep(.el-menu) {
    border-bottom: none !important;
  }

  .mobile-search {
    margin-top: 8px;
  }

  .mobile-auth {
    margin-top: 16px;
    display: flex;
    gap: 8px;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

// 响应式
@media (max-width: 960px) {
  .nav-menu {
    display: none;
  }
  .search-input {
    display: none;
  }
  .auth-buttons {
    display: none;
  }
  .mobile-toggle {
    display: flex;
  }
}

// 给 body 顶栏留出空间
:global(body) {
  padding-top: 64px;
}
</style>
