# OpenAPI definition


**简介**:OpenAPI definition


**HOST**:http://localhost:8080/api


**联系人**:


**Version**:v0


**接口路径**:/api/v3/api-docs


[TOC]






# 积分管理


## 积分转账


**接口地址**:`/api/score/transfer`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>在房间内给其他玩家转账积分</p>



**请求示例**:


```javascript
{
  "roomCode": "1234",
  "toUserId": 123456789,
  "amount": 5.5,
  "remark": "赢牌奖励"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|scoreTransferRequest|积分转账请求对象|body|true|ScoreTransferRequest|ScoreTransferRequest|
|&emsp;&emsp;roomCode|房间号||true|string||
|&emsp;&emsp;toUserId|接收用户ID||true|integer(int64)||
|&emsp;&emsp;amount|积分数量||true|number||
|&emsp;&emsp;remark|备注||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|转账成功|BaseResponseScoreTransactionVO|
|400|请求参数错误或积分不足|BaseResponseScoreTransactionVO|
|401|未登录|BaseResponseScoreTransactionVO|
|403|您不在此房间中|BaseResponseScoreTransactionVO|
|404|接收用户不存在|BaseResponseScoreTransactionVO|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||ScoreTransactionVO|ScoreTransactionVO|
|&emsp;&emsp;id|交易ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;fromUserId|支出用户ID|integer(int64)||
|&emsp;&emsp;fromUserName|支出用户昵称|string||
|&emsp;&emsp;toUserId|接收用户ID|integer(int64)||
|&emsp;&emsp;toUserName|接收用户昵称|string||
|&emsp;&emsp;amount|积分数量|number||
|&emsp;&emsp;transactionTime|交易时间|string(date-time)||
|&emsp;&emsp;formattedTime|格式化的交易时间|string||
|&emsp;&emsp;logDescription|交易日志描述|string||
|&emsp;&emsp;remark|备注|string||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"roomCode": "",
		"fromUserId": 0,
		"fromUserName": "",
		"toUserId": 0,
		"toUserName": "",
		"amount": 0,
		"transactionTime": "",
		"formattedTime": "",
		"logDescription": "",
		"remark": ""
	},
	"message": ""
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||ScoreTransactionVO|ScoreTransactionVO|
|&emsp;&emsp;id|交易ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;fromUserId|支出用户ID|integer(int64)||
|&emsp;&emsp;fromUserName|支出用户昵称|string||
|&emsp;&emsp;toUserId|接收用户ID|integer(int64)||
|&emsp;&emsp;toUserName|接收用户昵称|string||
|&emsp;&emsp;amount|积分数量|number||
|&emsp;&emsp;transactionTime|交易时间|string(date-time)||
|&emsp;&emsp;formattedTime|格式化的交易时间|string||
|&emsp;&emsp;logDescription|交易日志描述|string||
|&emsp;&emsp;remark|备注|string||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"roomCode": "",
		"fromUserId": 0,
		"fromUserName": "",
		"toUserId": 0,
		"toUserName": "",
		"amount": 0,
		"transactionTime": "",
		"formattedTime": "",
		"logDescription": "",
		"remark": ""
	},
	"message": ""
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||ScoreTransactionVO|ScoreTransactionVO|
|&emsp;&emsp;id|交易ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;fromUserId|支出用户ID|integer(int64)||
|&emsp;&emsp;fromUserName|支出用户昵称|string||
|&emsp;&emsp;toUserId|接收用户ID|integer(int64)||
|&emsp;&emsp;toUserName|接收用户昵称|string||
|&emsp;&emsp;amount|积分数量|number||
|&emsp;&emsp;transactionTime|交易时间|string(date-time)||
|&emsp;&emsp;formattedTime|格式化的交易时间|string||
|&emsp;&emsp;logDescription|交易日志描述|string||
|&emsp;&emsp;remark|备注|string||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"roomCode": "",
		"fromUserId": 0,
		"fromUserName": "",
		"toUserId": 0,
		"toUserName": "",
		"amount": 0,
		"transactionTime": "",
		"formattedTime": "",
		"logDescription": "",
		"remark": ""
	},
	"message": ""
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||ScoreTransactionVO|ScoreTransactionVO|
|&emsp;&emsp;id|交易ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;fromUserId|支出用户ID|integer(int64)||
|&emsp;&emsp;fromUserName|支出用户昵称|string||
|&emsp;&emsp;toUserId|接收用户ID|integer(int64)||
|&emsp;&emsp;toUserName|接收用户昵称|string||
|&emsp;&emsp;amount|积分数量|number||
|&emsp;&emsp;transactionTime|交易时间|string(date-time)||
|&emsp;&emsp;formattedTime|格式化的交易时间|string||
|&emsp;&emsp;logDescription|交易日志描述|string||
|&emsp;&emsp;remark|备注|string||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"roomCode": "",
		"fromUserId": 0,
		"fromUserName": "",
		"toUserId": 0,
		"toUserName": "",
		"amount": 0,
		"transactionTime": "",
		"formattedTime": "",
		"logDescription": "",
		"remark": ""
	},
	"message": ""
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||ScoreTransactionVO|ScoreTransactionVO|
|&emsp;&emsp;id|交易ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;fromUserId|支出用户ID|integer(int64)||
|&emsp;&emsp;fromUserName|支出用户昵称|string||
|&emsp;&emsp;toUserId|接收用户ID|integer(int64)||
|&emsp;&emsp;toUserName|接收用户昵称|string||
|&emsp;&emsp;amount|积分数量|number||
|&emsp;&emsp;transactionTime|交易时间|string(date-time)||
|&emsp;&emsp;formattedTime|格式化的交易时间|string||
|&emsp;&emsp;logDescription|交易日志描述|string||
|&emsp;&emsp;remark|备注|string||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"roomCode": "",
		"fromUserId": 0,
		"fromUserName": "",
		"toUserId": 0,
		"toUserName": "",
		"amount": 0,
		"transactionTime": "",
		"formattedTime": "",
		"logDescription": "",
		"remark": ""
	},
	"message": ""
}
```


## 获取房间交易记录


