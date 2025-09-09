<template>
  <div id="globalHeader">
    <a-row :wrap="false" align="middle">
      <a-col flex="200px">
        <RouterLink to="/">
          <div class="title-bar">
            <div class="logo">🎮</div>
            <div class="title">打牌积分</div>
          </div>
        </RouterLink>
      </a-col>
      <a-col flex="auto">
        <a-menu
          id="menu"
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click="doMenuClick"
        />
      </a-col>
      <a-col flex="auto" class="user-section">
        <div class="user-login-status">
          <div v-if="loginUserStore.isLoggedIn" class="user-info">
            <a-dropdown>
              <a-button type="text" class="user-button">
                <a-avatar :size="32" :src="getCurrentUserAvatar()">
                  {{ loginUserStore.loginUser?.displayName?.charAt(0) || 
                      loginUserStore.loginUser?.username?.charAt(0) }}
                </a-avatar>
                <span class="username">
                  {{ loginUserStore.loginUser?.displayName || 
                      loginUserStore.loginUser?.username }}
                </span>
                <DownOutlined />
              </a-button>
              <template #overlay>
                <a-menu>
                  <a-menu-item @click="showEditNicknameModal">
                    <EditOutlined />
                    修改昵称
                  </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item @click="handleLogout">
                    <LogoutOutlined />
                    登出
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
          <div v-else class="login-buttons">
            <a-button @click="goToLogin">登录</a-button>
            <a-button type="primary" @click="goToRegister">注册</a-button>
          </div>
        </div>
      </a-col>
    </a-row>

    <!-- 修改昵称弹窗 -->
    <a-modal
      v-model:open="editNicknameVisible"
      title="修改昵称"
      @ok="handleUpdateNickname"
      :confirm-loading="isUpdatingNickname"
    >
      <a-form :model="nicknameForm" layout="vertical">
        <a-form-item label="新昵称" required>
          <a-input
            v-model:value="nicknameForm.displayName"
            placeholder="请输入新的昵称"
            maxlength="20"
            show-count
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { h, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { HomeOutlined, DownOutlined, LogoutOutlined, EditOutlined } from '@ant-design/icons-vue'
import { MenuProps } from 'ant-design-vue'
import { useLoginUserStore } from '@/stores/useLoginUserStore'
import { updateUser } from '@/api'
import type { UserUpdateRequest } from '@/api'

const router = useRouter()
const loginUserStore = useLoginUserStore()

// 修改昵称相关状态
const editNicknameVisible = ref(false)
const isUpdatingNickname = ref(false)
const nicknameForm = reactive<UserUpdateRequest>({
  displayName: ''
})

const items = ref<MenuProps['items']>([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/about',
    label: '关于',
    title: '关于',
  },
])

// 路由跳转事件
const doMenuClick = ({ key }: { key: string }) => {
  if (key !== 'others') {
    router.push({
      path: key,
    })
  }
}

// 当前选中菜单
const current = ref<string[]>([])
// 监听路由变化，更新当前选中菜单
router.afterEach((to) => {
  current.value = [to.path]
})

const goToLogin = () => {
  router.push('/login')
}

const goToRegister = () => {
  router.push('/register')
}

const handleLogout = async () => {
  const success = await loginUserStore.logout()
  if (success) {
    router.push('/')
  }
}

// 获取当前用户头像
const getCurrentUserAvatar = () => {
  // 如果用户有自定义头像，优先使用自定义头像
  if (loginUserStore.loginUser?.avatar) {
    return loginUserStore.loginUser.avatar
  }
  
  // 使用默认的当前用户头像
  return '/user_me.png'
}

// 显示修改昵称弹窗
const showEditNicknameModal = () => {
  nicknameForm.displayName = loginUserStore.loginUser?.displayName || loginUserStore.loginUser?.username || ''
  editNicknameVisible.value = true
}

// 处理更新昵称
const handleUpdateNickname = async () => {
  if (!nicknameForm.displayName || nicknameForm.displayName.trim() === '') {
    message.error('请输入昵称')
    return
  }

  if (nicknameForm.displayName.trim() === loginUserStore.loginUser?.displayName) {
    message.info('昵称未发生变化')
    editNicknameVisible.value = false
    return
  }

  isUpdatingNickname.value = true
  try {
    const res = await updateUser({
      displayName: nicknameForm.displayName.trim()
    })
    
    if (res.data.code === 0) {
      message.success('昵称修改成功!')
      editNicknameVisible.value = false
      // 刷新用户信息
      await loginUserStore.fetchLoginUser()
    } else {
      message.error(res.data.message || '修改昵称失败')
    }
  } catch (error: any) {
    console.error('修改昵称失败:', error)
    message.error(error.response?.data?.message || '修改昵称失败，请检查网络连接')
  } finally {
    isUpdatingNickname.value = false
  }
}
</script>

<style scoped>
#globalHeader .title-bar {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.title {
  color: #1890ff;
  font-size: 18px;
  font-weight: 600;
  margin-left: 8px;
}

.logo {
  font-size: 24px;
}

.user-section {
  display: flex;
  justify-content: flex-end;
}

.user-login-status {
  display: flex;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-button {
  display: flex;
  align-items: center;
  gap: 8px;
  height: auto;
  padding: 4px 8px;
}

.username {
  margin: 0 4px;
  color: #333;
}

.login-buttons {
  display: flex;
  gap: 8px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .title {
    font-size: 16px;
  }
  
  .username {
    display: none;
  }
  
  .login-buttons {
    gap: 4px;
  }
  
  .login-buttons .ant-btn {
    padding: 4px 8px;
    font-size: 12px;
  }
}
</style>
