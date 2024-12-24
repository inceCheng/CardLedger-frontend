<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'
import { healthUsingGet } from '@/api/mainController'
import { message } from 'ant-design-vue'
import { useLoginUserStore } from '@/stores/useLoginUserStore'

const loginUser = useLoginUserStore()
loginUser.fetchLoginUser()

// api测试
healthUsingGet().then((res) => {
  console.log(res.data)
})
</script>

<style>
#app {
}
</style>
