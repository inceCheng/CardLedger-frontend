// @ts-ignore
/* eslint-disable */
import request from '@/request';
import type {
  BaseResponse,
  User,
  UserVO,
  UserLoginRequest,
  UserRegisterRequest,
  UserUpdateRequest,
  UserUpdatePasswordRequest,
} from './types';

/** 用户登录 POST /api/user/login */
export async function userLogin(
  body: UserLoginRequest,
  options?: { [key: string]: any },
) {
  return request<BaseResponse<User>>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户注册 POST /api/user/register */
export async function userRegister(
  body: UserRegisterRequest,
  options?: { [key: string]: any },
) {
  return request<BaseResponse<User>>('/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户登出 GET /api/user/logout */
export async function userLogout(options?: { [key: string]: any }) {
  return request<BaseResponse<string>>('/api/user/logout', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取当前用户信息 GET /api/user/current */
export async function getCurrentUser(options?: { [key: string]: any }) {
  return request<BaseResponse<UserVO>>('/api/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 更新用户信息 POST /api/user/update */
export async function updateUser(
  body: UserUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<BaseResponse<User>>('/api/user/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 修改密码 POST /api/user/update/password */
export async function updatePassword(
  body: UserUpdatePasswordRequest,
  options?: { [key: string]: any },
) {
  return request<BaseResponse<User>>('/api/user/update/password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
