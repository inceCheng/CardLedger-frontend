import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { message } from 'ant-design-vue'
import { getCurrentUser, userLogin, userLogout } from '@/api'
import type { UserVO, UserLoginRequest } from '@/api'

export const useLoginUserStore = defineStore('loginUser', () => {
  const loginUser = ref<UserVO | null>(null)
  const isLoading = ref(false)

  async function fetchLoginUser() {
    try {
      const res = await getCurrentUser()
      if (res.data.code === 0 && res.data.data) {
        loginUser.value = res.data.data
        return true
      }
    } catch (error) {
      console.error('获取用户信息失败:', error)
      loginUser.value = null
    }
    return false
  }

  async function login(loginRequest: UserLoginRequest) {
    isLoading.value = true
    try {
      const res = await userLogin(loginRequest)
      if (res.data.code === 0 && res.data.data) {
        // 登录成功后获取用户详细信息
        await fetchLoginUser()
        message.success('登录成功!')
        return true
      } else {
        message.error(res.data.message || '登录失败')
        return false
      }
    } catch (error: any) {
      console.error('登录失败:', error)
      message.error(error.response?.data?.message || '登录失败，请检查网络连接')
      return false
    } finally {
      isLoading.value = false
    }
  }

  async function logout() {
    try {
      await userLogout()
      loginUser.value = null
      message.success('登出成功!')
      return true
    } catch (error) {
      console.error('登出失败:', error)
      // 即使登出失败也清除本地状态
      loginUser.value = null
      return false
    }
  }

  function setLoginUser(newLoginUser: UserVO | null) {
    loginUser.value = newLoginUser
  }

  const isLoggedIn = computed(() => !!loginUser.value)

  return { 
    loginUser, 
    isLoading, 
    isLoggedIn,
    setLoginUser, 
    fetchLoginUser, 
    login,
    logout
  }
})
