<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'
import { useLoginUserStore } from '@/stores/useLoginUserStore'

const loginUser = useLoginUserStore()
// 应用启动时尝试获取用户信息
loginUser.fetchLoginUser()
</script>

<style>
#app {
}
</style>
