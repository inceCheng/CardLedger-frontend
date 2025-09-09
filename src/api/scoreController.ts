// @ts-ignore
/* eslint-disable */
import request from '@/request';
import type {
  BaseResponse,
  ScoreTransactionVO,
  ScoreTransferRequest,
} from './types';

/** 积分转账 POST /api/score/transfer */
export async function transferScore(
  body: ScoreTransferRequest,
  options?: { [key: string]: any },
) {
  return request<BaseResponse<ScoreTransactionVO>>('/api/score/transfer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取房间交易记录 GET /api/score/transactions/{roomCode} */
export async function getRoomTransactions(
  roomCode: string,
  options?: { [key: string]: any },
) {
  return request<BaseResponse<ScoreTransactionVO[]>>(`/api/score/transactions/${roomCode}`, {
    method: 'GET',
    ...(options || {}),
  });
}
