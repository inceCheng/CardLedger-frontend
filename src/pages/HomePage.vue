<template>
  <div class="home-container">
    <div class="welcome-section">
      <h1>打牌记分助手</h1>
      <p v-if="loginUserStore.isLoggedIn" class="welcome-text">
        欢迎回来，{{ loginUserStore.loginUser?.displayName || loginUserStore.loginUser?.username }}！
      </p>
      <p v-else class="welcome-text">
        欢迎使用记分助手，请先登录
      </p>
    </div>

    <div v-if="loginUserStore.isLoggedIn" class="action-section">
      <div class="action-cards">
        <a-card class="action-card" hoverable @click="showCreateRoomModal">
          <template #cover>
            <div class="card-icon">
              <PlusOutlined />
            </div>
          </template>
          <a-card-meta title="创建房间" description="创建一个新的游戏房间" />
        </a-card>

        <a-card class="action-card" hoverable @click="showJoinRoomModal">
          <template #cover>
            <div class="card-icon">
              <LoginOutlined />
            </div>
          </template>
          <a-card-meta title="加入房间" description="输入房间号加入游戏" />
        </a-card>
      </div>
    </div>

    <div v-else class="login-section">
      <a-space direction="vertical" size="large">
        <a-button type="primary" size="large" @click="goToLogin">
          立即登录
        </a-button>
        <a-button size="large" @click="goToRegister">
          注册账号
        </a-button>
      </a-space>
    </div>

    <!-- 创建房间弹窗 -->
    <a-modal
      v-model:open="createRoomVisible"
      title="创建房间"
      @ok="handleCreateRoom"
      :confirm-loading="roomStore.isLoading"
    >
      <a-form :model="createRoomForm" layout="vertical">
        <a-form-item label="房间名称">
          <a-input
            v-model:value="createRoomForm.roomName"
            placeholder="请输入房间名称（可选）"
          />
        </a-form-item>
        <a-form-item label="最大玩家数">
          <a-select
            v-model:value="createRoomForm.maxPlayers"
            placeholder="选择最大玩家数"
          >
            <a-select-option :value="4">4人</a-select-option>
            <a-select-option :value="6">6人</a-select-option>
            <a-select-option :value="8">8人</a-select-option>
            <a-select-option :value="10">10人</a-select-option>
          </a-select>
        </a-form-item>
      </a-form>
    </a-modal>

    <!-- 加入房间弹窗 -->
    <a-modal
      v-model:open="joinRoomVisible"
      title="加入房间"
      @ok="handleJoinRoom"
      :confirm-loading="roomStore.isLoading"
    >
      <a-form :model="joinRoomForm" layout="vertical">
        <a-form-item label="房间号" required>
          <a-input
            v-model:value="joinRoomForm.roomCode"
            placeholder="请输入4位数字房间号"
            maxlength="4"
            :formatter="formatRoomCode"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { PlusOutlined, LoginOutlined } from '@ant-design/icons-vue'
import { useLoginUserStore } from '@/stores/useLoginUserStore'
import { useRoomStore } from '@/stores/useRoomStore'
import type { RoomCreateRequest, RoomJoinRequest } from '@/api'

const router = useRouter()
const loginUserStore = useLoginUserStore()
const roomStore = useRoomStore()

const createRoomVisible = ref(false)
const joinRoomVisible = ref(false)

const createRoomForm = reactive<RoomCreateRequest>({
  roomName: '',
  maxPlayers: 6
})

const joinRoomForm = reactive<RoomJoinRequest>({
  roomCode: ''
})

const showCreateRoomModal = () => {
  createRoomVisible.value = true
}

const showJoinRoomModal = () => {
  joinRoomVisible.value = true
}

const handleCreateRoom = async () => {
  const room = await roomStore.createNewRoom(createRoomForm)
  if (room) {
    createRoomVisible.value = false
    router.push(`/room/${room.roomCode}`)
  }
}

const handleJoinRoom = async () => {
  if (!joinRoomForm.roomCode || joinRoomForm.roomCode.length !== 4) {
    return
  }

  const room = await roomStore.joinExistingRoom(joinRoomForm)
  if (room) {
    joinRoomVisible.value = false
    router.push(`/room/${room.roomCode}`)
  }
}

const formatRoomCode = (value: string) => {
  return value.replace(/\D/g, '').slice(0, 4)
}

const goToLogin = () => {
  router.push('/login')
}

const goToRegister = () => {
  router.push('/register')
}
</script>

<style scoped>
.home-container {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.welcome-section {
  text-align: center;
  margin-bottom: 48px;
}

.welcome-section h1 {
  font-size: 32px;
  color: #1890ff;
  margin-bottom: 16px;
  font-weight: 600;
}

.welcome-text {
  font-size: 18px;
  color: #666;
  margin: 0;
}

.action-section {
  width: 100%;
  max-width: 600px;
}

.action-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.action-card {
  text-align: center;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.action-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.card-icon {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  color: #1890ff;
  background: linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%);
}

.login-section {
  display: flex;
  justify-content: center;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .home-container {
    padding: 24px 16px;
  }

  .welcome-section h1 {
    font-size: 24px;
  }

  .welcome-text {
    font-size: 16px;
  }

  .action-cards {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .card-icon {
    height: 60px;
    font-size: 24px;
  }
}
</style>