**接口地址**:`/api/score/transactions/{roomCode}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取指定房间的所有积分交易记录</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|roomCode|房间号|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|获取成功|BaseResponseListScoreTransactionVO|
|400|房间号格式错误|BaseResponseListScoreTransactionVO|
|401|未登录|BaseResponseListScoreTransactionVO|
|403|您不在此房间中|BaseResponseListScoreTransactionVO|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||array|ScoreTransactionVO|
|&emsp;&emsp;id|交易ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;fromUserId|支出用户ID|integer(int64)||
|&emsp;&emsp;fromUserName|支出用户昵称|string||
|&emsp;&emsp;toUserId|接收用户ID|integer(int64)||
|&emsp;&emsp;toUserName|接收用户昵称|string||
|&emsp;&emsp;amount|积分数量|number||
|&emsp;&emsp;transactionTime|交易时间|string(date-time)||
|&emsp;&emsp;formattedTime|格式化的交易时间|string||
|&emsp;&emsp;logDescription|交易日志描述|string||
|&emsp;&emsp;remark|备注|string||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": [
		{
			"id": 0,
			"roomCode": "",
			"fromUserId": 0,
			"fromUserName": "",
			"toUserId": 0,
			"toUserName": "",
			"amount": 0,
			"transactionTime": "",
			"formattedTime": "",
			"logDescription": "",
			"remark": ""
		}
	],
	"message": ""
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||array|ScoreTransactionVO|
|&emsp;&emsp;id|交易ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;fromUserId|支出用户ID|integer(int64)||
|&emsp;&emsp;fromUserName|支出用户昵称|string||
|&emsp;&emsp;toUserId|接收用户ID|integer(int64)||
|&emsp;&emsp;toUserName|接收用户昵称|string||
|&emsp;&emsp;amount|积分数量|number||
|&emsp;&emsp;transactionTime|交易时间|string(date-time)||
|&emsp;&emsp;formattedTime|格式化的交易时间|string||
|&emsp;&emsp;logDescription|交易日志描述|string||
|&emsp;&emsp;remark|备注|string||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": [
		{
			"id": 0,
			"roomCode": "",
			"fromUserId": 0,
			"fromUserName": "",
			"toUserId": 0,
			"toUserName": "",
			"amount": 0,
			"transactionTime": "",
			"formattedTime": "",
			"logDescription": "",
			"remark": ""
		}
	],
	"message": ""
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||array|ScoreTransactionVO|
|&emsp;&emsp;id|交易ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;fromUserId|支出用户ID|integer(int64)||
|&emsp;&emsp;fromUserName|支出用户昵称|string||
|&emsp;&emsp;toUserId|接收用户ID|integer(int64)||
|&emsp;&emsp;toUserName|接收用户昵称|string||
|&emsp;&emsp;amount|积分数量|number||
|&emsp;&emsp;transactionTime|交易时间|string(date-time)||
|&emsp;&emsp;formattedTime|格式化的交易时间|string||
|&emsp;&emsp;logDescription|交易日志描述|string||
|&emsp;&emsp;remark|备注|string||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": [
		{
			"id": 0,
			"roomCode": "",
			"fromUserId": 0,
			"fromUserName": "",
			"toUserId": 0,
			"toUserName": "",
			"amount": 0,
			"transactionTime": "",
			"formattedTime": "",
			"logDescription": "",
			"remark": ""
		}
	],
	"message": ""
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||array|ScoreTransactionVO|
|&emsp;&emsp;id|交易ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;fromUserId|支出用户ID|integer(int64)||
|&emsp;&emsp;fromUserName|支出用户昵称|string||
|&emsp;&emsp;toUserId|接收用户ID|integer(int64)||
|&emsp;&emsp;toUserName|接收用户昵称|string||
|&emsp;&emsp;amount|积分数量|number||
|&emsp;&emsp;transactionTime|交易时间|string(date-time)||
|&emsp;&emsp;formattedTime|格式化的交易时间|string||
|&emsp;&emsp;logDescription|交易日志描述|string||
|&emsp;&emsp;remark|备注|string||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": [
		{
			"id": 0,
			"roomCode": "",
			"fromUserId": 0,
			"fromUserName": "",
			"toUserId": 0,
			"toUserName": "",
			"amount": 0,
			"transactionTime": "",
			"formattedTime": "",
			"logDescription": "",
			"remark": ""
		}
	],
	"message": ""
}
```


# 用户管理


## 更新用户信息


**接口地址**:`/api/user/update`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>更新用户基本信息，如昵称、头像、邮箱等</p>



**请求示例**:


