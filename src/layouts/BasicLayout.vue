<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>

      <a-layout-content class="content">
        <router-view />
      </a-layout-content>

      <a-layout-footer class="footer">
        <a href="https://github.com/inceCheng" target="_blank"> 打牌记分 by InceLong </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
</script>

<style scoped>
#basicLayout .header {
  padding-inline: 20px;
  margin-bottom: 16px;
  color: unset;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

#basicLayout .content {
  background: linear-gradient(to right, #fefefe, #fff);
  margin-bottom: 80px; /* 为底部导航留出空间 */
  padding: 20px;
  min-height: calc(100vh - 140px);
}

#basicLayout .footer {
  background: #efefef;
  padding: 16px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
}

/* 移动端适配 */
@media (max-width: 768px) {
  #basicLayout .header {
    padding-inline: 12px;
    margin-bottom: 8px;
  }

  #basicLayout .content {
    padding: 12px;
    margin-bottom: 60px;
    min-height: calc(100vh - 120px);
  }

  #basicLayout .footer {
    padding: 8px;
    font-size: 12px;
  }
}

/* 超小屏幕适配 */
@media (max-width: 480px) {
  #basicLayout .content {
    padding: 8px;
  }
}
</style>
