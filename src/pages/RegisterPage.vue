<template>
  <div class="register-container">
    <div class="register-card">
      <div class="logo-section">
        <h1>打牌记分助手</h1>
        <p>创建新账号</p>
      </div>

      <a-form
        :model="registerForm"
        :rules="registerRules"
        @finish="handleRegister"
        class="register-form"
        layout="vertical"
      >
        <a-form-item
          label="用户名"
          name="username"
        >
          <a-input
            v-model:value="registerForm.username"
            placeholder="请输入用户名"
            size="large"
            :prefix="h(UserOutlined)"
          />
        </a-form-item>

        <a-form-item
          label="邮箱"
          name="email"
        >
          <a-input
            v-model:value="registerForm.email"
            placeholder="请输入邮箱地址"
            size="large"
            :prefix="h(MailOutlined)"
          />
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
        >
          <a-input-password
            v-model:value="registerForm.password"
            placeholder="请输入密码"
            size="large"
            :prefix="h(LockOutlined)"
          />
        </a-form-item>

        <a-form-item
          label="确认密码"
          name="confirmPassword"
        >
          <a-input-password
            v-model:value="registerForm.confirmPassword"
            placeholder="请再次输入密码"
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
            :loading="isLoading"
          >
            注册
          </a-button>
        </a-form-item>
      </a-form>

      <div class="login-link">
        <span>已有账号？</span>
        <a-button type="link" @click="goToLogin">立即登录</a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, h } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { 
  UserOutlined, 
  LockOutlined, 
  MailOutlined
} from '@ant-design/icons-vue'
import { userRegister } from '@/api'
import type { UserRegisterRequest } from '@/api'

const router = useRouter()
const isLoading = ref(false)

const registerForm = reactive<Omit<UserRegisterRequest, 'emailCode' | 'captchaCode' | 'captchaId'>>({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const validatePassword = async (_rule: any, value: string) => {
  if (value === '') {
    return Promise.reject(new Error('请输入密码'))
  }
  if (value.length < 6 || value.length > 20) {
    return Promise.reject(new Error('密码长度应为6-20个字符'))
  }
  return Promise.resolve()
}

const validateConfirmPassword = async (_rule: any, value: string) => {
  if (value === '') {
    return Promise.reject(new Error('请确认密码'))
  }
  if (value !== registerForm.password) {
    return Promise.reject(new Error('两次输入的密码不一致'))
  }
  return Promise.resolve()
}

const registerRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '用户名长度应为3-20个字符', trigger: 'blur' },
  ],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入有效的邮箱地址', trigger: 'blur' },
  ],
  password: [
    { required: true, validator: validatePassword, trigger: 'blur' },
  ],
  confirmPassword: [
    { required: true, validator: validateConfirmPassword, trigger: 'blur' },
  ],
}

const handleRegister = async () => {
  isLoading.value = true
  try {
    // 构造完整的注册请求，为验证码字段提供空字符串默认值
    const fullRegisterForm: UserRegisterRequest = {
      ...registerForm,
      emailCode: '',
      captchaCode: '',
      captchaId: ''
    }
    const res = await userRegister(fullRegisterForm)
    if (res.data.code === 0) {
      message.success('注册成功！请登录')
      router.push('/login')
    } else {
      message.error(res.data.message || '注册失败')
    }
  } catch (error: any) {
    console.error('注册失败:', error)
    message.error(error.response?.data?.message || '注册失败，请检查网络连接')
  } finally {
    isLoading.value = false
  }
}

const goToLogin = () => {
  router.push('/login')
}
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.register-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  max-height: 90vh;
  overflow-y: auto;
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

.register-form {
  margin-bottom: 24px;
}

.login-link {
  text-align: center;
  color: #666;
}

.login-link span {
  margin-right: 8px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .register-container {
    padding: 16px;
  }

  .register-card {
    padding: 24px;
    max-height: 95vh;
  }

  .logo-section h1 {
    font-size: 20px;
  }
}
</style>