```javascript
{
  "displayName": "",
  "avatarUrl": "",
  "bio": "",
  "email": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userUpdateRequest|用户信息更新请求对象|body|true|UserUpdateRequest|UserUpdateRequest|
|&emsp;&emsp;displayName|||false|string||
|&emsp;&emsp;avatarUrl|||false|string||
|&emsp;&emsp;bio|||false|string||
|&emsp;&emsp;email|||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|更新成功|BaseResponseUser|
|400|请求参数错误|BaseResponseUser|
|401|未登录|BaseResponseUser|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||User|User|
|&emsp;&emsp;id||integer(int64)||
|&emsp;&emsp;username||string||
|&emsp;&emsp;displayName||string||
|&emsp;&emsp;password||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;address||string||
|&emsp;&emsp;avatar||string||
|&emsp;&emsp;lastLoginIp||string||
|&emsp;&emsp;lastLoginTime||string(date-time)||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;additionalInfo||object||
|&emsp;&emsp;bio||string||
|&emsp;&emsp;idCard||string||
|&emsp;&emsp;lastLoginIpLocation||string||
|&emsp;&emsp;role||integer(int32)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"username": "",
		"displayName": "",
		"password": "",
		"email": "",
		"phone": "",
		"address": "",
		"avatar": "",
		"lastLoginIp": "",
		"lastLoginTime": "",
		"status": 0,
		"createTime": "",
		"updateTime": "",
		"additionalInfo": {},
		"bio": "",
		"idCard": "",
		"lastLoginIpLocation": "",
		"role": 0
	},
	"message": ""
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||User|User|
|&emsp;&emsp;id||integer(int64)||
|&emsp;&emsp;username||string||
|&emsp;&emsp;displayName||string||
|&emsp;&emsp;password||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;address||string||
|&emsp;&emsp;avatar||string||
|&emsp;&emsp;lastLoginIp||string||
|&emsp;&emsp;lastLoginTime||string(date-time)||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;additionalInfo||object||
|&emsp;&emsp;bio||string||
|&emsp;&emsp;idCard||string||
|&emsp;&emsp;lastLoginIpLocation||string||
|&emsp;&emsp;role||integer(int32)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"username": "",
		"displayName": "",
		"password": "",
		"email": "",
		"phone": "",
		"address": "",
		"avatar": "",
		"lastLoginIp": "",
		"lastLoginTime": "",
		"status": 0,
		"createTime": "",
		"updateTime": "",
		"additionalInfo": {},
		"bio": "",
		"idCard": "",
		"lastLoginIpLocation": "",
		"role": 0
	},
	"message": ""
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||User|User|
|&emsp;&emsp;id||integer(int64)||
|&emsp;&emsp;username||string||
|&emsp;&emsp;displayName||string||
|&emsp;&emsp;password||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;address||string||
|&emsp;&emsp;avatar||string||
|&emsp;&emsp;lastLoginIp||string||
|&emsp;&emsp;lastLoginTime||string(date-time)||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;additionalInfo||object||
|&emsp;&emsp;bio||string||
|&emsp;&emsp;idCard||string||
|&emsp;&emsp;lastLoginIpLocation||string||
|&emsp;&emsp;role||integer(int32)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"username": "",
		"displayName": "",
		"password": "",
		"email": "",
		"phone": "",
		"address": "",
		"avatar": "",
		"lastLoginIp": "",
		"lastLoginTime": "",
		"status": 0,
		"createTime": "",
		"updateTime": "",
		"additionalInfo": {},
		"bio": "",
		"idCard": "",
		"lastLoginIpLocation": "",
		"role": 0
	},
	"message": ""
}
```


## 修改密码


**接口地址**:`/api/user/update/password`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>用户修改密码接口，需要提供原密码和新密码</p>



**请求示例**:


```javascript
{
  "oldPassword": "",
  "newPassword": "",
  "confirmPassword": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userUpdatePasswordRequest|修改密码请求对象|body|true|UserUpdatePasswordRequest|UserUpdatePasswordRequest|
|&emsp;&emsp;oldPassword|||true|string||
|&emsp;&emsp;newPassword|||true|string||
|&emsp;&emsp;confirmPassword|||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|密码修改成功|BaseResponseUser|
|400|原密码错误或新密码格式不正确|BaseResponseUser|
|401|未登录|BaseResponseUser|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||User|User|
|&emsp;&emsp;id||integer(int64)||
|&emsp;&emsp;username||string||
|&emsp;&emsp;displayName||string||
|&emsp;&emsp;password||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;address||string||
|&emsp;&emsp;avatar||string||
|&emsp;&emsp;lastLoginIp||string||
|&emsp;&emsp;lastLoginTime||string(date-time)||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;additionalInfo||object||
|&emsp;&emsp;bio||string||
|&emsp;&emsp;idCard||string||
|&emsp;&emsp;lastLoginIpLocation||string||
|&emsp;&emsp;role||integer(int32)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"username": "",
		"displayName": "",
		"password": "",
		"email": "",
		"phone": "",
		"address": "",
		"avatar": "",
		"lastLoginIp": "",
		"lastLoginTime": "",
		"status": 0,
		"createTime": "",
		"updateTime": "",
		"additionalInfo": {},
		"bio": "",
		"idCard": "",
		"lastLoginIpLocation": "",
		"role": 0
	},
	"message": ""
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||User|User|
|&emsp;&emsp;id||integer(int64)||
|&emsp;&emsp;username||string||
|&emsp;&emsp;displayName||string||
|&emsp;&emsp;password||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;address||string||
|&emsp;&emsp;avatar||string||
|&emsp;&emsp;lastLoginIp||string||
|&emsp;&emsp;lastLoginTime||string(date-time)||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;additionalInfo||object||
|&emsp;&emsp;bio||string||
|&emsp;&emsp;idCard||string||
|&emsp;&emsp;lastLoginIpLocation||string||
|&emsp;&emsp;role||integer(int32)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"username": "",
		"displayName": "",
		"password": "",
		"email": "",
		"phone": "",
		"address": "",
		"avatar": "",
		"lastLoginIp": "",
		"lastLoginTime": "",
		"status": 0,
		"createTime": "",
		"updateTime": "",
		"additionalInfo": {},
		"bio": "",
		"idCard": "",
		"lastLoginIpLocation": "",
		"role": 0
	},
	"message": ""
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||User|User|
|&emsp;&emsp;id||integer(int64)||
|&emsp;&emsp;username||string||
|&emsp;&emsp;displayName||string||
|&emsp;&emsp;password||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;address||string||
|&emsp;&emsp;avatar||string||
|&emsp;&emsp;lastLoginIp||string||
|&emsp;&emsp;lastLoginTime||string(date-time)||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;additionalInfo||object||
|&emsp;&emsp;bio||string||
|&emsp;&emsp;idCard||string||
|&emsp;&emsp;lastLoginIpLocation||string||
|&emsp;&emsp;role||integer(int32)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"username": "",
		"displayName": "",
		"password": "",
		"email": "",
		"phone": "",
		"address": "",
		"avatar": "",
		"lastLoginIp": "",
		"lastLoginTime": "",
		"status": 0,
		"createTime": "",
		"updateTime": "",
		"additionalInfo": {},
		"bio": "",
		"idCard": "",
		"lastLoginIpLocation": "",
		"role": 0
	},
	"message": ""
}
```


## 用户注册


**接口地址**:`/api/user/register`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>用户注册接口，需要提供用户名、密码、邮箱等信息</p>



**请求示例**:


