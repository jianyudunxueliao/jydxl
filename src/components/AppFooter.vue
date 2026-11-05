<script setup>
import { useAppStore } from '@/stores'
const store = useAppStore()
</script>

<template>
  <footer class="app-footer">
    <div class="footer-inner">
      <span>© {{ store.currentYear }} {{ store.siteName }} · v{{ store.version }}</span>
      <span class="sep">|</span>
      <span>Vue 3 + Vite + Element Plus</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.app-footer {
  background: #fafafa;
  border-top: 1px solid #ebeef5;
  padding: 20px 0;
  text-align: center;
  color: #909399;
  font-size: 13px;

  .sep {
    margin: 0 10px;
    color: #dcdfe6;
  }
}
</style>
