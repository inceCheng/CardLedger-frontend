<template>
  <div class="room-container">
    <div v-if="!isLoadingRoom && roomStore.currentRoom" class="room-content">
      <!-- 房间信息头部 -->
      <div class="room-header">
        <div class="room-info">
          <h2>{{ roomStore.currentRoom.roomName || '游戏房间' }}</h2>
          <div class="room-details">
            <a-tag color="blue">房间号: {{ roomStore.currentRoom.roomCode }}</a-tag>
            <a-tag color="green">
              {{ roomStore.currentRoom.currentPlayers }}/{{ roomStore.currentRoom.maxPlayers }}人
            </a-tag>
          </div>
        </div>
        <div class="room-actions">
          <a-button @click="refreshRoom" :loading="roomStore.isLoading">
            <template #icon><ReloadOutlined /></template>
            刷新
          </a-button>
          <a-button @click="showTransactionHistory">
            <template #icon><HistoryOutlined /></template>
            记录
          </a-button>
          <a-button danger @click="handleLeaveRoom">
            <template #icon><LogoutOutlined /></template>
            离开
          </a-button>
        </div>
      </div>

      <!-- 玩家列表 -->
      <div class="players-section">
        <h3>玩家列表</h3>
        <div class="players-grid">
          <div
            v-for="player in sortedPlayers"
            :key="player.userId"
            class="player-card"
            :class="{ 
              'current-player': player.userId === loginUserStore.loginUser?.id,
              'creator': player.isCreator 
            }"
            @click="handlePlayerClick(player)"
          >
            <div class="player-avatar">
              <a-avatar :size="64" :src="getPlayerAvatar(player)">
                {{ player.displayName?.charAt(0) || player.username?.charAt(0) }}
              </a-avatar>
              <a-tag v-if="player.isCreator" color="gold" size="small" class="creator-tag">
                房主
              </a-tag>
            </div>
            <div class="player-info">
              <div class="player-name">
                {{ player.displayName || player.username }}
              </div>
              <div class="player-score">
                积分: {{ player.currentScore }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="loading-container">
      <a-spin size="large" />
      <p>{{ isLoadingRoom ? '加载房间信息中...' : '房间信息加载失败' }}</p>
    </div>

    <!-- 积分转账弹窗 -->
    <a-modal
      v-model:open="transferVisible"
      title="积分转账"
      @ok="handleTransfer"
      :confirm-loading="isTransferring"
    >
      <div v-if="selectedPlayer" class="transfer-modal">
        <div class="transfer-target">
          <a-avatar :size="48" :src="getPlayerAvatar(selectedPlayer)">
            {{ selectedPlayer.displayName?.charAt(0) || selectedPlayer.username?.charAt(0) }}
          </a-avatar>
          <div class="target-info">
            <div class="target-name">
              {{ selectedPlayer.displayName || selectedPlayer.username }}
            </div>
            <div class="target-score">
              当前积分: {{ selectedPlayer.currentScore }}
            </div>
          </div>
        </div>
        
        <a-form :model="transferForm" layout="vertical" class="transfer-form">
          <a-form-item label="转账金额" required>
            <a-input-number
              v-model:value="transferForm.amount"
              :min="0.1"
              :max="9999"
              :precision="1"
              :step="0.5"
              placeholder="请输入转账金额"
              style="width: 100%"
            />
          </a-form-item>
          <a-form-item label="备注">
            <a-textarea
              v-model:value="transferForm.remark"
              placeholder="请输入备注（可选）"
              :rows="3"
            />
          </a-form-item>
        </a-form>
      </div>
    </a-modal>

    <!-- 交易记录弹窗 -->
    <a-modal
      v-model:open="historyVisible"
      title="交易记录"
      :footer="null"
      width="80%"
      :bodyStyle="{ maxHeight: '60vh', overflowY: 'auto' }"
    >
      <div v-if="transactions.length > 0">
        <div
          v-for="transaction in transactions"
          :key="transaction.id"
          class="transaction-item"
        >
          <div class="transaction-info">
            <div class="transaction-description">
              {{ transaction.logDescription }}
            </div>
            <div class="transaction-amount">
              {{ transaction.amount > 0 ? '+' : '' }}{{ transaction.amount }}
            </div>
          </div>
          <div class="transaction-meta">
            <span class="transaction-time">{{ transaction.formattedTime }}</span>
            <span v-if="transaction.remark" class="transaction-remark">
              {{ transaction.remark }}
            </span>
          </div>
        </div>
      </div>
      <a-empty v-else description="暂无交易记录" />
    </a-modal>

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
      <a-alert
        message="提示"
        description="点击其他玩家头像可以进行积分转账。"
        type="info"
        show-icon
        style="margin-top: 16px"
      />
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { 
  ReloadOutlined, 
  HistoryOutlined, 
  LogoutOutlined 
} from '@ant-design/icons-vue'
import { useLoginUserStore } from '@/stores/useLoginUserStore'
import { useRoomStore } from '@/stores/useRoomStore'
import { transferScore, getRoomTransactions, updateUser, getRoomInfo } from '@/api'
import type { RoomPlayerVO, ScoreTransactionVO, ScoreTransferRequest, UserUpdateRequest } from '@/api'

const route = useRoute()
const router = useRouter()
const loginUserStore = useLoginUserStore()
const roomStore = useRoomStore()

const transferVisible = ref(false)
const historyVisible = ref(false)
const editNicknameVisible = ref(false)
const isTransferring = ref(false)
const isUpdatingNickname = ref(false)
const isLoadingRoom = ref(true)
const selectedPlayer = ref<RoomPlayerVO | null>(null)
const transactions = ref<ScoreTransactionVO[]>([])

const transferForm = reactive<Omit<ScoreTransferRequest, 'roomCode' | 'toUserId'>>({
  amount: 1,
  remark: ''
})

const nicknameForm = reactive<UserUpdateRequest>({
  displayName: ''
})

let refreshInterval: number | null = null

// 排序后的玩家列表：当前用户排在最前面
const sortedPlayers = computed(() => {
  if (!roomStore.currentRoom?.players) {
    return []
  }
  
  const players = [...roomStore.currentRoom.players]
  const currentUserId = loginUserStore.loginUser?.id
  
  return players.sort((a, b) => {
    // 当前用户排在最前面
    if (a.userId === currentUserId) return -1
    if (b.userId === currentUserId) return 1
    
    // 其他玩家按用户ID排序（保持稳定的顺序）
    return a.userId - b.userId
  })
})

onMounted(async () => {
  const roomCode = route.params.roomCode as string
  if (!roomCode) {
    message.error('房间号不能为空')
    router.push('/')
    return
  }

  try {
    // 如果当前没有房间信息或房间号不匹配，重新获取
    if (!roomStore.currentRoom || roomStore.currentRoom.roomCode !== roomCode) {
      const res = await getRoomInfo(roomCode)
      if (res.data.code === 0 && res.data.data) {
        roomStore.currentRoom = res.data.data
      } else {
        message.error(res.data.message || '房间不存在或已关闭')
        router.push('/')
        return
      }
    }
    
    isLoadingRoom.value = false
    
    // 设置定时刷新
    refreshInterval = window.setInterval(() => {
      refreshRoom()
    }, 5000)
  } catch (error: any) {
    console.error('获取房间信息失败:', error)
    message.error('获取房间信息失败，请检查网络连接')
    router.push('/')
  }
})

onUnmounted(() => {
  if (refreshInterval) {
    clearInterval(refreshInterval)
  }
})

const refreshRoom = async () => {
  await roomStore.refreshRoomInfo()
}

const handlePlayerClick = (player: RoomPlayerVO) => {
  // 如果点击的是自己，显示修改昵称弹窗
  if (player.userId === loginUserStore.loginUser?.id) {
    showEditNicknameModal()
    return
  }
  
  // 点击其他玩家，显示转账弹窗
  selectedPlayer.value = player
  transferForm.amount = 1
  transferForm.remark = ''
  transferVisible.value = true
}

const handleTransfer = async () => {
  if (!selectedPlayer.value || !roomStore.currentRoom) {
    return
  }

  if (!transferForm.amount || transferForm.amount <= 0) {
    message.error('请输入有效的转账金额')
    return
  }

  isTransferring.value = true
  try {
    const transferRequest: ScoreTransferRequest = {
      roomCode: roomStore.currentRoom.roomCode,
      toUserId: selectedPlayer.value.userId,
      amount: transferForm.amount,
      remark: transferForm.remark || undefined
    }

    const res = await transferScore(transferRequest)
    if (res.data.code === 0) {
      message.success('转账成功!')
      transferVisible.value = false
      await refreshRoom()
    } else {
      message.error(res.data.message || '转账失败')
    }
  } catch (error: any) {
    console.error('转账失败:', error)
    message.error(error.response?.data?.message || '转账失败，请检查网络连接')
  } finally {
    isTransferring.value = false
  }
}

const showTransactionHistory = async () => {
  if (!roomStore.currentRoom) return

  try {
    const res = await getRoomTransactions(roomStore.currentRoom.roomCode)
    if (res.data.code === 0) {
      transactions.value = res.data.data
      historyVisible.value = true
    } else {
      message.error(res.data.message || '获取交易记录失败')
    }
  } catch (error: any) {
    console.error('获取交易记录失败:', error)
    message.error(error.response?.data?.message || '获取交易记录失败')
  }
}

const handleLeaveRoom = async () => {
  const success = await roomStore.leaveCurrentRoom()
  if (success) {
    router.push('/')
  }
}

// 获取玩家头像
const getPlayerAvatar = (player: RoomPlayerVO) => {
  // 如果玩家有自定义头像，优先使用自定义头像
  if (player.avatar) {
    return player.avatar
  }
  
  // 根据是否是当前用户选择默认头像
  const isCurrentUser = player.userId === loginUserStore.loginUser?.id
  return isCurrentUser ? '/user_me.png' : '/user_other.png'
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
      // 刷新用户信息和房间信息
      await loginUserStore.fetchLoginUser()
      await refreshRoom()
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
.room-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.room-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 24px;
}

.room-info h2 {
  margin: 0 0 12px 0;
  color: #1890ff;
}

.room-details {
  display: flex;
  gap: 8px;
}

.room-actions {
  display: flex;
  gap: 8px;
}

.players-section {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.players-section h3 {
  margin: 0 0 20px 0;
  color: #333;
}

.players-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.player-card {
  background: #f9f9f9;
  border: 2px solid #e8e8e8;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.player-card:hover {
  border-color: #1890ff;
  box-shadow: 0 4px 12px rgba(24, 144, 255, 0.2);
}

.player-card.current-player {
  background: #e6f7ff;
  border-color: #1890ff;
  cursor: pointer;
}

.player-card.creator {
  background: #fff7e6;
  border-color: #faad14;
}

.player-avatar {
  position: relative;
}

.creator-tag {
  position: absolute;
  top: -8px;
  right: -8px;
}

.player-info {
  flex: 1;
}

.player-name {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 4px;
}

.player-score {
  font-size: 14px;
  color: #666;
}

.loading-container {
  text-align: center;
  padding: 60px 20px;
}

.loading-container p {
  margin-top: 16px;
  color: #666;
}

.transfer-modal {
  padding: 16px 0;
}

.transfer-target {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 20px;
}

.target-info {
  flex: 1;
}

.target-name {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.target-score {
  font-size: 14px;
  color: #666;
}

.transfer-form {
  margin-top: 16px;
}

.transaction-item {
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
}

.transaction-item:last-child {
  border-bottom: none;
}

.transaction-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.transaction-description {
  font-size: 14px;
  color: #333;
}

.transaction-amount {
  font-size: 16px;
  font-weight: 500;
  color: #1890ff;
}

.transaction-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #999;
}

.transaction-remark {
  font-style: italic;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .room-container {
    padding: 16px;
  }
  
  .room-header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    padding: 16px;
  }
  
  .room-actions {
    width: 100%;
    justify-content: space-between;
  }
  
  .players-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .player-card {
    padding: 16px;
  }
  
  .players-section {
    padding: 16px;
  }
}
</style>