```javascript
{
  "username": "",
  "password": "",
  "confirmPassword": "",
  "email": "",
  "emailCode": "",
  "captchaCode": "",
  "captchaId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userRegisterRequest|用户注册请求对象|body|true|UserRegisterRequest|UserRegisterRequest|
|&emsp;&emsp;username|||true|string||
|&emsp;&emsp;password|||true|string||
|&emsp;&emsp;confirmPassword|||true|string||
|&emsp;&emsp;email|||true|string||
|&emsp;&emsp;emailCode|||true|string||
|&emsp;&emsp;captchaCode|||true|string||
|&emsp;&emsp;captchaId|||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|注册成功|BaseResponseUser|
|400|请求参数错误|BaseResponseUser|
|409|用户名或邮箱已存在|BaseResponseUser|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||User|User|
|&emsp;&emsp;id||integer(int64)||
|&emsp;&emsp;username||string||
|&emsp;&emsp;displayName||string||
|&emsp;&emsp;password||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;address||string||
|&emsp;&emsp;avatar||string||
|&emsp;&emsp;lastLoginIp||string||
|&emsp;&emsp;lastLoginTime||string(date-time)||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;additionalInfo||object||
|&emsp;&emsp;bio||string||
|&emsp;&emsp;idCard||string||
|&emsp;&emsp;lastLoginIpLocation||string||
|&emsp;&emsp;role||integer(int32)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"username": "",
		"displayName": "",
		"password": "",
		"email": "",
		"phone": "",
		"address": "",
		"avatar": "",
		"lastLoginIp": "",
		"lastLoginTime": "",
		"status": 0,
		"createTime": "",
		"updateTime": "",
		"additionalInfo": {},
		"bio": "",
		"idCard": "",
		"lastLoginIpLocation": "",
		"role": 0
	},
	"message": ""
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||User|User|
|&emsp;&emsp;id||integer(int64)||
|&emsp;&emsp;username||string||
|&emsp;&emsp;displayName||string||
|&emsp;&emsp;password||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;address||string||
|&emsp;&emsp;avatar||string||
|&emsp;&emsp;lastLoginIp||string||
|&emsp;&emsp;lastLoginTime||string(date-time)||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;additionalInfo||object||
|&emsp;&emsp;bio||string||
|&emsp;&emsp;idCard||string||
|&emsp;&emsp;lastLoginIpLocation||string||
|&emsp;&emsp;role||integer(int32)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"username": "",
		"displayName": "",
		"password": "",
		"email": "",
		"phone": "",
		"address": "",
		"avatar": "",
		"lastLoginIp": "",
		"lastLoginTime": "",
		"status": 0,
		"createTime": "",
		"updateTime": "",
		"additionalInfo": {},
		"bio": "",
		"idCard": "",
		"lastLoginIpLocation": "",
		"role": 0
	},
	"message": ""
}
```


**响应状态码-409**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||User|User|
|&emsp;&emsp;id||integer(int64)||
|&emsp;&emsp;username||string||
|&emsp;&emsp;displayName||string||
|&emsp;&emsp;password||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;address||string||
|&emsp;&emsp;avatar||string||
|&emsp;&emsp;lastLoginIp||string||
|&emsp;&emsp;lastLoginTime||string(date-time)||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;additionalInfo||object||
|&emsp;&emsp;bio||string||
|&emsp;&emsp;idCard||string||
|&emsp;&emsp;lastLoginIpLocation||string||
|&emsp;&emsp;role||integer(int32)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"username": "",
		"displayName": "",
		"password": "",
		"email": "",
		"phone": "",
		"address": "",
		"avatar": "",
		"lastLoginIp": "",
		"lastLoginTime": "",
		"status": 0,
		"createTime": "",
		"updateTime": "",
		"additionalInfo": {},
		"bio": "",
		"idCard": "",
		"lastLoginIpLocation": "",
		"role": 0
	},
	"message": ""
}
```


## 用户登录


**接口地址**:`/api/user/login`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>用户登录接口，登录成功后会创建会话</p>



**请求示例**:


```javascript
{
  "username": "",
  "password": "",
  "captchaCode": "",
  "captchaId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userLoginRequest|用户登录请求对象|body|true|UserLoginRequest|UserLoginRequest|
|&emsp;&emsp;username|||true|string||
|&emsp;&emsp;password|||true|string||
|&emsp;&emsp;captchaCode|||false|string||
|&emsp;&emsp;captchaId|||false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|登录成功|BaseResponseUser|
|400|用户名或密码错误|BaseResponseUser|
|403|账户被禁用|BaseResponseUser|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||User|User|
|&emsp;&emsp;id||integer(int64)||
|&emsp;&emsp;username||string||
|&emsp;&emsp;displayName||string||
|&emsp;&emsp;password||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;address||string||
|&emsp;&emsp;avatar||string||
|&emsp;&emsp;lastLoginIp||string||
|&emsp;&emsp;lastLoginTime||string(date-time)||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;additionalInfo||object||
|&emsp;&emsp;bio||string||
|&emsp;&emsp;idCard||string||
|&emsp;&emsp;lastLoginIpLocation||string||
|&emsp;&emsp;role||integer(int32)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"username": "",
		"displayName": "",
		"password": "",
		"email": "",
		"phone": "",
		"address": "",
		"avatar": "",
		"lastLoginIp": "",
		"lastLoginTime": "",
		"status": 0,
		"createTime": "",
		"updateTime": "",
		"additionalInfo": {},
		"bio": "",
		"idCard": "",
		"lastLoginIpLocation": "",
		"role": 0
	},
	"message": ""
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||User|User|
|&emsp;&emsp;id||integer(int64)||
|&emsp;&emsp;username||string||
|&emsp;&emsp;displayName||string||
|&emsp;&emsp;password||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;address||string||
|&emsp;&emsp;avatar||string||
|&emsp;&emsp;lastLoginIp||string||
|&emsp;&emsp;lastLoginTime||string(date-time)||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;additionalInfo||object||
|&emsp;&emsp;bio||string||
|&emsp;&emsp;idCard||string||
|&emsp;&emsp;lastLoginIpLocation||string||
|&emsp;&emsp;role||integer(int32)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"username": "",
		"displayName": "",
		"password": "",
		"email": "",
		"phone": "",
		"address": "",
		"avatar": "",
		"lastLoginIp": "",
		"lastLoginTime": "",
		"status": 0,
		"createTime": "",
		"updateTime": "",
		"additionalInfo": {},
		"bio": "",
		"idCard": "",
		"lastLoginIpLocation": "",
		"role": 0
	},
	"message": ""
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||User|User|
|&emsp;&emsp;id||integer(int64)||
|&emsp;&emsp;username||string||
|&emsp;&emsp;displayName||string||
|&emsp;&emsp;password||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;address||string||
|&emsp;&emsp;avatar||string||
|&emsp;&emsp;lastLoginIp||string||
|&emsp;&emsp;lastLoginTime||string(date-time)||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;createTime||string(date-time)||
|&emsp;&emsp;updateTime||string(date-time)||
|&emsp;&emsp;additionalInfo||object||
|&emsp;&emsp;bio||string||
|&emsp;&emsp;idCard||string||
|&emsp;&emsp;lastLoginIpLocation||string||
|&emsp;&emsp;role||integer(int32)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"username": "",
		"displayName": "",
		"password": "",
		"email": "",
		"phone": "",
		"address": "",
		"avatar": "",
		"lastLoginIp": "",
		"lastLoginTime": "",
		"status": 0,
		"createTime": "",
		"updateTime": "",
		"additionalInfo": {},
		"bio": "",
		"idCard": "",
		"lastLoginIpLocation": "",
		"role": 0
	},
	"message": ""
}
```


## 用户登出


**接口地址**:`/api/user/logout`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>用户登出接口，会清除服务端会话和客户端Cookie</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|登出成功|BaseResponseString|


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||string||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": "",
	"message": ""
}
```


