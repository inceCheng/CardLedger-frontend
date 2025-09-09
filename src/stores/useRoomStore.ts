import { defineStore } from 'pinia'
import { ref } from 'vue'
import { message } from 'ant-design-vue'
import { createRoom, joinRoom, getRoomInfo, leaveRoom } from '@/api'
import type { RoomVO, RoomCreateRequest, RoomJoinRequest } from '@/api'

export const useRoomStore = defineStore('room', () => {
  const currentRoom = ref<RoomVO | null>(null)
  const isLoading = ref(false)

  async function createNewRoom(createRequest: RoomCreateRequest) {
    isLoading.value = true
    try {
      const res = await createRoom(createRequest)
      if (res.data.code === 0 && res.data.data) {
        currentRoom.value = res.data.data
        message.success(`房间创建成功！房间号：${res.data.data.roomCode}`)
        return res.data.data
      } else {
        message.error(res.data.message || '创建房间失败')
        return null
      }
    } catch (error: any) {
      console.error('创建房间失败:', error)
      message.error(error.response?.data?.message || '创建房间失败，请检查网络连接')
      return null
    } finally {
      isLoading.value = false
    }
  }

  async function joinExistingRoom(joinRequest: RoomJoinRequest) {
    isLoading.value = true
    try {
      const res = await joinRoom(joinRequest)
      if (res.data.code === 0 && res.data.data) {
        currentRoom.value = res.data.data
        message.success(`成功加入房间：${res.data.data.roomName}`)
        return res.data.data
      } else {
        message.error(res.data.message || '加入房间失败')
        return null
      }
    } catch (error: any) {
      console.error('加入房间失败:', error)
      message.error(error.response?.data?.message || '加入房间失败，请检查房间号')
      return null
    } finally {
      isLoading.value = false
    }
  }

  async function refreshRoomInfo() {
    if (!currentRoom.value?.roomCode) return false
    
    try {
      const res = await getRoomInfo(currentRoom.value.roomCode)
      if (res.data.code === 0 && res.data.data) {
        currentRoom.value = res.data.data
        return true
      }
    } catch (error) {
      console.error('刷新房间信息失败:', error)
    }
    return false
  }

  async function leaveCurrentRoom() {
    if (!currentRoom.value?.roomCode) return false
    
    try {
      const res = await leaveRoom(currentRoom.value.roomCode)
      if (res.data.code === 0) {
        currentRoom.value = null
        message.success('已离开房间')
        return true
      } else {
        message.error(res.data.message || '离开房间失败')
        return false
      }
    } catch (error: any) {
      console.error('离开房间失败:', error)
      message.error(error.response?.data?.message || '离开房间失败')
      return false
    }
  }

  function clearRoom() {
    currentRoom.value = null
  }

  return {
    currentRoom,
    isLoading,
    createNewRoom,
    joinExistingRoom,
    refreshRoomInfo,
    leaveCurrentRoom,
    clearRoom
  }
})
