<template>
  <div class="login-container">
    <div class="login-card">
      <div class="logo-section">
        <h1>打牌积分系统</h1>
        <p>欢迎回来</p>
      </div>
      
      <a-form
        :model="loginForm"
        :rules="loginRules"
        @finish="handleLogin"
        class="login-form"
        layout="vertical"
      >
        <a-form-item
          label="用户名"
          name="username"
        >
          <a-input
            v-model:value="loginForm.username"
            placeholder="请输入用户名"
            size="large"
            :prefix="h(UserOutlined)"
          />
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
        >
          <a-input-password
            v-model:value="loginForm.password"
            placeholder="请输入密码"
            size="large"
            :prefix="h(LockOutlined)"
          />
        </a-form-item>

        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            size="large"
            block
            :loading="loginUserStore.isLoading"
          >
            登录
          </a-button>
        </a-form-item>
      </a-form>

      <div class="register-link">
        <span>还没有账号？</span>
        <a-button type="link" @click="goToRegister">立即注册</a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, h } from 'vue'
import { useRouter } from 'vue-router'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { useLoginUserStore } from '@/stores/useLoginUserStore'
import type { UserLoginRequest } from '@/api'

const router = useRouter()
const loginUserStore = useLoginUserStore()

const loginForm = reactive<UserLoginRequest>({
  username: '',
  password: '',
})

const loginRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '用户名长度应为3-20个字符', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度应为6-20个字符', trigger: 'blur' },
  ],
}

const handleLogin = async () => {
  const success = await loginUserStore.login(loginForm)
  if (success) {
    router.push('/')
  }
}

const goToRegister = () => {
  router.push('/register')
}
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.login-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.logo-section {
  text-align: center;
  margin-bottom: 32px;
}

.logo-section h1 {
  color: #1890ff;
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 600;
}

.logo-section p {
  color: #666;
  margin: 0;
  font-size: 16px;
}

.login-form {
  margin-bottom: 24px;
}

.register-link {
  text-align: center;
  color: #666;
}

.register-link span {
  margin-right: 8px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .login-container {
    padding: 16px;
  }
  
  .login-card {
    padding: 24px;
  }
  
  .logo-section h1 {
    font-size: 20px;
  }
}
</style>
