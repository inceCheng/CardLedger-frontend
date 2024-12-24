import { defineStore } from 'pinia'
import { ref } from 'vue'
import { message } from 'ant-design-vue'

export const useLoginUserStore = defineStore('loginUser', () => {
  const loginUser = ref<any>({
    userName: '未登录',
  })

  async function fetchLoginUser() {
    // todo 由于后端还没提供接口，暂时注释
    // const res = await getCurrentUser();
    // if (res.data.code === 0 && res.data.data) {
    //   loginUser.value = res.data.data;
    // }
    // 测试用户登录
    setTimeout(() => {
      loginUser.value = { username: '测试用户', id: 1 }
      message.success('登录成功!')
    }, 1000)
  }

  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser
  }

  return { loginUser, setLoginUser, fetchLoginUser }
})