## 获取当前用户信息


**接口地址**:`/api/user/current`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取当前登录用户的基本信息，返回脱敏后的数据</p>



**请求参数**:


暂无


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|获取成功|BaseResponseUserVO|
|401|未登录|BaseResponseUserVO|
|404|用户不存在|BaseResponseUserVO|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||UserVO|UserVO|
|&emsp;&emsp;id||integer(int64)||
|&emsp;&emsp;username||string||
|&emsp;&emsp;displayName||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;avatar||string||
|&emsp;&emsp;lastLoginIpLocation||string||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;bio||string||
|&emsp;&emsp;idCard||string||
|&emsp;&emsp;role||integer(int32)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"username": "",
		"displayName": "",
		"email": "",
		"phone": "",
		"avatar": "",
		"lastLoginIpLocation": "",
		"status": 0,
		"bio": "",
		"idCard": "",
		"role": 0
	},
	"message": ""
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||UserVO|UserVO|
|&emsp;&emsp;id||integer(int64)||
|&emsp;&emsp;username||string||
|&emsp;&emsp;displayName||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;avatar||string||
|&emsp;&emsp;lastLoginIpLocation||string||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;bio||string||
|&emsp;&emsp;idCard||string||
|&emsp;&emsp;role||integer(int32)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"username": "",
		"displayName": "",
		"email": "",
		"phone": "",
		"avatar": "",
		"lastLoginIpLocation": "",
		"status": 0,
		"bio": "",
		"idCard": "",
		"role": 0
	},
	"message": ""
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||UserVO|UserVO|
|&emsp;&emsp;id||integer(int64)||
|&emsp;&emsp;username||string||
|&emsp;&emsp;displayName||string||
|&emsp;&emsp;email||string||
|&emsp;&emsp;phone||string||
|&emsp;&emsp;avatar||string||
|&emsp;&emsp;lastLoginIpLocation||string||
|&emsp;&emsp;status||integer(int32)||
|&emsp;&emsp;bio||string||
|&emsp;&emsp;idCard||string||
|&emsp;&emsp;role||integer(int32)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"username": "",
		"displayName": "",
		"email": "",
		"phone": "",
		"avatar": "",
		"lastLoginIpLocation": "",
		"status": 0,
		"bio": "",
		"idCard": "",
		"role": 0
	},
	"message": ""
}
```


# 房间管理


## 离开房间


**接口地址**:`/api/room/leave/{roomCode}`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>离开指定的房间</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|roomCode|房间号|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|离开房间成功|BaseResponseBoolean|
|400|房间号格式错误|BaseResponseBoolean|
|401|未登录|BaseResponseBoolean|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||boolean||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": true,
	"message": ""
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||boolean||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": true,
	"message": ""
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||boolean||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": true,
	"message": ""
}
```


## 加入房间


**接口地址**:`/api/room/join`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>通过房间号加入已存在的房间</p>



**请求示例**:


