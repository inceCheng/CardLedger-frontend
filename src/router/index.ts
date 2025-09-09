import { createRouter, createWebHistory } from 'vue-router'
import { useLoginUserStore } from '@/stores/useLoginUserStore'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import RoomPage from '@/pages/RoomPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: { requiresGuest: true },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
      meta: { requiresGuest: true },
    },
    {
      path: '/room/:roomCode',
      name: 'room',
      component: RoomPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
  ],
})

// 路由守卫
router.beforeEach(async (to, from, next) => {
  const loginUserStore = useLoginUserStore()
  
  // 尝试获取用户信息（如果还没有的话）
  if (!loginUserStore.loginUser) {
    await loginUserStore.fetchLoginUser()
  }
  
  const isLoggedIn = loginUserStore.isLoggedIn
  
  // 需要登录的页面
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
    return
  }
  
  // 只允许游客访问的页面（如登录、注册）
  if (to.meta.requiresGuest && isLoggedIn) {
    next('/')
    return
  }
  
  next()
})

export default router
