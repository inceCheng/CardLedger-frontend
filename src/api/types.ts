// API 响应基础类型
export interface BaseResponse<T = any> {
  code: number;
  data: T;
  message: string;
}

// 用户相关类型
export interface User {
  id: number;
  username: string;
  displayName: string;
  password?: string;
  email: string;
  phone?: string;
  address?: string;
  avatar?: string;
  lastLoginIp?: string;
  lastLoginTime?: string;
  status: number;
  createTime?: string;
  updateTime?: string;
  additionalInfo?: any;
  bio?: string;
  idCard?: string;
  lastLoginIpLocation?: string;
  role: number;
}

export interface UserVO {
  id: number;
  username: string;
  displayName: string;
  email: string;
  phone?: string;
  avatar?: string;
  lastLoginIpLocation?: string;
  status: number;
  bio?: string;
  idCard?: string;
  role: number;
}

export interface UserLoginRequest {
  username: string;
  password: string;
  captchaCode?: string;
  captchaId?: string;
}

export interface UserRegisterRequest {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  emailCode: string;
  captchaCode: string;
  captchaId: string;
}

export interface UserUpdateRequest {
  displayName?: string;
  avatarUrl?: string;
  bio?: string;
  email?: string;
}

export interface UserUpdatePasswordRequest {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

// 房间相关类型
export interface RoomPlayerVO {
  userId: number;
  username: string;
  displayName: string;
  avatar?: string;
  currentScore: number;
  isCreator: boolean;
}

export interface RoomVO {
  id: number;
  roomCode: string;
  roomName: string;
  creatorId: number;
  creatorName: string;
  status: number; // 1=活跃, 0=已关闭
  maxPlayers: number;
  currentPlayers: number;
  players: RoomPlayerVO[];
  createTime: string;
  updateTime: string;
}

export interface RoomCreateRequest {
  roomName?: string;
  maxPlayers?: number;
}

export interface RoomJoinRequest {
  roomCode: string;
}

// 积分相关类型
export interface ScoreTransactionVO {
  id: number;
  roomCode: string;
  fromUserId: number;
  fromUserName: string;
  toUserId: number;
  toUserName: string;
  amount: number;
  transactionTime: string;
  formattedTime: string;
  logDescription: string;
  remark?: string;
}

export interface ScoreTransferRequest {
  roomCode: string;
  toUserId: number;
  amount: number;
  remark?: string;
}