```javascript
{
  "roomCode": "1234"
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|roomJoinRequest|加入房间请求对象|body|true|RoomJoinRequest|RoomJoinRequest|
|&emsp;&emsp;roomCode|房间号||true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|加入房间成功|BaseResponseRoomVO|
|400|房间号格式错误或房间已满|BaseResponseRoomVO|
|401|未登录|BaseResponseRoomVO|
|404|房间不存在或已关闭|BaseResponseRoomVO|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||RoomVO|RoomVO|
|&emsp;&emsp;id|房间ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;roomName|房间名称|string||
|&emsp;&emsp;creatorId|创建者ID|integer(int64)||
|&emsp;&emsp;creatorName|创建者昵称|string||
|&emsp;&emsp;status|房间状态: 1=活跃, 0=已关闭|integer(int32)||
|&emsp;&emsp;maxPlayers|最大玩家数量|integer(int32)||
|&emsp;&emsp;currentPlayers|当前玩家数量|integer(int32)||
|&emsp;&emsp;players|房间内玩家信息|array|RoomPlayerVO|
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;displayName|昵称|string||
|&emsp;&emsp;&emsp;&emsp;avatar|头像|string||
|&emsp;&emsp;&emsp;&emsp;currentScore|当前积分|number||
|&emsp;&emsp;&emsp;&emsp;isCreator|是否为房间创建者|boolean||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"roomCode": "",
		"roomName": "",
		"creatorId": 0,
		"creatorName": "",
		"status": 0,
		"maxPlayers": 0,
		"currentPlayers": 0,
		"players": [
			{
				"userId": 0,
				"username": "",
				"displayName": "",
				"avatar": "",
				"currentScore": 0,
				"isCreator": true
			}
		],
		"createTime": "",
		"updateTime": ""
	},
	"message": ""
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||RoomVO|RoomVO|
|&emsp;&emsp;id|房间ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;roomName|房间名称|string||
|&emsp;&emsp;creatorId|创建者ID|integer(int64)||
|&emsp;&emsp;creatorName|创建者昵称|string||
|&emsp;&emsp;status|房间状态: 1=活跃, 0=已关闭|integer(int32)||
|&emsp;&emsp;maxPlayers|最大玩家数量|integer(int32)||
|&emsp;&emsp;currentPlayers|当前玩家数量|integer(int32)||
|&emsp;&emsp;players|房间内玩家信息|array|RoomPlayerVO|
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;displayName|昵称|string||
|&emsp;&emsp;&emsp;&emsp;avatar|头像|string||
|&emsp;&emsp;&emsp;&emsp;currentScore|当前积分|number||
|&emsp;&emsp;&emsp;&emsp;isCreator|是否为房间创建者|boolean||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"roomCode": "",
		"roomName": "",
		"creatorId": 0,
		"creatorName": "",
		"status": 0,
		"maxPlayers": 0,
		"currentPlayers": 0,
		"players": [
			{
				"userId": 0,
				"username": "",
				"displayName": "",
				"avatar": "",
				"currentScore": 0,
				"isCreator": true
			}
		],
		"createTime": "",
		"updateTime": ""
	},
	"message": ""
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||RoomVO|RoomVO|
|&emsp;&emsp;id|房间ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;roomName|房间名称|string||
|&emsp;&emsp;creatorId|创建者ID|integer(int64)||
|&emsp;&emsp;creatorName|创建者昵称|string||
|&emsp;&emsp;status|房间状态: 1=活跃, 0=已关闭|integer(int32)||
|&emsp;&emsp;maxPlayers|最大玩家数量|integer(int32)||
|&emsp;&emsp;currentPlayers|当前玩家数量|integer(int32)||
|&emsp;&emsp;players|房间内玩家信息|array|RoomPlayerVO|
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;displayName|昵称|string||
|&emsp;&emsp;&emsp;&emsp;avatar|头像|string||
|&emsp;&emsp;&emsp;&emsp;currentScore|当前积分|number||
|&emsp;&emsp;&emsp;&emsp;isCreator|是否为房间创建者|boolean||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"roomCode": "",
		"roomName": "",
		"creatorId": 0,
		"creatorName": "",
		"status": 0,
		"maxPlayers": 0,
		"currentPlayers": 0,
		"players": [
			{
				"userId": 0,
				"username": "",
				"displayName": "",
				"avatar": "",
				"currentScore": 0,
				"isCreator": true
			}
		],
		"createTime": "",
		"updateTime": ""
	},
	"message": ""
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||RoomVO|RoomVO|
|&emsp;&emsp;id|房间ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;roomName|房间名称|string||
|&emsp;&emsp;creatorId|创建者ID|integer(int64)||
|&emsp;&emsp;creatorName|创建者昵称|string||
|&emsp;&emsp;status|房间状态: 1=活跃, 0=已关闭|integer(int32)||
|&emsp;&emsp;maxPlayers|最大玩家数量|integer(int32)||
|&emsp;&emsp;currentPlayers|当前玩家数量|integer(int32)||
|&emsp;&emsp;players|房间内玩家信息|array|RoomPlayerVO|
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;displayName|昵称|string||
|&emsp;&emsp;&emsp;&emsp;avatar|头像|string||
|&emsp;&emsp;&emsp;&emsp;currentScore|当前积分|number||
|&emsp;&emsp;&emsp;&emsp;isCreator|是否为房间创建者|boolean||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"roomCode": "",
		"roomName": "",
		"creatorId": 0,
		"creatorName": "",
		"status": 0,
		"maxPlayers": 0,
		"currentPlayers": 0,
		"players": [
			{
				"userId": 0,
				"username": "",
				"displayName": "",
				"avatar": "",
				"currentScore": 0,
				"isCreator": true
			}
		],
		"createTime": "",
		"updateTime": ""
	},
	"message": ""
}
```


## 创建房间


**接口地址**:`/api/room/create`


**请求方式**:`POST`


**请求数据类型**:`application/x-www-form-urlencoded,application/json`


**响应数据类型**:`*/*`


**接口描述**:<p>创建一个新的打牌房间，系统会自动生成4位数字房间号</p>



**请求示例**:


