// @ts-ignore
/* eslint-disable */
import request from '@/request';
import type {
  BaseResponse,
  RoomVO,
  RoomCreateRequest,
  RoomJoinRequest,
} from './types';

/** 创建房间 POST /api/room/create */
export async function createRoom(
  body: RoomCreateRequest,
  options?: { [key: string]: any },
) {
  return request<BaseResponse<RoomVO>>('/api/room/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 加入房间 POST /api/room/join */
export async function joinRoom(
  body: RoomJoinRequest,
  options?: { [key: string]: any },
) {
  return request<BaseResponse<RoomVO>>('/api/room/join', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取房间信息 GET /api/room/info/{roomCode} */
export async function getRoomInfo(
  roomCode: string,
  options?: { [key: string]: any },
) {
  return request<BaseResponse<RoomVO>>(`/api/room/info/${roomCode}`, {
    method: 'GET',
    ...(options || {}),
  });
}

/** 离开房间 POST /api/room/leave/{roomCode} */
export async function leaveRoom(
  roomCode: string,
  options?: { [key: string]: any },
) {
  return request<BaseResponse<boolean>>(`/api/room/leave/${roomCode}`, {
    method: 'POST',
    ...(options || {}),
  });
}
