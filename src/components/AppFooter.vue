<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores'
import { ArrowRight } from '@element-plus/icons-vue'

const store = useAppStore()

const links = [
  {
    title: '关于我们',
    items: ['平台介绍', '团队介绍', '加入我们', '联系我们']
  },
  {
    title: '学习支持',
    items: ['帮助中心', '退款政策', '常见问题', '学习社区']
  },
  {
    title: '合作伙伴',
    items: ['企业培训', '高校合作', '讲师入驻', '商务合作']
  },
  {
    title: '关注我们',
    items: ['微信公众号', '微博', 'B站', 'GitHub']
  }
]
</script>

<template>
  <footer class="app-footer">
    <!-- 主内容 -->
    <div class="footer-main container-wide">
      <div class="footer-brand">
        <div class="brand-logo">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#409EFF"/>
            <path d="M2 17l10 5 10-5" stroke="#409EFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12l10 5 10-5" stroke="#409EFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>在线学习平台</span>
        </div>
        <p class="brand-desc">
          专注于 Web 前端开发的在线学习平台，提供系统化的课程体系、
          实战项目训练和一对一导师指导，帮助学员从零到一成为优秀的前端工程师。
        </p>
        <div class="brand-badges">
          <span class="badge">🏆 行业领先</span>
          <span class="badge">⭐ 98% 好评</span>
        </div>
      </div>

      <div v-for="col in links" :key="col.title" class="footer-col">
        <h4 class="col-title">{{ col.title }}</h4>
        <ul class="col-list">
          <li v-for="item in col.items" :key="item">
            <a href="#" class="col-link">
              {{ item }}
              <el-icon :size="12" class="link-arrow"><ArrowRight /></el-icon>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- 底部版权 -->
    <div class="footer-bottom">
      <div class="container-wide bottom-inner">
        <span class="copyright">
          © {{ store.currentYear }} 在线学习平台 版权所有 · 京ICP备00000000号
        </span>
        <div class="legal-links">
          <a href="#">用户协议</a>
          <a href="#">隐私政策</a>
          <a href="#">Cookie 设置</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.app-footer {
  background: var(--bg-dark);
  color: #c9cdd4;
}

.footer-main {
  display: grid;
  grid-template-columns: 1.4fr repeat(4, 1fr);
  gap: 48px;
  padding: 56px 24px 40px;
}

.footer-brand {
  .brand-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;

    svg {
      width: 32px;
      height: 32px;
    }
    span {
      font-size: 18px;
      font-weight: 700;
      color: #fff;
    }
  }

  .brand-desc {
    font-size: 14px;
    line-height: 1.7;
    color: #86909c;
    margin: 0 0 20px;
    max-width: 340px;
  }

  .brand-badges {
    display: flex;
    gap: 10px;
    .badge {
      padding: 4px 12px;
      background: rgba(64, 158, 255, 0.15);
      border: 1px solid rgba(64, 158, 255, 0.3);
      border-radius: 14px;
      font-size: 12px;
      color: #a0cfff;
    }
  }
}

.footer-col {
  .col-title {
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    margin: 0 0 18px;
  }
  .col-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 12px;
    }
  }
  .col-link {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    font-size: 13px;
    color: #86909c;
    transition: var(--transition-base);

    .link-arrow {
      opacity: 0;
      transform: translateX(-4px);
      transition: var(--transition-base);
    }

    &:hover {
      color: #fff;
      .link-arrow {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 20px 0;

  .bottom-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  .copyright {
    font-size: 12px;
    color: #646a73;
  }

  .legal-links {
    display: flex;
    gap: 20px;
    a {
      font-size: 12px;
      color: #646a73;
      transition: color 0.2s;
      &:hover { color: #c9cdd4; }
    }
  }
}

@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    padding: 40px 24px 28px;
  }
  .footer-brand {
    grid-column: 1 / -1;
  }
}
@media (max-width: 560px) {
  .footer-main {
    grid-template-columns: 1fr;
  }
}
</style>