```javascript
{
  "roomName": "友谊赛",
  "maxPlayers": 10
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|roomCreateRequest|创建房间请求对象|body|true|RoomCreateRequest|RoomCreateRequest|
|&emsp;&emsp;roomName|房间名称||false|string||
|&emsp;&emsp;maxPlayers|最大玩家数量||false|integer(int32)||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|房间创建成功|BaseResponseRoomVO|
|400|请求参数错误|BaseResponseRoomVO|
|401|未登录|BaseResponseRoomVO|
|500|系统错误|BaseResponseRoomVO|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||RoomVO|RoomVO|
|&emsp;&emsp;id|房间ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;roomName|房间名称|string||
|&emsp;&emsp;creatorId|创建者ID|integer(int64)||
|&emsp;&emsp;creatorName|创建者昵称|string||
|&emsp;&emsp;status|房间状态: 1=活跃, 0=已关闭|integer(int32)||
|&emsp;&emsp;maxPlayers|最大玩家数量|integer(int32)||
|&emsp;&emsp;currentPlayers|当前玩家数量|integer(int32)||
|&emsp;&emsp;players|房间内玩家信息|array|RoomPlayerVO|
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;displayName|昵称|string||
|&emsp;&emsp;&emsp;&emsp;avatar|头像|string||
|&emsp;&emsp;&emsp;&emsp;currentScore|当前积分|number||
|&emsp;&emsp;&emsp;&emsp;isCreator|是否为房间创建者|boolean||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"roomCode": "",
		"roomName": "",
		"creatorId": 0,
		"creatorName": "",
		"status": 0,
		"maxPlayers": 0,
		"currentPlayers": 0,
		"players": [
			{
				"userId": 0,
				"username": "",
				"displayName": "",
				"avatar": "",
				"currentScore": 0,
				"isCreator": true
			}
		],
		"createTime": "",
		"updateTime": ""
	},
	"message": ""
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||RoomVO|RoomVO|
|&emsp;&emsp;id|房间ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;roomName|房间名称|string||
|&emsp;&emsp;creatorId|创建者ID|integer(int64)||
|&emsp;&emsp;creatorName|创建者昵称|string||
|&emsp;&emsp;status|房间状态: 1=活跃, 0=已关闭|integer(int32)||
|&emsp;&emsp;maxPlayers|最大玩家数量|integer(int32)||
|&emsp;&emsp;currentPlayers|当前玩家数量|integer(int32)||
|&emsp;&emsp;players|房间内玩家信息|array|RoomPlayerVO|
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;displayName|昵称|string||
|&emsp;&emsp;&emsp;&emsp;avatar|头像|string||
|&emsp;&emsp;&emsp;&emsp;currentScore|当前积分|number||
|&emsp;&emsp;&emsp;&emsp;isCreator|是否为房间创建者|boolean||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"roomCode": "",
		"roomName": "",
		"creatorId": 0,
		"creatorName": "",
		"status": 0,
		"maxPlayers": 0,
		"currentPlayers": 0,
		"players": [
			{
				"userId": 0,
				"username": "",
				"displayName": "",
				"avatar": "",
				"currentScore": 0,
				"isCreator": true
			}
		],
		"createTime": "",
		"updateTime": ""
	},
	"message": ""
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||RoomVO|RoomVO|
|&emsp;&emsp;id|房间ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;roomName|房间名称|string||
|&emsp;&emsp;creatorId|创建者ID|integer(int64)||
|&emsp;&emsp;creatorName|创建者昵称|string||
|&emsp;&emsp;status|房间状态: 1=活跃, 0=已关闭|integer(int32)||
|&emsp;&emsp;maxPlayers|最大玩家数量|integer(int32)||
|&emsp;&emsp;currentPlayers|当前玩家数量|integer(int32)||
|&emsp;&emsp;players|房间内玩家信息|array|RoomPlayerVO|
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;displayName|昵称|string||
|&emsp;&emsp;&emsp;&emsp;avatar|头像|string||
|&emsp;&emsp;&emsp;&emsp;currentScore|当前积分|number||
|&emsp;&emsp;&emsp;&emsp;isCreator|是否为房间创建者|boolean||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"roomCode": "",
		"roomName": "",
		"creatorId": 0,
		"creatorName": "",
		"status": 0,
		"maxPlayers": 0,
		"currentPlayers": 0,
		"players": [
			{
				"userId": 0,
				"username": "",
				"displayName": "",
				"avatar": "",
				"currentScore": 0,
				"isCreator": true
			}
		],
		"createTime": "",
		"updateTime": ""
	},
	"message": ""
}
```


**响应状态码-500**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||RoomVO|RoomVO|
|&emsp;&emsp;id|房间ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;roomName|房间名称|string||
|&emsp;&emsp;creatorId|创建者ID|integer(int64)||
|&emsp;&emsp;creatorName|创建者昵称|string||
|&emsp;&emsp;status|房间状态: 1=活跃, 0=已关闭|integer(int32)||
|&emsp;&emsp;maxPlayers|最大玩家数量|integer(int32)||
|&emsp;&emsp;currentPlayers|当前玩家数量|integer(int32)||
|&emsp;&emsp;players|房间内玩家信息|array|RoomPlayerVO|
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;displayName|昵称|string||
|&emsp;&emsp;&emsp;&emsp;avatar|头像|string||
|&emsp;&emsp;&emsp;&emsp;currentScore|当前积分|number||
|&emsp;&emsp;&emsp;&emsp;isCreator|是否为房间创建者|boolean||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"roomCode": "",
		"roomName": "",
		"creatorId": 0,
		"creatorName": "",
		"status": 0,
		"maxPlayers": 0,
		"currentPlayers": 0,
		"players": [
			{
				"userId": 0,
				"username": "",
				"displayName": "",
				"avatar": "",
				"currentScore": 0,
				"isCreator": true
			}
		],
		"createTime": "",
		"updateTime": ""
	},
	"message": ""
}
```


## 获取房间信息


**接口地址**:`/api/room/info/{roomCode}`


**请求方式**:`GET`


**请求数据类型**:`application/x-www-form-urlencoded`


**响应数据类型**:`*/*`


**接口描述**:<p>获取指定房间的详细信息，包括房间内的玩家列表和积分情况</p>



**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|roomCode|房间号|path|true|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|获取成功|BaseResponseRoomVO|
|400|房间号格式错误|BaseResponseRoomVO|
|401|未登录|BaseResponseRoomVO|
|403|您不在此房间中|BaseResponseRoomVO|
|404|房间不存在|BaseResponseRoomVO|


**响应状态码-200**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||RoomVO|RoomVO|
|&emsp;&emsp;id|房间ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;roomName|房间名称|string||
|&emsp;&emsp;creatorId|创建者ID|integer(int64)||
|&emsp;&emsp;creatorName|创建者昵称|string||
|&emsp;&emsp;status|房间状态: 1=活跃, 0=已关闭|integer(int32)||
|&emsp;&emsp;maxPlayers|最大玩家数量|integer(int32)||
|&emsp;&emsp;currentPlayers|当前玩家数量|integer(int32)||
|&emsp;&emsp;players|房间内玩家信息|array|RoomPlayerVO|
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;displayName|昵称|string||
|&emsp;&emsp;&emsp;&emsp;avatar|头像|string||
|&emsp;&emsp;&emsp;&emsp;currentScore|当前积分|number||
|&emsp;&emsp;&emsp;&emsp;isCreator|是否为房间创建者|boolean||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"roomCode": "",
		"roomName": "",
		"creatorId": 0,
		"creatorName": "",
		"status": 0,
		"maxPlayers": 0,
		"currentPlayers": 0,
		"players": [
			{
				"userId": 0,
				"username": "",
				"displayName": "",
				"avatar": "",
				"currentScore": 0,
				"isCreator": true
			}
		],
		"createTime": "",
		"updateTime": ""
	},
	"message": ""
}
```


**响应状态码-400**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||RoomVO|RoomVO|
|&emsp;&emsp;id|房间ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;roomName|房间名称|string||
|&emsp;&emsp;creatorId|创建者ID|integer(int64)||
|&emsp;&emsp;creatorName|创建者昵称|string||
|&emsp;&emsp;status|房间状态: 1=活跃, 0=已关闭|integer(int32)||
|&emsp;&emsp;maxPlayers|最大玩家数量|integer(int32)||
|&emsp;&emsp;currentPlayers|当前玩家数量|integer(int32)||
|&emsp;&emsp;players|房间内玩家信息|array|RoomPlayerVO|
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;displayName|昵称|string||
|&emsp;&emsp;&emsp;&emsp;avatar|头像|string||
|&emsp;&emsp;&emsp;&emsp;currentScore|当前积分|number||
|&emsp;&emsp;&emsp;&emsp;isCreator|是否为房间创建者|boolean||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"roomCode": "",
		"roomName": "",
		"creatorId": 0,
		"creatorName": "",
		"status": 0,
		"maxPlayers": 0,
		"currentPlayers": 0,
		"players": [
			{
				"userId": 0,
				"username": "",
				"displayName": "",
				"avatar": "",
				"currentScore": 0,
				"isCreator": true
			}
		],
		"createTime": "",
		"updateTime": ""
	},
	"message": ""
}
```


**响应状态码-401**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||RoomVO|RoomVO|
|&emsp;&emsp;id|房间ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;roomName|房间名称|string||
|&emsp;&emsp;creatorId|创建者ID|integer(int64)||
|&emsp;&emsp;creatorName|创建者昵称|string||
|&emsp;&emsp;status|房间状态: 1=活跃, 0=已关闭|integer(int32)||
|&emsp;&emsp;maxPlayers|最大玩家数量|integer(int32)||
|&emsp;&emsp;currentPlayers|当前玩家数量|integer(int32)||
|&emsp;&emsp;players|房间内玩家信息|array|RoomPlayerVO|
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;displayName|昵称|string||
|&emsp;&emsp;&emsp;&emsp;avatar|头像|string||
|&emsp;&emsp;&emsp;&emsp;currentScore|当前积分|number||
|&emsp;&emsp;&emsp;&emsp;isCreator|是否为房间创建者|boolean||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"roomCode": "",
		"roomName": "",
		"creatorId": 0,
		"creatorName": "",
		"status": 0,
		"maxPlayers": 0,
		"currentPlayers": 0,
		"players": [
			{
				"userId": 0,
				"username": "",
				"displayName": "",
				"avatar": "",
				"currentScore": 0,
				"isCreator": true
			}
		],
		"createTime": "",
		"updateTime": ""
	},
	"message": ""
}
```


**响应状态码-403**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||RoomVO|RoomVO|
|&emsp;&emsp;id|房间ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;roomName|房间名称|string||
|&emsp;&emsp;creatorId|创建者ID|integer(int64)||
|&emsp;&emsp;creatorName|创建者昵称|string||
|&emsp;&emsp;status|房间状态: 1=活跃, 0=已关闭|integer(int32)||
|&emsp;&emsp;maxPlayers|最大玩家数量|integer(int32)||
|&emsp;&emsp;currentPlayers|当前玩家数量|integer(int32)||
|&emsp;&emsp;players|房间内玩家信息|array|RoomPlayerVO|
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;displayName|昵称|string||
|&emsp;&emsp;&emsp;&emsp;avatar|头像|string||
|&emsp;&emsp;&emsp;&emsp;currentScore|当前积分|number||
|&emsp;&emsp;&emsp;&emsp;isCreator|是否为房间创建者|boolean||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"roomCode": "",
		"roomName": "",
		"creatorId": 0,
		"creatorName": "",
		"status": 0,
		"maxPlayers": 0,
		"currentPlayers": 0,
		"players": [
			{
				"userId": 0,
				"username": "",
				"displayName": "",
				"avatar": "",
				"currentScore": 0,
				"isCreator": true
			}
		],
		"createTime": "",
		"updateTime": ""
	},
	"message": ""
}
```


**响应状态码-404**:


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|code||integer(int32)|integer(int32)|
|data||RoomVO|RoomVO|
|&emsp;&emsp;id|房间ID|integer(int64)||
|&emsp;&emsp;roomCode|房间号|string||
|&emsp;&emsp;roomName|房间名称|string||
|&emsp;&emsp;creatorId|创建者ID|integer(int64)||
|&emsp;&emsp;creatorName|创建者昵称|string||
|&emsp;&emsp;status|房间状态: 1=活跃, 0=已关闭|integer(int32)||
|&emsp;&emsp;maxPlayers|最大玩家数量|integer(int32)||
|&emsp;&emsp;currentPlayers|当前玩家数量|integer(int32)||
|&emsp;&emsp;players|房间内玩家信息|array|RoomPlayerVO|
|&emsp;&emsp;&emsp;&emsp;userId|用户ID|integer||
|&emsp;&emsp;&emsp;&emsp;username|用户名|string||
|&emsp;&emsp;&emsp;&emsp;displayName|昵称|string||
|&emsp;&emsp;&emsp;&emsp;avatar|头像|string||
|&emsp;&emsp;&emsp;&emsp;currentScore|当前积分|number||
|&emsp;&emsp;&emsp;&emsp;isCreator|是否为房间创建者|boolean||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|message||string||


**响应示例**:
```javascript
{
	"code": 0,
	"data": {
		"id": 0,
		"roomCode": "",
		"roomName": "",
		"creatorId": 0,
		"creatorName": "",
		"status": 0,
		"maxPlayers": 0,
		"currentPlayers": 0,
		"players": [
			{
				"userId": 0,
				"username": "",
				"displayName": "",
				"avatar": "",
				"currentScore": 0,
				"isCreator": true
			}
		],
		"createTime": "",
		"updateTime": ""
	},
	"message": ""
}
```